import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0.312rem;
  padding: 1rem;
  background-color: #fff;
  border-left: 2px solid transparent;
  transition: 600ms;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.812rem;
  margin-bottom: 0.625rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 1rem;
  line-height: 1.187rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  color: ${(props) => props.theme.colors.text};
`;

export const RestaurantPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  width: 100%;
  max-width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;
