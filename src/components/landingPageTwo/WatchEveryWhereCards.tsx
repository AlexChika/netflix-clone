import styled from "styled-components";
import getAssets from "../../utils/functions/getAssets";

const { WatchEveryWhereImage2 } = getAssets();

const WatchEveryWhereCards = () => {
  return (
    <Wrapper>
      {/* image wrapper */}
      <div className="image-wrapper">
        <img src={WatchEveryWhereImage2} alt="watch on tv" />
      </div>

      {/* text wrapper */}
      <div className="text-wrapper">
        <h2>Watch everywhere</h2>
        <h3>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h3>
      </div>
    </Wrapper>
  );
};

export default WatchEveryWhereCards;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 30px 20px;

  background: radial-gradient(
    99.93% 134.44% at 17.93% 0%,
    #09143c 0%,
    #101338 57.21%,
    #400e20 99.57%
  );
  border-radius: 8px;

  .text-wrapper {
    width: 80%;
  }

  .image-wrapper {
    width: 80%;
  }

  @media screen and (min-width: 600px) {
    width: 49%;
  }

  @media screen and (min-width: 1000px) {
    padding: 30px 30px 40px 30px;
  }
`;
