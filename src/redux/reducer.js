import { combineReducers } from 'redux'
import filtersReducer from '../components/Filters/FiltersSlice'
import todoReducer from '../components/TodoList/TodoListSlice'
// import { todoReducer } from '../components/TodoList/TodoListSlice'


const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoReducer
})

//khi hàm combineReducers chạy thì nó sẽ trả ra 1 func tường minh như đoạn code  đc cmt dưới đây
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }

export default rootReducer