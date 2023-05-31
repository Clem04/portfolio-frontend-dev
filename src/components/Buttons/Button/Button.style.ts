import styled from 'styled-components';

export const StyledButton = styled.button<{ 
  width: string, 
  backgroundColor: string,
  color: string,
  fontFamily: string,
  fontWeight: string
}>`
  width: ${(props) => props.width};
  padding: 16px 24px;
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.backgroundColor}};
  border-radius: 50px;
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: 1rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
