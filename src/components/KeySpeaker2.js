import React from 'react';
import styled from 'styled-components';

const KeySpeaker2 = ({title2, img2, description2}) => {
  return (
    <SpeakerEven>
        <SpeakerDetail>
            <h2>{title2}</h2>
            <p>{description2}</p>
        </SpeakerDetail>
        <img src={img2}/>
    </SpeakerEven>
  )
}

export default KeySpeaker2;

const SpeakerEven = styled.div`
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