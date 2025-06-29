
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserProfil } from "../../api/api";

interface UserState {
    firstName: string;
    lastName: string;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
  interface UserData {
    firstName: string;
    lastName: string;
  }

  const initialState: UserState = {
    firstName: "",
    lastName: "",
    status: "idle",
    error: null,
  };
export const fetchUser = createAsyncThunk<UserData, string, { rejectValue: string }>(
  "user/fetchUser",
  async (token: string, thunkAPI) => {
    try {
      const data = await getUserProfil(token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Erreur lors de la récupération du profil.");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.firstName = "";
      state.lastName = "";
    },
    updateNames: (state, action: PayloadAction<UserData>) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.status = "succeeded";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { clearUser, updateNames } = userSlice.actions;
export default userSlice.reducer;
