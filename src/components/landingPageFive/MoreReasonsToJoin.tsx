import styled from "styled-components";

function MoreReasonsToJoin() {
  return (
    <Wrapper>
      <h2 className="heading">More reasons to join</h2>
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
