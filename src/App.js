
import { Button,Container,Row ,Col} from 'react-bootstrap';
import './App.css';
import Hello from './component/Hello';
import NavBar from './component/NavBar';
import Product from './component/Product';
import SearchBox from './component/SearchBox';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Product/>
     <Hello/>
    </div>
  );
}

export default App;
