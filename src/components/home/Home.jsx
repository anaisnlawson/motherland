import React from 'react'
import './home.css'
import Header from '../../containers/header/Header';
import { FacebookEmbed } from 'react-social-media-embed';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from '../wrapper/Wrapper';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';
import independence from '../../assets/togo_inde.jpeg'
import street from '../../assets/street.jpeg'
import fishing from '../../assets/fishing_boat.jpeg'
import kpalime from '../../assets/kpalime.jpeg'


const bogliasco = "https://media.istockphoto.com/id/1296846485/photo/motorbike-taxis-on-the-highway-of-avepozo-togo-west-africa.jpg?s=612x612&w=0&k=20&c=0DZ7amA3BeMDu3YQKIlVZPBJQIurZ1oQZnOvHkY4SOw=";
const countyClare = "https://media.istockphoto.com/id/1307249028/photo/vegetation-and-scenery-at-waterfall-cascade-de-kpim%C3%A9-in-kpalim%C3%A9-togo-west-africa.jpg?s=612x612&w=0&k=20&c=IDyz3jIhpgkqHvRElsnvRKZ1qEkC3Kb8ABjNXaQLMw0=";
const craterRock = "https://media.istockphoto.com/id/1301632101/photo/colorful-traditional-fishing-boats-on-the-beach-in-avepozo-togo-west-africa.jpg?s=612x612&w=0&k=20&c=_XmfBQSyibcrCXlNXjFN0vuJODKyIQLSJJNhwP6rRi4=";
const giauPass = "https://media.istockphoto.com/id/474495641/photo/independence-monument-togo.jpg?s=612x612&w=0&k=20&c=fxsmsuiFiVPHuX0p6lN5T1VGU6AYIsz6sCxozCcvAsU=";

// const Home = () => {
//   return (
   
  export default function Home() {
  return (
    <>
    
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          {/* <Title>Welcome to the Motherland Wakanda Lounge</Title> */}
          {/* <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>  */}
        </Wrapper>
      </Overlay>

      <Slide
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      {/* <MenuNav /> */}
    </HeroSlider>
    </>
  );
}
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} />
//     </div>
   
//   )
// }

// export default Home *