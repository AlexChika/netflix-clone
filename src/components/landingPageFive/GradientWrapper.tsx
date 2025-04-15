import styled from "styled-components";

function GradientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <div className="children">{children}</div>
      <div className="gradient"></div>
    </Wrapper>
  );
}

export default GradientWrapper;
const Wrapper = styled.div`
  position: relative;

  .children {
    position: relative;
    z-index: 1;
  }

  .gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(#3b2c4d, #a93e74, #131010bb 70%); // change
    filter: blur(16px);
  }
`;
