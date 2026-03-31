import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Steps from "./components/Steps/Steps";
import ToolsContainer from "./components/ToolsContainer/ToolsContainer";
import User from "./components/User/User";

const cardResponse = async () => {
  const res = await fetch("/card.json");
  return res.json();
};
const cardDada=cardResponse();
console.log(cardDada)
function App() {
  // const cardDada = cardResponse();
  // console.log(cardDada);
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <User></User>
      <ToolsContainer cardData={cardDada}></ToolsContainer>
      {/* <Suspense fallback='loding...'>
        <ToolsContainer cardDada={cardDada}></ToolsContainer>
      </Suspense> */}

      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}

export default App;
