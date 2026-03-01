// import Contact from "../Contact/Contact";
// import Home from "../Home/Home";
// import About from "../About/About";
// import "./Navbar.css";
// function Navbar(){
//     return(
//         <>
//         <nav>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//         <Home/>
//         <About/>
//         <Contact/>
//         </>
//     );
// }

// // import { useState } from "react";

// // // export default Navbar;
// // function Navbar(){
// //     let [login,setlogin]=useState("");
// //     return (
// //         <nav>
// //         {login?(
// //             <>
// //             <a>Home</a>{" | "}
// //             <a>About</a>{" | "}
// //             <a>Contact</a>{" | "}
// //             <button onClick={()=>setlogin(false)}>Logout</button>
// //             </>
// //         ):(
// //             <button onClick={()=>setlogin(true)}>Login</button>)}
// //         </nav>
        
// //     );
// // }
// // function Navbar({students}){
// //     return(
// //         <>
// //         <h2>Home Component</h2>
// //         <ul>
// //             {students.map((stu,index)=>(
// //                 <li key={index}>
// //                     Name:{stu.name},
// //                     Age:{stu.age},
// //                     course:{stu.course}
// //                 </li>
// //             ))}
// //         </ul>
// //         </>
// //     )
// // }
// export default Navbar;

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>BookStore</h2>
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;


       