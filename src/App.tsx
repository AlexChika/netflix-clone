import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./theme";
import LandingPage from "./pages/LandingPage";
import Carousel from "./components/carousel/Carousel";
import "./index.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage page={page} />
      <Carousel setPage={setPage} open={true} />
    </ThemeProvider>
  );
}

export default App;
