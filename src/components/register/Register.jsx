// "use client";
// import React, { useState } from "react";
// import "../register/Register.css";
// import { useRouter } from "next/navigation";

// const Register = () => {
//   const initialState = {
//     username: "mor_2314",
//     password: "83r5^_",
//   };
//   const [data, setData] = useState(initialState);
//   const router = useRouter();

//   const handleChange = (el) => {
//     setData((prev) => ({
//       ...prev,
//       [el.target.name]: el.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("https://fakestoreapi.com/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: data.username,
//         password: data.password,
//       }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       if (data.token) {
//         // toast.success("Login successful!");
//         router.push("/admin");
//       } else {
//         // toast.error("Login failed");
//         console.log("error1");
//       }
//     } else {
//       // toast.error("An error occurred");
//       console.log("error2");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="container">
//         <div className="register">
//           {Object.keys(initialState).map((key, index) => (
//             <div className="user" key={index}>
//               <label htmlFor={key}>{key}</label>
//               <input
//                 required
//                 onChange={handleChange}
//                 value={data[key]}
//                 type={key === "password" ? "password" : "text"}
//                 id={key}
//                 placeholder={`Your ${key}...`}
//                 name={key}
//               />
//             </div>
//           ))}
//           <button type="submit" className="user_submit">
//             LOGIN
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Register;

"use client";
import React, { useState } from "react";
import "../register/Register.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const initialState = {
    username: "mor_2314",
    password: "83r5^_",
  };
  const [data, setData] = useState(initialState);
  const router = useRouter();

  const handleChange = (el) => {
    setData((prev) => ({
      ...prev,
      [el.target.name]: el.target.value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("https://fakestoreapi.com/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: data.username,
  //       password: data.password,
  //     }),
  //   });
  //   if (res.ok) {
  //     const responseData = await res.json();
  //     if (responseData.token) {
  //       localStorage.setItem("token", responseData.token);
  //       // toast.success("Login successful!");
  //       router.push("/admin");
  //     } else {
  //       // toast.error("Login failed");
  //       console.log("Login failed: No token received");
  //     }
  //   } else {
  //     // toast.error("An error occurred");
  //     console.log("Login failed: Network error");
  //   }
  // };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("x-auth-token", data.token);
      router.push("/admin");
    } else {
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="register">
          {Object.keys(initialState).map((key, index) => (
            <div className="user" key={index}>
              <label htmlFor={key}>{key}</label>
              <input
                required
                onChange={handleChange}
                value={data[key]}
                type={key === "password" ? "password" : "text"}
                id={key}
                placeholder={`Your ${key}...`}
                name={key}
              />
            </div>
          ))}
          <button type="submit" className="user_submit">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
