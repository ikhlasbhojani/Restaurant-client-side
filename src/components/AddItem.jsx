import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export default function AddItem() {
  const [image, setImage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Image:', image);
    console.log('Product Name:', productName);
    console.log('Category:', category);
    console.log('Price:', price);

    // Reset form after submission
    setImage('');
    setSelectedImage(null);
    setProductName('');
    setCategory('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': { m: '20px 0px', width: '100%' },
          border: '1px solid grey',
          borderRadius: '10px',
          width: '50%',
          padding: '20px'
        }}
      >
        <h2 className='form-heading'>Add Item</h2>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <label htmlFor="upload-image">
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <div
              style={{
                width: '200px',
                height: '200px',
                border: '2px dashed grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              ) : (
                <span>Choose File</span>
              )}
            </div>
          </label>
        </div>
        <TextField
          label="Product Name"
          variant="outlined"
          value={productName}
          onChange={handleProductNameChange}
        />
        <TextField
          select
          label="Category"
          variant="outlined"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value="pizza">Pizza</MenuItem>
          <MenuItem value="burger">Burger</MenuItem>
          <MenuItem value="roll">Roll</MenuItem>
          <MenuItem value="fries">Fries</MenuItem>
          <MenuItem value="sandwich">Sandwich</MenuItem>
        </TextField>
        <TextField
          label="Price"
          type="number"
          variant="outlined"
          value={price}
          onChange={handlePriceChange}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Item
        </Button>
      </Box>
    </form>
  );
}
