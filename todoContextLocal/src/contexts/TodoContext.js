import { createContext, useContext } from "react";

export const TodoContext = createContext({})

export const useTodo = () => {
    return useContext(TodoContext) // Whenever useContext is used, you need to pass on the context.
}

export const TodoProvider = TodoContext.Provider