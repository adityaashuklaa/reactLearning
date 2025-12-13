export {createSlice, nanoid} from '@reduxjs/toolkit'; // Nanoid is a method explicitly provided to generate unique ids

const initialState = {
    todos: [{id: 1, text: "Hello Aditya!"}]
}
// Reducer is a functionality and slice is a smaller version of reducer.



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: () => {},
        removeTodo: () => {}
    }
})
