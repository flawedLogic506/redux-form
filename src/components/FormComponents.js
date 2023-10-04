import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 5%;
  background: #f9f9f9;


  form {
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;

    @media only screen and (max-width: 846px) {
      width: 100%;
      padding: 10px;
    }
  }
`

export const Form = styled.form`
  width: ${props => props.$doubleField ? '50%' : '100%'}
  margin: 0 auto;
  padding: 25px;
  background: #f9f9f9;
  border-radius: 10px;

  @media only screen and (max-width: 846px) {
    width: 100%;
    padding: 2px 10px;
    min-height: 100vh;
  }
`

export const Input = styled.input`
  width: 100%;
  margin: 5px 2px;
  height: 40px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 0.5em;
  font-size: 16px;
  
  &::placeholder {
    font-size: 16px;
  }

  @media only screen and (max-width: 846px) {
    width: 85%;
    margin: 5px auto;
  }
`

export const SelectInput = styled(Input).attrs({
  type: 'select'
})`
  width: 102%;
  height: 45px;

  @media only screen and (max-width: 846px) {
    width: 89%;
  }
`

export const TextareaInput = styled(Input).attrs({
  type: 'textarea'
})`
  height: 100px;
  width: 100%;

  @media only screen and (max-width: 846px) {
    width: 85%;
  }

`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 846px) {
    flex-direction: column;
  }
`

export const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CustomError = styled.div`
  width: 100%;
  color: red;

  @media only screen and (max-width: 846px) {
    padding-left: 20px;
  }
`

export const Button = styled.button`
  width: 103%;
  height: 40px;
  border: none;
  background: #4890d9;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-transform: uppercase;

  @media only screen and (max-width: 846px) {
    width: 89%;
    margin: 5px auto;
  }
`