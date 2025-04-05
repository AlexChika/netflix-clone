import styled from "styled-components";
import Footer from "../general/Footer";
import Banner from "./Banner";
import Cards from "./Cards";
import LandingPageFaqs from "../landingPageTwo/LandingPageFaqs";

const LandingPageThree = () => {
  return (
    <Wrapper>
      <Banner />
      <Cards />
      <LandingPageFaqs />
      <Footer />
    </Wrapper>
  );
};

export default LandingPageThree;
const Wrapper = styled.div`
  /* general styles */
  background: rgba(0, 8, 29, 1);

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
