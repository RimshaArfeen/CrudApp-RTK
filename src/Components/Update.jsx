
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../Store/Slice/UserSlice';

const Update = () => {
     const { id } = useParams();
     const dispatch =useDispatch();

     const navigate =useNavigate();
     const users = useSelector((state) => state.app.users || []);
     const [updateData, setUpdateData] = useState({});

     useEffect(() => {
         if (id && users.length > 0) {
             const singleUser = users.find((item) => item.id === id);
             if (singleUser) {
                 setUpdateData(singleUser);
                 console.log("Single User Found:", singleUser);
             } else {
                 console.error("User with specified ID not found.");
             }
         }
     }, [id, users]);

     if (!updateData || Object.keys(updateData).length === 0) {
         console.error("User data is not available.");
         return <p>User data is not available.</p>;
     }
     
     
     const newData = (e) => {
          e.preventDefault()
          setUpdateData({...updateData , [e.target.name] : e.target.value})
     }
     console.log(updateData)
     
     const handleUpdate =(e) => {
       e.preventDefault()
       dispatch(updateUser(updateData))
       navigate("/read")
     }
     
     
     return (
          <div className="h-[88vh] flex items-center justify-center bg-gray-100 p-6">
               <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
               onSubmit={handleUpdate}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit User</h2>

                    {/* Name Field */}
                    <div className="mb-4">
                         <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                         <input
                         onChange={newData}
                              type="text"
                              name="name"
                              id="name"
                              value={updateData.name || ''}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                         />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                         <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                         <input
                         onChange={newData}
                              type="email"
                              name="email"
                              id="email"
                              value={updateData.email || ''}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                         />
                    </div>

                    {/* Age Field */}
                    <div className="mb-4">
                         <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">Age</label>
                         <input
                         onChange={newData}
                              type="number"
                              name="age"
                              id="age"
                              value={updateData.age || ''}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                         />
                    </div>

                    {/* Gender Field */}
                    <div className="mb-4">
                         <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                         <select
                          onChange={newData}
                              name="gender"
                              value={updateData.gender || ''}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                         >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                         </select>
                    </div>

                    <button className="w-full bg-violet-700 text-white uppercase font-semibold tracking-wider p-3 rounded">Edit</button>
               </form>
          </div>
     );
}

export default Update;
