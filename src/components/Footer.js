import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
        <Container>
            <FtrHead>
                <FtrContent>
                    <Head>
                    <img src='./Images/10am-logo.png' alt=''/>
                    </Head>
                </FtrContent>
                <FtrContent>
                    <Heading>About</Heading>
                    <Para>
                       
                        <p>we aim to provide students with valuable</p>
                        <p> knowledge of different domains which</p>
                        <p> broadens their perspectives and aids</p>
                        <p> them in deciding on the best course of action.</p>
                    </Para>
                </FtrContent>
                <FtrContent>
                    <Heading>Useful Links</Heading>
                    <Links>
                    <Link className='sample' style={{textDecoration: 'none'}} to='/'>
                        <li>- Home</li>
                    </Link>
                    <Link className='sample' style={{textDecoration: 'none'}} to='/event'>
                        <li>- Events</li>
                    </Link>
                    <Link className='sample' style={{textDecoration: 'none'}} to='/about'>
                        <li>- About us</li>
                    </Link>
                    <Link className='sample' style={{textDecoration: 'none'}} to='/contactus'>
                        <li>- Contact us</li>
                    </Link>
                    </Links>
                </FtrContent>
            </FtrHead>
            <Handles>
                <a href='https://instagram.com/saturday10am_nmims_shirpur?igshid=YmMyMTA2M2Y='><Instagram className='socials'></Instagram></a>
                <a href='https://www.linkedin.com/in/saturday10amnmimsshirpur'><LinkedIn className='socials'></LinkedIn></a>
                <a href='https://youtube.com/channel/UCEW89lXibVWN1FQhKN8c8zg'><Youtube className='socials'></Youtube></a>
                <a href='https://github.com/Saturday10am'><Github className='socials'></Github></a>
            </Handles>
        </Container>
    </>
  )
}

export default Footer

const Container = styled.div `
    padding: 45px;
    margin-top: 30px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background-color: #181B2A;
    /* background-color: #9b0a11; */
    margin-bottom: 0px;
`
const FtrHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const FtrContent = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    color: #f8f9fe;
    img{
        height: 183px;
        cursor: pointer;
    }
    h2{
        padding: 10px;
        color: #f8f9fe;
    }
    p{
        color: #f8f9fe;
    }
    li{
        list-style: none;
        color: #f8f9fe;
        line-height: 25px;
    }
    li:hover{
        color: #ea1d27;
        transition: cubic-bezier(0.215, 0.610, 0.355, 1);
    }
`
const Head = styled.div `

`
const Links = styled.div`
    cursor: pointer;
`

const Para = styled.div`
    line-height: 22px;
`
const Heading = styled.div`
    margin-bottom: 30px;
    font-weight: 700;
`
const Handles= styled.div`  
    margin-top: 30px;
    border: 2px solid rgba(255,255,255,.2);
    border-right: none;
    border-left: none;
    padding: 40px;
    margin: 170px;
    margin-top: 40px;
    margin-bottom: 0;
    color: #f8f9fe;
    display: flex;
    justify-content: center;
    align-items: center;
    .socials{
        padding: 30px;
        padding-top: 0;
        padding-bottom: 0;
        color: white;
    }
    .socials:hover{
        color: #ea1d27;
        transition: cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    a:visited{
        color: white;
    }
`
const Instagram = styled(InstagramIcon)`
    cursor: pointer;
`
const LinkedIn = styled(LinkedInIcon)`
    cursor: pointer;
`
const Youtube = styled(YouTubeIcon)`
    cursor: pointer;
`

const Github = styled(GitHubIcon)`
    cursor: pointer;
`