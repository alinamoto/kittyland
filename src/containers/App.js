import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            kitties: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({kitties: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
    }


    render() {
        const { kitties, searchfield} = this.state;
        const filteredKitty = kitties.filter(pisi => {
            return pisi.name.toLowerCase().includes(searchfield.toLowerCase());
            
            })
        if (!kitties.length) {
            return <h1 className='title'>Loading...</h1>
        } else {
            return (
                <div className='tc'>  
                    <h1 className='title'>KittyFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                             <CardList kitties = { filteredKitty }/>
                        </ErrorBoundry>
                    </Scroll>
                </div> 
            )
        }  
    }
}

export default App;
