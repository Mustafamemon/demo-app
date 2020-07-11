import React, { Component } from 'react';
import EditableLabel from '../label-editable-react'
class Editablelabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            website : 'https://www.google.com/',
            sample : 'Hello World'
        } 
    }
    
    render() {
        return (
            <div className ='m-4'>
               <EditableLabel 
                heading = 'Heading'
                initialValue = {this.state.sample}
                save={(sample)=>{this.setState({sample})}}
               />
               <br />
               <EditableLabel 
                heading = 'Website'
                initialValue = {this.state.website}
                save={(website)=>{this.setState({website})}}
                isWebsite  = {true}
               />
            </div>
        );
    }
}

export default Editablelabel;