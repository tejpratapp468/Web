import React from "react";
import MainRouter from "./MainRouter.js";
import { BrowserRouter } from "react-router-dom";
import Slide1 from './images/Slide1.png';


const App = () => (
  <BrowserRouter>
      <MainRouter />
  </BrowserRouter>
);

// const App = () => (
//   <ParallaxProvider>
//       <MainRouter />
//   </ParallaxProvider>
// );

// function App() {
//   return (
//     <div className="App">
//         <img src={Slide1} className="App-logo" alt="logo" />
//     </div>
//   );
// }

export default App;
