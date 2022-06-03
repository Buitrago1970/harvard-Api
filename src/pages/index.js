import * as React from "react"
import { useState, useEffect } from "react";

import Article from "../components/Article/Article"
import "./css/Global.css"
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.harvardartmuseums.org',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'apikey': '04ff7f1b-fba1-49cc-bc70-84573e5e0ef6',
  },
});
// markup
const IndexPage = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getArtWorks()
  }, [])

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

    for (let i = 0; i <= 10; i++) {
      var min_page = 1;
      var maxPageObject = info.data.info.pages
      var pageObject = Math.floor(Math.random() * (maxPageObject - min_page + 1) + min_page);

      var min = 1;
      var max = 10;
      var size = Math.floor(Math.random() * (max - min + 1) + min);

      const objects = await api(`/object?galleryid=${galleryid}&page=${pageObject}&size=${size}`)
      array.push(objects.data.records)
    }
    setImages(array)
    setLoading(false)
  }
  return (
    <>
      {/* <header>
        <h1>hardvard</h1>
        <nav>
          buscador
        </nav>
      </header> */}
      <main>
        <section>
          {loading ? (
            <h1>Cargando</h1>
          ) : (
            <Article images={images} />
          )}
        </section>
      </main>
    </>
  )
}

export default IndexPage
