import Head from "next/head";
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import React, {useEffect} from "react";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";


const Index = ({ navigation, settings, page, projects }) => {
  console.log(projects)
  return ( 
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <div className="list">
        {projects.map((item,i) => {
          return(
            <a href={item.url} key={`link${i}`}>
              <PrismicRichText field={item.data.title}/>
            </a>
          )
        })}
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "index-all");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const projects = await client.getAllByType('project');

  return {
    props: {
      navigation,
      settings,
      page,
      projects
    },
  };
}
