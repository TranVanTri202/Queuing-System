import { configureStore } from "@reduxjs/toolkit";
import Account from "./Slice/AccountSlice";
import Device from "./Slice/DeviceSlice";
import Service from "./Slice/ServiceSlice";
const store = configureStore({
  reducer: {
    Account: Account,
    Device: Device,
    Service: Service,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>; // Thêm dòng này để xác định loại RootState
export type AppDispatch = typeof store.dispatch; // Thêm dòng này để xác định loại AppDispatch
