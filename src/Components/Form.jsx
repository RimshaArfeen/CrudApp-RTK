
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createUser} from "../Store/Slice/UserSlice"
import { useNavigate } from 'react-router-dom';
const Form = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [User, setUser] = useState({})
     const inputHandler = (e) => {
     //   e.preventDefault()
       setUser({...User, [e.target.name] : e.target.value})
       console.log(User)
     }

     const SubmitHandler = (e) => {
      e.preventDefault();
      dispatch(createUser(User)); // Pass User data to the thunk action
      navigate("./read")
    };
     

  return (
    <div className="h-[88vh] flex items-center justify-center bg-gray-100 p-6">
      <form
        
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      onSubmit={SubmitHandler}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center uppercase">
          User Information
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input

          onChange={inputHandler}
            type="text"
            name="name"
            id="name"
            
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input

          onChange={inputHandler}
            type="email"
            name="email"
            id="email"
            
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Age Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">
            Age
          </label>
          <input

          onChange={inputHandler}
            type="number"
            name="age"
            id="age"
            
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Gender Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Gender</label>
          <select
            name="gender"
            onChange={inputHandler}
            
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

      
      <button
      className=' w-full bg-violet-700 text-white uppercase font-semibold tracking-wider p-2 rounded'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
