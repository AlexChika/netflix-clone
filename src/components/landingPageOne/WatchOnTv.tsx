import styled from "styled-components";
import getAssets from "../../utils/functions/getAssets";

const { WatchTvImage1, WatchTvVideo1 } = getAssets();

const WatchOnTv = () => {
  return (
    <Wrapper>
      <div className="text__wrapper">
        <h2>Enjoy on your TV.</h2>
        <h3>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h3>
      </div>

      <div className="image__video__wrapper">
        <div className="image__wrapper">
          <img src={WatchTvImage1} alt="watch television" />
        </div>

        <div className="video__wrapper">
          <video autoPlay muted loop playsInline src={WatchTvVideo1}></video>
        </div>
      </div>
    </Wrapper>
  );
};

export default WatchOnTv;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  height: max-content;
  padding: 50px 20px;

  .text__wrapper {
    margin-bottom: 30px;
  }

  .image__video__wrapper {
    position: relative;

    .image__wrapper {
      display: relative;
      aspect-ratio: 16/9;

      img {
        width: 75%;
        position: sticky;
        z-index: 3;
      }
    }

    .video__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      video {
        aspect-ratio: 16/9;
        height: calc(100% - 46%);
        margin-top: -15px;
      }
    }
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    padding: 50px 30px;

    .text__wrapper {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1500px) {
    gap: 60px;
  }
`;
