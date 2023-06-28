import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;

  margin: 0 auto;
  heigth: 100%;
  display: flex;
  border-bottom: 1px solid rgb(105, 105, 105);
`;

export const BackLink = styled(Link)`
  background-color: #000;
  text-decoration: none;
  color: rgb(255, 238, 1);
  font-size: 20px;
  display: inline-flex;
  padding: 5px 5px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid rgb(105, 105, 105);

  :hover {
    color: #fff;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 4px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const MovieInfoContainer = styled.div`
  margin-left: 15px;
`;

export const Сriteria = styled.p`
  font-family: 'Andale Mono', monospace;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Details = styled.p`
  font-family: 'Andale Mono', monospace;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: dimgrey;
  line-height: 30px;
`;

export const Average = styled.span`
  display: inline-block;
  color: rgb(255, 238, 1);
  background-color: #000;
  border-radius: 5px;
  padding: 1px 10px;
  font-weight: 500;
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 15px;

  background-color: #000;
  text-decoration: none;
  color: rgb(255, 238, 1);
  border-radius: 5px;
  padding: 2px 10px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;

  :hover,
  :focus,
  :active {
    color: #fff;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  text-align: center;
`;
