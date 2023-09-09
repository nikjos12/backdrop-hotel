import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Tours from "./component/Tours";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
