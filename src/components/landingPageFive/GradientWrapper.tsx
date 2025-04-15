import styled from "styled-components";

function GradientWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default GradientWrapper;
const Wrapper = styled.div``;
