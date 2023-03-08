import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import Header from './components/Header'
import Body from './components/Body'
import Slideshow from './components/Slideshow'
import InfiniteSlider from './components/Carousel'


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Header />
    <Slideshow />
    <InfiniteSlider />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
    <Body />
  </React.StrictMode>,
)
