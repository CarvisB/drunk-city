import Carousel from 'react-bootstrap/Carousel';
import { alchoholData, type Alchohol } from '../data/alcohol';



export default function Home() {
  const carouselDrinks = alchoholData
  .filter(d => d.featured)
  .slice(0, 3)

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
    </div>
  )
}
