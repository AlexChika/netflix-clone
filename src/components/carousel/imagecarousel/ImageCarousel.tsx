import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from "react-icons/tb";
import { useClickOnce, useSwipe, getImages } from "./hooks";
const images = await getImages();

type Props = {
  interval: number;
  id?: string;
};

function ImageCarousel(props: Props) {
  const { interval = 3, id = "uniqueId" } = props;

  const _index = useRef(images.length - 1);
  const [index, setIndex] = useState(_index.current);
  const [play, setPlay] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const [direction] = useSwipe(imageContainerRef, 150);
  const clickonce = useClickOnce(500);

  //   helper funcs
  const getElements = useCallback(
    (dataname: string = "landing-pages") => {
      const el: HTMLDivElement[] = [
        ...document.querySelectorAll(`[data-name="${dataname + id}"]`),
      ] as HTMLDivElement[];
      return el;
    },
    [id]
  );

  const nextIndex = (forward: boolean) => {
    let idx: number;
    if (forward) {
      idx = _index.current + 1 <= images.length - 1 ? _index.current + 1 : 0;
    } else {
      idx = _index.current - 1 >= 0 ? _index.current - 1 : images.length - 1;
    }
    return idx;
  };
  function getSize(
    type: "height" | "width",
    index = images.length - 1,
    minSize = 75,
    totalItems = images.length
  ) {
    const remainingSize = 100 - minSize;
    const increment = remainingSize / (totalItems - 1);

    return type === "width"
      ? 100 - index * increment
      : minSize + index * increment;
  }

  const stack = useCallback(
    function (forward: boolean) {
      const index = _index.current;
      const photos = getElements(); // all images
      const nxtIndex = nextIndex(forward); // next image index

      const topmostPhoto = photos[index];
      const nextPhoto = photos[nxtIndex];

      const prevSizes = photos.map((p, i) => {
        const width = p.style.width,
          height = p.style.height,
          zIndex = p.style.zIndex;

        if (i !== index && i !== nxtIndex)
          p.style.width = `${getSize("width")}%`;
        else p.style.width = "0";

        return { width, height, zIndex };
      });

      setTimeout(() => {
        nextPhoto.style.zIndex = "10";
        topmostPhoto.style.zIndex = prevSizes[nxtIndex].zIndex;

        nextPhoto.style.width = `${getSize("width")}%`;
        nextPhoto.style.height = `${getSize("height")}%`;

        topmostPhoto.style.width = prevSizes[nxtIndex].width;
        topmostPhoto.style.height = prevSizes[nxtIndex].height;

        photos.forEach((p, i) => {
          if (i !== index && i !== nxtIndex) p.style.width = prevSizes[i].width;
        });
      }, 300);

      _index.current = nxtIndex;
      setIndex(nxtIndex);
    },
    [getElements]
  ); // photo stacker (re-stacks and resize the images)

  useEffect(() => {
    const { dir } = direction;
    if (!dir) return;

    if (dir === "Left" || dir === "Right") {
      if (dir === "Left") {
        clickonce(() => {
          stack(false);
        });
      } else if (dir === "Right") {
        clickonce(() => {
          stack(true);
        });
      }
    }
  }, [direction, clickonce, stack]); // swipe efffect

  useEffect(() => {
    if (!play) return;

    const intervalID = setInterval(() => {
      stack(true);
    }, interval * 1000);

    return () => clearInterval(intervalID);
  }, [play, interval, stack]);

  return (
    <CarouselWrapper $src={images[index].src}>
      {/* title and pause/play btn */}
      <div className="title_pause_play_wrapper">
        {/* title */}
        <h2>Landing Page {images[index].id}</h2>

        {/*pause/play slideshow button */}
        <button
          title={play ? "pause slideshow" : "play slideshow"}
          onClick={() => setPlay(!play)}
        >
          {play ? "⏸️" : "▶️"}
        </button>
      </div>

      {/* overlay background */}
      <div className="overlay"></div>

      {/* image conatiner */}
      <div ref={imageContainerRef} className="image_container">
        {/* image wrapper */}
        {images.map((img, i) => {
          return (
            <div
              style={{
                zIndex: i + 1,
                height: `${getSize("height", i)}%`,
                width: `${getSize("width", i)}%`,
              }}
              data-name={`landing-pages${id}`}
              className="image_wrap"
              key={i}
            >
              <img src={img.src} alt="stacked image gallery" />
            </div>
          );
        })}

        {/*arrow buttons wrapper */}
        <div className="arrow_btns_wrapper">
          <button
            className="left_btn"
            onClick={() =>
              clickonce(() => {
                stack(false);
              })
            }
          >
            <TbArrowBigLeftFilled />
          </button>

          <button
            className="right_btn"
            onClick={() =>
              clickonce(() => {
                stack(true);
              })
            }
          >
            <TbArrowBigRightFilled />
          </button>
        </div>
      </div>

      {/* tail */}
      <div className="tail">
        <span>
          {index + 1}/{images.length}
        </span>
      </div>

      {/* disclaimer wrappper */}
      <div className="disclaimer_wrapper">
        <div>
          <span />
        </div>{" "}
        <h1 title="disclaimer">
          This project / websites is for demonstration purposes only. It's not
          affiliated with Netflix in anyway.
        </h1>{" "}
        <span></span>
      </div>
    </CarouselWrapper>
  );
}

