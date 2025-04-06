import styled from "styled-components";
import WatchOnTvCards from "./WatchOnTvCards";
import WatchEveryWhereCards from "./WatchEveryWhereCards";
import ChildrenProfileCards from "./ChildrenProfileCards";
import WatchOfflineCards from "./WatchOfflineCards";

const Cards = () => {
  return (
    <Wrapper>
      <section>
        <WatchOnTvCards />
        <WatchEveryWhereCards />
      </section>
      <section>
        <ChildrenProfileCards />
        <WatchOfflineCards />
      </section>
    </Wrapper>
  );
};

export default Cards;
const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  padding: 0px 20px;
  z-index: 6;
  max-width: 1250px;
  margin: 0 auto;
  color: white;

  h2 {
    font-size: clamp(18px, 1.5vw, 26px);
    max-width: 600px;
    font-weight: 500;
  }

  h3 {
    font-size: clamp(14px, 1.1vw, 17px);
    margin-top: 10px;
    max-width: 600px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 25px;
    justify-content: space-between;

    article:first-of-type {
      margin-bottom: 25px;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 0px 20px 20px 20px;

    section {
      flex-direction: row;

      article:first-of-type {
        margin-bottom: 0px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: -40px;
    padding: 0px 50px 30px 50px;
  }
  @media screen and (min-width: 1065px) {
    padding: 0px 60px 30px 60px;
  }

  @media screen and (min-width: 1300px) {
    margin-bottom: 50px;
    margin-top: -60px;
    padding: 0px;
  }

  @media screen and (min-width: 1500px) {
    max-width: 1400px;
    section {
      gap: 30px;
    }
  }
`;
