import React, { Component } from 'react';

class About extends Component{

    render(){
        return(
            <div className = "Bottomrightside">
                <h1>Education and Experience</h1>
                <p>
                I studied Master's in Mechanical Engineering where I got introduced to Artificial Neural Networks and Statistical tools which helped me to pursue my career in 
                in Analytics and my goal is to become Machine Learning Practioner. 
                My research at university includes process-parameter optimization study of additive manufacturing technique for fabricating bone scaffolds. 
                </p>


                <p>
                After my Master's, I joined Shutterfly as full-time employee where I worked on problems involving 
                the automation of data pipelines, ETL, process improvement, software programming, data analysis, visualization and Machine Learning POCs. As part of ML work, me and my team-mate patented
                the process of information extraction from documents using Machine Learning Techniques.
                </p>

                <h2>Tools and Skills</h2>
                <p>During my work, I'm involved in wide range of projects which gave me opportunity to work with different tools and techniques.
                {/* <ul>
                        <li>Computer Languages: SQL, Python, Java, Javascript, MATLAB</li>
                        <li>Software Tools: Tensorflow, Tableau, AWS</li>
                </ul> */}
            </p>
            <ul className="ulclass">
                    <li>Exploratory Data Analysis</li>
                    <li>Machine Learning</li>
                    <li>Statistics</li>
                    <li>Software Programming</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>Tableau</li>
                    <li>Tensorflow</li>
                    <li>Apache Spark</li>
                    <li>MATLAB</li>
                </ul>
            </div>
        )
    }
}
export default About;