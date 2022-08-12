import {useState,useRef,useEffect} from 'react';
import {Button} from '@material-ui/core';
import Answer from './Answer';

const QuestionList = () => {
    const[question, setQuestion]=useState('')
    const[questions,setQuestions]=useState([]);

    const handleClick = (e) => {
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

      const handleAnswer = (id) => {
    
    }

    



    return (
        
    <div className="question-list">
        
        <h2>All Questions</h2>
        <div>
        <a href="/create" style={{}}>Create New Question</a>
        </div>
        {questions.map(q => (
            <div className="question-preview" key={q.id} >
            <h2>{ q.question }</h2>
            
            </div>
        ))}
        
    </div>
  );
}

export default QuestionList;