import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";

const Text = ({ slice }) => {
  let fade = slice.primary.fade
  
  const [fadeDirection, setFadeDirection] = useState()

  useEffect(() => {
    if (slice.primary.fade_direction == 'Top'){
      setFadeDirection(`linear-gradient(180deg, ${slice.primary.background_color} 70%, rgba(255,255,255,0) 100%)`);
    } 
    if (slice.primary.fade_direction == 'Middle'){
      setFadeDirection(`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${slice.primary.background_color} 20%, ${slice.primary.background_color} 80%, rgba(255,255,255,0) 100%)`);
    }
    if (slice.primary.fade_direction == 'Bottom'){
      setFadeDirection(`linear-gradient(0deg, ${slice.primary.background_color} 70%, rgba(255,255,255,0) 100%)`);
    }
    if(slice.primary.fade_direction == undefined){
      setFadeDirection (`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${slice.primary.background_color} 20%, ${slice.primary.background_color} 80%, rgba(255,255,255,0) 100%)`);
    }
  })

  return (
    <>
    {fade ?
      <div className="text-section" style={{'background': `${fadeDirection}`}}>
        {prismicH.isFilled.richText(slice.primary.text) && (
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <PrismicRichText field={slice.primary.text} />
          </div>
        )}
      </div>
      :
      <div className="text-section" style={{'backgroundColor': slice.primary.background_color}}>
        {prismicH.isFilled.richText(slice.primary.text) && (
          <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
            <PrismicRichText field={slice.primary.text} />
          </div>
        )}
      </div>
      }
    </>
  );
};

export default Text;
