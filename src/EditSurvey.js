import React, {Component} from 'react'
import {Button} from '@material-ui/core';
import { useParams } from "react-router";
import {useState,useEffect} from 'react';


const EditSurvey = () => {
    const[survey, setSurvey] = useState({
        title: '',
          questions: [{
              question: ''
          }] 
    });
    const { id } = useParams();
    let questionText;

    useEffect(() => {
        fetch('http://localhost:8080/survey/' + id)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setSurvey(data);
        })
    }, []);

    const editSurvey = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/survey/edit/" + id ,{
            
            method:"PUT",
            body: JSON.stringify({
              title: survey.title,
              questions: survey.questions
            
             }),
            headers:{"Content-Type":"application/json"},
            
        }).then(()=>{
            console.log(survey)
            console.log("Survey edited.")
            setSurvey({
            title: e.target.value,
            questions: [{
              question: e.target.value
            }]     
            
          })
          
        })
          
      
    }

    const handleDelete = (qid) => {
        console.log(qid)
        fetch("http://localhost:8080/question/delete/" + qid, {
            method: "DELETE",
            headers: {"Accept":"application/json", "Content-Type":"application/json"}
        }).then(() => {
            console.log('Question deleted successfully.')
        });
        }

    let controlQuestion = false;

    const appendQuestion = (q) => {
            controlQuestion = true;
            
            let newQuestion = {
              question: q
            };
            
            
            if(controlQuestion === true){
              if(survey.questions[0].question=== '')
              { survey.questions.shift();}
               
              setSurvey(((prevState) => ({
                questions: prevState.questions.concat([newQuestion])
              })));
              console.log(survey.questions)
              
            };
    }

    

   return(
    
    <div className='content'>
        <form noValidate autoComplete="off" style={{'float':'left','width':'50%'}}>
            <h2>Edit Survey</h2>
            
            
            <br/>
            <div>   

                <label>Survey Title: </label> 
    
                <input 
                className='create-form'
                defaultValue={survey.title}
                onChange={(text) =>
                    setSurvey({ title: text.target.value})
                  }
                />

            </div>
                <br/>

            <div>

                <label>Add Question: </label> 
                <input
                  className='create-form' 
                  required
                  name="question"
                  onChange={(text) => questionText = text.target.value}
                    
                  />
                
                
            </div>

            <br/>
            <div>
              <Button
                variant="contained" style={{'backgroundColor':'#90EE90'}}
                onClick={() => appendQuestion(questionText)}>
                  Add a Question(s)
              </Button>
            </div>

           

            
            
            <br/>

            <div>
                <Button variant="contained" style={{'backgroundColor':'#66CDAA'}}
                 onClick={(e) => editSurvey(e)} >
                 SUBMIT
                </Button>
            </div>
            
            

            
            
    
         
        </form>

        <div style={{'width':'48%','float':'right',}}>
        <h2>Questions</h2>
         
        <br/>

            {survey.questions?.map((q, index) => (
                        <div  key={q.id} >
                            
                          
                            <div>
                                <p style={{'fontWeight': 'bold', 'fontSize': '20px'}}>
                                Question {index+1}
                                </p>

                                <p>{q.question}</p>
                            </div>

                            <div>
                            <Button  style={{'backgroundColor':'red', 'width': 'fit-content', 
                                            'marginBottom':'4px'}} 
                                    onClick={() => handleDelete(q.id)} >
                                    Delete Question
                            </Button>
                            </div>
                        <hr></hr>    
                        </div>
                    
                    ))}
        </div>
            
    </div>
   );
}
export default EditSurvey;
