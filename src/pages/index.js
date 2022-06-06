import * as React from "react"
import { useState, useEffect } from "react";

import { device } from '../device/device';

import styled from 'styled-components'
import Article from "../components/Article/Article"
import ArticleSearch from "../components/ArticleSearch/ArticleSearch"
import axios from 'axios';

import "./css/Global.css"



const api = axios.create({
  baseURL: 'https://api.harvardartmuseums.org',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'apikey': '04ff7f1b-fba1-49cc-bc70-84573e5e0ef6',
  },
});

//Styles

const StyleSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  button{
    min-height: 100px;
    font-size: 20px;
    border: 2px solid #000000;
min-height: 100px;
font-size: 20px;
  }
@media ${device.tablet} { 
  display: initial;
        }


`
const StyleContainerTitle = styled.div`
padding: 10px;
color: #747474;
font-size: 20px;
display: flex;
    justify-content: space-between;
  p{
    margin: 0;
  }
`
const StyleContainerForm = styled.div`
margin: 10px 0;
form{
  width: 100%;
    display: flex;
    justify-content: center;
}
  input{
    width: 95%;
      height: 40px;
      border: 2px solid #000;
      font-size: 16px;
      padding-left: 10px;
  }
`
// markup
const IndexPage = () => {
  const [images, setImages] = useState([])
  const [imagesSearch, setimagesSearch] = useState([])
  const [loading, setLoading] = useState(true)
  const [imageSearch, setLoaimageSearch] = useState(false)
  const [search, setSearch] = useState('')


  useEffect(() => {
    getArtWorks()
  }, [loading])

  async function getArtWorks() {
    const array = images
    var min_page = 1;
    var max_page = 7;
    var page = Math.floor(Math.random() * (max_page - min_page + 1) + min_page);

    var min = 1;
    var max = 10;
    var size = Math.floor(Math.random() * (max - min + 1) + min);
    const { data } = await api(`/gallery?page=${page}&size=${size}`);
    const galleryid = data.records[0].galleryid
    const info = await api(`/object?galleryid=${galleryid}`)

    for (let i = 0; i <= 2; i++) {
      var min_page = 1;
      var maxPageObject = info.data.info.pages
      var pageObject = Math.floor(Math.random() * (maxPageObject - min_page + 1) + min_page);

      var min = 1;
      var max = 10;
      var size = Math.floor(Math.random() * (max - min + 1) + min);
      const objects = await api(`/object?galleryid=${galleryid}&page=${pageObject}&size=${size}`)
      array.push(objects.data.records)
    }
    setLoading(false)
    setImages(array)
  }
  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const response = await api(`/object?title=${search}`)
      setimagesSearch(response.data.records)
      setLoaimageSearch(true)

    }
  }

  return (
    <>
      <header>
        <StyleContainerTitle>
          <div>
            <p>Harvard /</p>
            <p>API</p>
          </div>
          <div>
            <a href="https://juan-buitrago.netlify.app" target="_blank">
              <p>By</p>
              <p>juanbui</p>
            </a>

          </div>

        </StyleContainerTitle>
        <nav>
          <StyleContainerForm>
            <form className="container-serch">
              <span className="icon">
              </span>
              <input
                type="text"
                placeholder="Gallery Numbers, Artist, Key"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDownCapture={handleSearch}
              />
            </form>
          </StyleContainerForm>

        </nav>
      </header>
      <main>
        <StyleSection>
          {imageSearch &&
            <ArticleSearch images={imagesSearch} search={search} />
          }
          <Article images={images} loading={loading} />
          <button onClick={() => setLoading(true)}>
            Cargar mas
          </button>
        </StyleSection>
      </main>
    </>
  )
}

export default IndexPage
