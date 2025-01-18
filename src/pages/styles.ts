import styled from "styled-components";

export const Tables = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (max-width: 600px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    padding: 0 32px;
  }
`;

export const ContentTables = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 700px;
`;
