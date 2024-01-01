import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        width: '70%',  
        alignSelf: 'center',  
        borderRadius: 20,  
      }}
    />
  );
};

export default MyComponent;

