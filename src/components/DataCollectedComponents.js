import styled from "styled-components"

export const DataDisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 20px;
  
  @media only screen and (max-width: 846px) {
    padding: 0;
  }
`

export const DataCard = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  margin: 0 auto;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 846px) {
    width: 100%;
    padding: 2px 10px;
  }
`

export const DataField = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-left: 25px;

  @media only screen and (max-width: 846px) {
    flex-direction: column;
    padding-left: 5px;
  }

`

export const ItemLabel = styled.span`
  font-size: 18px;
  padding: 10px 20px;
  
  @media only screen and (max-width: 846px) {
    padding: 10px 0; 
  }
`

export const ItemValue = styled(ItemLabel)`
  font-weight: bold;
`

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  padding: 20px 0;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Subtitle = styled(Title)`
  font-size: 18px;
  padding: 5px 0 50px 0;

  @media only screen and (max-width: 846px) {
    padding: 20px 0; 
    justify-content: flex-start;
  }
`
