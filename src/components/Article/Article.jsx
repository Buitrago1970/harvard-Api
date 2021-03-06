import React from "react";
import styled from "styled-components";
// styles
const Styledarticle = styled.article`
  border: 1px solid #000;
  border-bottom: none;
  padding: 10px;
  background: white;
`;
const Styledfigure = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 96%;
    margin: 15px 0;
    border-radius: 5px;
  }
`;
const StyledFigcaptionContainer = styled.div`
  text-align: center;
  color: #979797;
  figcaption {
    margin-bottom: 3px;
  }
`;
export default function Article({ images }) {
  const getImages = (item) => {
    try {
      if (item.images.length === 0) {
        return null;
      } else {
        if (item.images[0].baseimageurl) {
          return <img src={item.images[0].baseimageurl}></img>;
        } else {
          return (
            <img src={`${item.images[0].iiifbaseuri}/full/full/0/default.jpg`}>
              {" "}
            </img>
          );
        }
      }
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      {images.length > 1 &&
        images.map((itemArray) =>
          itemArray.map((item) => (
            <Styledarticle key={item.id}>
              <h1>{item.title}</h1>
              <a href={item.url} target="_blank">
                <Styledfigure>
                  {getImages(item)}
                  <StyledFigcaptionContainer>
                    <figcaption>{item.dated}</figcaption>
                    <figcaption>{item.classification}</figcaption>
                  </StyledFigcaptionContainer>
                </Styledfigure>
              </a>
            </Styledarticle>
          ))
        )}
    </>
  );
}
