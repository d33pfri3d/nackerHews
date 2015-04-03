'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDC3C7',
  },
  cell: {
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    backgroundColor: 'white',
    fontSize: 20

  },
  title: {
    color: '#FF6500'
  }
});