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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  listView: {
  },
  cell: {
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    backgroundColor: '#F5FCFF',
    fontSize: 20

  },
  title: {
    fontWeight: 'bold',
  },
  url: {
    fontSize: 10,
    color: "#444444",
    paddingLeft: 5,
  },
  navigator: {
    flex: 1
  }
});