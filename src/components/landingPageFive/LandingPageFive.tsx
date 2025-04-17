import styled from "styled-components";
import Banner from "./Banner";
import Footer from "../general/Footer";
import LandingPageFaqs from "./LandingPageFaqs";
import MoreReasonsToJoin from "./MoreReasonsToJoin";
import GradientWrapper from "./GradientWrapper";
import TrendingNow from "./TrendingNow";

function LandingPageFive() {
  return (
    <Wrapper>
      <GradientWrapper>
        <Banner />
        <TrendingNow />
        <MoreReasonsToJoin />
      </GradientWrapper>
      <LandingPageFaqs />
      <Footer bg="" />
    </Wrapper>
  );
}

export default LandingPageFive;

const Wrapper = styled.div`
  /* general styles */
  --general-bg: #111111;
  background-color: var(--general-bg);
  animation: fadeOut 1s linear;

  @keyframes fadeOut {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;
