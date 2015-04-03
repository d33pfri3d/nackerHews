'use strict';

var React = require('react-native');

var {
	Text,
	View,
	ListView
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
				return fetch("https://hacker-news.firebaseio.com/v0/item/"+id+".json?")
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
			Fetching Posts...
			</Text>
			</View>
			)
		}
		return(
			this.renderListView()
		);
	},
	renderListView: function(){
		
	}

})

module.exports = ViewReactClass;