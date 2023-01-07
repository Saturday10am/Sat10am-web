import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Event() {
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
            <Box>
            <Lists>
                <Links>
                    <Link to='/'>
                        <li class="event">Past Events</li>
                    </Link>
                    <Link to='/'>
                        <li class="event">Future Events</li>
                    </Link>   
                </Links>    
            </Lists>
            
                <ELinks>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>  
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                    <div>
                    <a href='#'>
                        <h2>Speaker's name</h2>
                        <p>short description</p>
                    </a>
                    </div>
                </ELinks>    

            </Box>
        </Container>
    )
}

export default Event

const Container = styled.div`
    margin-top:100px;
    width: 100vw;
    // overflow-x: hidden;
    overflow-y: hidden; 
`;

const Box = styled.div`
align-items: center;
`
const ELinks = styled.div `
    display: grid;
    grid-template-columns:20% 20% 20% 20% 20% ;
    justify-content: space-between;
    div{
        margin: 1rem;
        height:15rem;
        background-image: linear-gradient(rgba(0, 0, 0, 1.514),rgba(0, 0, 0, 0.514)),url("https://th.bing.com/th/id/OIP.dINd997VS5LZ-KdFaY2ewQHaE7?pid=ImgDet&rs=1");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
    a{
        text-decoration: none;
        color: grey;
    }
    a:hover{
        color: white;
        font-size: large;
        transition: 0.5s;
    }
`
const Links = styled.div`
    display: flex;
    justify-content:space-around;
    li{
        overflow: visible;
        z-index:1;
    }

    li::after{
        content: "";
        width: 0%;
        height: 2px;
        background: tomato;
        display: block;
        margin: auto;
        transition: 0.5s;
    }
    li:hover::after{
        width: 100%;
        height: 3px;
    }
`

const Link = styled.div `
font-size: 2rem;
font-weight:bold;
padding: 20px;
    li{
        list-style: none;
        cursor: pointer;
        letter-spacing: 2px;
    }
`
const Lists = styled.div `
    align-items: center;  
`
   


