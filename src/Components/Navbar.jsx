import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchUser } from '../Store/Slice/UserSlice';

const Navbar = () => {
  const [Search, setSearch] = useState("");
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.app.users);

  useEffect(() => {
    dispatch(searchUser(Search));
  }, [Search, dispatch]);

  return (
    <header className="text-gray-100 body-font bg-violet-800">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          {/* Updated icon for CRUD app */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 bg-white p-2 text-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4.4 0-8 2.3-8 5v1h16v-1c0-2.7-3.6-5-8-5z" />
          </svg>
          <span className="ml-3 text-xl">User Management</span>
        </a>

        <div className="relative mx-auto text-black  md:mr-4 mb-4 md:mb-0">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 border-gray-300 bg-transparent hover:bg-white  transition duration-200 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
            <svg
              className="h-4 w-4 fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10,17a7,7,0,1,1,7-7A7,7,0,0,1,10,17Zm0-12A5,5,0,1,0,15,10,5,5,0,0,0,10,5Zm8.293,13.707a1,1,0,0,1-1.414,0L14.586,16.414a1,1,0,0,1,1.414-1.414l2.293,2.293A1,1,0,0,1,18.293,18.707Z" />
            </svg>
          </button>
        </div>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="mr-5 hover:text-gray-900 hover:cursor-pointer uppercase">
            Create User
          </NavLink>
          <NavLink to="/read" className="mr-5 hover:text-gray-900 hover:cursor-pointer uppercase">
            All Users ({allUser.length})
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
