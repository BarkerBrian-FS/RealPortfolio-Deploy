import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './emblaCarouselArrowButtons'
import cryptoWatch from '../videos/cryptoWatch.mp4'
import asteroids from '../videos/asteroids.mp4'
import './emblaCarousel.css'
import spaceBgProject from '../images/spaceBgProject.jpg'


const EmblaCarousel = (props) => {
    const options = { loop: false }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const slides = [{ src: asteroids, title: 'Asteroid Game' },
    { src: cryptoWatch, title: 'CryptoWatch' }]
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='emblaCarousel' class='bg' style={{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBgProject})`}}>
      <div className="embla" >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slides, index) => (
              <div className="embla__slide" key={index}>
              <div className = 'title'>{slides.title}</div>
                <video controls width="250"
                  className="embla__slide__img"
                  src={slides.src}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel

const styles = {
  backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBgProject})`,
}
