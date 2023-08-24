import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import apiFirebase from "../../Firebase/FirebaseConfig";
import { DiaryType } from "../../share/diaryInterface";

export const fetDataDiary = createAsyncThunk<DiaryType[]>(
  "Diary/fetDataDiary",
  async () => {
    const docRef = await getDocs(collection(apiFirebase, "Diary"));
    return docRef.docs.map(
      (item) => ({ id: item.id, ...item.data() } as DiaryType)
    );
  }
);

export const addDataDiary = createAsyncThunk(
  "device/addDataDiary",
  async (diary: DiaryType) => {
    const docRef = await addDoc(collection(apiFirebase, "Diary"), diary);
    return { ...diary, id: docRef.id };
  }
);

const Diary = createSlice({
  name: "Diary",
  initialState: { dataDiary: [] as DiaryType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetDataDiary.fulfilled, (state, action) => {
        state.dataDiary = action.payload;
      })
      .addCase(addDataDiary.fulfilled, (state, action) => {
        state.dataDiary = [...state.dataDiary, action.payload];
      });
  },
});

export default Diary.reducer;
