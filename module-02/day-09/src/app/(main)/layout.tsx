import PageWrapper from "@/components/pageWrapper";
import Jumbotron from "@/components/jumbotron";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Jumbotron cover="explore-jumbotron.jpg" title="Explore The World" />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
