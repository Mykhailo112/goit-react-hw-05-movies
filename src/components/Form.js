import { useState } from 'react';

export const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };
  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};
