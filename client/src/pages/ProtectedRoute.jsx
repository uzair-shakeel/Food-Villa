// import React, { useEffect } from "react";
// import { useUserContext } from "../context/userContext";
// import axios from "axios";
// import { Navigate } from "react-router-dom"; // Import Navigate

// export default function ProtectedRoute({ children }) {
//   const [user, setUser] = useUserContext();

//   const getUser = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/user/getUser",
//         {
//           token: localStorage.getItem("token"),
//         },
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );

//       if (response.data.success) {
//         setUser(response.data.data);
//       } else {
//         // Use Navigate directly for redirection
//         return <Navigate to="/login" />;
//         // Note: This assumes your route structure is defined in the parent component.
//         // If you're using a different routing library, adjust this accordingly.
//       }
//     } catch (error) {
//       console.error(error);
//       localStorage.clear();
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   }, [user]);

//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }
