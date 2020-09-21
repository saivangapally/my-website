import React, { Component } from 'react';
import mypic from '../img/mypic.jfif';
import Contact from '../components/Contact';

class Social extends Component{
    render(){
        return(
            <div className="Bottomleftside">
                <img src = {mypic} className="profilepic" alt="Display"></img>
                <Contact/>
            </div>
        )
    }
}
export default Social