import {useState,useRef,useEffect} from 'react';
import Survey from './Survey';
import * as d3 from 'd3';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const CreateQuestion = () => {
    const[question, setQuestion]=useState('')
    const[questions,setQuestions]=useState([]);

    const handleQuestionAdd = (e) => {
        e.preventDefault()
        const survey={question}
        console.log(survey)
        fetch("http://localhost:8080/question/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(survey)
        }).then(()=>{
            console.log("Question saved")
        })   
    }

    useEffect(()=>{
        fetch("http://localhost:8080/question/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setQuestions(result);
        }
      )
      },[])



    
   
    return (  

        <div className='content'>
            <form noValidate autoComplete="off">
            <h2>Create New Question</h2>
            <div>
                <br></br>
            <TextField id="outlined-basic" label="Question" variant="outlined"  
                value={question}
                onChange={(e)=>setQuestion(e.target.value)}
                />
            </div>

            <br/>

            <div>
                
                <Button variant="contained" color="secondary" onClick={handleQuestionAdd}>
                SEND QUESTION
                </Button>
            </div>

            
            
    </form>
            
        </div>
        
    );
}
 
export default CreateQuestion;