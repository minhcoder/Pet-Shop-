import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import DogsPage from './components/Dogs';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { CartContext } from './components/CartContext';
function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  const [isError, setError] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return await res;
    }
    getData().then((res) => setAllDogs(res.data));
    getData().catch((err) => setError(true));
  }, []);
  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <NavBar />
        <section className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dogs"
              element={<DogsPage allDogs={allDogs} isError={isError} />}
            />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </section>
      </Router>
    </CartContext.Provider>
  );
}
export default App;
