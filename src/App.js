import Navbar from './Navbar';
import Answer from './Answer';
import QuestionList from './QuestionList';
import CreateQuestion from './CreateQuestion';
import GiveAnswer from './GiveAnswer';
import SurveyList from './SurveyList';
import CreateSurvey from './CreateSurvey';
import SurveyStatistics from './SurveyStatistics';
import EditSurvey from './EditSurvey';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


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
            <Route path="/giveanswer/:id"
              element={<GiveAnswer/>}
            />
            <Route path="/surveystatistics/:id"
              element={<SurveyStatistics/>}
            />
            <Route path="/editsurvey/:id"
              element={<EditSurvey/>}
            />
          </Routes>
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
