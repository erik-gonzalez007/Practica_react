import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Card from './components/Card'
import Hero from './components/Hero'
import Footer from './components/Footer'
import GameDescription from './components/GameDescription'
import RelatedTags from './components/RelatedTags'
import AboutItems from './components/AboutItems'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GameDescription />
      <RelatedTags />
      <AboutItems />
      <Footer/>
      
      {/* Content */}
      <div className="p-75 grid grid-cols-3 gap-4">

        <Card
          img="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/3e02f426bc2340bcbd14c3652a11a748_1024"
          title="Producto 2"
          description="Este es el segundo producto"
        />
        <Card
          img="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/d9729108ab5f40e1a3cfecd5803c227c_1024"
          title="Producto 3"
          description="Este es el tercer producto"
        />
        <Card
          img="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/4fb655312ece4a68af431e8f3fb31243_1024"
          title="Producto 3"
          description="Este es el tercer producto"
        />
      </div>
    </>
  )
}

export default App

