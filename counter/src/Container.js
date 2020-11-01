import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {createPlus, createMinus} from './counter';//액션 생성함수
import App from './App';

const Container = ()=>{
    const store = useSelector(store=>store.counterReducer);
    const dispatch = useDispatch();
    const onPlus = useCallback(()=>dispatch(createPlus()),[]);
    const onMinus = useCallback(()=>dispatch(createMinus()),[]);
    console.log(store);
    return(
        <App onPlus={onPlus} onMinus={onMinus} value={store.value}></App>
    )
}
export default Container;