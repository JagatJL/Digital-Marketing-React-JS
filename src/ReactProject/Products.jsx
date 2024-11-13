import React, { useState } from 'react';
import './Products.css';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'SEO Services', description: 'Boost your website traffic with our expert SEO strategies.', price: 100 },
    { id: 2, name: 'Social Media Marketing', description: 'Grow your brand with targeted social media campaigns.', price: 150 },
    { id: 3, name: 'Email Marketing', description: 'Reach your audience with personalized email marketing.', price: 200 }
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Add or update product
  const handleAddOrUpdateProduct = () => {
    if (isEditing) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }
    setNewProduct({ name: '', description: '', price: '' });
    axios.post('http://localhost:5000/products', products);
  };

  // Edit product
  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Delete product
  const handleDeleteProduct = (index) => {
    const filteredProducts = products.filter((_, i) => i !== index);
    setProducts(filteredProducts);
  };

  return (
    <div className="product-details-container">
      <h1 className="heading">Product Details</h1>

      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price for Advertising"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOrUpdateProduct}>
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </div>

      <div className="products-section">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price for Ad: ${product.price}</p>
            <button onClick={() => handleEditProduct(index)}>Edit</button>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
