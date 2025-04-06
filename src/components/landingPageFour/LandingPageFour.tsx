import styled from "styled-components";
import Banner from "./Banner";
// import Cards from "./Cards";
// import LandingPageFaqs from "./LandingPageFaqs";
import Footer from "../general/Footer";

function LandingPageFour() {
  return (
    <Wrapper>
      <Banner />
      {/* <Cards /> */}
      {/* <LandingPageFaqs /> */}
      <Footer />
    </Wrapper>
  );
}

export default LandingPageFour;

const Wrapper = styled.div`
  /* general styles */
  /* background: rgba(0, 8, 29, 1); */

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
