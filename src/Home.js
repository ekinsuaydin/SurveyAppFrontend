import { useState } from "react";
import QuestionList from "./QuestionList";

const Home = () => {
  const [questions, setQuestions] = useState([])

  const handleAnswer = (id) => {
    
  }

  return (
    <div className="home">
      <QuestionList questions={questions} title="All Questions" handleAnswer={handleAnswer} />
    </div>
  );
}
 
export default Home;