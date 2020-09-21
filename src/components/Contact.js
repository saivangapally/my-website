import React, { Component } from 'react';
class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="Desc">Data Analytics</div>
                <a href="https://www.linkedin.com/in/sairamvangapally/"><i className="fab fa-linkedin"> LinkedIn</i></a>
                <a href="https://medium.com/@sairamvangapally"><i className="fab fa-medium"> Medium</i></a>
                {/* <a href="https://github.com/saivangapally"><i className="fab fa-github"> Github</i></a> */}
            </div>
        )
    }
}
export default Contact