import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.scss'
import Header from './components/Header'
import Slideshow from './components/Slideshow'
import Gallery from './components/Gallery'
import Intro from './components/Intro'
import SlideNews from './components/SlideNews'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Header />
    <Slideshow />
    <Intro/>
    <Gallery />
    <SlideNews />
  </React.StrictMode>,
)
