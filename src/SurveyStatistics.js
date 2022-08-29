import { useParams } from "react-router";
import {useState, useRef, useEffect} from 'react';
import Graph from "./Graph";

const SurveyStatistics = () => {
  const[survey, setSurvey] = useState({}); 
  const { id } = useParams();


  useEffect(() => {
    
    fetch('http://localhost:8080/survey/' + id)
    .then(response => {
        return response.json();
    })
    .then(data => {
        setSurvey(data);
    })
}, []);



    


    return (
        
    <div className="question-list">
        
        <h2>{survey.title}</h2>
        
        {survey.questions?.map(q => (
                <div className="question-preview" key={q.id} >
                    
                    
                    <div>
                      <h3>{ q.question }</h3>
                    </div>
                  

                    
   
                    <Graph id={q.id}>

                    </Graph>
                   
         
                    
                </div>
                ))}

                
                
        
        
       
       
        
    </div>
  );
}


export default SurveyStatistics;