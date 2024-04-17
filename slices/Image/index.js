import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => {
  let fade = slice.primary.fade
  return(
    <>
    {fade ?
      <section className={`images-section columns-${slice.primary.columns}`} style={{'paddingTop': '200px', 'paddingBottom': '200px', 'background': `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${slice.primary.background_color} 20%, ${slice.primary.background_color} 80%, rgba(255,255,255,0) 100%)`}}>
        {slice.items.map((item,i) => {
          return(
            <div className={`image ${item.size}`} key={`image${i}`}>
              { (item.size == 'main' || item.size == null) ?
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
                  width={item.image[item.size]?.dimensions.width}
                  height={item.image[item.size]?.dimensions.height}
                />
              }
            </div>
          )
        })}
      </section>
    :
      <section className={`images-section columns-${slice.primary.columns}`} style={{'backgroundColor': slice.primary.background_color}}>
        {slice.items.map((item,i) => {
          return(
            <div className={`image ${item.size}`} key={`image${i}`}>
              { (item.size == 'main' || item.size == null) ?
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
                  width={item.image[item.size]?.dimensions.width}
                  height={item.image[item.size]?.dimensions.height}
                />
              }
            </div>
          )
        })}
      </section>
    }
    </>
  )
}

export default Image