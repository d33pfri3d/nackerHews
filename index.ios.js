'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var HNView = require('./App/views/HN/posts')

var nackerHews = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
      style={styles.container}
      tintColor='#ff6500'
      initialRoute={{
        title:'Hacker News',
        component: HNView
      }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDC3C7',
    color: '#ff6500'
  }
});

AppRegistry.registerComponent('nackerHews', () => nackerHews);

module.exports = nackerHews;