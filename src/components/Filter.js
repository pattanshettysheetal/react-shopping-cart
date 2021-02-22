import React from 'react';
const Filter = ({ count, sort, size, filterProducts, sortProducts }) => {
  return (
    <div className="filter">
      <div className="filter-result">Count {count}</div>
      <div className="filter-sort">
        Order
        <select value={sort} onChange={sortProducts}>
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter
        <select value={size} onChange={filterProducts}>
          <option value="">ALL</option>
          <option value="xs">XS</option>
          <option value="xll">XLL</option>
          <option value="m">M</option>
          <option value="s">S</option>
          <option value="xl">XL</option>
          <option value="l">L</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
