import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";

export interface DeviceType {
  id?: string;
  maThietBi: string;
  tenThietBi: string;
  diaChiIP: string;
  tinhTrangHD: string;
  tinhTrangKN: string;
  dichVu: string;
  loaiThietBi: string;
  tenDangNhap: string;
  matKhau: string;
  key?: string;
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

export const addDevice = createAsyncThunk(
  "device/addDevice",
  async (device: DeviceType) => {
    const docRef = await addDoc(collection(apiFirebase, "device"), device);
    return { ...device, id: docRef.id };
  }
);

export const updateDevice = createAsyncThunk(
  "device/updateDevice",
  async (updatedDevice: any) => {
    const docRef = doc(collection(apiFirebase, "device"), updatedDevice.id);
    await updateDoc(docRef, updatedDevice);
    return updatedDevice;
  }
);

const Device = createSlice({
  name: "device",
  initialState: { dataDevice: [] as DeviceType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataDevice.fulfilled, (state, action) => {
        state.dataDevice = action.payload;
      })
      .addCase(addDevice.fulfilled, (state, action) => {
        state.dataDevice = [...state.dataDevice, action.payload];
      })
      .addCase(updateDevice.fulfilled, (state, action) => {
        const index = state.dataDevice.findIndex(
          (service) => service.id === action.payload.id
        );
        if (index !== -1) {
          state.dataDevice[index] = action.payload;
        }
      });
  },
});

export default Device.reducer;
