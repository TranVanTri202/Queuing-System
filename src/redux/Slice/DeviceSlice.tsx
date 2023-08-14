import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";

export interface DeviceType {
  id: string;
  maThietBi: string;
  tenThietBi: string;
  diaChiIP: string;
  tinhTrangHD: string;
  tinhTrangKN: string;
  dichVu: string;
}

export const fetchDataDevice = createAsyncThunk<DeviceType[]>(
  "device/fetchDataDevice",
  async () => {
    const querySnaapDoc = await getDocs(collection(apiFirebase, "device"));
    return querySnaapDoc.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as DeviceType)
    );
  }
);

export const detailDevice = createAsyncThunk<DeviceType, string>(
  "device/detailDevice",
  async (id) => {
    const querySnapDoc = await getDocs(
      query(collection(apiFirebase, "device"), where("id", "==", id))
    );
    const deviceData = querySnapDoc.docs[0].data() as DeviceType;
    return deviceData;
  }
);

const Device = createSlice({
  name: "device",
  initialState: { dataDevice: [] as DeviceType[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDataDevice.fulfilled, (state, action) => {
      state.dataDevice = action.payload;
    });
  },
});

export default Device.reducer;
