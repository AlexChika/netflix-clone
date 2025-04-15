import LandingPageOne from "../components/landingPageOne/LandingPageOne";
import LandingPageTwo from "../components/landingPageTwo/LandingPageTwo";
import LandingPageThree from "../components/landingPageThree/LandingPageThree";
import LandingPageFour from "../components/landingPageFour/LandingPageFour";
import LandingPageFive from "../components/landingPageFive/LandingPageFive";

const LandingPage = ({ page }: { page: number }) => {
  return (
    <>
      <LandingPageFive />
    </>
  );

  return (
    <>
      {page === 0 && <LandingPageOne />}

      {page === 1 && <LandingPageTwo />}

      {page === 2 && <LandingPageThree />}

      {page === 3 && <LandingPageFour />}

      {page === 4 && <LandingPageFive />}
    </>
  );
};

export default LandingPage;
