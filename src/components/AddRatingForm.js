// import React, { useState } from "react";
// import axios from "axios";

// export default function AddRatingForm({
//   animeData,
//   setUserRating,
// }) {
//   const [rating, setRating] = useState(5);

//   const handleAddRating = async () => {
//     try {
//       const response = await axios.post("http://localhost:3001/ratings", {
//         animeName: animeData.title,
//         rating: rating,
//       });
//       setUserRating(rating);
//     } catch (error) {
//       console.error("Error adding rating:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="rating-container">
//       </div>

//     </div>
//   );
// }
