import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./Curosel.css"

export function Curosel() {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false
  }

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])

  const images = [
    "https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/04/18/19/16/jaguar-1337201_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/07/28/22/28/barn-owl-2550068_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/10/15/14/58/cheetah-3749168_1280.jpg"
  ]

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="embla__slide__img"
            />
          </div>
        ))}
      </div>
      <p className='moving'>This is the Animal slide  of the image  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus omnis et? Deleniti officia molestiae veritatis quas enim,
         consectetur excepturi?</p>
    </div>



  )
}
