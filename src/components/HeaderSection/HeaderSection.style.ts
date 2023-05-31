import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../assets/svg/icons/arrow_down.svg';
import { ReactComponent as LocationIcon } from '../assets/svg/icons/location.svg';
import { fadeInAnimation, BouncingAnimation } from '../Shared/Animation';

export const Name = styled.p<{ 
  isvisible: boolean, 
  color: string, 
  topSection: string 
}>`
  width: 100%;
  color: ${(props) => props.color};
  font-family: ${(props) => props.topSection};
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  ${props => fadeInAnimation(props.isvisible)}
  @media (max-width: 414px) {
    font-size: 4em;
  }
`;

export const Profession = styled.p<{ 
  isvisible: boolean, 
  color: string 
}>`
  width: 100%;
  color: ${(props) => props.color};
  font-size: 2rem;
  ${props => fadeInAnimation(props.isvisible)}
  @media (max-width: 414px) {
    font-size: 1.6rem;
  }
`;

export const CertificationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Certification = styled.p<{ 
  isvisible: boolean, 
  color: string 
}>`
  margin: 0 0 0 24px;
  font-family: 'Inria Serif';
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  color: ${(props) => props.color};
  ${props => fadeInAnimation(props.isvisible)}

  @media (max-width: 1024px) {
    width: 38%;
    margin: none;
    text-align: right;
  }
`;

export const LocationDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Location = styled.p<{ 
  isvisible: boolean, 
  color: string 
}>`
  width: 100%;
  font-family: 'Jaldi';
  text-align: right;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 61px;
  color: ${(props) => props.color};
  ${props => fadeInAnimation(props.isvisible)}
  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const IconLocation = styled(LocationIcon)<{ isvisible: boolean }>`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  ${props => fadeInAnimation(props.isvisible)}
  @media (max-width: 414px) {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
`;

export const ArrowDownIcon = styled(ArrowDown)`
  width: 32px;
  height: 32px;
  animation: ${BouncingAnimation} 1s infinite;
  &:hover{
    cursor: pointer;
  }
`;
