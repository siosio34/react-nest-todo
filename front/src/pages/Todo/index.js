import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'Utils/injectReducer';
import injectSaga from 'Utils/injectSaga';

import reducer from './Todo.reducer';
import saga from './Todo.saga';
import { makeSelectTodoItems, makeSelectTodoLoading, makeSelectTodoError } from './Todo.selector'; 
import { TodoActionCreators } from './Todo.action';
import TodoList from './TodoList';

class TodoPage extends React.Component {
    componentDidMount() {
      
    // this.props.postTodo({ title: '한글', description: '이에영!'});
    this.props.getTodo();
    
    }
    
    editTodo = (id) => {
      
    }
    
    deleteTodo = id => e => {

      this.props.deleteTodo({ id });
    }
    
    render() {
        const { loading, error, items } = this.props;
      
        return (
            <TodoList todos={items} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
            )
    }
}

export function mapDispatchToProps(dispatch) {
  return {
      
    getTodo: () => {
    dispatch(TodoActionCreators.getTodo())
    },
    postTodo: ( data ) => {
    dispatch(TodoActionCreators.postTodo( data ))
    },
    updateTodo: (id) => {
    dispatch(TodoActionCreators.updateTodo(id))
    },
    deleteTodo: (id) => {
    dispatch(TodoActionCreators.deleteTodo(id))
    },

  };
}

const mapStateToProps = state => ({
    items: state.todo.items,
    loading: state.todo.loading,
    error: state.todo.error
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'todo', reducer });
const withSaga = injectSaga({ key: 'todo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TodoPage);
