import { useState } from 'react';
import { FormContainer, Input } from './Form.styled';

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
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button type="submit" disabled={!query}>
        Search
      </button>
    </FormContainer>
  );
};
