import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  heigth: 100%;
  min-height: none;
  margin-bottom: 20px;
`;
export const MovieSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieSearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const MovieSearchIcon = styled(FcSearch)`
  width: 20px;
  height: 20px;
`;

export const MovieSearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const MovieItem = styled.li`
  font-family: 'Segoe UI';
  display: flex;
  margin-top: 10px;
  padding: 2px;
  font-size: 23px;
  font-weight: 400;

  :hover,
  :focus {
    color: rgb(128, 128, 128);
  }

  ::before {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;
export const Decorate = styled.div`
  background-color: #fff;
  heigth: 500px;
  margin-top: 800px;
`;
export const Image = styled.img`
  padding: 16px 32px;
  width: 100px;
  border-radius: 4px;
  object-fit: cover;
  margin: 0, auto;
  margin-bottom: 20px;
`;
export const MovieLink = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px 32px;
  text-decoration: none;
  color: #000;
`;
