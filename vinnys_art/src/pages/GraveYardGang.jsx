import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from '../assets/Day_1_2024.png'
import image2 from '../assets/Day_2_2024.png'
import image3 from '../assets/Day_4_2024.png'
import image4 from '../assets/Day_8_2024.png'
import image5 from '../assets/Day_9_2024.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'


export default function GraveYardGang() {



  return (
    <div className='graveYardGangDiv'>
      <h1>Grave Yard Gang!</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src={image1}
            text='First slide'
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            text='Second slide'
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={image3}
            text='Third slide'
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image4}
            text='Third slide'
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image5}
            text='Third slide'
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}