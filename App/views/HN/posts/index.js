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
var PostCell = require('./cell');

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
			<PostCell post={post}/>
		);
	},

})

module.exports = ViewReactClass;