import LandingPageOne from "../components/landingPageOne/LandingPageOne";
import LandingPageTwo from "../components/landingPageTwo/LandingPageTwo";
import LandingPageThree from "../components/landingPageThree/LandingPageThree";
import LandingPageFour from "../components/landingPageFour/LandingPageFour";

const LandingPage = ({ page }: { page: number }) => {
  return (
    <>
      <LandingPageTwo />
    </>
  );

  return (
    <>
      {page === 0 && <LandingPageOne />}

      {page === 1 && <LandingPageTwo />}

      {page === 2 && <LandingPageThree />}
    </>
  );
  return (
    <>
      <LandingPageFour />
    </>
  );
};

export default LandingPage;
