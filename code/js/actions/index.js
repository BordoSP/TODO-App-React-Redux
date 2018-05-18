const AddTask = (taskText, taskPrior) => {
    return {
        type: "ADD_TASK",
        textTaskInput: taskText,
        taskPriority: taskPrior
    };
}

const DeleteTask = (taskId) => {
    return {
        type: "DELETE_TASK",
        payload: taskId
    };
}

const CheckTask = (taskId) => {
    return {
        type: "CHECKED_TASK",
        idTask: taskId
    };
}

const FilterTasks = (filter) => {
    return {
        type: "FILTERED_TASKS",
        filter
    }
}

const LoadDataFromFile = (isLoading) => {
    return {
        type: "LOAD_DATA",
        isLoading
        
    }
}

const valueSearch = (value) => {
    return {
        type: "SEARCH_TASK_INPUT",
        value
    }
}

const activeSearch = (filter) => {
    return {
        type: "SEARCH_TASK",
        filter
    }
}


export {AddTask, DeleteTask, CheckTask, FilterTasks, LoadDataFromFile, valueSearch, activeSearch};

