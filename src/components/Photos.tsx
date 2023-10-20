import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react';
import styled from 'styled-components';

interface Popup {
    popup: boolean;
    setPopup: Dispatch<SetStateAction<boolean>>;
  }

export default function Photos(props: Popup) {
    const pictures =['/assets/images/big-shoes.jpg', '/assets/images/big-shoes2.jpg','/assets/images/big-shoes3.jpg', '/assets/images/big-shoes4.jpg' ];
    const picturesSmall =['/assets/images/small-shoes.jpg', '/assets/images/small-shoes2.jpg','/assets/images/small-shoes3.jpg', '/assets/images/small-shoes4.jpg' ];

    const [changeImage, setChangeImage] = useState(0);

    const handleNext = () => {
        setChangeImage((prevImage) => (prevImage + 1) % pictures.length);
      };
    
      const handlePrev = () => {
        setChangeImage((prevImage) => (prevImage - 1 + pictures.length) % pictures.length);
      };
    return (
        <>
        <Body>
            {props.popup ?  <ButtonPrev onClick={handleNext}>
                <img src="/assets/images/icon-previous.svg" alt="" />
            </ButtonPrev> : null}
           

            {props.popup ?  <CloseIcon src='/assets/images/icon-close.svg' onClick={() => props.setPopup(false)}>
                </CloseIcon> : null}
            <ImageContainer onClick={() => props.setPopup(true)}>
               
               
                <Img src={pictures[changeImage]} alt="sneaker-shoe" />
            </ImageContainer>
            {props.popup ?  <ButtonNext onClick={handlePrev}>
                <img src="/assets/images/icon-next.svg" alt="" />
            </ButtonNext> : null}
           

            <SmallImagesContainer>
                {picturesSmall.map((photo, index) => {
                    return ( 
                        <Images key={index} src={photo} alt="" onClick={() =>{
                            setChangeImage(index);
                        }}>
                        </Images>
                        )         
                    })}
            </SmallImagesContainer>
        </Body>

        </>
      )}

const breakpoints = {
        small: '375px',
        large: '1440px',
    };
const CloseIcon = styled.img`
    float: right;
    width: 1.3rem;
    cursor: pointer;
    position: relative;
    right: -20rem;
    top: 2rem;

`

const Images = styled.img`
    cursor: pointer;
    width: 88px;
    height: 88px;
    flex-shrink: 0;
    border-radius: 10px;
    :hover{
        border-radius: 10px;
        border: 2px solid #FF7E1B;
        opacity: 0.5;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
    }
`
const SmallImagesContainer = styled.div`
    display: none;
    @media (min-width: ${breakpoints.large}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 44.5rem;
        gap: 3.1rem;
    }
`
const Img = styled.img`
        width: 37rem;
        height: 30rem;
    @media (min-width: ${breakpoints.large}) {
        width: 44.5rem;
        height: 44.5rem;
        flex-shrink: 0;
        border-radius: 15px;
        background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}
`
const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: ${breakpoints.large}) {
        float: left;
        margin-top: 9rem;
        margin-left: 12rem;
        flex-direction: column;
        gap: 3.2rem;
}
`
const ImageContainer = styled.div`
    height: 30rem;
    @media (min-width: ${breakpoints.large}) {
        flex-direction: column;
        width: 44.5rem;
        height: 44.5rem;
        flex-shrink: 0;
        cursor: pointer;
}
`
const ButtonNext = styled.button`
    position: relative;
    right: 5rem;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 50%;
    border-style: none;
    @media (min-width: ${breakpoints.large}){
        top: -26.4rem;
    right: -19.3rem;

    }


`
const ButtonPrev =styled.button`
    position: relative;
    right: -5rem;
     width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 50%;
    border-style: none;
    @media (min-width: ${breakpoints.large}){
        top: 33rem;
    right: 19rem;
    }
  
`
    