import React, {Component} from 'react'
import {Button} from '@material-ui/core';


class CreateSurvey extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          questions: [{
              question: ''
          }]           
        }
        this.createSurvey = this.createSurvey.bind(this);
        this.appendQuestion = this.appendQuestion.bind(this);
      }

   

    createSurvey = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/survey/add",{
            
            method:"POST",
            body: JSON.stringify({
              title: this.state.title,
              questions: this.state.questions
                
      
             }),
            headers:{"Content-Type":"application/json"},
            
        }).then(()=>{
          
            console.log("Survey saved")
            this.state.questions.shift()
            this.setState({
            title: e.target.value,
            questions: [{
              question: e.target.value
            }]

            
            
          })
          
        })
          
      
    }

    controlQuestion = false;

    appendQuestion(q) {
      this.controlQuestion = true;
      
      let newQuestion = {
        question: q
      };
      
      
      if(this.controlQuestion === true){
        if(this.state.questions[0].question=== '')
        { this.state.questions.shift();}
         
        this.setState((prevState) => ({
        questions: prevState.questions.concat([newQuestion])
      }));
      }
      
  
      
    }

    
   
   render(){
    const {title, questions} = this.state;


    return (  

    <div className='content'>
        <form noValidate autoComplete="off" style={{'width':'50%'}}>
            <h2>Create New Survey</h2>
            
            
            <br/>

            <div>   

                <label>Survey Title: </label> 
            
                  <input 
                  className='create-form'
                  required
                  name="survey"
                  value={title}
                  rules={[{ required: true, message: "Please input!" }]}
                    onChange={(text) =>
                      this.setState({ title: text.target.value})
                    }
                  />
            </div>

            <br/>

            <div>
            <label>Question: </label> 
              <input
                  className='create-form' 
                  required
                  name="question"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(text) => this.questionText = text.target.value}
                    
                  />

            </div>

            <br/>

            <div>
              <Button
                variant="contained" style={{'backgroundColor':'#90EE90'}}
                onClick={() => this.appendQuestion(this.questionText)}>
                  Add a Question(s)
              </Button>
            </div>

           

            
            
            <br/>

            <div>
                <Button variant="contained" style={{'backgroundColor':'#66CDAA'}} onClick={(e) => this.createSurvey(e)} >
                 SUBMIT
                </Button>
            </div>
            
            



            
         
            

            
            
        </form>
            
    </div>
        
    );
}
}
export default CreateSurvey;
