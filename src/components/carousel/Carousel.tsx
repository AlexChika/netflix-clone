import { memo, useRef, useState } from "react";
import useDrag from "./useDrag";
import styled from "styled-components";
import { createPortal } from "react-dom";
import Ball from "./Ball";
import Modal from "./Modal";

type Props = {
  open?: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function Carousel(props: Props) {
  const { open = true, setPage } = props;

  const [isOpen, setIsOpen] = useState(open);
  const ballRef = useRef<HTMLDivElement>(null);
  useDrag(ballRef, handleOpenCloseModal);

  function handleOpenCloseModal(action = "open") {
    if (action === "close") {
      setIsOpen(false);
      return;
    }
    setIsOpen((prev) => !prev);
  }

  return createPortal(
    <Wrapper>
      <Ball isOpen={isOpen} ref={ballRef} />

      <Modal
        setPage={setPage}
        isOpen={isOpen}
        handleOpenCloseModal={handleOpenCloseModal}
      />
    </Wrapper>,
    document.body,
    "project_overview"
  );
}

export default memo(Carousel);

const Wrapper = styled.div`
  --ball-color: #b81d24;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;

  @media screen and (max-width: 760px) {
    /* display: none; // check this */
  }
`;
