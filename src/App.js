import fruits from "./foods";
import { choice, remove } from "./helpers";
function App() {
  let randFruit = choice(fruits);
  console.log(`I would like one ${randFruit}, please`);
  console.log(`Here you go: ${randFruit}`);
  console.log(`Delicious may I have another?`);
  remove(fruits, randFruit);
  console.log(`I am sorry we are all out we have ${fruits.length} left`);
}

export default App;
