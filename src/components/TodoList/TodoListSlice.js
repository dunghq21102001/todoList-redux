// const initState = [
//     { id: 1, name: 'learnST', completed: false, priority: 'Medium' },
//     { id: 2, name: 'learnST2', completed: true, priority: 'Low' },
// ]


// const todoReducer = (state = initState, action) => {

//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload
//                 ? { ...todo, completed: !todo.completed }
//                 : todo)

//         default:
//             return state
//     }
// }

// export default todoReducer

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'learnST', completed: false, priority: 'Medium' },
        { id: 2, name: 'learnST2', completed: true, priority: 'Low' },
    ],
    reducers: {
        addTodo: (state, action) => {
            // trong redux toolkit khi viết code mutation thì nó sẽ tự chuyển thành code immutability
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }
})