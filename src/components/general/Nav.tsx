import styled from "styled-components";
import { NetflixLogo } from "../../utils/icons";

type Props = {
  compact?: boolean;
  theme?: "red" | "white";
};

const Nav = ({ compact, theme = "red" }: Props) => {
  return (
    <Wrapper $theme={theme} $compact={compact} className="landing__page__nav">
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
  $theme?: "red" | "white";
};

const Wrapper = styled.nav<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 85px;
  width: 100%;

  .logo {
    width: clamp(90px, 8.95vw, 160px);
    cursor: pointer;
  }

  div {
    cursor: pointer;
    color: ${({ theme, $theme }) =>
      $theme === "red" ? theme.primaryWhite : theme.primaryBlack};
    background-color: ${({ theme, $theme }) =>
      $theme === "red" ? theme.primaryRed : theme.primaryWhite};
    border-radius: 4px;
    padding: 8px 15px;
    font-size: clamp(14px, 0.95vw, 16px);
    transition: background-color 0.2s linear;

    &:hover {
      background-color: ${({ theme, $theme }) =>
        $theme === "red" ? theme.hoverRed : theme.hoverWhite};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 40px 50px;
  }

  @media screen and (min-width: 1200px) {
    padding: ${({ $compact }) => ($compact ? "50px 140px" : "50px 70px")};
  }
`;
