import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles"
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Message from "./components/Message";
import Footer from "./components/Footer";


const App = () => {
  return (
    <> 
           <Navbar />
           <Profiles />
          <AboutMe />
          <Works />
          <Message />
          <Footer />

    </>
  );
};

export default App;