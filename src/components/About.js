import React from 'react'
import styled from 'styled-components'
function About(){
    return(
        <div>
            <TEAMIMAGE>
                <img src='/images/poster.jfif' class='teamimg'></img>
            </TEAMIMAGE>
            <ABOUT>
                <p><b>About Us</b></p>
            </ABOUT>
            <UNDERLINEABOUT>
                <span></span>
            </UNDERLINEABOUT>
            <CONTENT>
                <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy and typesetting industry.
                    Lorem Ipsum is simply dummy and typesetting industry. Lorem Ipsum is simply dummy and 
                    typesetting industry and typesetting industry.
                    Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy and typesetting industry.
                    Lorem Ipsum is simply dummy and typesetting industry. Lorem Ipsum is simply dummy and typesetting industry.
                    Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy and typesetting industry.Lorem Ipsum is simply dummy and 
                    typesetting industry. Lorem Ipsum is simply dummy and typesetting industry.</p>
            </CONTENT>
            <TEAM>
                <p><b>Our Team</b></p>
            </TEAM>
            <UNDERLINETEAM>
                <span></span>
            </UNDERLINETEAM>
            <HEAD>
                <p>Head</p>
                <div class="head">
                    <img src='https://images.collegedunia.com/public/college_data/images/logos/NMINS%20Logo.png'
                        alt="Avatar" class="headimg"></img>
                    <div class="headmiddle">
                        <div class="headtext">Raj Bharadwaj</div>
                    </div>
                </div>
            </HEAD>    
            <COHEAD>
                <p>Co-Heads</p>
                <div class='cohead1'>
                    <img src='https://images.collegedunia.com/public/college_data/images/logos/NMINS%20Logo.png' 
                        alt="Avatar" class="cohead1img"></img>
                    <div class="cohead1middle">
                        <div class="cohead1text">Name1</div>
                    </div>
                </div>
                <div class='cohead2'>
                    <img src='https://images.collegedunia.com/public/college_data/images/logos/NMINS%20Logo.png' 
                        alt="Avatar" class="cohead2img"></img>
                    <div class="cohead2middle">
                        <div class="cohead2text">Name2</div>
                    </div>
                </div>
            </COHEAD>
            <TECHNICAL>
            <p>Technical Co-Heads</p>
                <div class='techcohead1'>
                    <img src='https://images.collegedunia.com/public/college_data/images/logos/NMINS%20Logo.png' 
                        alt="Avatar" class="techcohead1img"></img>
                    <div class="techcohead1middle">
                        <div class="techcohead1text">Kurush Desai</div>
                    </div>
                </div>
                <div class='techcohead2'>
                    <img src='https://images.collegedunia.com/public/college_data/images/logos/NMINS%20Logo.png' 
                        alt="Avatar" class="techcohead2img"></img>
                    <div class="techcohead2middle">
                        <div class="techcohead2text">Vasu Chaudhary</div>
                    </div>
                </div>
            </TECHNICAL>
        </div>
    )
}
export default About

const TEAMIMAGE = styled.div`
    .teamimg{
        margin-top:100px;
        width:100%;
    }
`
const ABOUT = styled.div`
    p{
        font-family: roboto;
        margin-top:55px;
        margin-left:65px;
        font-size:2rem;
    }  
`
const UNDERLINEABOUT = styled.div`
display: flex;
     span{
      width: 120px;
      height: 7px;
      display: inline-block;
      color: red;
      background-color: red;
      margin-top: -4px;
      margin-left: 4.5%;
    }
`
const CONTENT = styled.div`
    p{
        font-family: roboto;
        margin-left:65px;
        margin-top:50px;
        line-height:1.5;
        font-size:1.1rem;
        justify-content: space-evenly;
        align-items:center; 
        display:flex;
    }
`
const TEAM = styled.div`
    p{
        font-family: roboto;
        font-size:2rem;
        margin-left:43%;
        margin-top:160px;
    }
`
const UNDERLINETEAM = styled.div`
display: flex;
     span{
      width: 125px;
      height: 7px;
      display: inline-block;
      color: red;
      background-color: red;
      margin-top: -4px;
      margin-left: 43.5%;
    }
`
const HEAD = styled.div`
    p{
        font-size:1.5rem;
        margin-left:45%;
        margin-top:80px;
        margin-bottom:30px;
        font-family: roboto;
    }
    .head{
        position:relative;
        width:20%;
        margin-left:33.5%;
    }
    .headimg{
        opacity:1;
        display:block;
        width:150px;
        height:150px;
        transition:.5s ease;
        backface-visibility:hidden;
        margin-left:42%;
    }
    .headmiddle{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center; 
        margin-left:50px;
    }
    .head:hover .headimg{
        opacity:0.3;
    }
    .head:hover .headmiddle{
        opacity:1;
    }
    .headtext{
        background-color:#be2223;
        color:white;
        font-size:16px;
        padding:16px 32px;
        font-family: roboto;
    }
`

