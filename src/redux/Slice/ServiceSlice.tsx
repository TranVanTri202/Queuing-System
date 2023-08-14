import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";

export interface ServiceType {
  id?: string;
  maDichvu: string;
  tenDichvu: string;
  trangThai: string;
  moTa: string;
}

export const fetchDataService = createAsyncThunk<ServiceType[]>(
  "service/fetchDataDevice",
  async () => {
    const querySnaapDoc = await getDocs(collection(apiFirebase, "service"));
    return querySnaapDoc.docs.map((item) => item.data() as ServiceType);
  }
);

const Service = createSlice({
  name: "service",
  initialState: { dataDevice: [] as ServiceType[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDataService.fulfilled, (state, action) => {
      state.dataDevice = action.payload;
    });
  },
});

export default Service.reducer;
