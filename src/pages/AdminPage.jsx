import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddItem from "../components/AddItem"

export default function CenteredTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = (index) => {
    switch (index) {
      case 0:
        return <AddItem/>;
      case 1:
        return <div>Item Two Content</div>; // Replace with your desired component for Item Two
      case 2:
        return <div>Item Three Content</div>; // Replace with your desired component for Item Three
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Add Item" />
        <Tab label="Show Items" />
        <Tab label="Cart Orders" />
      </Tabs>
      <Box sx={{ p: 3 }}>{renderTabContent(value)}</Box>
    </Box>
  );
}
