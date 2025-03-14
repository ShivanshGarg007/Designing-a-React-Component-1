import React from "react";
import profilePhoto from "../assets/profile.jpg"; // Ensure the image is in the correct path

const Usercard = () => {
  const name = "Shivansh Garg";
  const email = "shivanshgarg007@gmail.com";
  const phone = "889907XXXX";
  const address = "Chitkara University, Baddi";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6 border border-gray-200">
      <img
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-300"
        src={profilePhoto}
        alt="Profile"
      />
      <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-gray-600 text-center">{email}</p>
      <p className="text-gray-600 text-center">{phone}</p>
      <p className="text-gray-600 text-center">{address}</p>
    </div>
  );
};

export default Usercard;
