import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/new_list';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            news:JSON
        }
    }
    render(){
        
        return (
            
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>   
             )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));

// const App2 = () =>{
//     return <h1>This is second page</h1>
// }
// ReactDOM.render(<App2/>,document.getElementById('root'));


// const App = () =>{
//     return (
//         <div>
//             <Header/>
//             <h1>This is first page</h1>
            
//         </div>   
//     )
// }

