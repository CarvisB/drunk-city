import Carousel from 'react-bootstrap/Carousel';
import { alchoholData } from '../data/alcohol';
import './home.css'


export default function Home() {
  const carouselDrinks = alchoholData
  .filter(d => d.featured)
  .slice(0, 3)

  const categories = Array.from(
    new Map(
      alchoholData.map(item => [item.category, item])
   ). values()
  );

  return (
    <div>
      <Carousel>
        {carouselDrinks.map(drink => (
          <Carousel.Item key={drink.id}>
            <img
              className='d-block w-100'
              src={drink.image}
              alt={drink.brand}
            />
            <Carousel.Caption>
              <h3>{drink.title}</h3>
              <p>{drink.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="intro-box">
        <h2 className='logo'>First Pour</h2>
        <p>Your destination for discovering quality spirits, curated selections, and timeless favorites. 
          Whether you’re celebrating a milestone or unwinding after a long day, we believe the first pour 
          sets the tone for the entire experience.</p>
      </div>
      <div className="cate" style={{ padding: "2rem", textAlign: "center"}}>
        <h2 className='category-head'>Drinks</h2>
        <div className="displays">
          {categories.map(cat => (
            <div className='category-card' key={cat.category}>
              <img src={cat.image} alt={cat.category}/>
              <h3>{cat.category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
