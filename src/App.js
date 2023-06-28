import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    imageURL: '',
    category: '',
    mrp: 0,
    purchasePrice: 0,
    sellingPrice: 0,
    unit: 'kg',
    quantity: 0,
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
    } else {
      // Add new product
      setProducts((prevProducts) => [...prevProducts, formData]);
    }

    setFormData({
      productName: '',
      description: '',
      imageURL: '',
      category: '',
      mrp: 0,
      purchasePrice: 0,
      sellingPrice: 0,
      unit: 'kg',
      quantity: 0,
    });

    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    const product = products[index];
    setFormData(product);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <img src={product.imageURL} alt={product.productName} />
            <p>Category: {product.category}</p>
            <p>MRP: {product.mrp}</p>
            <p>Purchase Price: {product.purchasePrice}</p>
            <p>Selling Price: {product.sellingPrice}</p>
            <p>Unit: {product.unit}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add/Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="mrp">MRP</label>
        <input
          type="number"
          id="mrp"
          name="mrp"
          value={formData.mrp}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="purchasePrice">Purchase Price</label>
        <input
          type="text"
          id="purchasePrice"
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="sellingPrice">Selling Price</label>
        <input
          type="text"
          id="sellingPrice"
          name="sellingPrice"
          value={formData.sellingPrice}
          onChange={handleInputChange}
        />
<br></br>
        <label htmlFor="unit">Unit</label>
        <select
          id="unit"
          name="unit"
          value={formData.unit}
          onChange={handleInputChange}
        >
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="piece">piece</option>
        </select>
<br></br>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
<br></br>
        <button type="submit">{editIndex !== -1 ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default App;
