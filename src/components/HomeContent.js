import React from 'react';
import styled from 'styled-components';
import KeySpeaker from './KeySpeaker';
import KeySpeaker2 from './KeySpeaker2';
<link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>

function HomeContent() {
  return (
    <>
        <Container>
          <KeyEvents>
            <h2>Key Speakers</h2>
          </KeyEvents>
          <UnderLine>
            <span></span>
          </UnderLine>
          {/* <KeySpeakers>
            <img src="./images/Speakers/Vishal Batra.jpg" alt='Vishal Batra'/>
            <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy and typesetting industry.
            Lorem Ipsum is simply dummy and typesetting industry.
            and typesetting industry.Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy and typesetting industry.
            Lorem Ipsum is simply dummy and typesetting industry.
            and typesetting industry.Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy
            and typesetting industry.and typesetting industry.
            </p>
          </KeySpeakers> */}
          <KeySpeaker
          title1 = 'Vishal Batra'
          img1="./images/Speakers/Vishal Batra.jpg"
          description1 = "Mr. Vishal Batra is the twin brother of Captain Vikram Batra Mr. Vishal Batra is himself a phenomenal personality with experience of over 20 years in Retail Banking and Financial Services, he did his bachelors in Commerce from MFC Shimla and is now the Retail Business head in ICICI Bank and also the National Head of Defense Relationships. He has extraordinary leadership skills, so to get an essence of varied aspects of leadership, and to listen to Mr. Batra is an eminent personality famous for guiding people for the leadership qualities and all."
          />
          <KeySpeaker2
          title2 = 'Dr. Sonal Gupta'
          img2="./images/Speakers/sonal gupta.jpg"
          description2 = "Mrs. Sonal Gupta is the finest Personality development and soft skill trainer who works with spirit of Teaching Human Skills To the Future Workforce. She also guides the students for interviews, building resumes and developing the efficient mindset.DR. SONAL GUPTA has a very strong educational background in the different domains of commerce, fashion designing, and public speaking and is well versed to speak out on the different topics very confidently .In her professional experience, as a TV Anchor in the ETV Channel, a lecturer at ITM Group of Institutions, a content developer and consultant at Mettl. She has also been a personality development trainer at ITS Engineering College, Greater Noida, and now is Personality Development and Soft Skills Coach at the groom.fit in Geneva, Switzerland."
          />
          <KeySpeaker
          title1 = 'Akash Majumdar'
          img1="./images/Speakers/Akash Majumdar.jpg"
          description1 = "Mr. Vishal Batra is the twin brother of Captain Vikram Batra Mr. Vishal Batra is himself a phenomenal personality with experience of over 20 years in Retail Banking and Financial Services, he did his bachelors in Commerce from MFC Shimla and is now the Retail Business head in ICICI Bank and also the National Head of Defense Relationships. He has extraordinary leadership skills, so to get an essence of varied aspects of leadership, and to listen to Mr. Batra is an eminent personality famous for guiding people for the leadership qualities and all."
          />
        </Container>
    </>
  )
}

export default HomeContent

const Container = styled.div`
  margin-top: 30px;
    /* height: 50vh; */
    font-family: 'Lora', serif;;
`
const KeyEvents = styled.div`
  display: flex;
  justify-content: center;
      h2{
        font-size: 35px;
      }
`
const UnderLine = styled.div`
display: flex;
justify-content: center;
     span{
      width: 129px;
      height: 4px;
      display: inline-block;
      color: red;
      background-color: red;
      margin-top: 5px;
    }
`
// const KeySpeakers = styled.div`
// margin-top: 50px;
// display: flex;
// justify-content: space-evenly;
// align-items: center;
//   img{
//     width: 400px;
//     height: 400px;
//   }
//   p{
//     width: 500px;
//     font-size: 19px;
//     line-height: 25px;
//   }
// `