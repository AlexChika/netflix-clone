import styled from "styled-components";
import {
  CancelSwitchIcon,
  PlaceForKidsIcon,
  TailoredToTasteIcon,
  WatchFavoriteIcon,
} from "../../utils/icons";

function MoreReasonsToJoin() {
  return (
    <Wrapper>
      <h2 className="heading">More reasons to join</h2>

      <div className="card__wrapper">
        <div className="card">
          <div className="card__content">
            <div>
              <h2>Cancel or switch plans anytime</h2>
            </div>

            <figure>
              <CancelSwitchIcon class="icon" />
            </figure>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <div>
              <h2>A safe place just for kids</h2>
            </div>

            <figure>
              <PlaceForKidsIcon class="icon" />
            </figure>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <div>
              <h2>Watch on your favorite devices</h2>
            </div>

            <figure>
              <WatchFavoriteIcon class="icon" />
            </figure>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <div>
              <h2>Stories tailored to your taste</h2>
            </div>

            <figure>
              <TailoredToTasteIcon class="icon" />
            </figure>
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
  width: 87%;
  max-width: 1200px;
  margin-top: 50px;

  .heading {
    font-size: clamp(18px, 1.5vw, 26px);
    margin-bottom: 17px;
    font-weight: 700;
  }

  .icon {
    width: 70px;
  }

  .card__wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;

    .card {
      width: 100%;
      padding: 6px;
      position: relative;

      .card__content {
        display: flex;
        align-items: center;
        max-height: 100px;
        min-height: 100px;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(12px);
        border: 2px solid rgba(255, 255, 255, 0.04);
        width: 100%;
        padding: 0px 25px;

        h2 {
          font-size: clamp(18px, 1.1vw, 18px);
          max-width: 600px;
          font-weight: 700;
        }

        figure {
          width: max-content;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .icon {
      width: 50px;
    }

    .card__wrapper {
      flex-direction: row;

      .card {
        .card__content {
          flex-direction: column;
          height: 100%;
          min-height: 140px;
          max-height: unset;

          h2 {
            padding-top: 10px;
          }

          figure {
            align-self: flex-end;
          }
        }
      }
    }
  }
`;
