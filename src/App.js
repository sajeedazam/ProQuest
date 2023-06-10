import './App.css';
import Login from './components/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories/categories';
import About from './components/About/about';
import City from './components/City/city';
import ProfessionalHomescreen from './components/pHomepage/phomepage.js'
 import City from './components/City/city';

function App() {
  return (
    <div className="App">
      <Login />
      <City />
      <Categories />
      <About />
      <ProfessionalHomescreen/>
    </div>
  );
}

export default App;
