import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../assets/svg/icons/arrow_down.svg';
import { ReactComponent as LocationIcon } from '../assets/svg/icons/location.svg';
import { fadeInAnimation, BouncingAnimation } from '../Shared/Animation';

export const Name = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.topSection};
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
  @media (max-width: 414px) {
    font-size: 4em;
  }
`;

export const Profession = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
  @media (max-width: 414px) {
    font-size: 1.6rem;
  }
`;

export const CertificationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Certification = styled.p`
  margin: 0 0 0 24px;
  font-family: 'Inria Serif';
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0;
  transition: opacity 0.5s;

  &.fade-in {
    animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
  }

  @media (max-width: 414px) {
    margin: none;
    width: 100%;
    text-align: right;
  }
`;

export const LocationDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Location = styled.p`
  width: 100%;
  font-family: 'Jaldi';
  text-align: right;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.white};
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const IconLocation = styled(LocationIcon)`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
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
