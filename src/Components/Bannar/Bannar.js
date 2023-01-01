import React from 'react'
import { Carousel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Footer from '../Footer'

const Bannar = () => {
  return (
    <>
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://static-01.daraz.com.bd/p/11896e7e6b88a137e775bb952101a903.jpg"
            alt="Search"
            width="700"
            height="600"
          />
          <Carousel.Caption>
            <h3>High Quality</h3>
            {'Best Quality Exported Jerseys. To Buy Click '}<Button variant="success">Buy Now</Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://en-ae.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw29730c38/sss/SSS2/A/D/H/F/2/SSS2_ADHF2159_4065429261148_4.jpg?sw=700&sh=700&sm=fit"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
            <h3>Best in Febrics</h3>
            {'Best Febrics are ensured. To Buy Click '}<Button variant="success">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://media.karousell.com/media/photos/products/2014/06/25/brazil_black_kit_world_cup_jersey_1403703970_3e647537.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
            <h3>Just in Price</h3>
            {'Get the Best in Best Price. To Buy Click '}<Button variant="success">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://diamu.com.bd/wp-content/uploads/2022/08/Real-Madrid-Third-Player-Jersey-2022-23.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
          <h3>Quickest delivery</h3>
            {'Wear your desire jersey in quickest hour. To Buy Click '}<Button variant="success">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://jerseyocean.com/wp-content/uploads/2021/09/manchester-united-cup-third-authentic-shirt-2021-22-with-ronaldo-7-printing_ss4_p-12093063pv-1u-woxkz6v4kobaw91c1hipv-59d495c3e7234b68bf9e39885921f65a.webp"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
          <h3>Easy To Order</h3>
            {'Order your jersey in a few clicks. To Buy Click '}<Button variant="success">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7ad9a516036c0c8b/6139b89e2518cf79b4a39022/2a47606f6950e1775f427d3a5875bcb3d11fd25b.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
          <h3>Best Offer</h3>
            {'Have the best offers for your kits. To Buy Click '}<Button variant="success">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Bannar
