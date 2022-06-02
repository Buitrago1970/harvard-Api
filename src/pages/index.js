import * as React from "react"

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

async function getArtWorks() {
  const { data } = await api('/Image?page=76');
  const images = data.records;
  debugger
}
getArtWorks()

// markup
const IndexPage = () => {
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
          <Article />
        </section>
      </main>
    </>
  )
}

export default IndexPage
