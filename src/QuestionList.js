import {useState,useRef,useEffect} from 'react';
import {Button} from '@material-ui/core';
import Answer from './Answer';

const QuestionList = () => {
    const[question, setQuestion]=useState('')
    const[questions,setQuestions]=useState([]);

 

    useEffect(()=>{
        fetch("http://localhost:8080/question/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setQuestions(result);
        }
      )
      },[])





    return (
        
    <div className="question-list">
        
        <h2>All Questions</h2>
        <div>
        <a href="/createquestion" style={{}}>Create New Question</a>
        </div>
        {questions.map(q => (
            <div className="question-previeww" key={q.id} >
              <h2>{ q.question }</h2>
            
            </div>
        ))}
        
    </div>
  );
}

export default QuestionList;