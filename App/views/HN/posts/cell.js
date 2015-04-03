'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  PixelRatio
} = React;


var PostCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <View style={styles.postDetailsContainer}>
          <Text style={styles.postTitle}>
            {this.props.post.title}
          </Text>
          <Text>
            {this.props.post.score } points 
            by {this.props.post.by }
            {this.props.post.descendants} comments
          </Text>
          <View style={styles.separator}/>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6EF',
  },
  postDetailsContainer:{
    flex: 1,
  },
  postTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
    color: '#FF6600'
  },
  postDetailsLine: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#CCCCCC',
  }
});

module.exports = PostCell;