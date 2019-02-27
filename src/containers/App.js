import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/scroll.js';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state ={
	robots:[],
	searchfield:'',
 
}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then(users=>{this.setState({robots:users})});
	
	}
	

	onSearch = (event) => {

		this.setState({searchfield:event.target.value})
		
		
	}
	render() {
		const {robots,searchfield}=this.state;
		const filtrobo=robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length?
			<h1 className='tc'>Loading......</h1> :
	     (
		  <div className='tc'>
			<h1 className='f1'>Our Robofrndss..</h1>
			<SearchBox searchChange={this.onSearch}/>
			<Scroll>
			<CardList robots={filtrobo}/>
			</Scroll>
		</div>
		  );
		 
		
	}
}
export default App;