import styled from "styled-components";
import Banner from "./Banner";
import Footer from "../general/Footer";
import ChildrenProfile from "./ChildrenProfile";
import WatchOnTv from "./WatchOnTv";
import DownloadOffline from "./DownloadOffline";
import LandingPageFaqs from "./LandingPagesFaqs";
import WatchEveryWhere from "./WatchEveryWhere";

const LandingPageOne = () => {
  return (
    <Wrapper>
      <Banner />
      <WatchOnTv />
      <DownloadOffline />
      <WatchEveryWhere />
      <ChildrenProfile />
      <LandingPageFaqs />
      <Footer bg="#000000" />
    </Wrapper>
  );
};

export default LandingPageOne;

const Wrapper = styled.div`
  /* general styles */
  h2 {
    font-size: clamp(12px, 8vw, 48px);
    max-width: 600px;
    font-weight: 700;
  }

  h3 {
    font-size: clamp(10px, 5vw, 25px);
    margin-top: 20px;
    max-width: 600px;
  }

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
