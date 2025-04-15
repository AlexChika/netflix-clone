import styled from "styled-components";
import {
  DownloadIcon,
  ProfileForChildrenIcon,
  TvIcon,
  WatchEverywhereIcon,
} from "../../utils/icons";

function MoreReasonsToJoin() {
  return (
    <Wrapper>
      <h2 className="heading">More reasons to join</h2>

      <div className="parent__card__wrapper">
        <div className="card__wrapper">
          <div className="card">
            <div className="card__content">
              <div>
                <h2>Enjoy on your TV</h2>
                <h3>
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </h3>
              </div>

              <figure>
                <TvIcon />
              </figure>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <div>
                <h2>Download your programmes to watch offline</h2>
                <h3>
                  Save your favourites easily and always have something to
                  watch.
                </h3>
              </div>

              <figure>
                <DownloadIcon />
              </figure>
            </div>
          </div>
        </div>

        <div className="card__wrapper">
          <div className="card">
            <div className="card__content">
              <div>
                <h2>Watch everywhere</h2>
                <h3>
                  Stream unlimited films and TV programmes on your phone,
                  tablet, laptop and TV.
                </h3>
              </div>

              <figure>
                <WatchEverywhereIcon />
              </figure>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <div>
                <h2>Create profiles for children</h2>
                <h3>
                  Send children on adventures with their favourite characters in
                  a space made just for them — free with your membership.
                </h3>
              </div>

              <figure>
                <ProfileForChildrenIcon />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MoreReasonsToJoin;

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

  .parent__card__wrapper {
    display: flex;
    flex-direction: column;

    .card__wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;

      .card {
        width: 100%;
        /* aspect-ratio: 9/13; */
        /* border: 3px solid red; */
        padding: 6px;
        position: relative;

        .card__content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);
          height: 100%;
          width: 100%;
          padding: 25px;

          h2 {
            font-size: clamp(18px, 1.5vw, 26px);
            max-width: 600px;
            font-weight: 700;
          }

          h3 {
            font-size: clamp(14px, 1.1vw, 17px);
            margin-top: 20px;
            max-width: 600px;
            color: #d6d6d6;
          }

          figure {
            align-self: flex-end;
            margin-top: 20px;
            width: max-content;
          }
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    .parent__card__wrapper {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1280px) {
    .parent__card__wrapper {
      .card__wrapper {
        flex-direction: row;
      }
    }
  }
`;
