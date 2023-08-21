import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";

export interface AccountType {
  id?: string;
  username: string;
  password: string;
  email: string;
  role: string;
  phoneNumber: string;
  name: string;
  img?: string;
  trangThai: string;
}

export const fetchDataAcount = createAsyncThunk<AccountType[]>(
  "adminAccount/fetchDataAcount",
  async () => {
    const quetSnaapDoc = await getDocs(collection(apiFirebase, "adminAccount"));
    return quetSnaapDoc.docs.map(
      (item) => ({ id: item.id, ...item.data() } as AccountType)
    );
  }
);

export const addAccount = createAsyncThunk(
  "adminAccount/addAccount",
  async (account: AccountType) => {
    const docRef = await addDoc(
      collection(apiFirebase, "adminAccount"),
      account
    );
    return { ...account, id: docRef.id };
  }
);

const Account = createSlice({
  name: "adminAccount",
  initialState: { dataAccount: [] as AccountType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataAcount.fulfilled, (state, action) => {
        state.dataAccount = action.payload;
      })
      .addCase(addAccount.fulfilled, (state, action) => {
        const index = state.dataAccount.findIndex(
          (account) => account.id === action.payload.id
        );
        if (index !== -1) {
          state.dataAccount[index] = action.payload;
        }
      });
  },
});

export default Account.reducer;
