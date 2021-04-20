import React from 'react';

const ToDOsInput = ({input,changeInput, insert})=>{
  const ChangeInput = (e)=>{
    changeInput(e.target.value);
  }
  const addToDo = ()=>{
    insert(input);
    changeInput('');
  }
  return(
    <>
    <input placeholder="할 일" onChange={ChangeInput} value={input}></input>
    <button onClick={addToDo}>추가</button>

    </>
  )
}

const ToDos = ({input, todos, changeInput, insert, edit, remove})=> {
  return (
    <>
      <ToDOsInput input={input} changeInput={changeInput} insert={insert}></ ToDOsInput>
      <ToDoItem todos={todos} remove={remove} edit={edit}></ToDoItem>
    </>
  );
}

export default ToDos;

const ToDoItem = ({todos,remove,edit})=>{
  const RemoveToDo = (id)=>{
    remove(id);
  }
  const EditToDo = (id)=>{
    edit(id);
  }
  return(
  <ul>
    {todos.map(todo=>(
    <>
    {(todo.edit?<input></input>:<li>{todo.text}</li>)}
    <button onClick={()=>RemoveToDo(todo.id)} >삭제</button>
    {/* <button onClick={()=>EditToDo(todo.id)}>수정</button> */}
    </>
    ))}
  </ul>
  )
}

