import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../assets/svg/icons/arrow_down.svg';
import { ReactComponent as LocationIcon } from '../assets/svg/icons/location.svg';
import { fadeInAnimation, BouncingAnimation } from '../Shared/Animation';

export const Name = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.topSection};
  font-size: 121px;
  font-style: normal;
  font-weight: 400;
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
`;

export const Profession = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
`;

export const CertificationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Certification = styled.p`
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
`;

export const IconLocation = styled(LocationIcon)`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  animation: ${fadeInAnimation('0', '1')} 3s ease-out forwards;
`;

export const ArrowDownIcon = styled(ArrowDown)`
  width: 32px;
  height: 32px;
  animation: ${BouncingAnimation} 1s infinite;
  &:hover{
    cursor: pointer;
  }
`;
