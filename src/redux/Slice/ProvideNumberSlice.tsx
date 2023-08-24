import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";
import { ProvideNumberType } from "../../share/provideInterface";

export const fetDataProvideNumber = createAsyncThunk<ProvideNumberType[]>(
  "ProvideNumber/fetDataProvideNumber",
  async () => {
    const querySnaapDoc = await getDocs(
      collection(apiFirebase, "ProvideNumber")
    );
    return querySnaapDoc.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as ProvideNumberType)
    );
  }
);

export const addProvideNumer = createAsyncThunk(
  "ProvideNumber/addProvideNumer",
  async (provide: ProvideNumberType) => {
    const docRef = await addDoc(
      collection(apiFirebase, "ProvideNumber"),
      provide
    );
    return { ...provide, id: docRef.id };
  }
);

const ProvideNumber = createSlice({
  name: "ProvideNumber",
  initialState: { dataProvide: [] as ProvideNumberType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetDataProvideNumber.fulfilled, (state, action) => {
        state.dataProvide = action.payload;
      })
      .addCase(addProvideNumer.fulfilled, (state, action) => {
        state.dataProvide = [...state.dataProvide, action.payload];
      });
  },
});

export default ProvideNumber.reducer;
