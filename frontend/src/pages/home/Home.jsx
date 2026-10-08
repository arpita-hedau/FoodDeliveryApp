import React, { useContext, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router'

const Home = () => {

  const [category, setCategory] = useState("All")

  const { cartItems } = useContext(StoreContext)

  const navigate = useNavigate()

  const totalItems = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  )

  return (
    <div>
      <Header />

      <ExploreMenu
        category={category}
        setCategory={setCategory}
      />

      <FoodDisplay category={category} />

      <AppDownload />

      {totalItems > 0 && (
        <button
          className="go-to-cart"
          onClick={() => navigate('/cart')}
        >
          Go to Cart ({totalItems})
        </button>
      )}

    </div>
  )
}

export default Home