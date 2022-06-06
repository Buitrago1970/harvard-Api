import React from 'react'
import styled from 'styled-components'

// styles
const Styledarticle = styled.article`
border: 1px solid #000;
border-bottom: none;
padding: 10px;
background: white;
.busqueda{
  color: red;
  font-size: 13px;
    text-align: end;
}

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
const StyleDivcontainerTextInfoArtWork = styled.div`
      width: 100%;
    text-align: center;
`
const StyleDivTextInfoArtWork = styled.div`
  display: flex;
  justify-content: center;
  word-break: break-all;
`
const StyleDivTextLink = styled.div`
word-break: break-all;
    margin: 30px 40px;
    line-height: 2;
    a{
      color: #0012ff;
    text-decoration: none;
    }
`
export default function Article({images, search}) {
  const getImages =(item) => {
    try {
      if(item.images.length === 0){
       return(
         <StyleDivcontainerTextInfoArtWork>
           <StyleDivTextInfoArtWork>
             <p>Culture: </p>
             <p>{item.culture}</p>
           </StyleDivTextInfoArtWork>
           <StyleDivTextInfoArtWork>
             <p>{item.people[0].role}: </p>
             <p>{item.people[0].name}, {item.people[0].birthplace}</p>
           </StyleDivTextInfoArtWork>
           <StyleDivTextLink>
             <p>VER IMAGEN EN:</p>
               <a href={item.url} target="_blank" >{item.url} </a>
              </StyleDivTextLink>
         </StyleDivcontainerTextInfoArtWork>
       )
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
          {images.length > 0 ? (images.map((item)=>(
              <Styledarticle key={item.id} >
                <p className='busqueda'>{'-Busqueda-'}</p>
                <h1>{item.title}</h1>
              <Styledfigure>
              {getImages(item)}
              <a href={item.url} target="_blank">
                <StyledFigcaptionContainer>
                <figcaption>{item.dated}</figcaption>
                <figcaption>{item.classification}</figcaption>
              </StyledFigcaptionContainer>
              </a>
            </Styledfigure>
           
            
            </Styledarticle>
          ))):(<h1 className='not-found'>No se Encontraron resultados para "{search}" :(</h1>)}
</>
  
  )
}