import styled from "styled-components";
import ImageCarousel from "./ImageCarousel";

type Props = {
  isOpen: boolean;
  handleOpenCloseModal: (action: "close" | "open") => void;
};

function Modal(props: Props) {
  const { handleOpenCloseModal, isOpen } = props;

  return (
    <ModalWrapper className={isOpen ? "open" : ""}>
      <div className={`modal_body ${isOpen ? "open" : ""}`}>
        <button
          className="modal_body_close_btn"
          onClick={() => handleOpenCloseModal("close")}
        >
          &times;
        </button>

        <ImageCarousel />
      </div>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  z-index: 999997;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s linear;
  background-color: rgba(0, 0, 0, 0.5); /// remove

  &.open {
    opacity: 1;
    pointer-events: visible;
  }

  .modal_body {
    position: relative;
    z-index: 999998;
    width: 95%;
    max-width: 680px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.5s linear;
    transform-origin: center;
    box-shadow: 0px 0px 1px black;
  }

  .modal_body.open {
    transform: scale(1);
    opacity: 1;
  }

  /* the modal close button */
  .modal_body_close_btn {
    line-height: 0;
    font-size: 25px;
    font-weight: 200;
    position: absolute;
    top: 5px;
    right: -25px;
    opacity: 0.8;
    color: var(--ball-color);
  }
`;
