import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users:[],
  isLoading:true,
  error: '',
}

export const getUsers = createAsyncThunk('user/getUsers',async (name,thunkAPI) => {
  try{
    const response = await fetch("https://randomuser.me/api/?results=5");
    return response.json();
  }
  catch (error){
    return thunkAPI.rejectWithValue("error error error");
  }
});

export const usersSlice = createSlice({
  name:'users',
  initialState,
  extraReducers:(builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      return ({
        ...state,
        isLoading:false,
        users:action.payload.results,
      });
    })
    .addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;