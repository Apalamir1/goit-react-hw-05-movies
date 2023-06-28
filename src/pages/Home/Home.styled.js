import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  heigth: 100%;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #000;
`;
export const List = styled.ul`
  padding-left: 0px;

  display: flex;
  width: 100%;
  heigth: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MovieItem = styled.li`
  display: flex;

  margin-top: 10px;
  padding: 2px;
  font-size: 23px;
  font-weight: 400;
  font-family: 'Segoe UI';
  width: calc(50% - 10px);
  margin-bottom: 5px;

  :hover,
  :focus {
    color: #8f6f06;
  }

  ::before {
    display: flex;
    align-items: center;
  }
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
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px 32px;
  text-decoration: none;
  color: #000;
`;
