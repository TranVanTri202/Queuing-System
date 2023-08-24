import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";
import { AccountType } from "../../share/accountInterface";

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

export const updateAccount = createAsyncThunk(
  "adminAccount/updateAccount",
  async (account: any) => {
    const docRef = doc(collection(apiFirebase, "adminAccount"), account.id);
    await updateDoc(docRef, account);
    return account;
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
      .addCase(updateAccount.fulfilled, (state, action) => {
        const index = state.dataAccount.findIndex(
          (account) => account.id === action.payload.id
        );
        if (index !== -1) {
          state.dataAccount[index] = action.payload;
        }
      })
      .addCase(addAccount.fulfilled, (state, action) => {
        state.dataAccount = [...state.dataAccount, action.payload];
      });
  },
});

export default Account.reducer;
