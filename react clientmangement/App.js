// import About from './About/About';
// import './App.css';

// import Home from './Home/Home';
// import Contact from './Contact/Contact';
// // import Example from './Example/Example';
// // import Login from './Login/Login';
// import Login from "./Login/Login";
// import Navbar from './Navbar/Navbar';
// import Register from './Register/Register';
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home/>
//       <About/>
//       <Contact/>
//       <Login/>
//       <Register/>

//     </>
//   );
// }
// export default App;
// 




import Link from "./Link/Link";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Link />
        </BrowserRouter>
        </>
    )
}
export default App;



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { AuthProvider } from "../context/AuthContext";
// import { TicketProvider } from "../context/TicketContext";
// import "./styles/main.css";
// import Link1 from "./Link1/Link1";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthProvider>
//     <TicketProvider>
//       <Link1 />
//     </TicketProvider>
//   </AuthProvider>
// );
// export default App;




