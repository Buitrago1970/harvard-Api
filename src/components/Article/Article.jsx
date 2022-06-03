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
  const imagesF =(item) => {
    try {
      if(item.images.length === 0){
        return <h1>No se encontraron imagenes </h1>
      }else{
        if(item.images[0].baseimageurl){
         return <img src={item.images[0].baseimageurl}></img>
          }else{
           return <img src={`${item.images[0].iiifbaseuri}/full/full/0/default.jpg`}> </img>
          }
      }
    } catch (error) {
      return null
    }

  }
  return (
  <>
  
          {images.length > 1 && images.map((itemArray)=>(
            itemArray.map((item) =>(
              <Styledarticle >
              <h1>{item.title}</h1>
              <Styledfigure>
              {imagesF(item)}
                <StyledFigcaptionContainer>
                <figcaption>{item.dated}</figcaption>
                <figcaption>{item.classification}</figcaption>
              </StyledFigcaptionContainer>
            </Styledfigure>
            </Styledarticle>
            ))
          ))}
</>
  
  )
}
