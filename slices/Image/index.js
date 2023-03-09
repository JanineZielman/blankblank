import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => {
  return(
    <section className='images-section'>
      {slice.items.map((item,i) => {
        console.log(item)
        return(
          <div className={`image ${item.size}`}>
            {item.size == 'main' ?
              <PrismicNextImage
                field={item.image} 
                alt={item.image.alt}
                width={item.image.dimensions.width}
                height={item.image.dimensions.height}
              />
            : 
              <PrismicNextImage
                field={item.image} 
                alt={item.image.alt}
                width={item.image[item.size].dimensions.width}
                height={item.image[item.size].dimensions.height}
              />
            }
          </div>
        )
      })}
    </section>
  )
}

export default Image