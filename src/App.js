import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CardItem from './components/CardsItems/CardItem';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <body>
        <CardItem titleCard="Sonor SQ1"></CardItem>
      </body>
    </div>
  );
}

export default App;
