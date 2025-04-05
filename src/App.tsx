import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./theme";
import LandingPage from "./pages/LandingPage";
import Carousel from "./components/carousel/Carousel";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />;
      <Carousel />
    </ThemeProvider>
  );
}

export default App;
