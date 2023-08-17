import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";

export interface ProvideNumberType {
  id?: string;
  stt: string;
  tenKhachHang: string;
  tenDichVu: string;
  thoiGianBatDau: string;
  thoiGianHetHan: string;
  trangThai: string;
  nguonCap: string;
}

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

const ProvideNumber = createSlice({
  name: "ProvideNumber",
  initialState: { dataProvide: [] as ProvideNumberType[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetDataProvideNumber.fulfilled, (state, action) => {
      state.dataProvide = action.payload;
    });
  },
});

export default ProvideNumber.reducer;
