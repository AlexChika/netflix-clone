import LandingPageOne from "../components/landingPageOne/LandingPageOne";
import LandingPageTwo from "../components/landingPageTwo/LandingPageTwo";
import LandingPageThree from "../components/landingPageThree/LandingPageThree";

const LandingPage = ({ page }: { page: number }) => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNum((prevNum) => {
  //       return prevNum + 1 > 2 ? 0 : prevNum + 1;
  //     });
  //   }, 6000);

  //   const stopInterval = () => {
  //     // clearInterval(interval);
  //   };

  //   window.addEventListener("click", stopInterval);

  //   return () => {
  //     clearInterval(interval);
  //     window.removeEventListener("click", stopInterval);
  //   };
  // }, []);

  return (
    <>
      {page === 0 && <LandingPageOne />}

      {page === 1 && <LandingPageTwo />}

      {page === 2 && <LandingPageThree />}
    </>
  );
};

export default LandingPage;
