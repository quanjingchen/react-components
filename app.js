// TODO
const { useState } = React;

const groceryItems = ['Milk', 'Apple', 'Banana'];

const App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList items={groceryItems} />
  </div>
);
const GroceryList = (props) => (
  <div>
    {props.items.map((item) => <GroceryListItem item={item} />)}


  </div>
);

const GroceryListItem = (props) => {
  console.log(useState);
  const [isDone, setIsDone] = useState(false);
  const style = { textDecoration: isDone ? 'line-through' : 'none' };
  return (
    <li style={style} onClick={() => setIsDone(!isDone)}>
      {props.item}
    </li>);
};


ReactDOM.render(<App />, document.getElementById("app"));
