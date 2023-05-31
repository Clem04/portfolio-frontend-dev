import styled from 'styled-components';

export const StyledButton = styled.button<{ 
  width: string, 
  backgroundColor: string,
  color: string,
  fontFamily: string
}>`
  width: ${(props) => props.width};
  padding: 16px 24px;
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.backgroundColor}};
  border-radius: 50px;
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  text-align: center;
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }
`;
