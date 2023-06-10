import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories/categories';
import About from './components/About/about';

function App() {
  return (
    <div className="App">
     <Login />
     <Categories />
     <About/>
    </div>
  );
}

export default App;
