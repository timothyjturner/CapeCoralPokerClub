import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import EventsFeed from "../components/events/events-feed";

import Header from "../components/header";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  console.log(edges);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Cape Coral Poker Club`}</title>
      </Head>
      <Header />
      <Container>
        <EventsFeed posts={edges} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
