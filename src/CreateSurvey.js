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
      

      console.log(this.state.questions.question)

      if(this.controlQuestion === true){
        this.setState((prevState) => ({
        questions: prevState.questions.concat([newQuestion])
      }));
      }
      
  
      
    }

    
   
   render(){
    const {title, questions} = this.state;


    return (  

    <div className='content'>
        <form noValidate autoComplete="off">
            <h2>Create New Survey</h2>
            
            
            <br/>

            <div>   

                <label>Survey Title: </label> 
            
                  <input 
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
                  required
                  name="question"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(text) => this.questionText = text.target.value}
                    
                  />

            </div>

            <br/>

            <div>
              <Button
                variant="contained" color="primary"
                onClick={() => this.appendQuestion(this.questionText)}>
                  Add Question
              </Button>
            </div>

           

            
                  

                  
                
            

            <br/>
            

            
            
            <br/>

            <div>
                <Button variant="contained" color="secondary" onClick={(e) => this.createSurvey(e)} >
                 Create Survey
                </Button>
            </div>
            
            



            
         
            

            
            
        </form>
            
    </div>
        
    );
}
}
export default CreateSurvey;
