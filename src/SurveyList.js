import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";

const SurveyList = () => {
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
        
        <div>
            <h2>All Surveys</h2>
        </div>
          

        <div>
            <a href="/createsurvey">Create New Survey</a>
        </div>
        
        
        {surveys?.map(s => (
            <div className="question-preview" key={s.id} >
                <h3 style={{'float':'left'}}>{ s.title }</h3> 
                <Link to={"/giveanswer/" + s.id} style={{'float':'right'}}>Give an Answer(s) to the Survey</Link>   
                {s.questions?.map(q => (
                <div className="question-previeww" key={q.id} >
                    <h4>{ q.question }</h4>   
                    
                </div>
                 
                ))}
                <Link to={"/surveystatistics/" + s.id} style={{'float':'right'}}>Survey Statistics</Link>   
                
            </div>
           

        ))}
        
    </div>
  );
}

export default SurveyList;