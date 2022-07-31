import './App.css';

function Home(){
  return(
    <span>
      <button>Home</button>
    </span>
  )
}

function About(){
  return(
    <span>
      <button>About</button>
    </span>
  )
}

function Nav(){
  return (
    <div>
      <Home />
      <About />
    </div>
  )
}

function Search(){
  return(
    <form>
      <input type="text" placeholder='Search...' />
    </form>
  )
}

function Cocktails(){
  return(
    <p>
      list cocktails
    </p>
  )
}

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src="https://craftandcocktails.co/wp-content/uploads/2020/05/COFFEE-BEAN-BAMBOO-COCKTAIL-5-520x400.jpg" alt="logo" />
        <p>
          Mixer Mixer
        </p>
        <p>
          A CockTale Sharing Community
        </p>
      </header>
      <Search />
      <Cocktails />
    </div>
  );
}

export default App;
