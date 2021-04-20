import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPlus, createMinus } from "./counter"; //액션 생성함수
import App from "./App";

const Container = () => {
  const store = useSelector(store => store.counterReducer);//default값 리턴하기 때문에 현재 스토어의 state값 참조 가능
  const dispatch = useDispatch();
  const onPlus = useCallback(() => dispatch(createPlus()), []);
  const onMinus = useCallback(() => dispatch(createMinus()), []);
  console.log(store);
  return <App onPlus={onPlus} onMinus={onMinus} value={store.value}></App>;
};
export default Container;
