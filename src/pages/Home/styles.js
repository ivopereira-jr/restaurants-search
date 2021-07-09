import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
`;

export const Logo = styled.img`
  margin-bottom: 1rem;
`;

// quando for estilizar componente ele vai entre parentes como o slider aki
export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 1.875rem;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.812rem;
  margin: 1rem 0;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.812rem;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.625rem;
`;

export const ModalContent = styled.p`
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.187rem;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.625rem;
`;
