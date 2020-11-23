import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/TopBar";
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TopBar />
      <TodoList />
    </div>
  );
}

export default App;
