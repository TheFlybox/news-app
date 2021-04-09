import React from 'react';
import ReactDOM from 'react-dom';

import TopBar from './components/TopBar';
import Searchbar from './components/SearchBar';
import MenuBar from './components/MenuBar';
import Content from './components/Content';

import Logo from './assets/logo.svg';
import './assets/style.css';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			title: "The News Website",
			logo: Logo,
			categories: "all business entertainment general health science sports technology".split(" "),
			navs: "everything, top news, sources".split(","),
			news: [],
			filteredNews: [],
			links: {
				all: "https://newsapi.org/v2/everything?q=all&apiKey=dd60ff335880453cb1bae24703c98aab",
				top: "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd60ff335880453cb1bae24703c98aab",
				sources: "https://newsapi.org/v2/sources?apiKey=dd60ff335880453cb1bae24703c98aab"
			}
		}
	}
	componentDidMount(){
		this.getNews("all");
	}
	getNews(which){
		let result = null;
		let url = null;

		switch(which){
			case "all":
				url = this.state.links.all;
				break;
			case "top":
				url = this.state.links.top;
				break;
			case "sources":
				url = this.state.links.sources;
				break;
		}

		fetch(url)
		.then((res)=>{
			return res.json()
		})
		.then((res)=>{
			if(which === "sources"){
				this.setState((state)=>({
					news: state.news.concat(state.news, res.sources)
				}))
			}else{
				this.setState((state)=>({
					news: state.news.concat(state.news, res.articles),
					filteredNews: state.news.concat(state.news, res.articles)
				}))
			}
		})
	}
	searchNews(e){
		let keyword = e.target.value;
		this.setState((state)=>({
			filteredNews: state.news.filter((item)=>{
				return item.title === keyword
			})
		}))
	}
	render(){
		return(
			<div className="container">
				<TopBar data={this.state.navs} title={this.state.title} />
				<Searchbar onChange={(e)=>{this.searchNews(e)}} />
				<MenuBar data={this.state.categories} />
				<Content data={this.state.filteredNews} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector("#root")
);