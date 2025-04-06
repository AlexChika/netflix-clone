import styled from "styled-components";
import getAssets from "../../utils/functions/getAssets";
import Nav from "../general/Nav";
import Form from "../general/Form";

const { BannerImage2 } = getAssets();

const Banner = () => {
  return (
    <Wrapper role="banner">
      <div className="banner__image__wrapper">
        <img src={BannerImage2} alt="landing page banner" />
      </div>

      <div className="banner__content__wrapper">
        <Nav />

        <div className="banner__content center">
          <h2>Unlimited movies, TV shows, and more.</h2>

          <h3>Watch anywhere. Cancel anytime.</h3>

          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>

          <Form />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
const Wrapper = styled.div`
  position: relative;
  height: max-content;
  background: linear-gradient(
    103.24deg,
    rgba(0, 8, 29, 0.9) 23.83%,
    rgba(0, 8, 29, 0.3) 96.1%
  );

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
    height: 100%;
    width: 100%;
    background: linear-gradient(
      103.24deg,
      rgba(0, 8, 29, 0.9) 23.83%,
      rgba(0, 8, 29, 0.3) 96.1%
    );

    .banner__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      height: calc(100% - 85px);
      max-width: 1065px;
      text-align: center;
      padding: 60px 20px 60px 20px;

      h2 {
        max-width: 500px;
        font-size: clamp(20px, 8vw, 40px);
        text-align: left;
        font-weight: 600;
      }

      h3 {
        font-size: clamp(16px, 5vw, 25px);
        text-align: left;
        margin-top: 20px;
        max-width: max-content;
      }

      h4 {
        font-size: clamp(14px, 4vw, 18px);
        text-align: left;
        max-width: max-content;
        margin-top: 20px;
      }
    }
  }

  /* media queries */
  @media screen and (min-width: 600px) {
    .banner__content__wrapper {
      .banner__content {
        padding: 60px 50px 60px 50px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
    max-height: ${({ theme }) => theme.maxHeight};

    .banner__content__wrapper {
      .banner__content {
        justify-content: center;
        margin-top: -40px;

        h2 {
          font-size: clamp(16px, 6.5vw, 50px);
          font-weight: 800;
          max-width: 600px;
        }
      }
    }
  }

  @media screen and (min-width: 1065px) {
    .banner__content__wrapper {
      .banner__content {
        padding: 0px 60px 30px 60px;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .banner__content__wrapper {
      .banner__content {
        padding: 0px;
        margin-top: -60px;

        h2 {
          font-size: clamp(16px, 4.6vw, 70px);
          max-width: 700px;
        }
      }
    }
  }
`;
