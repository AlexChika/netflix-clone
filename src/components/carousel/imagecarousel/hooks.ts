import { useEffect, useRef, useState, useCallback } from "react";

function useClickOnce(timeout = 1500) {
  const [waiting, setWaiting] = useState(false);
  const [clicked, setClicked] = useState(false);
  const func = useRef<() => void>(null);

  useEffect(() => {
    if (waiting || !clicked) return;

    func.current?.();

    setTimeout(() => {
      setClicked(false);
      setWaiting(false);
    }, timeout);

    setWaiting(true);
  }, [waiting, clicked, timeout]);

  const clickonce = useCallback(function (callback: () => void) {
    func.current = callback;
    setClicked(true);
  }, []);

  return [clickonce, waiting] as const;
}

async function getImages() {
  async function photo(index: number): Promise<string> {
    const { default: img } = await import(`./assets/page${index}.png`);
    return img;
  }

  const arr: { id: number; src: string }[] = [];

  for (let i = 0; i < 5; i++) {
    arr.push({
      id: i + 1,
      src: await photo(i + 1),
    });
  }

  return arr;
}

function getCoordinates(
  event: MouseEvent | TouchEvent,
  evType: "start" | "end" = "start"
) {
  if (event instanceof TouchEvent) {
    const touch =
      evType === "start" ? event.touches[0] : event.changedTouches[0];
    return {
      x: touch?.clientX,
      y: touch?.clientY,
      type: "touch",
    };
  }
  return {
    x: event.clientX,
    y: event.clientY,
    type: "mouse",
  };
}

type Ref = React.RefObject<HTMLDivElement | null>;
type SwipeData = {
  dir: "Down" | "Up" | "Left" | "Right" | null;
  axis: "Vertical" | "Horizontal" | null;
  vector: { start: { x: number; y: number }; end: { x: number; y: number } };
};

const defaultSwipeData: SwipeData = {
  dir: null,
  axis: null,
  vector: { start: { x: -1, y: -1 }, end: { x: -1, y: -1 } },
};

// could take onSwipeStart, onSwipe and OnswipeEnd funcs too
function useSwipe(ref: Ref, threshold = 100) {
  const [data, setData] = useState(defaultSwipeData);
  const swipeStartPos = useRef(defaultSwipeData.vector.start);

  const updateCursor = useCallback(
    function (type: "start" | "end") {
      if (!ref.current) return;
      if (type === "start") {
        ref.current.style.cursor = "grabbing";
      } else {
        ref.current.style.cursor = "grab";
      }
    },
    [ref]
  );

  // could handle onSwipe here
  // const handleSwipe = useCallback(function () {}, []);

  const handleSwipeEnd = useCallback(
    function (e: MouseEvent | TouchEvent) {
      const { x: startX, y: startY } = swipeStartPos.current;
      const { x: endX, y: endY, type } = getCoordinates(e, "end");
      updateCursor("end");

      if (endX == null || endY == null) return;

      const diffX = Math.abs(startX - endX);
      const diffY = Math.abs(startY - endY);

      const isSwiped = diffX > threshold || diffY > threshold;

      if (isSwiped) {
        const axis: SwipeData["axis"] =
          diffX > diffY ? "Horizontal" : "Vertical";
        let dir: SwipeData["dir"] = null;

        if (axis === "Horizontal") {
          dir = endX - startX > 0 ? "Right" : "Left";
        } else {
          dir = endY - startY > 0 ? "Down" : "Up";
        }

        setData({
          axis,
          dir,
          vector: {
            start: { x: startX, y: startY },
            end: { x: endX, y: endY },
          },
        });
      }

      if (type === "mouse") {
        document.removeEventListener("mouseup", handleSwipeEnd);
      } else {
        document.removeEventListener("touchend", handleSwipeEnd);
        document.removeEventListener("touchcancel", handleSwipeEnd);
      }
    },
    [threshold, updateCursor]
  );

  const handleStart = useCallback(
    function (e: MouseEvent | TouchEvent) {
      const { type, x, y } = getCoordinates(e);
      swipeStartPos.current = { x, y };
      updateCursor("start");

      if (type === "mouse") {
        e.preventDefault();

        document.addEventListener("mouseup", handleSwipeEnd);
      } else {
        document.addEventListener("touchend", handleSwipeEnd);
        document.addEventListener("touchcancel", handleSwipeEnd);
      }
    },
    [handleSwipeEnd, updateCursor]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousedown", handleStart);
    el.addEventListener("touchstart", handleStart, { passive: false });
    return () => {
      el.removeEventListener("mousedown", handleStart);
      el.removeEventListener("touchstart", handleStart);
    };
  }, [handleStart, ref]);

  type ResetSwipe = () => void;
  const reset: ResetSwipe = useCallback(function () {
    setData(defaultSwipeData);
  }, []);

  return [data, reset] as const;
}
export { useClickOnce, useSwipe, getImages };
