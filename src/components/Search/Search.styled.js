import styled from "styled-components";

export const SearchBox = styled.div`
/* background-color: transparent;
    border: 2px solid black;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 1rem;
    color: white;

    &:focus {
        outline: 0;
    background-color: black;
    }

    &:placeholder {
        color: white;
    } */
    .search{
    background-color: transparent;
    border: 2px solid var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 1rem;
    color: white;
  }

  .search:focus{
    outline: 0;
    background-color: var(--primary-color);
  }
  .search::placeholder{
    color: white;
  }
`