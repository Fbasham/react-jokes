import './App.css';
import Title from './components/Title'
import Joke from './components/Joke'

function App() {
  return (
    <div className="App">
      <Title titleName='React Jokes'/>
      <Joke />
    </div>
  );
}

export default App;
