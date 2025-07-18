import { Layout } from "@/components/layout";
import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}
