import React from 'react';
import { Input, Button } from 'antd';

const AddTodoInput = ({
    onChange, postTodo
}) => {
    
    return (
        <Input onChange={onChange} addonAfter={<Button onClick={postTodo}>Add Todo</Button>} />
        )
}

export default AddTodoInput;