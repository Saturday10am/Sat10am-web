import React from 'react';
import styled from 'styled-components';

const KeySpeaker = ({title1, img1, description1}) => {
  return (
    <SpeakerOdd>
        <img src={img1}/>
        <SpeakerDetail>
            <h2>{title1}</h2>
            <p>{description1}</p>
        </SpeakerDetail>
    </SpeakerOdd>
  )
}

export default KeySpeaker;

const SpeakerOdd = styled.div`
margin-top: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
  img{
    width: 400px;
    height: 400px;
  }
  
`
const SpeakerDetail = styled.div`
    h2{
        text-align: center;
    }
    p{
    width: 500px;
    font-size: 19px;
    line-height: 25px;
    margin-top: 26px;
   }
`
