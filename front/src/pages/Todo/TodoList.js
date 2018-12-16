import React from 'react';
import { List } from 'antd';


const TodoList = ({ todos }) => {
    
    return (
    <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={todo => (
            <List.Item>
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