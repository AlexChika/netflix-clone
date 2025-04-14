import styled from "styled-components";
import Nav from "../general/Nav";
import Form from "../general/Form";
import getAssets from "../../utils/functions/getAssets";

const { BannerImage4 } = getAssets();

const Banner = () => {
  return (
    <Wrapper role="banner">
      <div className="banner__image__wrapper">
        <img src={BannerImage4} alt="landing page banner" />
      </div>

      <div className="banner__content__wrapper">
        <Nav compact />

        <div className="banner__content">
          <div>
            <h2>Unlimited films, TV programmes and more</h2>

            <h3>Starts at £5.99. Cancel at any time.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>

            <Form btnAlign="center" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
const Wrapper = styled.div`
  height: calc(100vh - var(--curve-height));
  position: relative;
  max-height: 620px;
  min-height: 570px;

  .banner__image__wrapper {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: cover;
    }
  }

  .banner__content__wrapper {
    position: relative;
    z-index: 2;
    color: white;
    background: linear-gradient(
      7deg,
      rgba(0, 0, 0, 0.8) 30%,
      rgba(0, 0, 0, 0.7) 53%,
      rgba(0, 0, 0, 0.6) 97%
    );
    height: 100%;
    width: 100%;

    .banner__content {
      position: relative;
      // 85px is the height of the Nav
      height: calc(100% - 85px);

      & > div {
        position: absolute;
        top: calc(50% - 42.5px); // considering nav height
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
  }

  /* media queries */
  @media screen and (min-width: 768px) {
    .banner__content__wrapper {
      .banner__content {
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    height: calc(100vh - var(--half-curve-height));
    max-height: ${({ theme }) => theme.maxHeight};

    .banner__content__wrapper {
      .banner__content {
        h2 {
          font-size: clamp(20px, 5vw, 40px);
          max-width: 550px;
        }
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .banner__content__wrapper {
      .banner__content {
        h2 {
          font-size: clamp(20px, 8vw, 60px);
          font-weight: 700;
        }
      }
    }
  }
`;
