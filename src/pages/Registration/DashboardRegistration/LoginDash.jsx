// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./login.module.css"; // Create this CSS module

// const LoginDash = () => {
//   const [formData, setFormData] = useState({
//     emailId: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://verbiq-backend1-1.onrender.com/login/userLogin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
// //  console.log("Login response:", result); 
//       if (response.ok) {
//         const { token, role , emailId ,fullname ,companyName } = result;
//         localStorage.setItem("token", token);
//         localStorage.setItem("role", role);
//         localStorage.setItem("emailId", emailId);
//         localStorage.setItem("fullname", fullname);
//         localStorage.setItem("companyName",companyName);
//         console.log(result);
//         alert("Login successful!");
//         navigate("/dashboard"); 
//       } else {
//         alert(result.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className={styles.pageWrapper}>
//       <form onSubmit={handleSubmit} className={styles.loginForm}>
//         <h2>Login</h2>
//         <input
//           type="email"
//           name="emailId"
//           placeholder="Email ID"
//           value={formData.emailId}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginDash;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const LoginDash = () => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://verbiq-backend1-1.onrender.com/login/userLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Login response:", result); // ✅ Logs entire response to the console

      if (response.ok) {
        const { token, role, emailId, fullname, companyName } = result;

        // ✅ Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("emailId", emailId);
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("companyName", companyName || ""); // ✅ fallback to empty string

        alert("Login successful!");

        // ✅ Redirect based on role
        if (role?.toLowerCase() === "candidate") {
          navigate("/candidatedashboard");
        } else if (role?.toLowerCase() === "company") {
          navigate("/companydashboard");
        } else {
          alert("Unknown user role. Cannot redirect.");
          console.error("Unexpected role:", role); // ✅ Log for debugging
        }
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        <input
          type="email"
          name="emailId"
          placeholder="Email ID"
          value={formData.emailId}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginDash;