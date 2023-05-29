import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`

export const IconContainer = styled(TopSection)``

export const LinkedInDiv = styled.div`
  margin-left: 8px;
`

export const SectionHeader = styled.p`
  width: 100%;
  margin: 16px 0;
  height: fit-content;
  font-family: 'League Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  text-align: center;
  color: #063320;
`

export const Text = styled.p`
  margin-top: 40px;
  padding: 0 72px;
  font-family: 'Kai';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 24px;
  text-align: center;
  color: #000000;
`

export const ButtonContainer = styled.div`
  width: 20%;
  margin: 24px 0;
  @media (max-width: 414px) {
    width: 100%;
  }
`
