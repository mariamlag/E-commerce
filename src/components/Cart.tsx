
import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';


interface CartProps {
    quant: number;
    setQuant: Dispatch<SetStateAction<number>>;
  }

export default function Cart({ quant, setQuant }: CartProps) {
   

   
  return (
    <Container>
            <Title>
                Cart
            </Title>

            {quant === 0 ? <Empty >
                Your cart is empty.
            </Empty>
            : <ItemContainer  >
            <Full >
                <Img src="/assets/images/small-shoes.jpg" alt="" />
                
                <FullDiv>
                    <p>Fall Limited Edition Sneakers
                    
                    </p>
                    <Div>
                        <span> $125.00 x {quant} </span>
                        <Total>${125*quant} </Total>
                    </Div>
                    
                </FullDiv>
                <Svg src="/assets/images/icon-delete.svg" alt=""  onClick={ () => setQuant(0)}/>
            </Full>
            <Button >
                Checkout
            </Button>
        </ItemContainer>}
            
            

            

    </Container>
  )
}

const breakpoints = {
    large: '1440px',
};

const Div = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: row;
`
const FullDiv = styled.div`
    
    display: flex;
    flex-direction: column;
`
const Total = styled.p`
    color: #1D2026;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; 

`
const Svg = styled.img`
    width: 1.4rem;
    height: 1.6rem;
    flex-shrink: 0;
    float: inline-end;
    cursor: pointer;
`
const Img = styled.img`
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 4px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;
`
const Full = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 1.6rem;

    color: #69707D;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
`
const Button = styled.button`
    border-style: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 312px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FF7E1B;

    color: #FFF;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Empty = styled.p`
    margin-top: 7.7rem;
    color: #69707D;
    text-align: center;
    justify-content: center;
    font-family:'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; 

`
const Title = styled.p`
    color: #1D2026;
    font-family: 'Kumbh Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 2.4rem;
    border-bottom: 1px solid #E4E9F2 ;
    height: 4.5rem;
`
const Container = styled.div`
    position: absolute;
    top: 22rem;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    padding: 2.4rem 0 3.4rem;
    width: 360px;
    height: 256px;
    flex-shrink: 0;
    border-radius: 10px;    
    background: #FFF;
    box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.50);
    justify-content: center;
    z-index: 1;
    @media (min-width: ${breakpoints.large}) {
        right: -4rem;
        left: auto;
    }
  

`
