import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./theme";
import LandingPage from "./pages/LandingPage";
import Carousel from "./components/carousel/Carousel";
import "./index.css";
import { useEffect, useState } from "react";
import getAssets from "./utils/functions/getAssets";
import loadImages from "./utils/functions/loadImages";
const images = getAssets();
const imgSrcs = Object.values(images).filter((src) => src.at(-3) !== "m");

function App() {
  const [page, setPage] = useState(3);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    async function startImageLoading() {
      const allLoaded = await loadImages(imgSrcs);

      if (allLoaded) {
        setShowCarousel(allLoaded);
        return;
      }

      setTimeout(() => {
        startImageLoading();
      }, 20000); // retry after 20 second
    }

    startImageLoading();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage page={page} />
      {showCarousel && <Carousel setPage={setPage} open={true} />}
    </ThemeProvider>
  );
}

export default App;
