import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
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
    return querySnaapDoc.docs.map(
      (item) => ({ id: item.id, ...item.data() } as ServiceType)
    );
  }
);

export const addService = createAsyncThunk(
  "service/addService",
  async (service: ServiceType) => {
    const docRef = await addDoc(collection(apiFirebase, "service"), service);
    return { ...service, id: docRef.id };
  }
);

export const updateService = createAsyncThunk(
  "service/updateService",
  async (service: any) => {
    const docRef = doc(collection(apiFirebase, "service"), service.id);
    await updateDoc(docRef, service);
    return service;
  }
);
const Service = createSlice({
  name: "service",
  initialState: { dataDevice: [] as ServiceType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataService.fulfilled, (state, action) => {
        state.dataDevice = action.payload;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.dataDevice = [...state.dataDevice, action.payload];
      })
      .addCase(updateService.fulfilled, (state, action) => {
        const index = state.dataDevice.findIndex(
          (service) => service.id === action.payload.id
        );
        if (index !== -1) {
          state.dataDevice[index] = action.payload;
        }
      });
  },
});

export default Service.reducer;
