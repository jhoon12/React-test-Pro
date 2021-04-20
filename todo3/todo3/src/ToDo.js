const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const EDIT = "todos/EDIT";
const REMOVE = "todos/REMOVE";

let id = 0;

const ToDoList = {
    input:'sadas',
    todos:[] 
}
export const change_input = (input)=>({ type:CHANGE_INPUT, input});
export const insert = (text)=>({type:INSERT, todo:{id:id++, text, Edit:true}});
export const edit = (id)=>({type:EDIT, id});
export const remove = (id)=>({type:REMOVE, id});

const todos = (state=ToDoList, action)=>{
    switch(action.type){
        case CHANGE_INPUT:
            return({
                ...state,
                input:action.input
            })
        case INSERT:
            return({
                ...state,
                todos:state.todos.concat(action.todo)
            })
        case EDIT:
            return({
                ...state,
                // todos:state.todos.Edit = true, ㄱ
            })
        case REMOVE:
            return({
                ...state,
                todos:state.todos.filter(todo => todo.id != action.id)
            })
        default:
            return state;
    }
}
export default todos;