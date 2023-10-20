import Item from "./components/Item";
import Header from "./components/Header";
import { useState } from "react";
import Photos from "./components/Photos";
import styled from "styled-components";

function App() {
  const [quant, setQuant] = useState(0);
  const [popup, setPopup] = useState(false);
console.log(popup)
  return  (

    <>
     
     <Header quant={quant} setQuant={setQuant} />
     <Photos popup={false} setPopup={setPopup} />
     
     {popup ? <BlackDiv> <Photos popup={true} setPopup={setPopup} /> </BlackDiv> : null}
    
      <Item setQuant={setQuant} />
   
    </>
  )
}

export default App;

const breakpoints = {
  large: '1440px',
};

const BlackDiv= styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    @media (min-width: ${breakpoints.large}) {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        
}
`
