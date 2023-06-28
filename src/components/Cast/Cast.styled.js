import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 16px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  padding-left: 0;
`;

export const CastItem = styled.li`
  box-shadow: 0px 0px 2px 3px rgb(105,105,105));
  border-radius: 4px;
  
`;

export const Image = styled.img`
  height: 375px;
`;

export const ActorName = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 5px;
  text-align: center;
`;

export const ActorCharacter = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: dimgrey;
  line-height: 30px;
  text-align: center;
`;

export const Notification = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: dimgrey;
  line-height: 30px;
  text-align: center;
`;
