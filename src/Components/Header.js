import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerStatus, useburgerStatus] = useState(false);
    return (
        
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="">Model S</a>
                <a href="">Model 3</a>
                <a href="#">Model Y</a>
                <a href="#">Model X</a>
                <a href="#">Solar Panels</a>
                <a href="#">Solar Roofs</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <CustomMenu onClick={()=>useburgerStatus(true)}>Menu</CustomMenu>
            </RightMenu>
            <BurgerMenu show={burgerStatus}>
                <CloseWrap>
                         <CustomClose onClick={()=>useburgerStatus(false)}/>
                </CloseWrap>
                
                <li><a href="#">Exsisting Inventory</a></li>
                <li><a href="#">used Inventory</a></li>
                <li><a href="#">Trade In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Power Wall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Inverstor Relation</a></li>
            </BurgerMenu>
            
        </Container>
    )
}

export default Header

const Container=styled.div `
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu=styled.div `
display:flex;
align-items:center;
justify-content:center;
flex:1;
a {
    font-weight:30px;
    padding: 0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`

const RightMenu=styled.div `
display:flex;
align-items:center;
        a {
        font-weight:30px;
        padding: 0 10px;
        flex-wrap:nowrap;
        }
`
const CustomMenu=styled.div `
cursor:pointer;
`
const BurgerMenu =styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
text-align:start;
transform: ${props =>props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.2s;
li {
    padding:10px 0 10px 5px;
 

}
`
const CustomClose=styled(CloseIcon) `
cursor:pointer;
`

const CloseWrap = styled.div `
 display:flex;
 justify-content:flex-end;
`