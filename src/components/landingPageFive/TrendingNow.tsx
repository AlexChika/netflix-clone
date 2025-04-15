import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { arrayShuffle } from "../../utils/functions/functions";

async function asyncGetImages() {
  async function photo(index: number): Promise<string> {
    const { default: img } = await import(
      `../../assets/landingPageFour/carousel${index}.webp`
    );
    return img;
  }

  const arr: { id: number; src: string }[] = [];

  for (let i = 0; i < 25; i++) {
    arr.push({
      id: i + 1,
      src: await photo(i + 1),
    });
  }

  return arr;
}

const images = arrayShuffle(await asyncGetImages()).slice(0, 18);

function TrendingNow() {
  const id = "jdsjsikfnuo878";
  const maxItems = 15;
  const leftBtnRef = useRef<null | HTMLButtonElement>(null);
  const rightBtnRef = useRef<null | HTMLButtonElement>(null);
  const scrollRef = useRef({ scrollBy: 6, current: 0 });

  function scroll(dir?: "left" | "right") {
    if (!leftBtnRef.current || !rightBtnRef.current) return;

    const scrollOption: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    };

    const allEl = [
      ...document.querySelectorAll(`[data-name='card${id}']`),
    ] as HTMLDivElement[];

    const { current, scrollBy } = scrollRef.current;
    let nextID = current;

    if (dir === "left") {
      const shouldScroll = nextID - scrollBy >= 0;
      nextID = shouldScroll ? nextID - scrollBy : 0;
    } else if (dir === "right") {
      const shouldScroll = nextID + scrollBy < maxItems;
      nextID = shouldScroll ? nextID + scrollBy : maxItems - 1;
    }

    // reset btn visibility
    if (nextID < 1) {
      leftBtnRef.current.style.visibility = "hidden";
    } else if (nextID > 1 && nextID < maxItems - scrollBy) {
      leftBtnRef.current.style.visibility = "visible";
      rightBtnRef.current.style.visibility = "visible";
    } else {
      rightBtnRef.current.style.visibility = "hidden";
    }

    allEl[nextID].scrollIntoView(scrollOption);
    scrollRef.current = { scrollBy, current: nextID };
  }

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let scrollBy = 0;

      if (width > 0) scrollBy = 2;
      if (width >= 500) scrollBy = 3;
      if (width >= 768) scrollBy = 4;
      if (width >= 1000) scrollBy = 6;
      scrollRef.current.scrollBy = scrollBy;
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <h2 className="heading">Trending now</h2>

      <div className="carousel__wrapper">
        <div className="carousel hide__scroll__bar">
          {images.map((img, i) => {
            return (
              <div key={i} data-name={"card" + id} className="card">
                <div className="card__image">
                  <img src={img.src} alt="movie image" />
                </div>
                <div className="card__number">{i + 1}</div>
              </div>
            );
          })}
        </div>

        <button
          ref={rightBtnRef}
          onClick={() => scroll("right")}
          className="btn__wrapper right"
        >
          <MdArrowForwardIos />
        </button>

        <button
          ref={leftBtnRef}
          onClick={() => scroll("left")}
          className="btn__wrapper left"
        >
          <MdArrowBackIos />
        </button>
      </div>
    </Wrapper>
  );
}

export default TrendingNow;

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;
  padding: 0px 20px;
  max-width: 1200px;
  margin-top: 50px;

  .heading {
    font-size: clamp(18px, 1.5vw, 26px);
    margin-bottom: 17px;
    font-weight: 700;
  }

  .carousel__wrapper {
    position: relative;
    width: 100%;
    /* border: 2px solid red; */

    .carousel {
      overflow-x: auto;
      width: 100%;
      /* border: 2px solid blue; */
      display: flex;

      .card {
        width: calc(100% / 2);
        min-width: calc(100% / 2);
        aspect-ratio: 9/13;
        /* border: 3px solid red; */
        padding: 15px;
        position: relative;

        .card__image {
          border-radius: 12px;
          background-color: bisque;
          height: 100%;
          width: 100%;

          img {
            border-radius: inherit;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .card__number {
          position: absolute;
          top: 10%;
          left: -1px;
          font-size: clamp(25px, 9vw, 80px);
          font-weight: 700;
          color: black;
          filter: drop-shadow(2px 2px 0px white);
          text-shadow: -2px -2px 0px white;
        }
      }
    }
  }

  .btn__wrapper {
    position: absolute;
    height: 30%;
    width: 25px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 8px;
    background-color: #6d6d6d;

    &:hover {
      background-color: #6d6d6d7a;
    }
  }

  .btn__wrapper.left {
    left: -15px;
    visibility: hidden;
  }
  .btn__wrapper.right {
    right: -15px;
  }

  @media screen and (min-width: 500px) {
    .carousel__wrapper {
      .carousel {
        .card {
          width: calc(100% / 3);
          min-width: calc(100% / 3);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .carousel__wrapper {
      .carousel {
        .card {
          width: calc(100% / 4);
          min-width: calc(100% / 4);
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .carousel__wrapper {
      .carousel {
        .card {
          width: calc(100% / 6);
          min-width: calc(100% / 6);
        }
      }
    }
  }
`;
