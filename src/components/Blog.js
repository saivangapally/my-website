import React, { Component } from 'react';
class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {id:1, title:"Math behind artificial neural network", desc:"Understanding Feed forward backpropagation artificial neural network with an example and sample calculations",link:"https://medium.com/analytics-vidhya/math-behind-artificial-neural-networks-42f260fc1b25"},
                {id:2, title:"SQL for Data Scientists", desc:"A beginner's guide to different SQL functions",link:"https://medium.com/analytics-vidhya/sql-for-data-scientists-a66559869447"},
                {id:3, title:"Naive Bayes Classification", desc:"Explaination about bayes theorem and text-classification model with sample calculations",link:"https://medium.com/analytics-vidhya/bayes-theorem-and-text-classification-using-naive-bayes-classifier-591ade7d5299"},
                {id:4, title:"Quantum Computing", desc:"An attempt at writing about Quantum Computing",link:"https://medium.com/@SairamVangapally/quantum-computing-identifying-secret-number-4c94d9c9d8b7"},
            ]
        }
        const mystyle = {
            fontWeight:"bold",
        };
        this.posts = this.state.data.map((post) =>
        <div className="Bloglist" key={post.id} >
            <p style={mystyle}>{post.title}</p>
            <p>{post.desc}</p>
            <p><a href={post.link}>Read</a></p>
        </div>
        );
    }

    render(){
        return(
              <div className="Bottomrightside">    
              <h1>Posts </h1> 
                    {this.posts}
              </div>
        )
    }
}
export default Blog;