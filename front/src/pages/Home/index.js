import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
 
import reducer from './Home.reducer'
import saga from './Home.saga'

import injectReducer from 'Utils/injectReducer'
import injectSaga from 'Utils/injectSaga'

import { HomeActionCreators } from './Home.action';

class HomePage extends React.Component {
  
    componentDidMount() {
      // 유저가 없으면 로그인 유저가 있으면 todo
      this.props.getHome();
    }
    
    render() {
        const { loading, error, repos } = this.props;

        return (
            <div>HomePage 페이지</div>
            )
    }
}

const mapStateToProps = state => ({
  loading: state.home.loading,
  error: state.home.error,
});

const mapDispatchToProps = dispatch => ({
  getHome: () => {
    dispatch(HomeActionCreators.getHome())
    },
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);