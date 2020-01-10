import styled, {css} from 'styled-components';


export const CardContainer = styled.div`
width: 20%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
margin-top: 0em !important;
position: relative;
border: none !important;
@media screen and (max-width: 800px) {
    width: 65%;
}
`
export const ImageContainer = styled.img`
width: 100%;
height: 95%;
background-size: cover;
background-position: center;
`

export const CardBodyContainer = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
font-family: 'Neuton', serif !important;
text-align: center;
margin-bottom: 5% !important;
border: none !important;
`

export const NameContainer = styled.div`
width: 90%;
`

export const PriceContainer = styled.div`
width: 10%;
`