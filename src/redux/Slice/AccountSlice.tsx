import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";

interface AccountType {
  username: string;
  password: string;
  email: string;
  role: string;
  phoneNumber: string;
  name: string;
}

export const fetchDataAcount = createAsyncThunk<AccountType[]>(
  "adminAccount/fetchDataAcount",
  async () => {
    const quetSnaapDoc = await getDocs(collection(apiFirebase, "adminAccount"));
    return quetSnaapDoc.docs.map((item) => item.data() as AccountType);
  }
);

const Account = createSlice({
  name: "adminAccount",
  initialState: { dataAccount: [] as AccountType[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDataAcount.fulfilled, (state, action) => {
      state.dataAccount = action.payload;
    });
  },
});

export default Account.reducer;
