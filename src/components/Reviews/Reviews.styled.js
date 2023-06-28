import styled from '@emotion/styled';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  heigth: 100%;
  display: flex;
  border-bottom: 1px solid rgb(105, 105, 105);
`;
export const ReviewAuthor = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #000;

  margin-bottom: 5px;
`;

export const ReviewContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
  color: dimgrey;
  line-height: 25px;
  font-style: italic;
  letter-spacing: 0em;
`;

export const Notification = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: dimgrey;
  line-height: 30px;
  text-align: center;
`;
