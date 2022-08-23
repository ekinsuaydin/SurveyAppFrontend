import {useState,useRef,useEffect} from 'react';
import {Button} from '@material-ui/core';
import Answer from './Answer';

const SurveyList = () => {
    const[survey, setSurvey]=useState('')
    const[surveys,setSurveys]=useState([]);

    

    useEffect(()=>{
        fetch("http://localhost:8080/survey/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setSurveys(result);
        }
      )
      },[])

    
    



    return (
        
    <div className="question-list">
        
        <h2>All Questions</h2>
        <div>
        <a href="/createsurvey" style={{}}>Create New Survey</a>
        </div>
        {surveys.map(s => (
            <div className="question-preview" key={s.id} >
                <h2>{ s.title }</h2> 
                {s.questions.map(q => (
                <div className="question-preview" key={q.id} >
                    <h2>{ q.question }</h2>     
                </div>
                ))}    
            </div>
           

        ))}
        
    </div>
  );
}

export default SurveyList;