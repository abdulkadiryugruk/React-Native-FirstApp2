import * as React from "react";
import RootNavigation from "../../src/navigation/RootNavigation";
import { Provider, useDispatch,useSelector } from "react-redux";
import { store } from "../../src/redux/store";
import { useEffect } from "react";
import { getAllData } from "@/src/redux/dataSlice";
import { Loading } from "@/src/components";


const AppWrapper = ()=>{
  return(
    <Provider store={store}>
      <App/>
    </Provider>

    
  )
}

const App = () => {
const dispatch = useDispatch()
const {isLoading, isSaved} = useSelector(state => state.data);

useEffect(()=>{
  dispatch(getAllData())
},[isSaved])

if(isLoading) return <Loading/>


return (
      <RootNavigation /> 
  );
};
export default AppWrapper;
