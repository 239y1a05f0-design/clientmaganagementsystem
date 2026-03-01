// function Login(){
//         function add(){
//             const a=document.getElementById("num1").value;
//             const b=document.getElementById("num2").value;
//             const sum=Number(a)+Number(b);
//             document.getElementById("result").innerText=sum;
//             console.log(sum)
//         }
//         return ( <div>
//             <h1>Using jsx expression</h1>
//             <input type="number" id="num1"/><br></br>
//             <input type="number" id="num2"/><br></br>
//             <button onClick={add}>Add</button>
//             <h2 id="result"></h2>
//         </div>
//         );
// }

// import { useState } from "react";


// function Login(){
//     let [email,setEmail]=useState("");
//     let [password,setPassword]=useState("");
//     function validate(e){
//         e.preventDefault();
//         if (email===""){
//             alert("Email is required");
//         }else if (password===""){
//             alert("Password is required");
//         }else {
//             alert("Login Succesfully");
//         }
//     }
//     return (
//         <>
//         <div>
//             <h1>Using jsx expression</h1>             
//             <input type="email" placeholder="enter ur email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
//             <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br></br>            
//             <button onSubmit={validate}>submit</button>

//         </div>
//         </>
//     );
// }
// export default Login;
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // you can add validation later
    navigate("/"); // redirect to Home page
  };

  return (
    <section className="login">
      <h2>Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      
      <button onClick={handleLogin}>Login</button>

      <p className="signup-text">
        Don't have an account? <span>Sign up</span>
      </p>
    </section>
  );
}

export default Login;

