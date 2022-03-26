// import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h2 className='name'>P<span>C</span> House</h2>
      <Shop></Shop>
      <div className='question-ans'>
      <h3>How React Work:</h3>
        <p>A JavaScript library response for building user interfaces. Feedback Document Object Model Dom keeps a separate copy called virtualDom. And it works faster than the real dom. The response simply compares the real dom with the virtual dom. And with the help of algorithms, we decide where our markup has changed. Renders only the thing that has changed the element without rendering the entire dom and shows the distance</p>
        
        <h3>Props Vs State:</h3>
        <h5>State:</h5>
        <p>The state is dynamic storage that can be used to store or store data inside our components. State changes can be asynchronous. Contains information about state variables and state elements. It cannot be accessed by child material.</p>
        <h5>Props</h5>
        <p>Props are the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

          Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component Props read only. Props are immutable. It lets data move from one element to another. Props are immutable so we can't change props from inside the material</p>
      </div>
    </div>
  );
}

export default App;
