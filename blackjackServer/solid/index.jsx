import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from "solid-js";

function List(props) {  
  return <ul>
    { props.items.map(item => <li>{item}</li>) }
  </ul>
}

function App() {
  let colors = ["red", "blue", "green"];

  let [ count, setCount ] = createSignal(1);
  let [ animals, setAnimals] = createSignal(["cat","dog","froggy","pig"]);
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Hello World {count()}!!!
        </p>
        <List items={animals()}></List>
        <List items={colors}></List>
      </header>
      <button onClick={() => {
        // let anis = animals();
        // anis.push("Boat");
        // setAnimals(anis);
        setAnimals([animals(), "Goat"])
      //  animals.push("capybara");
        console.log(animals());
        setCount(count() + 1);
      }}>AddSomething</button>
    </div>
  );
}

export default App;
