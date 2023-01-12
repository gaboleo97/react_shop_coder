import logo from './logo.svg';
import './App.css';
//componentes
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Card } from './Components/Card/Card';
//dependencias
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
//services
import { getProductById, getProducts, getProductos, getProductByCategory} from "./service/asyncMock"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route path='/productos' element={<ItemListContainer/>} />
            <Route path='/productos:itemid' element={<ItemDetailContainer/>} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
        

        
      
      <br></br>
      <div className='container-fluid'>
        <div className='row'>
            <Card img={logo} title={"Card 1"} href={"/"} description={"Descripcion card 1"} btn={"Comprar"} price={"$1000"} ></Card>
            <Card img={logo} title={"Card 2"} href={"/"} description={"Descripcion card 2"} btn={"Comprar"} price={"$2000"} ></Card>
            <Card img={logo} title={"Card 3"} href={"/"} description={"Descripcion card 3"} btn={"Comprar"} price={"$3000"} ></Card>
            <Card img={logo} title={"Card 4"} href={"/"} description={"Descripcion card 4"} btn={"Comprar"} price={"$4000"} ></Card>
            <Card img={logo} title={"Card 5"} href={"/"} description={"Descripcion card 5"} btn={"Comprar"} price={"$5000"} ></Card>
            <Card img={logo} title={"Card 6"} href={"/"} description={"Descripcion card 6"} btn={"Comprar"} price={"$6000"} ></Card>
            <Card img={logo} title={"Card 7"} href={"/"} description={"Descripcion card 7"} btn={"Comprar"} price={"$7000"} ></Card>
            <Card img={logo} title={"Card 8"} href={"/"} description={"Descripcion card 8"} btn={"Comprar"} price={"$8000"} ></Card>
        </div>
      </div>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
