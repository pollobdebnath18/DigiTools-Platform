import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Steps from "./components/Steps/Steps";
import ToolsContainer from "./components/ToolsContainer/ToolsContainer";
import User from "./components/User/User";
import ToolsTab from "./components/ToolsTab/ToolsTab";
import Cart from "./components/Cart/Cart";

const cardResponse = async () => {
  const res = await fetch("/card.json");
  return res.json();
};
const cardDada = cardResponse();
// console.log(cardDada);
function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);
  // console.log(carts)

  // const cardDada = cardResponse();
  // console.log(cardDada);
  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <User></User>
      <ToolsTab activeTab={activeTab} setActiveTab={setActiveTab} carts={carts}></ToolsTab>
      {activeTab === "Products" && (
        <ToolsContainer
          carts={carts}
          setCarts={setCarts}
          cardData={cardDada}
        ></ToolsContainer>
      )}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
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
