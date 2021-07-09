import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  max-height: calc(100% - 144px);
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;
