import styled from 'styled-components';
import React, {useState}from 'react';


interface ItemProps {
    setQuant: React.Dispatch<React.SetStateAction<number>>;
  }

export default function Item ({ setQuant }: ItemProps) {
    const [quantity, setItemQuantity] = useState(0);

  
    const handleIncrement = () => {
      setItemQuantity(quantity + 1);
 
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setItemQuantity(quantity - 1);

      }
    };

    const handlePlus = () => {
        setQuant(quantity);
      };

    return (
       
        <Main>
          
            <Information>
                <Company>
                    Sneaker Company
                </Company>
                <Name>
                    Fall Limited Edition Sneakers
                </Name>
                <About>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </About>
            </Information>

            <NumberContainer>
                <PriceDiv>
                    <Price>
                        $125.00
                    </Price>
                    <Percent>
                        50%
                    </Percent>
                </PriceDiv>
                <Discunt>
                    250$            
                </Discunt>

            </NumberContainer>
            <ButParent>
                <ButtonDiv>
                    <Button onClick={handleDecrement}>
                        <img src="/assets/images/icon-minus.svg" alt="" />
                    </Button>
                    <Span>{quantity}</Span>
                    <Button onClick={handleIncrement}>
                        <img src="/assets/images/icon-plus.svg" alt="" />
                    </Button>
                </ButtonDiv>
                <OrangeButton onClick={handlePlus}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fill-rule="nonzero"/></svg>
                    <p>
                        Add to cart
                    </p>
                </OrangeButton>
            </ButParent>
        </Main>
    )
}
const breakpoints = {
    small: '375px',
    large: '1440px',
};
const OrangeButton = styled.button`
    width: 32.7rem;
    height: 5.6rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: #FF7E1B;
    box-shadow: 0px 20px 50px -20px #FF7E1B;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-style: hidden;
    cursor: pointer;

    color: #FFF;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 1.6rem;
    &:hover {
        opacity: 0.75;
        
        transition: background-color 0.3s, color 0.3s, transform 0.2s; 
    
    }
    @media (min-width: ${breakpoints.large}) {
        width: 27.2rem;
        margin-top: 0;
}
`
const Span = styled.span`
    color: #1D2026;
    text-align: center;
    font-family: 'Kumbh Sans';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Button = styled.button`
    width: 1.2rem;
    height: 3.332px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    border-style: hidden;
    cursor: pointer;
    &:hover {
        transform: scale(1.1); /* Scale the button slightly on hover */
        transition: background-color 0.3s, color 0.3s, transform 0.2s; 
    }

`
const ButtonDiv = styled.button`
    width: 32.7rem;
    height: 5.6rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: #F6F8FD;
    border-style: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2.2rem 2.4rem 1.8rem;
    margin-top: 2.7rem;
    @media (min-width: ${breakpoints.large}) {
        width: 157px;
        height: 56px;
        flex-shrink: 0;
        margin-top: 0;
}
`
const ButParent = styled.div`
    @media (min-width: ${breakpoints.large}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 3.2rem;
        gap: 1.6rem;
}
`
const Discunt = styled.p`
    color: #B6BCC8;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 2.6rem; /* 162.5% */
    text-decoration-line: line-through;
`
const Percent = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51px;
    height: 27px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #FFEEE2;

    color: #FF7E1B;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Price = styled.p`
    color: #1D2026;
    font-family: 'Kumbh Sans';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const PriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    align-items: baseline;
`
const NumberContainer = styled.div`
    display: flex;
    width: 32.5rem;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2.4rem;
    align-items: center;
    @media (min-width: ${breakpoints.large}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.1rem;
        width: 44.4rem;
}
  
`
const Company = styled.p`
    color: #FF7E1B;
    font-family: 'Kumbh Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.846px;
    text-transform: uppercase;
    @media (min-width: ${breakpoints.large}) {
        font-size: 1.3rem;
        letter-spacing: 0.2rem;
}
`

const Name = styled.h1`
    color: #1D2026;
    font-family: 'Kumbh Sans';
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.2rem; /* 114.286% */
    @media (min-width: ${breakpoints.large}) {
        font-size: 4.4rem;
        line-height: 4.8rem; /* 109.091% */ 
    
}
`
const About = styled.p`
    color: #69707D;
    font-family: 'Kumbh Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem; /* 166.667% */
    width: 32.5rem;
    @media (min-width: ${breakpoints.large}) {
        width: 44.4rem;
}

`
const Information = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    gap: 1.9rem;
    width: 32.7rem;
    height: fit-content;
     @media (min-width: ${breakpoints.large}) {
        width: 44.4rem;
        gap: 3.2rem;
}
   
`
const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.4rem;
    @media (min-width: ${breakpoints.large}) {
        float: right;
        padding-top: 15.2rem;
        width: 44.4rem;
}
`