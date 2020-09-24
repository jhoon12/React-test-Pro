import React, {useCallback}from "react";
import { useSelector, useDispatch } from "react-redux";
import { change_input, insert, edit, remove } from "./ToDo";
import ToDos from "./ToDos";
import todos from './ToDo'

const ToDoConatainer = () => {
    const {input,todos} = useSelector(({input, todos})=>({input:input, todos: todos}));
    const dispatch = useDispatch();
    const OnChangeInput = useCallback(input=>dispatch(change_input(input)),[]);
    const OnInsert = useCallback(text=>dispatch(insert(text)),[]);
    const OnEdit = useCallback(id =>dispatch(edit(id)),[]);
    const OnRemove = useCallback(id=> dispatch(remove(id)),[]);

  return (
    <>
      
      <ToDos input={input} todos={todos} changeInput={OnChangeInput} insert={OnInsert} edit={OnEdit} remove={OnRemove}></ToDos>
    </>
  );
};
export default ToDoConatainer;
