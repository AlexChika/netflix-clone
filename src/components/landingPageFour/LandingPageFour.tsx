import styled from "styled-components";
import Banner from "./Banner";
import Footer from "../general/Footer";
import CurveUI from "./CurvedUI";
import TrendingNow from "./TrendingNow";
import LandingPageFaqs from "./LandingPageFaqs";
import MoreReasonsToJoin from "./MoreReasonsToJoin";

function LandingPageFour() {
  return (
    <Wrapper>
      <Banner />
      <CurveUI />
      <TrendingNow />
      <MoreReasonsToJoin />
      <LandingPageFaqs />
      <Footer bg="#000000" />
    </Wrapper>
  );
}

export default LandingPageFour;

const Wrapper = styled.div`
  /* general styles */
  --curve-height: clamp(60px, 8vw, 65px);
  --half-curve-height: calc(var(--curve-height) / 2);
  --quarter-curve-height: calc(var(--curve-height) / 4);
  background-color: black;
  animation: fadeOut 1s linear;

  @keyframes fadeOut {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1000px) {
    --curve-height: 6.5vw;
  }
`;
