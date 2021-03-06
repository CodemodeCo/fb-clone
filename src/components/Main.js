import React from 'react';
import {Link} from 'react-router-dom';
import superagent from 'superagent';
import HomePage from './HomePage';

export default class Main extends React.Component{
    
    
    componentWillMount(){
        var component  = this;
        superagent
                .get('/s_check')
                .query({})
                .set('Accept','application/json')
                .end(function(err,response){
                    if(err){
                        console.log(err)
                    }else{
                        component.setState({username: response.body.result})
                    }
                    
                });
    }
            componentDidMount(){
                console.log('it called')
            }
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }
    
    render(){
        var something= null;
        
        console.log("after request username is ",this.state.username)
        return (
            (!isNaN(this.state.username.length) && this.state.username.length >0)?<HomePage username={this.state.username}/>:
            <div style={{marginTop: "10%",width: '50%', float:'center', marginLeft:'25%', backgroundColor: 'rgba(255,255,255,0.3)', padding: '50px'}} id="login_container">
                <h2 className="text-center">Welcome to Codebook</h2>
                 <div className="text-center">
                    Already have an account?<Link to='/login'><button className="btn btn-primary">Login</button></Link><br />
                    <br />
                    Are you new? <Link to='/signup'><button className="btn btn-primary">SignUp</button></Link>
                </div>
            </div>
        );
    }
}