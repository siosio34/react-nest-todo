import axiosInstance from 'Utils/request';

export const getTodoApi(query) {
    return axiosInstance.get('/todo', {...query});
}

export const postTodoApi(createTodoData) {
    return axiosInstance.post('/todo', { createTodoData });
}

export const updateTodoApi(id, updateTodoData) {
    return axiosInstance.put('/todo/${id}', { updateTodoData });
}

export const deleteTodoApi(id) {
    return axiosInstance.delete(`/todo/${id}`);
}