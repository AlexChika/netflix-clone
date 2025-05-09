import styled from "styled-components";
import ImageCarousel from "./imagecarousel/ImageCarousel";

type Props = {
  isOpen: boolean;
  handleOpenCloseModal: (action: "close" | "open") => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function Modal(props: Props) {
  const { handleOpenCloseModal, isOpen, setPage } = props;

  return (
    <ModalWrapper className={isOpen ? "open" : ""}>
      <div className={`modal_body ${isOpen ? "open" : ""}`}>
        <Button onClick={() => handleOpenCloseModal("close")}>&times;</Button>
        <ImageCarousel setPage={setPage} interval={5} />
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

  &.open {
    opacity: 1;
    pointer-events: visible;
  }

  .modal_body {
    position: relative;
    z-index: 999998;
    width: 95%;
    max-width: 896px;
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
`;

/* the modal close button */
const Button = styled.button`
  line-height: 0;
  font-size: 25px;
  font-weight: 200;
  position: absolute;
  top: 15px;
  right: 20px;
  opacity: 0.8;
  color: red;
  z-index: 999997;

  @media screen and (min-width: 1100px) {
    right: -25px;
    top: 5px;
  }
`;
