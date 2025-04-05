import { useEffect, useState } from "react";
// import LandingPageOne from "../components/landingPageOne/LandingPageOne";
import LandingPageTwo from "../components/landingPageTwo/LandingPageTwo";

const LandingPage = () => {
  const [, setNum] = useState(Math.floor(Math.random() * 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prevNum) => {
        return prevNum + 1 > 2 ? 0 : prevNum + 1;
      });
    }, 6000);

    const stopInterval = () => {
      // clearInterval(interval);
    };

    window.addEventListener("click", stopInterval);

    return () => {
      clearInterval(interval);
      window.removeEventListener("click", stopInterval);
    };
  }, []);

  return (
    <>
      <LandingPageTwo />
    </>
  );

  //   return (
  //     <>
  //       {num === 0 && <LandingPageOne />}

  //       {num === 1 && <LandingPageTwo />}

  //       {num === 2 && <LandingPageThree />}
  //     </>
  //   );
};

export default LandingPage;
