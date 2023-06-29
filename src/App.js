import React, { useState } from 'react';
import './App.css';

const App = () => {
  
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: 'Product 1',
      description: 'This is the description for Product 1.',
      imageURL: 'https://example.com/product1.jpg',
      category: 'Category 1',
      mrp: 10.99,
      purchasePrice: 7.99,
      sellingPrice: 9.99,
      unit: 'kg',
      quantity: 10,
    },
    {
      id: 2,
      productName: 'Product 2',
      description: 'This is the description for Product 2.',
      imageURL: 'https://example.com/product2.jpg',
      category: 'Category 2',
      mrp: 15.99,
      purchasePrice: 12.99,
      sellingPrice: 14.99,
      unit: 'lb',
      quantity: 5,
    },
    {
      id: 3,
      productName: 'Product 3',
      description: 'This is the description for Product 3.',
      imageURL: 'https://example.com/product3.jpg',
      category: 'Category 1',
      mrp: 8.99,
      purchasePrice: 6.99,
      sellingPrice: 7.99,
      unit: 'piece',
      quantity: 20,
    },
  ]);
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    imageURL: '',
    category: '',
    mrp: '',
    purchasePrice: '',
    sellingPrice: '',
    unit: 'kg',
    quantity: '',
  });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== -1) {
      // Update existing product
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[editIndex] = formData;
        return updatedProducts;
      });
      setEditIndex(-1);
    } else {
      // Add new product
      setProducts((prevProducts) => [...prevProducts, formData]);
    }

    setFormData({
      productName: '',
      description: '',
      imageURL: '',
      category: '',
      mrp: '',
      purchasePrice: '',
      sellingPrice: '',
      unit: 'kg',
      quantity: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
    setEditIndex(-1);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product, index) => (
            <div className="product-card" key={index} onClick={() => handleEdit(index)}>
              <img src={product.imageURL} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-mrp">MRP: {product.mrp}</p>
              <p className="product-price">Price: {product.sellingPrice}</p>
              <p className="product-quantity">Quantity: {product.quantity}</p>
            </div>
          ))
        )}
      </div>

      <h2>{editIndex !== -1 ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
          required
       />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="mrp">MRP</label>
        <input
          type="number"
          id="mrp"
          name="mrp"
          value={formData.mrp}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="purchasePrice">Purchase Price</label>
        <input
          type="text"
          id="purchasePrice"
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="sellingPrice">Selling Price</label>
        <input
          type="text"
          id="sellingPrice"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="unit">Unit</label>
        <select
          id="unit"
          name="unit"
          value={formData.unit}
          onChange={handleInputChange}
          required
        >
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="piece">piece</option>
        </select>

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
        />

        <button type="submit">{editIndex !== -1 ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default App;
