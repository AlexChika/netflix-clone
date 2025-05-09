import styled from "styled-components";
import Nav from "../general/Nav";
import Form from "../general/Form";
import getAssets from "../../utils/functions/getAssets";

const { BannerImage4 } = getAssets();

function Banner() {
  return (
    <Wrapper>
      <Nav theme="white" />

      <div className="banner">
        <div className="banner__overlay__wrapper">
          <div className="banner__overlay">
            <div className="overlay"></div>
            <img className="img" src={BannerImage4} alt="landing page banner" />
          </div>
        </div>

        <div className="banner__content">
          <div>
            <h2>Unlimited movies, TV shows, and more</h2>

            <h3>Starts at ₦2,200. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>

            <Form rounded="lg" type="shade" btnAlign="center" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  width: 95%;
  position: relative;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  color: white;

  .landing__page__nav {
    padding: 20px 0px;
  }

  .banner {
    position: relative;
    filter: drop-shadow(12px 16px 12px rgba(0, 0, 0, 0.6));
    filter: drop-shadow(12px 16px 12px rgba(0, 0, 0, 0.904));
  }

  .banner__content {
    position: relative;
    height: 100vh;
    max-height: 450px;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
    }

    h2 {
      font-size: 30px;
      max-width: 300px;
      font-weight: 700;
    }

    h3 {
      font-size: clamp(16px, 1.4vw, 22px);
      margin-top: 20px;
      max-width: 600px;
      font-weight: 600;
    }

    h4 {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  // parent
  .banner__overlay__wrapper {
    width: 100%;
    height: 100%;
    inset: 0;
    border-radius: 18px;
    pointer-events: none;
    mask-image: radial-gradient(
      100% 10% at 50% 103%,
      transparent 50%,
      white 50%
    );
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        at top left,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 70%
      );
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      z-index: 10;
      mask-composite: exclude;
      pointer-events: none;
    }
  }

  // child
  .banner__overlay {
    position: absolute;
    inset: 0;
    background: rgba(249, 146, 151, 0.2);
    mask-image: linear-gradient(
      180deg,
      #fff 71.48%,
      rgba(255, 255, 255, 0.4) 100%
    );

    .overlay {
      inset: 0;
      z-index: 2;
      position: absolute;
      pointer-events: none;
      background-image: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.8) 31.45%,
        rgba(0, 0, 0, 0.7) 75%,
        rgba(0, 0, 0, 0.55) 84.5%
      );
    }

    .img {
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      pointer-events: none;
      object-position: center;
    }
  }

  @media screen and (min-width: 500px) {
    .banner__overlay__wrapper {
      mask-image: radial-gradient(
        101% 13% at 50% 103%,
        transparent 50%,
        white 52%
      );
    }

    .banner__content {
      max-height: 400px;
    }
  }

  @media screen and (min-width: 768px) {
    .banner__content {
      justify-content: center;
    }
  }

  @media screen and (min-width: 960px) {
    .banner {
      /* filter: drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6)); */
    }
  }

  @media screen and (min-width: 1000px) {
    .banner__overlay__wrapper {
      border-radius: 18px;
      mask-image: radial-gradient(
        100% 15% at 50% 102%,
        transparent 50%,
        white 50%
      );
    }

    .banner__content {
      max-height: 500px;
      h2 {
        font-size: clamp(20px, 5vw, 40px);
        max-width: 550px;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .banner__content {
      max-height: 550px;
      h2 {
        font-size: clamp(20px, 8vw, 60px);
        font-weight: 700;
        max-width: 600px;
      }

      h3,
      h4 {
        margin-top: 30px;
      }
    }
  }

  @media screen and (min-width: 1500px) {
    .banner__content {
      max-height: 650px;
      h2 {
        font-size: clamp(20px, 9vw, 70px);
        max-width: 700px;
      }
    }
  }
`;
