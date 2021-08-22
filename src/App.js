import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import NavbarSmall from "./Components/Layout/NavbarSmall";
import Footer from "./Components/Layout/Footer";
import Media from "./Components/Media/Media";

function App() {
  return (
    <>
      <Navbar />
      <NavbarSmall />

      <Media />

      <Footer />
    </>
  );
}

export default App;
