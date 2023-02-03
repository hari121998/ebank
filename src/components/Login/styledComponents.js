import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #152850;
  font-family: 'Roboto';
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ImageContainer = styled.div`
  display: flex;
  background-color: #e0eefe;
  width: 70%;
  border-radius: 20px;
`
export const LoginImage = styled.img`
  padding: 30px 10px;
  width: 50%;
`
export const FormContainer = styled.form`
  background-color: #ffffff;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-family: 'Roboto';
  border-radius: 20px;
`
export const LoginHeading = styled.h1`
  font-weight: 500;
  color: #183b56;
  font-size: 30px;
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #5a7184;
`

export const Input = styled.input`
  border: 1px solid #5a7184;
  padding: 10px 20px;
  font-family: 'Roboto';
  font-weight: 400;
  border-radius: 5px;
  font-size: 16px;
  margin: 8px 0 30px 0;
  outline: none;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  background-color: #1565d8;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 0 solid;
  margin: 10px 0 0 0;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
`
