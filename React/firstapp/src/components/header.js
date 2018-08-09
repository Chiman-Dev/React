import React,{Component} from 'react';

class Header extends Component{

    constructor(props){
        super()

        this.state={
            title:'ACADGILD',
            keyword:''
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
    }

    render(){
        // const styles = {
        //     header:{
        //         background:'seagreen'
        //     },
        //     logo:{
        //         color:'white',
        //         textAlign:'center',
        //         fontSize:'25px'
        //     }
        // }
        return(
            //<header style={styles.header}>
            <header>
                <div className='logo'
                onClick={()=>{console.log('hi')}}>
                    {this.state.title}
                </div>
                <center>
                    <input type='text' placeholder='Enter the text to search'
                    onChange={this.inputChanges.bind(this)}/>
                    <br/>
                    {this.state.keyword}
                </center>
                <hr/>
            </header>
        )

    }
}



export default Header;




/*
const Header = () =>{
    return(
        <div>
            <h1>This  is header page</h1>
            <hr/>
        </div>
    )
}
*/