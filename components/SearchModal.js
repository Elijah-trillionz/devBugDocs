import {SearchButton, StyledSearchModal} from "./styles/MicroNav.styled";
import Link from "next/link";
import {useState} from "react";

const SearchModal = ({isModalActive}) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <StyledSearchModal active={isModalActive}>
      <div>
        <h3>Search SortCode</h3>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search here'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButton bg='#46A2C9' color='#fff' border='#46A2C9'>
          <Link href={`/search/${searchInput}`}>
            Search
          </Link>
        </SearchButton>
      </div>
    </StyledSearchModal>
  );
};

export default SearchModal;