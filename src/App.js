import Navbar from './Navbar';
import Answer from './Answer';
import QuestionList from './QuestionList';
import CreateQuestion from './CreateQuestion';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SurveyList from './SurveyList';
import CreateSurvey from './CreateSurvey';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path="/"
            element={<SurveyList/>}
            />
            <Route exact path="/questions"
              element={<QuestionList/>}
            />
            <Route path="/answers"
              element={<Answer/>}
            />
            <Route path="/createquestion"
              element={<CreateQuestion/>}
            />
            <Route path="/createSurvey"
              element={<CreateSurvey/>}
            />


          </Routes>
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
