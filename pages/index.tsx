import Head from "next/head";

import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";

const Index = () => {
  return (
    <Layout preview="na">
      <Head>
        <title>{`Cape Coral Poker Club`}</title>
      </Head>
      <Container>
        <Header />
      </Container>
    </Layout>
  );
};

export default Index;
