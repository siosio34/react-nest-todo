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

import AddTodoInput from './AddTodoInput';
import TodoList from './TodoList';

class TodoPage extends React.Component {
    componentDidMount() {
      this.props.getTodo();
    }
    
    postTodo = () => {
      const { createTodo } = this.props;
      this.props.postTodo( createTodo );
    }
    
    editTodo = (id, data) => {
      this.props.updateTodo({ data });
    }
    
    deleteTodo = id => e => {
      this.props.deleteTodo({ id });
    }
    
    render() {
        const { loading, error, items, onChangeTodoTitle } = this.props;
      
        return (
          <React.Fragment>
            <AddTodoInput onChange={onChangeTodoTitle} postTodo={this.postTodo} />
            <TodoList todos={items} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
          </React.Fragment>
            )
    }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTodoTitle: evt => dispatch(TodoActionCreators.changeTodoTitle(evt.target.value)),
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
    error: state.todo.error,
    createTodo: state.todo.createTodo,
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