export default ImageCarousel;
type WrapperProp = {
  $src: string;
};
const CarouselWrapper = styled.div<WrapperProp>`
  background-image: url(${({ $src }) => $src});
  width: 100%;
  max-width: 896px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: bottom;
  background-size: cover;
  color: white;
  padding: 12px 50px;

  .title_pause_play_wrapper {
    display: relaive;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 24px 0px;

    h2 {
      font-size: 20px;
      line-height: 28px;
      font-family: Pushster;
    }

    button {
      background-color: rgb(15 23 42 / 0.4);
      height: 40px;
      width: 40px;
      font-size: 16px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      /* #0f172a, */ #0f172a,
      #0f172a,
      rgba(30, 41, 59, 0.5),
      rgba(30, 41, 59, 0.5),
      rgba(30, 41, 59, 0.5)
    );
  }

  .arrow_btns_wrapper {
    .left_btn,
    .right_btn {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid white;
      border-radius: 50%;
      height: 32px;
      width: 32px;
      font-size: 14px;
      z-index: 200;
      background-color: rgba(15, 23, 42, 0.4);
      transition: background-color 0.2s ease-in-out;
      top: 50%;
    }

    .left_btn {
      left: -44px;
    }

    .right_btn {
      right: -44px;
    }

    .left_btn:hover,
    .right_btn:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .tail {
    position: relative;
    max-width: 672px; /* Equivalent to max-w-2xl */
    margin-top: -34px; /* Equivalent to -mt-16 */
    margin-bottom: 36px; /* Equivalent to mb-9 */
    border-bottom: 3px solid #cbd5e1; /* Equivalent to border-b-slate-300 & border-b-[3px] */
    padding-top: 44px; /* Default py-11 */
    padding-bottom: 44px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;

    span {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 28px; /* Equivalent to h-7 */
      width: 28px; /* Equivalent to w-7 */
      background-color: #cbd5e1; /* Equivalent to bg-slate-300 */
      color: black; /* Equivalent to text-black */
      font-size: 12px; /* Equivalent to text-xs */
    }
  }

  .image_container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 672px;
    height: 176px;
    color: white;

    .image_wrap {
      position: absolute;
      height: 100%;
      border-radius: 24px;
      transition: width 300ms linear;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
      object-position: top left;
    }
  }

  .disclaimer_wrapper {
    display: flex;
    align-items: center;
    gap: 5px;

    h1 {
      text-align: center;
      font-size: 16px;
    }

    span {
      display: block;
      background: radial-gradient(
        circle at 25% 25%,
        #0f172a 35%,
        white 75%,
        #0f172a
      );
      border-radius: 9999px;
      height: 20px;
      width: 20px;
    }
  }

  @media (min-width: 475px) {
    .tail {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    .image_container {
      height: 224px;
    }
  }

  @media (min-width: 640px) {
    .tail {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem;
    }

    .image_container {
      height: 288px;
    }
  }

  @media screen and (min-width: 678px) {
    .title_pause_play_wrapper {
      h2 {
        font-size: 30px;
        line-height: 36px;
      }

      button {
        font-size: 20px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .image_container {
      height: 320px;
    }
  }
`;
