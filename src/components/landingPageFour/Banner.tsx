import styled from "styled-components";
import Nav from "../general/Nav";
import Form from "../general/Form";
import getAssets from "../../utils/functions/getAssets";

const { BannerImage1 } = getAssets();

const Banner = () => {
  return (
    <Wrapper role="banner">
      <div className="banner__image__wrapper">
        <img src={BannerImage1} alt="landing page banner" />
      </div>

      <div className="banner__content__wrapper">
        <Nav compact />

        <div className="banner__content">
          <h2>Unlimited films, TV programmes and more</h2>

          <h3>Starts at £5.99. Cancel at any time.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>

          <Form btnAlign="center" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
const Wrapper = styled.div`
  position: relative;
  height: max-content;
  border-bottom: 8px solid #222;

  .banner__image__wrapper {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: cover;
    }
  }

  .banner__content__wrapper {
    color: white;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    height: 100%;
    width: 100%;

    .banner__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: calc(100% - 85px);
      text-align: center;
      padding: 40px 20px;

      h2 {
        font-size: 30px;
        max-width: 300px;
        font-weight: 700;
      }

      h3 {
        font-size: clamp(1rem, 5vw, 2.5rem);
        margin-top: 20px;
        max-width: 600px;
      }

      h3 {
        font-size: clamp(1rem, 5vw, 2rem);
        max-width: 85%;
      }
    }
  }

  /* media queries */
  @media screen and (min-width: 768px) {
    height: 100vh;

    .banner__content__wrapper {
      .banner__content {
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 1000px) {
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
