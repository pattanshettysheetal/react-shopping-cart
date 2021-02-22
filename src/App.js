//geature 1
import { useState } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';
const App = () => {
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState(data.products);
  const filterProducts = (event) => {
    if (event.target.value == '') {
      setProducts(data.products);
      setSize(event.target.value);
    } else {
      setSize(event.target.value);
      setProducts(
        data.products.filter((prod) => prod.availableSize.indexOf(event.target.value) > 0),
      );
    }
  };
  const sortProducts = (event) => {
    setSort(event.target.value);
    setProducts(
      data.products.sort((a, b) =>
        sort == 'lowest'
          ? a.price < b.price
            ? 1
            : -1
          : sort == 'highest'
          ? a.price > b.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1,
      ),
    );
  };
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Iems</div>
        </div>
      </main>
      <footer>All right</footer>
    </div>
  );
};

export default App;
