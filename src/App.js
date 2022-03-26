// import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h2 className='name'>P<span>C</span> House</h2>
      <Shop></Shop>
      <div className='question-ans'>
        <h3>Props Vs State</h3>
        <h5>State:</h5>
        <p>State is a dynamic storage that can be used to store data inside our components. State changes can be asynchronous. Contains information about state variables and state elements. It cannot be accessed by child material.</p>
        <h5>Props</h5>
        <p>Props read only. Props are immutable. It lets data move from one element to another. Props are immutable so we can't change props from inside the material</p>

        <h3>How React Work</h3>
        <p>The React Document Object Model Dom keeps a separate copy. One called VirtualDom, which has a real dom, works fast ৷ The response simply compares the real dom with the virtual world. And the algorithm decides where our markup has changed. The only thing that has changed is that the entire dom has been changed without checking.</p>
      </div>
    </div>
  );
}

export default App;
