import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class About extends Component{
    render(){
        return(
            <div className = "Bottomrightside">
                <Widecard title ="Master of Science, Engineering" where="Minnesota State University, 2015 -2017"></Widecard>
                <Widecard title ="Bachelor of Science, Mechanical Engineering" where="Jawaharlal Nehru University, 2015 -2017"></Widecard>
                <h2>Research</h2>
                <p>My work at University as Research Assistant includes Optimization for parameters for Additive Manufacturing of Stainless steel- calcium bone scaffolds.
                    During my research, I was part of below publications:
                    
                </p>
            </div>
        )
    }
}
export default About;