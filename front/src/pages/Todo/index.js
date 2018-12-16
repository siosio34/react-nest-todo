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

class TodoPage extends React.Component {
    componentDidMount() {
    //   // 유저가 없으면 로그인 유저가 있으면 todo
    //   this.props.getHome();
    }
    
    render() {
        const { loading, error, repos } = this.props;
        console.log('loadingloading', loading);

        return (
            <div>Todo 페이지</div>
            )
    }
}

export function mapDispatchToProps(dispatch) {
  return {
      
    getTodo: () => {
    dispatch(TodoActionCreators.getTodo())
    },
    postTodo: (data) => {
    dispatch(TodoActionCreators.postTodo(data))
    },
    updateTodo: (id) => {
    dispatch(TodoActionCreators.updateTodo(id))
    },
    deleteTodo: (id) => {
    dispatch(TodoActionCreators.deleteTodo(id))
    },

  };
}

// const mapStateToProps = state => ({
//     loading: state.todo.loading,
//     error: state.todo.error
// })

const mapStateToProps = createStructuredSelector({
  items: makeSelectTodoItems(),
  loading: makeSelectTodoLoading(),
  error: makeSelectTodoError(),
});

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
