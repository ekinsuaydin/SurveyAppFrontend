import {useState,useRef,useEffect} from 'react';
import * as d3 from 'd3';
import CreateQuestion from './CreateQuestion';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const Survey = () => {
    const[survey, setSurvey]=useState('')

    const handleSurveyAdd = (e) => {
        e.preventDefault()
        const survey={survey}
        console.log(survey)
        fetch("http://localhost:8080/survey/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(survey)
        }).then(()=>{
            console.log("Survey saved")
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
            <h2>Create New Survey</h2>
            

            <br/>

            <div>
           
                
            <TextField id="outlined-basic" label="Survey Name" variant="outlined"  
                value={survey}
                onChange={(e)=>setSurvey(e.target.value)}
                />
            </div>
          

            
            

            <br/>

            <div>
                <Button variant="contained" color="secondary" >
                Add a Question(s) to Survey
                </Button>
            </div>

            
            
    </form>
            
        </div>
        
    );
}
export default Survey;