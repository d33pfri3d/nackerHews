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
      tintColor='#F39C12'
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
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('nackerHews', () => nackerHews);

module.exports = nackerHews;