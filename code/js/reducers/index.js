import {combineReducers} from "redux"
import TaskData from "./taskdata"
import Immutable from "seamless-immutable"



var counter = 0;
var savedState;

const taskReducer = (state = TaskData.items, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return state.concat({
                id: counter++,
                textTask: action.textTaskInput,
                priority: action.taskPriority,
                checked: false
            });            
        
        case "DELETE_TASK":
            return state.filter((item) =>{
                return item.id != action.payload;
                
            })


        case "CHECKED_TASK":
             return state.map((item) =>{
                 if(item.id == action.idTask) {
                     item.checked = !item.checked; 
                     
                 }
                 return item;
            })
            

        case "LOAD_DATA_DELAY":
            return state = action.payload.items;

        // case "SEARCH_TASK":
        
        //     return state.filter((item) => {
        //             if(item.textTask.toLowerCase().search(action.value.toLowerCase()) != -1) {
        //                 return item;
        //             }
        //         }); 
            
    }
    return state;
}

const filterReducer = (state = TaskData.filter, action) => {
    switch (action.type) {
        case "FILTERED_TASKS":
            return action.filter; 
            
        case "SEARCH_TASK":
            return action.filter;
    }
    return state;
}

const loadingReducer = (state = TaskData.loading, action) => {
    switch(action.type) {
        case "LOAD_DATA_DELAY_SWITCH":
            return !state;
    }
    return state;
}

const searchReducer = (state = TaskData.searchValue, action) => {
    switch(action.type) {
        case "SEARCH_TASK_INPUT":
            return action.value;
    }
    return state;
}





const reducers = combineReducers({
    items: taskReducer,
    filter: filterReducer,
    loading: loadingReducer,
    searchValue: searchReducer,
});

export default reducers;