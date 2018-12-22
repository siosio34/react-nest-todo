import React from 'react';
import { List, Button } from 'antd';


const TodoList = ({ todos, editTodo, deleteTodo }) => {
    
    return (
    <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={todo => (
            <List.Item actions={[<Button onClick={editTodo}>수정</Button>, <Button onClick={deleteTodo(todo.id)}>삭제</Button>]}>
                <List.Item.Meta
                    title={todo.title}
                    description={todo.description}
                />
            </List.Item>
        )}
    />
    )
        
};

export default TodoList;