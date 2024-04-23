import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  let fade = slice.primary.fade

  return (
    <>
    {fade ?
      <div className="text-section" style={{'background': `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${slice.primary.background_color} 20%, ${slice.primary.background_color} 80%, rgba(255,255,255,0) 100%)`}}>
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
