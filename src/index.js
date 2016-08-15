import React from 'react';

function wrap(Component, $) {

  const _f = [
    'constructor',
    'componentWillMount',
    'componentDidMount',

    'shouldComponentUpdate',
    'componentWillReceiveProps',

    'componentWillUpdate',
    'componentDidUpdate',

    'componentWillUnmount',
  ];

  const _call = (num, ...args) => {
    $[_f[num]] && $[_f[num]].call(this, ...args);
  }

  const Default = React.createClass({

    getInitialState() {
      _call(0, this.props);
      if (this.state) return this.state;
      return null;
    },

    componentWillMount() {
      _call(1, this.props);
    },
    componentDidMount() {
      _call(2, this.props);
    },

    shouldComponentUpdate(nextProps, nextState) {
      const r = _call(3, nextProps, nextState, this.props);
      return r === undefined ? true : r;
    },

    componentWillReceiveProps(nextProps) {
      _call(4, nextProps, this.props);
    },

    componentWillUpdate(nextProps, nextState) {
      _call(5, nextProps, nextState, this.props);
    },

    componentDidUpdate(preProps, preState) {
      _call(6, preProps, preState, this.props);
    },

    componentWillUnmount() {
      _call(7, this.props);
    },

    render() {
      return <Component {...this.props} />;
    }
  })

  return Default;
}

export default wrap;
