import TweetsPage from './components/tweets/TweetsPage'
import './App.css';
import Button from './components/shared/Button'

function App() {
  return (
    <div className="App">
      <TweetsPage />
      <Button variant="primary" onClick={event => console.log(event)}>Click me!!</Button>
      <Button variant="secundary" onClick={event => console.log(event)}>Click me!</Button>
      <Button variant="primary" disabled onClick={event => console.log(event)}>Click me!</Button>

    </div>
  );
}

export default App;
