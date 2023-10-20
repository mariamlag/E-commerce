import  {useState}  from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import { Dispatch, SetStateAction } from 'react';


interface HeaderProps {
    quant: number;
    setQuant: Dispatch<SetStateAction<number>>;
  }

export default function Header({ quant, setQuant }: HeaderProps) {
    const navigate = ["Collections", "Men", "Women", "About", "Contact"];
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCart = () => {
      setIsCartVisible(!isCartVisible);
    };
    return ( 
        <>
        <Body>
            <BurgerLogoDiv>
                <BurgerIcon src="/assets/images/icon-menu.svg"
                onClick={ () => setBurgerMenu(!burgerMenu)}>
                </BurgerIcon>
                <Logo src='/assets/images/logo.svg'>

                </Logo>
                <List>
                {navigate.map((item, index) => {
                    return ( 
                            <ul>
                                <Li key={index}>
                                    {item}
                                </Li>
                            </ul>
                    )
                })}
            
            </List>
            </BurgerLogoDiv>

            
          
            <CardImgDiv>
                    <Card src="/assets/images/icon-cart.svg"
                    onClick={toggleCart}>
                    
                    </Card>
                    {isCartVisible && <Cart quant={quant} setQuant={setQuant}/>}
           
                    <Number>{quant}</Number>
                    <Picture src="/assets/images/image-avatar.png">

                    </Picture>
            </CardImgDiv>

        </Body>
        {burgerMenu && <BurgerMenu >
                <BurgerClose  src="/assets/images/icon-close.svg"
                onClick={ () => setBurgerMenu(!burgerMenu)}>
                </BurgerClose>
                {navigate.map((item, index) => {
                    return ( 
                            <BurgerDivIn>
                                <ListText key={index}>
                                    {item}
                                </ListText>
                            </BurgerDivIn>
                    )
                })}
            
            </BurgerMenu>} 
        </>
    );
    
}
const breakpoints = {
    small: '375px',
    large: '1440px',
};

const List = styled.ul`
    display: none;
    @media (min-width: ${breakpoints.large}) {
        display: flex;
        width: 397px;
        height: 26px;
        padding-right: 0px;
        justify-content: center;
        align-items: flex-start;
        gap: 32px;
        flex-shrink: 0;
        list-style: none;
       
        
    }
`
const Li = styled.li`
    
    list-style: none;
    cursor: pointer;
    padding-bottom: 4rem;
    :hover{
        border-bottom:  4px solid rgba(255, 126, 27, 1);
    }
`

const Number = styled.span`
    width: 19px;
    height: 13px;
    flex-shrink: 0;
    border-radius: 6.5px;
    background: #FF7E1B;
    text-align: center;
    position: absolute;
    

    color: #FFF;
    font-family: 'Kumbh Sans';
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    top: 1.5rem;
    right: 5.5rem;
    @media (min-width: ${breakpoints.large}) {
        top: 3.5rem;
        right: 24rem;

    }
`
const Body = styled.div`
    background-color: white;
    width: 100%;
    height: 6.8rem;
    display: flex;
    padding: 1.9rem 2.4rem 2.5rem;
    justify-content: space-between;
    @media (min-width: ${breakpoints.large}) {
        height: 8rem;
        border-bottom: 1px solid #E4E9F2;
        padding: 0;
        padding-bottom: 3.4rem;
        align-items: center;
        
        
        color: #69707D;
        font-family: 'Kumbh Sans';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 173.333% */
}

`
const BurgerMenu = styled.nav `
    width: 25rem;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 2.4rem 2.5rem; 
    gap: 1.6rem;
    top: 0;
    /* @media (min-width: ${breakpoints.large}) {
        padding: 0;
} */

`;
const ListText = styled.p`
    color: #1D2026;
    font-family: 'Kumbh Sans';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.6rem; 
    cursor: pointer;

   
`
const BurgerDivIn = styled.div`
    display: flex;
    flex-direction: column;
`
const BurgerLogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    float: left;
    align-items: center;
    gap: 1.6rem;
    @media (min-width: ${breakpoints.large}) {
        gap: 5.6rem;
}
`
const BurgerIcon = styled.img`
    width: 1.6rem;
    height: 1.5rem;
    cursor: pointer;
    @media (min-width: ${breakpoints.large}) {
        display: none;
}
`

const Logo = styled.img`
    width: 13.7rem;
    height: 2rem;
`

const CardImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    float: right;
    align-items: center;
    gap: 1.6rem;
    @media (min-width: ${breakpoints.large}) {
        gap: 3.5rem;
    }

`
const Card = styled.img`
    width: 2.1rem;
    height: 2rem;
    cursor: pointer;
`
const Picture = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 24px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    cursor: pointer;
    :hover{
        border:  2px solid rgba(255, 126, 27, 1);
    }
    @media (min-width: ${breakpoints.large}) {
        width: 5rem;
        height: 5rem;
        
}
`

const BurgerClose = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    margin-bottom: 3rem;
    cursor: pointer;
`