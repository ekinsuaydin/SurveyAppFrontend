import React, {Component} from 'react'
import * as d3 from 'd3';
import {Button} from '@material-ui/core';

class CreateQuestion extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            question: ''
        }
        
        this.handleQuestionAdd = this.handleQuestionAdd.bind(this);
        }

     
      handleQuestionAdd = (e) => {
        
        this.setState({ id: Math.floor(Math.random() * 1000) + 1})
 
        e.preventDefault()

        fetch("http://localhost:8080/question/add",{
            
            method:"POST",
            body: JSON.stringify({
                id: this.state.id,
                question: this.state.question,
             }),
            headers:{"Content-Type":"application/json"},
            
        }).then(()=>{
            this.props.parentCallback(this.state.id); // sending question id to survey component 
            
            console.log("Question saved")
            this.setState({
            question: e.target.value,
          });
        })   
    }
   



    
    render () {
    const {question} = this.state;


    return (  

        <div className='content'>
            <form noValidate autoComplete="off">
            
            {this.props.id}
            <div>
                <br></br>

                <label>Question: </label>
                <input 
                  
                  required
                  name="question"
                  value={question}
                  rules={[{ required: true, message: "Please input!" }]}
                    onChange={(text) =>
                      this.setState({ question: text.target.value})
                    }
                  />
            
            </div>

            <br/>

            

            <div>
                
                <Button variant="contained" color="secondary" onClick={this.handleQuestionAdd}>
                ADD the QUESTION
                </Button>
            </div>

           

            
            
    </form>
            
    </div>
        
        );
    }

}


export default CreateQuestion;