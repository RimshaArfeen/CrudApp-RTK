import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUser, deleteUser } from '../Store/Slice/UserSlice';
import ModalCard from './ModalCard';
import { NavLink } from 'react-router-dom';

const ReadUser = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [radioBtn, setRadioBtn] = useState("All"); // Set default to "All"
  const [Id, setId] = useState();
  const [PopupCard, setPopupCard] = useState(false);

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="w-full px-5 py-6 mx-auto flex flex-col justify-start items-center">
        <h1 className='uppercase font-bold text-3xl tracking-wider pb-6 text-gray-900 text-center'>All Users</h1>
        
        {/* Gender Filter Radio Buttons */}
        <div className="flex justify-center  mb-7 space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="All"
              checked={radioBtn === "All"}
              onChange={(e) => setRadioBtn(e.target.value)}
            />
            <span>All</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={radioBtn === "Male"}
              onChange={(e) => setRadioBtn(e.target.value)}
            />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={radioBtn === "Female"}
              onChange={(e) => setRadioBtn(e.target.value)}
            />
            <span>Female</span>
          </label>
        </div>

        {/* Modal Popup */}
        {PopupCard && <ModalCard id={Id} PopupCard={PopupCard} setPopupCard={setPopupCard} />}

        {/* User Cards */}
        <div className={`${PopupCard ? "blur-lg h-[90vh] overflow-hidden" : "blur-0"} flex flex-wrap  -m-4`}>
          {users &&
            users
              .filter((item) => {
                if (!searchData) return true;
                return item.name.toLowerCase().includes(searchData.toLowerCase());
              })
              .filter((item) => {
                if (radioBtn === "All") return true;
                return item.gender === radioBtn;
              })
              .map((item, index) => (
                <div key={index} className="p-4 w-[97%] mx-auto md:w-1/3 xl:w-1/4">
                  <div className="h-fit bg-gray-200 bg-opacity-75 px-8 py-7 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 capitalize">{item.name}</h1>
                    <p className="leading-relaxed mb-3 font-medium uppercase">Email: <span className="leading-relaxed mb-3 lowercase font-normal">{item.email}</span></p>
                    <p className="leading-relaxed mb-3 font-medium uppercase">Gender: <span className="leading-relaxed mb-3 capitalize font-normal">{item.gender}</span></p>
                    <p className="leading-relaxed mb-3 font-medium uppercase">Age: <span className="leading-relaxed mb-3 capitalize font-normal">{item.age}</span></p>
                    <div className='flex w-full justify-around items-center'>
                      <a
                        className="text-indigo-500 inline-flex items-center hover:cursor-pointer"
                        onClick={() => {
                          setId(item.id);
                          setPopupCard(true);
                        }}
                      >
                        View User
                      </a>
                      <NavLink to={`/edit/${item.id}`} className="text-indigo-500 inline-flex items-center hover:cursor-pointer">
                        Edit
                      </NavLink>
                      <a
                        className="text-indigo-500 inline-flex items-center hover:cursor-pointer"
                        onClick={() => dispatch(deleteUser(item.id))}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ReadUser;
