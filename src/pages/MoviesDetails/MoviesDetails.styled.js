import styled from 'styled-components';

export const MainDiv = styled.div`
  margin: 0 30px;
`;
export const Poster = styled.img`
  width: 300px;
  margin-right: 30px;
`;
export const BackLink = styled.p`
  margin: 15px 0;
  font-size: 24px;
`;
export const InformationDiv = styled.div`
  display: flex;
`;
export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const OverviewText = styled.div`
  max-width: 900px;
`;
export const InformationText = styled.h2`
  margin: 10px 0;
`;
export const InformationList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;
export const InformationItem = styled.ul`
  font-weight: 700;
`;
export const ErrorMsg = styled.div`
  padding: 30px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
