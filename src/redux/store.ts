import { configureStore } from "@reduxjs/toolkit";
import Account from "./Slice/AccountSlice";
import Device from "./Slice/deviceSlice";
import Service from "./Slice/ServiceSlice";
import ProvideNumber from "./Slice/ProvideNumberSlice";
import Diary from "./Slice/DiarySlice";
const store = configureStore({
  reducer: {
    Account: Account,
    Device: Device,
    Service: Service,
    Provide: ProvideNumber,
    Diary: Diary,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>; // Thêm dòng này để xác định loại RootState
export type AppDispatch = typeof store.dispatch; // Thêm dòng này để xác định loại AppDispatch
