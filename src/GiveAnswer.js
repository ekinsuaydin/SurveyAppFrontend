import { useParams } from "react-router";
import {useState,useEffect} from 'react';

import {Button} from '@material-ui/core';

const GiveAnswer = () => {
  const[survey, setSurvey] = useState({});
  const[answer, setAnswer]=useState('')
  const[comment, setComment]=useState('')
  const[questionId, setQuestionId]=useState('')
  const date = null;
  const [cdate,setDate] = useState(date); 
  const { id } = useParams();


  const handleClick = (e) => {
    e.preventDefault()
    let date = new Date().toLocaleString();
    setDate(date);
    const giveAnswer={answer,comment,date}
    console.log(survey)
    fetch('http://localhost:8080/answer/add/question/' + questionId,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(giveAnswer)
    }).then(()=>{
        
        console.log("Answer saved")
    })   
}

  useEffect(() => {
    fetch('http://localhost:8080/survey/' + id)
    .then(response => {
        return response.json();
    })
    .then(data => {
        setSurvey(data);
    })
}, []);

const handleChange = (event, id) => {
  setAnswer(event.target.value);
  setQuestionId(id);
}


    return (
        
    <div className="question-list">
        
        <h2>{survey.title}</h2>
        
        {survey.questions?.map(q => (
                <div className="question-preview" key={q.id} >

                  <div>
                    <h4 style={{'color': 'gray'}}>ANSWER QUESTION</h4>
                  </div>
                  
                    <br/>
                    
                    
                    <div>
                      <h3>{ q.question }</h3>
                    </div>
                    
                    
                    
                    <br/>
                    <div>
                      <input key="1" type="radio" name={q.id} value="1"
                       onChange={(event) => handleChange(event, q.id)}/>1
                      <input key="2" type="radio" name={q.id} value="2"
                       onChange={(event) => handleChange(event, q.id)}/>2
                      <input key="3" type="radio" name={q.id} value="3"
                       onChange={(event) => handleChange(event, q.id)}/>3
                      <input key="4" type="radio" name={q.id} value="4"
                       onChange={(event) => handleChange(event, q.id)}/>4
                      <input key="5" type="radio" name={q.id} value="5"
                       onChange={(event) => handleChange(event, q.id)}/>5
                      <input key="6" type="radio" name={q.id} value="6"
                       onChange={(event) => handleChange(event, q.id)}/>6
                      <input key="7" type="radio" name={q.id} value="7"
                       onChange={(event) => handleChange(event, q.id)}/>7
                      <input key="8" type="radio" name={q.id} value="8"
                       onChange={(event) => handleChange(event, q.id)}/>8
                      <input key="9" type="radio" name={q.id} value="9"
                       onChange={(event) => handleChange(event, q.id)}/>9
                      <input key="10" type="radio" name={q.id} value="10"
                       onChange={(event) => handleChange(event, q.id)}/>10
                    </div> 
                    <br/>
                    <div>
                      <textarea style={{'width': '100%','height': '10vh'}} 
                      name="comment"
                      onChange={(e)=>setComment(e.target.value)}>
                      </textarea>
                    </div> 
                    <br/>
                    
                    <div>
                  <Button variant="contained" style={{'backgroundColor':'#66CDAA', 'width': '30%'}} onClick={handleClick}>
                  SUBMIT
                  </Button>
                </div> 
                    
                    
                </div>
                ))}

                
                
        
        
       
       
        
    </div>
  );
}


export default GiveAnswer;