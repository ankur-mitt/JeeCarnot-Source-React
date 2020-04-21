import React from "react";
/**
 * bulma frontend css framework
 */
import 'bulma';
import "./App.css";

/**
 * import react-components from ./components
 */
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import Mlanding from "./components/Mlanding";
import ImportantMessage from "./components/ImportantMessage";
import Cards from "./components/Cards";
import MentorProfiles from "./components/MentorProfiles";
import Rlanding from "./components/Rlanding";
import RegisterationForm from "./components/RegisterationForm";
import Footer from "./components/Footer";
import EndBar from "./components/EndBar";

/**
 * main react-app component
 */
function App() {
  return (
    <div className="App">
      <Preloader />
      <Navbar />
      <Mlanding />
      <Divider />
      <ImportantMessage />
      <Divider />
      <Cards />
      <Divider />
      <MentorProfiles />
      <Divider />
      <Rlanding />
      <Divider />
      <RegisterationForm />
      <Divider />
      <Footer />
      <EndBar />
    </div>
  );
}

export default App;