import React, { Component } from 'react';

class Publications extends Component{
    render(){
        return(
            <div className="Bottomrightside">
                <h1>Articles</h1>
                <p>
                    <li>Cai, S., Vangapally, S., Zhao, Y., 
                        <a href="http://ijme.us/issues/fall2019/X__IJME%20fall%202019%20v20%20n1.pdf#page=7">
                             Experimental Design Analysis of 3D Printing Processes in the Optimization of Material Mechanical Properties</a>
                            <i>, International Journal of Modern Engineering 2019</i>
                    </li>
                    <br></br>
                    <li>Vangapally, S., Agarwal, K., Sheldon, A., Cai S., 
                        <a href="https://www.sciencedirect.com/science/article/pii/S2351978917302512">
                        Effect of Lattice Design and Process Parameters on Dimensional and Mechanical Properties of Binder Jet Additively Manufactured Stainless Steel 316 for Bone Scaffolds</a>
                            <i>, Procedia Manufacturing, Vol. 10, 2017, Pg. 750-759</i>
                    </li>
                    <br></br>
                    <li>Agarwal, K., Vangapally, S., Sheldon, A.,  
                        <a href="https://www.semanticscholar.org/paper/BINDER-JET-ADDITIVE-MANUFACTURING-OF-STAINLESS-FOR-Agarwal-Vangapally/2b9584f7adc9a1b661cf92a0531c439eb3991c98">
                        Binder Jet Additive Manufacturing of Stainless Steel-Tricalcium Phosphate Bio composite for Bone Scaffold and Implant Applications</a>
                            <i>, Proceedings of Solid Freeform Fabrication Symposium, August 7-9, 2017, Austin, TX</i>
                    </li>
                    <br></br>
                    <li>Agarwal, K., Houser M., Vangapally, S., Vulli, A., 
                        <a href="https://www.semanticscholar.org/paper/PROCESS-%E2%80%93-PROPERTY-RELATIONSHIPS-IN-ADDITIVE-OF-OF-Agarwal-Houser/cfcca90a772da0a30b338f4dc62667339dcb2243">
                        Process -Property Relationships in Additive Manufacturing of Nylon-fiberglass Composites using Taguchi Design of Experiments</a>
                            <i>, Proceedings of Solid Freeform Fabrication Symposium, August 7-9, 2017, Austin, TX</i>
                    </li>
                </p>
            </div>
        )
    }
}
export default Publications