import styled from "styled-components";
import getAssets from "../../utils/functions/getAssets";

const { BannerImage5 } = getAssets();

function GradientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <div className="children">{children}</div>
      <div className="gradient">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
    </Wrapper>
  );
}

export default GradientWrapper;
const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .children {
    position: relative;
    z-index: 1;
  }

  .gradient {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    /* border: 3px solid red; */

    .div1,
    .div2,
    .div3 {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .div1 {
      background: url(${BannerImage5}) 50% center / cover no-repeat;
      transition: background-image 0.2s ease-in-out;
      filter: blur(16px);
      border: 3px solid green;

      width: 100%;
      opacity: 0.26;

      mask-image: linear-gradient(
        rgb(217, 217, 217) 78.62%,
        rgba(115, 115, 115, 0) 100%
      );
    }

    .div2 {
      /* opacity: 75%; */
      background: radial-gradient(
        92.16% 100% at 49.87% 0%,
        rgba(247, 99, 107, 0.3) 19.86%,
        rgba(0, 0, 0, 0) 100%
      );

      /* height: 75rem; */
      width: 100%;
    }

    .div3 {
      background: radial-gradient(
        50% 100% at 50% 0%,
        rgba(44, 66, 156, 0.15) 0%,
        rgba(0, 0, 0, 0) 100%
      );

      /* height: 75rem; */
      width: 100%;
    }
    /* background: linear-gradient(#3b2c4d, #a93e74, #131010ac 90%); // change
    background-image: url(${BannerImage5});
    filter: blur(16px); */
  }
`;
