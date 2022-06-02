import React from 'react'
import styled from 'styled-components'
import image from "../../images/1.jpeg"
// styles
const Styledarticle = styled.article`
border: 1px solid #000;
border-bottom: none;
padding: 10px;
background: white;

`
const Styledfigure = styled.figure`
  margin:0;
  display: flex;
  flex-direction: column;
  align-items: center;
    img{
      width: 96%;
      margin: 15px 0;
      border-radius: 5px;
    }
`
const StyledFigcaptionContainer = styled.div`
text-align: center;
    color: #979797;
    figcaption{
      margin-bottom: 3px;
    }
    `
export default function Article({images}) {
  console.log(images);
  return (
    <Styledarticle >
          {images.length > 1 && images.map((itemArray)=>(
            itemArray.map((item) =>(
              <>
              <h1>{item.id}</h1>
            <Styledfigure>
              <img src={image} alt=""></img>
              <StyledFigcaptionContainer>
                <figcaption>1908.3</figcaption>
                <figcaption>Sculpture</figcaption>
              </StyledFigcaptionContainer>
            </Styledfigure>
              </>
            ))
          ))}

  </Styledarticle>
  )
}
