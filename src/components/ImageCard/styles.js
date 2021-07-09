import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.312rem;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.p`
  color: #fff;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 1rem;
`;
