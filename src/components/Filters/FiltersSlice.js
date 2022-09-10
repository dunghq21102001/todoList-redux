// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }


// const filtersReducer = (state = initState, action) => {

//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state
//     }
// }

// export default filtersReducer

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // trong redux toolkit khi viết code mutation thì nó sẽ tự chuyển thành code immutability
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityChange: (state, action) => {
            state.priority = action.payload
        },
    }
})