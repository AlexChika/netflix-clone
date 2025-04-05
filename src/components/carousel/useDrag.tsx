import React, { useCallback, useEffect, useRef } from "react";

function useDrag(
  ballRef: React.RefObject<HTMLDivElement | null>,
  onClick: () => void
) {
  const dragOffset = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0, isDragged: false });

  const move = useCallback(
    function (el: HTMLDivElement, { x, y }: { x: number; y: number }) {
      if (ballRef.current === null) return;
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Get element dimensions
      const rect = el.getBoundingClientRect();
      const elementWidth = rect.width;
      const elementHeight = rect.height;

      // Boundary checking
      const newX = Math.max(0, Math.min(x, viewportWidth - elementWidth));
      const newY = Math.max(0, Math.min(y, viewportHeight - elementHeight));

      // calculate new position
      ballRef.current.classList.add("dragging");
      ballRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      // ballRef.current.style.transition = "transform 0.1s linear";
    },
    [ballRef]
  );

  const getCoordinates = (event: MouseEvent | TouchEvent) => {
    if (event instanceof TouchEvent) {
      return {
        x: event.touches[0]?.clientX,
        y: event.touches[0]?.clientY,
        type: "touch",
      };
    }
    return {
      x: event.clientX,
      y: event.clientY,
      type: "mouse",
    };
  };

  const handleDrag = useCallback(
    (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      if (!ballRef.current) return;

      const { x, y } = getCoordinates(e);
      if (!x || !y) return;

      // Calculate new position with offset
      const newX = x - dragOffset.current.x;
      const newY = y - dragOffset.current.y;

      /* ISSUE:
      ** 1. This function is sometimes called even when the ball element is not being dragged but clicked.
      ** 2. dragging the ball element fires the onClick event. Making it hard to differenciate when the ball element is being dragged and when it is being clicked.

      ** Solution:
      ** 1. Since the onClick handler will always fire when the ball is dragged, we need to implement a custom click handler to handle the click event.

      ** 2. To do this, we need to check if the onMove event is fired. If fired, then the ball is being dragged. else, the ball was just cliked.

      ** 3. However, from Issue 1, this onmove handler fires even when ball is clicked.

      ** 4. To fix this, we need to add a flag to check if the ball is being dragged or not by determining the difference between the current mouse position and the initial mouse position. targetting a range of > 1px difference to mean that the ball is being dragged.
    */

      // Get the previous position
      const prevX = lastMousePos.current.x;
      const prevY = lastMousePos.current.y;

      // Calculate the difference between the current mouse position and the initial mouse position
      const isDragging =
        Math.abs(newX - prevX) > 1 || Math.abs(newY - prevY) > 1;

      // Update the last mouse position
      lastMousePos.current = { ...lastMousePos.current, isDragged: isDragging };

      if (!isDragging) return; // don't update the position

      move(ballRef.current, {
        x: newX,
        y: newY,
      });
    },
    [ballRef, move]
  );

  const handleDragEnd = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!ballRef.current) return;
      const oldPos = { ...lastMousePos.current };
      const { type } = getCoordinates(e);

      const rect = ballRef.current.getBoundingClientRect();

      // record the last mouse position
      ballRef.current.classList.remove("dragging");
      lastMousePos.current = {
        x: rect.x,
        y: rect.y,
        isDragged: false, // reset
      };

      // mouse events
      if (type === "touch") {
        document.removeEventListener("touchmove", handleDrag);
        document.removeEventListener("touchend", handleDragEnd);
        document.removeEventListener("touchcancel", handleDragEnd);
      } else {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDragEnd);
      }

      // if isDragged is false, then, handle click.
      if (!oldPos.isDragged) {
        onClick?.();
      }
    },
    [handleDrag, onClick, ballRef]
  );

  const handleDragStart = useCallback(
    (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      if (!ballRef.current) return;

      // Calculate the offset between click position and element's top-left corner
      const { x, y, type } = getCoordinates(e);
      const rect = ballRef.current.getBoundingClientRect();

      dragOffset.current = {
        x: x - rect.left,
        y: y - rect.top,
      };

      if (type === "touch") {
        document.addEventListener("touchmove", handleDrag, { passive: false });
        document.addEventListener("touchend", handleDragEnd);
        document.addEventListener("touchcancel", handleDragEnd);
      } else {
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", handleDragEnd);
      }
    },
    [ballRef, handleDrag, handleDragEnd]
  );

  useEffect(() => {
    const element = ballRef.current;
    if (!element) return;

    element.addEventListener("mousedown", handleDragStart);
    element.addEventListener("touchstart", handleDragStart, {
      passive: false,
    });

    return () => {
      element.removeEventListener("mousedown", handleDragStart);
      element.removeEventListener("touchstart", handleDragStart);
    };
  }, [handleDragStart, ballRef]);

  // set initl position of ball
  useEffect(() => {
    if (!ballRef.current) return;

    const rect = ballRef.current.getBoundingClientRect();

    lastMousePos.current = {
      x: rect.left,
      y: rect.top,
      isDragged: false,
    };
  }, [ballRef]);
} // implementation complete

export default useDrag;
