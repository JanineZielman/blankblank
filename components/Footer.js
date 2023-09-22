import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";


export const Footer = ({ settings }) => {
  return (
    <footer className="footer">
      {settings.data.footer.map((item, i) => {
        return(
          <div>
            <PrismicRichText field={item.text}/>
          </div>
        )
      })}
    </footer>
  );
};
