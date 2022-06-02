import * as React from "react"
import image from "../images/1.jpeg"
import styled from 'styled-components'
import "./css/Global.css"

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

// markup
const IndexPage = () => {
  return (
    <>
      <header>
        <h1>hardvard</h1>
        {/* <nav>
          buscador
        </nav> */}
      </header>
      <main>
        <section>
          <Styledarticle >
            <h3>Funerary Relief of a Woman and Two Children</h3>
            <Styledfigure>
              <img src={image} alt=""></img>
              <StyledFigcaptionContainer>
                <figcaption>1908.3</figcaption>
                <figcaption>Sculpture</figcaption>
              </StyledFigcaptionContainer>
            </Styledfigure>
          </Styledarticle>
          <Styledarticle >
            <h3>Funerary Relief of a Woman and Two Children</h3>
            <Styledfigure>
              <img src={image} alt=""></img>
              <StyledFigcaptionContainer>
                <figcaption>1908.3</figcaption>
                <figcaption>Sculpture</figcaption>
              </StyledFigcaptionContainer>
            </Styledfigure>
          </Styledarticle>
          <Styledarticle >
            <h3>Funerary Relief of a Woman and Two Children</h3>
            <Styledfigure>
              <img src={image} alt=""></img>
              <div>
                <figcaption>1908.3</figcaption>
                <figcaption>Sculpture</figcaption>
              </div>
            </Styledfigure>
          </Styledarticle>
          <Styledarticle >
            <h3>Funerary Relief of a Woman and Two Children</h3>
            <Styledfigure>
              <img src={image} alt=""></img>
              <div>
                <figcaption>1908.3</figcaption>
                <figcaption>Sculpture</figcaption>
              </div>
            </Styledfigure>
          </Styledarticle>
        </section>
      </main>

    </>
  )
}

export default IndexPage
