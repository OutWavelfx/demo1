import React,{Component} from 'react';

import "../assets/css/loading.css"

export default class Loading extends Component{
    render(){
        return(
            <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
     
        );
    }
}