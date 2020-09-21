import React, { Component } from 'react';
import NavItem from './NavItem';
class Navbar extends Component{
    constructor(props)
    {
        super(props)
        this.state=
        {'NavItemActive':''}
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length > 0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
    this.setState({'NavItemActive':x},() => {
        document.getElementById(this.state.NavItemActive).classList.add('active');
    })
    }
    render()
    {
        return(
            <nav className="Topcontainer">
                <div className = "Leftside">
                    Sairam Vangapally
                </div>
                <div className="Rightside">
                    <ul >
                        <NavItem item="Home" tolink="/" activec={this.activeitem}></NavItem>
                        <NavItem item="About" tolink="/about" activec={this.activeitem}></NavItem>
                        <NavItem item="Blog" tolink="/blog" activec={this.activeitem}></NavItem>
                        <NavItem item="Publications" tolink="/publications" activec={this.activeitem}></NavItem>
                    </ul>

                </div>

            </nav>
        )
    }
}
export default Navbar;