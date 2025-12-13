import { nanoid } from '@reduxjs/toolkit';

export {createSlice, nanoid} from '@reduxjs/toolkit'; // Nanoid is a method explicitly provided to generate unique ids

const initialState = {
    todos: [{id: 1, text: "Hello Aditya!"}]
}
// Reducer is a functionality and slice is a smaller version of reducer.



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { // State contains the current state and action contains the data.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }, // Filter always returns TRUE values.
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
