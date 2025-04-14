import styled from "styled-components";
import { PopcornIcon } from "../../utils/icons";

// The Curve
function Curve() {
  return (
    <CurveContainer>
      <CurveInner />
    </CurveContainer>
  );
}

// The Curve Content
function CurveContent() {
  return (
    <CurveContentContainer>
      <div className="pop_corn_wrap">
        <PopcornIcon class="popcorn" />
      </div>
      <div className="advert_ui_wrap">
        <div>
          <h3>The Netflix you love for just £5.99.</h3>
          <h4>Get our most affordable, advert-supported plan.</h4>
        </div>

        <span>Learn more</span>
      </div>
    </CurveContentContainer>
  );
}

function CurvedUI() {
  return (
    <Wrapper>
      <Curve />
      <CurveContent />
    </Wrapper>
  );
}

export default CurvedUI;

// The Curve styles
const CurveContainer = styled.div`
  position: relative;
  background: linear-gradient(
    to right,
    rgba(33, 13, 22, 1) 16%,
    rgba(184, 40, 105, 1),
    rgba(229, 9, 20, 1),
    rgba(184, 40, 105, 1),
    rgba(33, 13, 22, 1) 84%
  );
  border-radius: 50% 50% 0 0;
  border-top: 5px solid transparent;
  margin-top: calc(var(--half-curve-height) * -1); //eg -3vw
  height: var(--curve-height); //eg 6vw
`;
const CurveInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, black 20%, #132144 50%, black 80%);
  border-radius: 50% 50% 0 0;
`;

// The Curve Content styles
const CurveContentContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 5;
  width: 100%;
  padding: 0px 20px;
  max-width: 1065px;
  margin: 0 auto;
  color: white;
  margin-top: calc(var(--curve-height) * -1);
  transition: scale 0.3s linear;
  filter: drop-shadow(0px -10px 8px black);

  &:hover {
    scale: 1.02;
  }

  &:hover .advert_ui_wrap::before {
    background: linear-gradient(91deg, #551e85 0%, #232d6e 99.51%);
    opacity: 1;
  }

  .pop_corn_wrap {
    width: max-content;
    display: flex;
    align-items: flex-start;

    .popcorn {
      scale: 0.8;
    }
  }

  .advert_ui_wrap {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1;
    padding: 30px 20px;
    margin-top: -25px;
    background-color: transparent;
    border-radius: 1.4vw;

    h3 {
      font-size: clamp(16px, 1.4vw, 22px);
      max-width: 600px;
      font-weight: 600;
    }

    h4 {
      margin-top: 4px;
      font-size: 16px;
      margin-bottom: 20px;
    }

    span {
      background-color: #5e5e5e5d;
      padding: 10px 15px;
      border-radius: 4px;
      font-weight: 500;
      width: max-content;
      cursor: pointer;
    }

    &::before {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.7;
      z-index: -1;
      border-radius: inherit;
      transition: opacity 0.3s linear;
      background: linear-gradient(91deg, #482566 0%, #161d52 99.51%);
    }
  }

  @media screen and (min-width: 600px) {
    margin-top: calc(var(--quarter-curve-height) * -1);
    flex-direction: row;
    gap: 10px;

    .advert_ui_wrap {
      margin-top: 0px;
      padding: 15px 20px;
    }

    .pop_corn_wrap {
      .popcorn {
        margin-top: -20px;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .advert_ui_wrap {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h4 {
        margin-bottom: 0px;
      }
    }
  }
`;

// Wrapper styles (CurvedUI);
const Wrapper = styled.div`
  position: relative;
  z-index: 2;
`;
