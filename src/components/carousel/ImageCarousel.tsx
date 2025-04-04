import styled from "styled-components";

function ImageCarousel() {
  return (
    <CarouselWrapper>
      {/* remove */}
      <figure>
        <div>{/* <img src="/" alt="" /> */}</div>
      </figure>
    </CarouselWrapper>
  );
}

export default ImageCarousel;

const CarouselWrapper = styled.div`
  /* background-color: red; */

  /* remove */
  figure {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure div {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: radial-gradient(
      circle at 25% 25%,
      rgba(0, 0, 0, 0.4) 50%,
      color-mix(in srgb, var(--ball-color) 60%, transparent)
    );
  }

  figure div img {
    padding: 15px;
    object-fit: contain;
    width: 95%;
    height: 95%;
  }
`;
