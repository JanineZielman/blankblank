import Head from "next/head";
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import React, {useEffect} from "react";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";


const Index = ({ navigation, settings, home }) => {
  useEffect(() => {
    $( function() {
      const dragItems = document.getElementsByClassName('drag');
      for (let i = 0; i < dragItems.length; i++) { 
        var random1 = Math.floor(Math.random() * 20);
        var random2 = Math.floor(Math.random() * 20);
        document.getElementById(`drag${i}`).style.marginLeft = random1 + 'vw'
        document.getElementById(`drag${i}`).style.marginTop = random2 + 'vh'
      }
    } );
  }, [])
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <div className="container">
        <div className="drag-container">
          {home.data.project.map((item, i) => {
            console.log(item.title)
            return(
              <div className={`drag ${item.position} ${item.title.length > 0 ? 'small' : 'big'}`} id={`drag${i}`} key={`drag${i}`}>
                <PrismicLink field={item.link}>
                  <PrismicNextImage field={item.image}/>
                  <PrismicRichText field={item.title}/>
                </PrismicLink>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const home = await client.getSingle("homepage");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      navigation,
      settings,
      home
    },
  };
}
