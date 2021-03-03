import React, { Component } from 'react';

class About extends Component{

    render(){
        return(
            <div className = "Bottomrightside">
                <h1>Education and Experience</h1>
                <p>
                I studied Master's in Engineering where I have gained the fundamental knowledge of various subjects including Data Analytics,Artificial Neural Networks, Additive Manufacturing, Process Improvement. 
                After graduation,I have started working full time where I'm primarly responsible for building data pipelines for print processing and analytics. 
                </p>

                <h2>Software Tools and Skills</h2>
                <p>During my work, I'm involved in wide range of projects which gave me opportunity to work with different tools and techniques.
                {/* <ul>
                        <li>Computer Languages: SQL, Python, Java, Javascript, MATLAB</li>
                        <li>Software Tools: Tensorflow, Tableau, AWS</li>
                </ul> */}
            </p>
            <ul className="ulclass">
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Apache Spark</li>
                    <li>Hive </li>
                    <li>Kafka</li>
                    <li>Tableau</li>
                    <li>Machine Learning</li>
                    <li>Tensorflow</li>
                    <li>Statistics</li>
                    <li>Exploratory Analysis</li>
                </ul>
            </div>
        )
    }
}
export default About;
