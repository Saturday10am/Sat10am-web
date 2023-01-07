import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Container>
            <Carousel {...settings}>
                    <Wrap>
                        <img src="/images/poster.jfif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/images/poster.jfif" alt="" />
                    </Wrap>
            </Carousel>
        </Container>
    )
}

export default ImageSlider

const Container = styled.div`
    width: 100vw;
    // overflow-x: hidden;
    /* overflow-y: hidden;  */
    height: 100%;
    /* z-index: 0; */
`;

const Carousel = styled(Slider)`
    margin-top: 100px;
    width: 100%;
    overflow-y: hidden;
    .slick-next{
        right: 50px;
    }
    .slick-prev{
        left: 50px;
        z-index: 10;
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-prev:before, .slick-next:before{
        font-family: 'slick';
        font-size: 27px;
        line-height: 1;
        opacity: 13.75;
        color: white;
        height: 25px;
        width: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-prev, .slick-next{
        width: 33px;
        height: 38px;
    }
    .slick-dots{
        background-color: white;
        bottom: -5px;
        position: relative;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`
