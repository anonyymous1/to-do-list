import './App.css';
import MyList from './MyList';

function App(props) {
  console.log(props.sally);
  return (
    <div className="App">
      <MyList jeremyList={props.sally} />
    </div>
  );
}

export default App;