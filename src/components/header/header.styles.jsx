import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerStyles = css `
cursor: pointer;
`

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
align-items: center;
`;

export const LogoContainer = styled(Link)`
width:50px;
margin-left: 5%;
align-items: center;
`;

export const OptionsContainer = styled.div`
width: 8%;
height: auto;
display: flex;
align-items: center;
justify-content: flex-end;
background-color: #fff;
&:hover {
    background-color:#b3b3b3;
    color: red;
}
@media screen and (max-width: 800px) {
    width: 30%;
}

`;

export const OptionLink = styled(Link)`
${OptionsContainerStyles}
color: black;
text-decoration: none;
align-items: center;
text-align: center;
font-family: 'Neuton', serif;
font-size: 20px;


&:hover {
    background-color:#b3b3b3;
    color: red;
}

`;

export const OptionDiv = styled.div`
${OptionsContainerStyles}

`;