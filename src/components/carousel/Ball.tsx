import React from "react";
import styled from "styled-components";

type Prop = {
  isOpen: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
};

function Ball({ ref, isOpen }: Prop) {
  return (
    <BallWrapper className={isOpen ? "" : "open"} ref={ref}>
      <span>See More</span>
      <span>Pages</span>
    </BallWrapper>
  );
}

export default Ball;

const BallWrapper = styled.div`
  --ball-size: 70px;
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  will-change: transform, opacity;
  transform: translate3d(
    calc(85vw - var(--ball-size)),
    calc(20vh - var(--ball-size)),
    0
  );
  width: var(--ball-size);
  height: var(--ball-size);
  border-radius: 50%;
  pointer-events: visible;
  z-index: 999999;
  cursor: move;
  user-select: none;
  touch-action: none;

  background: radial-gradient(circle at 30% 30%, var(--ball-color), #000);
  background-size: 100% 100%;
  background-position: center;

  box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.1),
    4px 4px 12px rgba(0, 0, 0, 0.1);
  animation: ball-blink 4.8s both infinite;
  animation-delay: 4.8s;

  span {
    text-align: center;
    line-height: 15px;
    font-size: 12px;
    font-weight: 600;
    color: #e2e2e2;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.9);
  }

  &.open {
    display: flex;
  }

  &.dragging {
    opacity: 0.75;
    animation: none;
  }

  @keyframes ball-blink {
    0%,
    6%,
    12% {
      opacity: 1;
    }
    3%,
    9% {
      opacity: 0.5;
    }
  }
`;
