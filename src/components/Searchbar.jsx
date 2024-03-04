import React, { useState } from 'react';
import './styles/Searchbar-module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      alert('Please enter a search query.');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="input_form"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="btn-form">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
