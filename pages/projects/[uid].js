import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const Project = ({ project, navigation, settings }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(project.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>

      <SliceZone slices={project.data.slices} components={components} />
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const project = await client.getByUID("project", params.uid);
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      project,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const projects = await client.getAllByType("project");

  return {
    paths: projects.map((project) => prismicH.asLink(project)),
    fallback: false,
  };
}
