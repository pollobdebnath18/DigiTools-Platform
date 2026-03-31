import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Steps from "./components/Steps/Steps";
import User from "./components/User/User";

function App() {
  return <>
  <NavBar></NavBar>
  <Banner></Banner>
  <User></User>
  <Steps></Steps>
  <Pricing></Pricing>
  <Footer></Footer>
  </>;
}

export default App;
