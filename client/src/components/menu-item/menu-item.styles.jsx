import styled, {css} from 'styled-components';

export const MenuContainer = styled.div`
min-width: 30%;
align-items: center;
justify-content: center;
margin-top: 2%;
margin-bottom: 2%;
`

export const ContentContainer = styled.div`
height: 50px;
padding:0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: #000000;        ;
opacity: 0.7;
font-family: 'Neuton', serif;

&:hover {
    background-color: #333333;
}
`

export const TitleContainer = styled.div`
font-weight: bold;
margin-bottom:6px;
font-size: 22px;
color: #fff;
font-family: 'IBM Plex Serif', serif;
cursor: pointer;
`