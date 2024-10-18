import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoaded } from "expo-font";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

// TODO firebase de olan tum verileri cekmeyi saglar
export const getAllData = createAsyncThunk("data/getData", async () => {
  const allData = [];

  try {
    const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      allData.push({ ...doc.data(), id: doc.id });
    });
    return allData;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// TODO kullanicinin girdigi veriyi firebase  database e kaydeder
export const saveData = createAsyncThunk("data/saveData", async (value) => {
  try {
    const docRef = await addDoc(collection(db, "todolist"), {
      content: value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw error
  }
});

const initialState = {
  data: [],
  userInput: null,
  isLoading: false,
  isSaved:false,
  error: null,
};


export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserInput:(state,action)=>{
      state.userInput=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(saveData.pending, (state)=>{
        state.isLoading=true
      })
      .addCase(saveData.fulfilled, (state, action)=>{
        state.isLoading=false
        state.isSaved = !state.isSaved
        state.userInput = null
      })
      .addCase(saveData.rejected,(state, action)=>{
        state.isLoading=false
        state.error=action.payload
      })
  },
});

export const {setUserInput} = dataSlice.actions
export default dataSlice.reducer;
