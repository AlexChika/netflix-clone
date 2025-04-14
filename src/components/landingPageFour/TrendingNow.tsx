import styled from "styled-components";

function TrendingNow() {
  return (
    <Wrapper>
      <h2>Trending now</h2>
    </Wrapper>
  );
}

export default TrendingNow;

const Wrapper = styled.div`
  color: white;
  margin: 0 auto;
  max-width: 1065px;
  margin-top: 50px;

  h2 {
    font-size: clamp(18px, 1.5vw, 26px);
  }
`;
