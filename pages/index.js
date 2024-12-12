import Head from "next/head";
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect } from "react";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

const Index = ({ navigation, settings, home }) => {
  useEffect(() => {
    const updatePositions = () => {
      const dragItems = document.getElementsByClassName("drag");
      for (let i = 0; i < dragItems.length; i++) {
        const random1 = Math.floor(Math.random() * 20);
        const random2 = Math.floor(Math.random() * 20);
        const element = document.getElementById(`drag${i}`);
        element.style.marginLeft = random1 + "vw";
        element.style.marginTop = random2 + "vh";
      }
    };

    $(function () {
      const dragItems = document.getElementsByClassName("drag");
      for (let i = 0; i < dragItems.length; i++) {
        $(`#drag${i}`).draggable();
      }
    });

    // Initial position update
    updatePositions();

    // Update positions every 3 seconds
    const interval = setInterval(updatePositions, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <div className="container">
        <div className="drag-container">
          {home.data.project.map((item, i) => {
            return (
              <div
                className={`drag ${item.position}`}
                id={`drag${i}`}
                key={`drag${i}`}
              >
                <PrismicLink field={item.link}>
                  <PrismicNextImage field={item.image} />
                  <PrismicRichText field={item.title} />
                </PrismicLink>
              </div>
            );
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
      home,
    },
  };
}
