import styled from "styled-components";
import { NetflixLogo } from "../../utils/icons";

type Props = {
  compact?: boolean;
};

const Nav = ({ compact }: Props) => {
  return (
    <Wrapper $compact={compact} className="landing__page__nav">
      <span>
        <NetflixLogo class="logo" color="#e50914" />
      </span>

      <div>Let's Sign in</div>
    </Wrapper>
  );
};

export default Nav;

type WrapperProps = {
  $compact?: boolean;
};

const Wrapper = styled.nav<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 85px;
  width: 100%;

  .logo {
    width: clamp(90px, 8.9vw, 140px);
    cursor: pointer;
  }

  div {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryRed};
    border-radius: 4px;
    padding: 8px 15px;
    color: inherit;
    font-size: clamp(14px, 0.95vw, 16px);
    transition: background-color 0.2s linear;

    &:hover {
      background-color: ${({ theme }) => theme.hoverRed};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 40px 50px;
  }

  @media screen and (min-width: 1200px) {
    padding: ${({ $compact }) => ($compact ? "50px 140px" : "50px 70px")};
  }
`;
