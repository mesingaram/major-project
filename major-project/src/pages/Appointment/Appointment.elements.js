import styled from 'styled-components';

export const Container = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;
export const Subscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
  width: 1000px;
`;
export const SubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 42px;
  text-align: center;
`;

export const SubHeading2 = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 40px;
`;

export const SubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const SubText2 = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;