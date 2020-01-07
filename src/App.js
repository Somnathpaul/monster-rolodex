import React,{Component} from 'react';

import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/searchbox.component';

//import logo from './logo.svg'; 
import './App.css';

class App extends Component{
  constructor(){
    super();

    // state
    this.state = {
      series: [],
      searchField: ''
    }
  }
// component did mount will only load when react first load the html on the browser.
// we can write any function we want to load at the time of rendering the dom 
// called life cycle method
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  // converting into json format
  .then(response => response.json())
  // set state
  .then(user => this.setState({series: user}))
  
}
// arrow function will automatically bind the function with this
handelChange = e => {
  this.setState({searchField: e.target.value})
}

  render() {

    // search field: 
    const {series, searchField} = this.state;
    const filterSeries = series.filter(result => result.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox 
           placeholder = 'Search Your monster'
           handelChange={this.handelChange}
          />
            <CardList series={filterSeries}>
              {/* children component which will not be render unless we call them from componet jsx folder */}
              
            </CardList>

          
        </div>
    );
  }
}

export default App;
