import React from 'react';
import { useSelector } from 'react-redux';

const ModalCard = ({ id, PopupCard, setPopupCard }) => {
  const allUser = useSelector((state) => state.app.users);
  const userData = allUser.filter((item) => item.id === id);

  const closeBtn = () => {
    setPopupCard(false);
  };

  return (
    <div className="container px-5 mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="fixed z-20 w-[90%] md:w-1/3 mx-auto rounded text-center py-7 bg-gray-50">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-red-800 hover:text-gray-50 hover:bg-red-800 transition duration-300 p-1"
            onClick={closeBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Card Content */}
          {userData.length > 0 && (
            <div>
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-indigo-700 text-gray-50 mx-auto">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 capitalize text-gray-900 text-lg">
                  {userData[0].name}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <span className="text-base">Email: {userData[0].email}</span>
                <span className="text-base">Age: {userData[0].age}</span>
                <span className="text-base">Gender: {userData[0].gender}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