const COHEAD = styled.div`
    p{
        font-size:1.5rem;
        margin-left:43.5%;
        margin-top:200px;
        margin-bottom:20px;
        font-family: roboto;
    }
    .cohead1{
        position:relative;
        margin-top:40px;
        width:20%;
        margin-left:15.5%;
    }
    .cohead1img{
        opacity:1;
        display:block;
        width:150px;
        height:150px;
        transition:.5s ease;
        backface-visibility:hidden;
        margin-left:42%;
    }
    .cohead1middle{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center; 
        margin-left:50px;
    }
    .cohead1:hover .cohead1img{
        opacity:0.3;
    }
    .cohead1:hover .cohead1middle{
        opacity:1;
    }
    .cohead1text{
        background-color:#be2223;
        color:white;
        font-size:16px;
        padding:16px 32px;
        font-family: roboto;
    }
    .cohead2{
        position:relative;
        margin-top:-150px;
        width:20%;
        margin-left:50.5%;
    }
    .cohead2img{
        opacity:1;
        display:block;
        width:150px;
        height:150px;
        transition:.5s ease;
        backface-visibility:hidden;
        margin-left:42%;
    }
    .cohead2middle{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center; 
        margin-left:50px;
    }
    .cohead2:hover .cohead2img{
        opacity:0.3;
    }
    .cohead2:hover .cohead2middle{
        opacity:1;
    }
    .cohead2text{
        background-color:#be2223;
        color:white;
        font-size:16px;
        padding:16px 32px;
        font-family: roboto;
    }
`

const TECHNICAL = styled.div`
    p{
        font-size:1.5rem;
        margin-left:40.5%;
        margin-top:200px;
        margin-bottom:20px;
        font-family: roboto;
    }
    .techcohead1{
        position:relative;
        margin-top:40px;
        width:20%;
        margin-left:15.5%;
    }
    .techcohead1img{
        opacity:1;
        display:block;
        width:150px;
        height:150px;
        transition:.5s ease;
        backface-visibility:hidden;
        margin-left:42%;
    }
    .techcohead1middle{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center; 
        margin-left:50px;
    }
    .techcohead1:hover .techcohead1img{
        opacity:0.3;
    }
    .techcohead1:hover .techcohead1middle{
        opacity:1;
    }
    .techcohead1text{
        background-color:#be2223;
        color:white;
        font-size:16px;
        padding:16px 32px;
        font-family: roboto;
    }
    .techcohead2{
        position:relative;
        margin-top:-150px;
        width:20%;
        margin-left:50.5%;
    }
    .techcohead2img{
        opacity:1;
        display:block;
        width:150px;
        height:150px;
        transition:.5s ease;
        backface-visibility:hidden;
        margin-left:42%;
    }
    .techcohead2middle{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center; 
        margin-left:50px;
    }
    .techcohead2:hover .techcohead2img{
        opacity:0.3;
    }
    .techcohead2:hover .techcohead2middle{
        opacity:1;
    }
    .techcohead2text{
        background-color:#be2223;
        color:white;
        font-size:16px;
        padding:16px 32px;
        font-family: roboto;
    }
`
