import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { CartProducts } from "./components/CartProducts";
import { Button } from "./components/Button";

function App() {
  const [products, setProducts] = useState([]);
  const [Search, setSearch] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  function handleClick(item) {
    if (item !== undefined && currentSale.includes(item)) {
      alert("Produto já adicionado no carrinho!");
    } else {
      setCurrentSale([...currentSale, item]);
    }
  }

  function removeProduct(item) {
    const remove = currentSale.filter((product) => {
      return product !== item;
    });

    setCurrentSale([...remove]);
  }

  function PriceProducts() {
    const priceAll = [];

    currentSale.forEach(({ price }) => {
      priceAll.push(price);
    });

    const some = priceAll.reduce((acc, value) => {
      acc += value;

      return acc;
    }, 0);

    return some;
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((Response) => Response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <Header products={products} Search={Search} setSearch={setSearch} />

      <div className="container">
        {Search.length > 0 ? (
          <h1 className="resultProducts">
            Resultados para: <span className="searchText">{Search}</span>
          </h1>
        ) : (
          <h1 className="resultProducts"> </h1>
        )}

        <ul className="vitrine">
          <Products
            handleClick={handleClick}
            products={products}
            Search={Search}
          />
        </ul>

        <div className="cart">
          <div>
            <h2>Carrinho de compras</h2>
          </div>
          <ul>
            {currentSale.length > 0 ? (
              <div>
                <CartProducts
                  currentSale={currentSale}
                  removeProduct={removeProduct}
                />

                <div className="totalPrice">
                  <span className="totalText">Total</span>

                  <span className="priceNumber">
                    R$ {Math.round(PriceProducts()).toFixed(2)}
                  </span>
                </div>

                <Button
                  className="removeAll"
                  onClick={() => setCurrentSale([])}
                >
                  Remover todos
                </Button>
              </div>
            ) : (
              <div className="positionBag">
                <div className="bagEmpty">
                  <span className="msgEmpty">Sua sacola está vazia</span>
                  <span className="msgEmptyTwo">Adicione itens</span>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
