import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

// Create User
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("https://66d902a84ad2f6b8ed533a0a.mockapi.io/CrudApp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Read User
export const readUser = createAsyncThunk(
  "readUser",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch("https://66d902a84ad2f6b8ed533a0a.mockapi.io/CrudApp");
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//Delete User
export const deleteUser = createAsyncThunk("deleteUser" , async(id, {rejectWithValue}) => {

     const response = await fetch (`https://66d902a84ad2f6b8ed533a0a.mockapi.io/CrudApp/${id}`,
      {method: "DELETE"}
     )
     try {
          const result = await response.json()
          console.log(result);
          return result;
          
     } catch (error) {
          return rejectWithValue(error.message)
     }
})

//Update User
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://66d902a84ad2f6b8ed533a0a.mockapi.io/CrudApp/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData : [],

  },
  reducers: {
    searchUser : (state, action) => {
      state.searchData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Read User Cases
      .addCase(readUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  
      // Delete User Cases
        .addCase(deleteUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.loading = false;
          const {id} = action.payload;
          console.log("deleted user", action.payload);

          if (id) {
            state.users = state.users.filter((item) => item.id !== id)
          }
        })
        .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        
        //Edit User Case
        .addCase(updateUser.pending, (state) => {
          state.loading = true
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = state.users.map((item) => 
              item.id === action.payload.id ? action.payload : item
          );
      })
      
        .addCase(updateUser.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
        })

    },
});

export default userDetail.reducer;
export const {searchUser} = userDetail.actions;