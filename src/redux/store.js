// ============ Redux core ===================
// import { legacy_createStore as createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnhancers)

// export default store

// --------- reduxjs toolkit -------------
import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from '../components/Filters/FiltersSlice'
import todoListSlice from '../components/TodoList/TodoListSlice'

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: todoListSlice.reducer,
    }
})

export default store