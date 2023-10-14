import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 20px;
`;
export const Item = styled.li`
  border: 2px solid #000;
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  margin-bottom: 10px;
`;
export const Span = styled.span`
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
