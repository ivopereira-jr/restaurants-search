import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingSkeleton = styled.div`
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 0.625rem;
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
