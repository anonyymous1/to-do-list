import './App.css';
import ListItem from './components/ListItem'

function App(props) {
  
  let list = ["Read up on React","Learn React","Style React","$$$"]
  let listItems = list.map((listItem, idx) =>{
    return <ListItem doThis={listItem} key={idx}/>
  
  })
  return (
    <div className="App">
      <header>My List</header>
      <div>
        <ul>
          <ListItem doThis="Make a List" />
          <ListItem doThis="Make 1st Item" />
          <ListItem doThis="Make 2nd Item" />
          <ListItem doThis="Make 3rd Item" />
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
