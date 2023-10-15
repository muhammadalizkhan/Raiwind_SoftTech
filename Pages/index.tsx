import Head from "next/head";
import Hero from "@/components/hero";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Benefits from "@/components/benefits";
import React from "react";
import Navbar from "@/components/navbar";
import Faq from "@/components/faq";
import PopupWidget from "@/components/popupWidget";
import SectionTitle from "@/components/sectionTitle";
import { benefitOne, benefitTwo } from "@/components/data";
import Testimonials from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rawind Soft Tech</title>
        <meta
          name="Rawind Soft Tech"
          content="Empowering Your Vision, Delivering IT Excellence"
        />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        align="none"
        pretitle="Rawind Soft Tech Developers"
        title=" Save Your Time And Budget">
        Building a good product is an achievement but building a great product
        brings true satisfaction,
        something that we aspire to achieve – always!
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle 
        align="none"
        pretitle="Solutionist Reviews"
        title="Here's what our customers said">
        Soutionist play a vital role in Development of Finincial and Technical Bussiness Development
        We Provide Service to our client that want to lead future.j   
      </SectionTitle>
      <Testimonials />
      <SectionTitle align="center" pretitle="FAQ" title="Want to Know More?">
      Explore the following FAQs to attain relevant information concerning different aspects of our company, products and services. Feel free to contact us for further information.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
export default Home;