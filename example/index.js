import './index.less';
import './index.html';
import React from 'react';
import dva from 'dva';
import { connect } from 'dva';
import { Router, Route, useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

//import lifecycle from 'react-lifecycle-wrap-addon';
import lifecycle from '../src/index';

// 1. Initialize
const app = dva();

// 2. Model
app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    ['count/init'  ](count, action) {
      return action.payload;
    },
    ['count/add'  ](count) {
      return count + 1
    },
    ['count/minus'](count) {
      return count - 1
    },
  },
});

let Count = (props)=> <div>
  <h2>{ props.count }</h2>
  <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
  <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
</div>

Count = lifecycle(Count, {
  componentDidMount({ dispatch }) {
    dispatch({
      type: 'count/init',
      payload: 10,
    });
  }
});

// 3. View
const App = connect(({ count }) => ({
  count
}))(Count);

// 4. Router
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={App}/>
  </Router>
);

// 5. Start
app.start(document.getElementById('root'), {
  history: useRouterHistory(createHashHistory)({queryKey: false}),
});
