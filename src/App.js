import Navbar from './Navbar';
import Answer from './Answer';
import QuestionList from './QuestionList';
import Survey from './Survey';
import CreateQuestion from './CreateQuestion';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/">
              <Survey/>
            </Route>
            <Route exact path="/questions">
              <QuestionList/>
            </Route>
            <Route path="/answer/:id">
              <Answer/>
            </Route>
            <Route path="/create">
              <CreateQuestion/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
