import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const ModalContent = styled.div`
  padding: 1rem;
  border-radius: 0.7rem;
  background-color: white;
  transform: scale(0.5);
  max-width: 50vw;

  &.active {
    transform: scale(1);
  }
`;
