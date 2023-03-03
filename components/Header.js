import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";


export const Header = ({ navigation,settings}) => {
  console.log(navigation)
  return (
    <div className="header">
      <div>
        <Link href="/">
          <PrismicText field={settings.data.name}/>
        </Link>
      </div>
      <div className="links">
        {navigation.data.links.map((item,i) => {
          return(
            <PrismicLink document={item.link} key={`link${i}`}>
              <PrismicText field={item.label}/>
            </PrismicLink>
          )
        })}
      </div>
    </div>
  );
};
