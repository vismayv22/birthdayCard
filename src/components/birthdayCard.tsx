import { useState } from "react";
import Confetti from "react-confetti";

const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
    {showMessage && (<Confetti width={window.innerWidth} height={window.innerHeight}/>)}
    <div className="relative flex flex-col items-center p-6 bg-yellow-400 border-4 border-red-500 shadow-2xl rounded-3xl w-80 text-center">
      {/* Dhol Icon for Punjabi Touch */}
      <img
        src="assets/dhol.png"
        alt="Dhol"
        className="w-16 h-16 animate-bounce"
        />

      {/* Image */}
      <img
        src="assets/ambar.jpg"
        alt="Birthday"
        className="w-32 h-32 rounded-full shadow-md border-4 border-white mt-3 object-cover object-top"
        />

      {/* Birthday Message in Punjabi */}
      <h2 className="mt-4 text-2xl font-bold text-red-800">
        🎉 ਜਨਮਦਿਨ ਮੁਬਾਰਕ! 🎂
      </h2>
      <p className="mt-2 text-green-900">
        Wishing you a day full of joy and love!
      </p>

      {/* Surprise Button */}
      <button
        onClick={() => setShowMessage(!showMessage)}
        className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition cursor-pointer"
        >
        {showMessage ? "ਬੰਦ ਕਰੋ 🎁" : "ਤੋਹਫ਼ਾ ਖੋਲ੍ਹੋ 🎁"}
      </button>

      {/* Surprise Message */}
      {showMessage && (
        <>
          <p className="mt-4 text-lg font-semibold text-purple-700 animate-fade-in">
            💃 Balle Balle! 💃
            <br />
            Happy Birthday Ambar! May your year be full of peace, joy and success! 🎊
          </p>
        </>
      )}
    </div>
    </>
  );
};

export default BirthdayCard;
