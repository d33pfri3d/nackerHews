'use strict';

var React = require('react-native');

var {
	Text,
	View,
	ListView,
	TouchableHighlight
} = React;

var styles = require('./style');
var api = require('./../../../api.js');

var ViewReactClass = React.createClass({

	getInitialState: function(){
		return{
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1,row2) => row1 !== row2
			}),
			loaded: false,
		};
	},

	componentDidMount: function(){
		this.fetchData();
	},

	fetchData: function(){
		fetch(api.HN_TOPSTORIES)
			.then((response) => response.json())
			.then((res) => {
        		return res.slice(0, 20);
        	})
        	.then((ids) => {
				var promises = ids.map(function(id){
				return fetch(api.HN_ITEM + id + ".json?")
				.then((response) => response.json())
			});
				return Promise.all(promises);
			})
			.then((ids) => {
        		this.setState({
				dataSource: this.state.dataSource.cloneWithRows(ids),
          		loaded: true,
          		});
      		})
      	.done();
	},

	render: function(){
		if(!this.state.loaded){
			return(
			<View style={styles.container}>
			<Text style={styles.loadingText}>
				Loading Posts
			</Text>
			</View>
			)
		}
		return(
			this.renderListView()
		);
	},
	renderListView: function(){
		return(
			<ListView
			dataSource={this.state.dataSource}
			renderRow={this.renderPostCell}
			style={styles.postsListView}/>
		)
	},
	renderPostCell: function(post){
		return(
		<TouchableHighlight onPress={() => this._onPress(post)}>
	        <View style={styles.cell}>
	          <Text style={styles.title}>{post.title}</Text>
	          <Text style={styles.url}>{post.url}</Text>
	        </View>
	      </TouchableHighlight>
		);
	},

})

module.exports = ViewReactClass;