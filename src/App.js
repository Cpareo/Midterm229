import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm() {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setIsSubmitted(true);
  };

  const handleCancel = () => {
    setFormState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted && <div>Form Submitted!</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formState.description} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formState.category} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={formState.quantity} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formState.price} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default ProductForm;
