import "./home.styles.scss";
import React from "react";
import IntroSection from "../intro";
import AboutUs from "../about";
import WhatWeOfferSection from "../whatweoffer/whatweoffer.page";
import PlansPricing from "../pricing/pricing.page";
import Partners from "../partners/partners.page";
import ContactUs from "../contact";
import Faq from "../faq/faq.page";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";




const Home: React.FC = () => {
  // Simulate Laravel-like route helper
  const route = (name: string): string => {
    switch (name) {
      case "home":
        return "/";
      case "login":
        return "/login";
      case "register":
        return "/register";
      default:
        return "/";
    }
  };

  const settings = {
    // footer_description: "Afriguard's offers value to SMEs looking for automated operation, easy implementation, offline capability & continuous security monitoring with accessible results and actionable guidance. This application is also supported with step-by-step YouTube walkthroughs that show exactly how the application works.",
    contact_phone: "+234 800 000 0000",
    contact_email: "support@afriguard.com",
    footer_twitter: "https://twitter.com/AfriGuard",
    footer_facebook: "https://facebook.com/AfriGuard",
    footer_instagram: "https://instagram.com/AfriGuard",
    footer_linkedin: "https://linkedin.com/company/AfriGuard",
  };

  const pricing_data = {
    1: [
      {
        title: "Basic Surveillance",
        subtitle: "Facere provident incidunt quos voluptas.",
        speaker: { name: "Brenden Legros", photo: { getUrl: () => "/img/pricing/image1.png" } },
      },
      {
        title: "Basic Surveillance",
        subtitle: "Facere provident incidunt quos voluptas.",
        speaker: { name: "Brenden Legros", photo: { getUrl: () => "/img/pricing/image2.png" } },
      },
      {
        title: "Basic Surveillance",
        subtitle: "Facere provident incidunt quos voluptas.",
        speaker: { name: "Brenden Legros", photo: { getUrl: () => "/img/pricing/image3.png" } },
      },
    ],
    2: [
      {
        title: "Premium Security",
        subtitle: "Our most popular plan for advanced users.",
        speaker: { name: "Hubert Hirthe", photo: { getUrl: () => "/img/pricing/image4.png" } },
      },
      {
        title: "Premium Security",
        subtitle: "Our most popular plan for advanced users.",
        speaker: { name: "Hubert Hirthe", photo: { getUrl: () => "/img/pricing/image5.png" } },
      },
    ],
    3: [
      {
        title: "Pro Monitoring",
        subtitle: "Best for organizations needing real-time alerts.",
        speaker: { name: "Cole Emmerich", photo: { getUrl: () => "/img/pricing/image6.png" } },
      },
      {
        title: "Pro Monitoring",
        subtitle: "Best for organizations needing real-time alerts.",
        speaker: { name: "Cole Emmerich", photo: { getUrl: () => "/img/pricing/image7.png" } },
      },
    ],
  };

  
  const faqQuestions = {
    1: [
      {
        id: 1,
        question: "Commodi porro sint mollitia qui velit.",
        answer: "Cumque qui iste sunt et veniam ipsam nihil. Voluptates ad ipsam velit voluptate repudiandae et. Asperiores quaerat velit aut omnis iste et et.",
      },
    ],
    2: [
      {
        id: 2,
        question: "Ipsa consequatur ratione omnis.",
        answer: "Unde aut qui voluptatem optio qui sapiente. Ipsam aut veniam architecto quo. Corrupti sint consequuntur quo consequatur sequi error.",
      },
    ],
    3: [
      {
        id: 3,
        question: "Voluptatem voluptatem velit nesciunt odit.",
        answer: "Ipsum enim saepe dolores laborum earum reiciendis error assumenda. Doloremque velit aperiam et voluptatem in.",
      },
    ],
    4: [
      {
        id: 4,
        question: "Magnam atque voluptas voluptate et.",
        answer: "Exercitationem eligendi vitae quam quia consequatur. Unde minus autem voluptas accusamus dolorem.",
      },
    ],
    5: [
      {
        id: 5,
        question: "Molestiae fuga doloremque praesentium voluptates dolores voluptas molestiae alias.",
        answer: "Laborum modi aut dignissimos consectetur quis vel nihil. Deserunt nihil omnis in ducimus voluptate deserunt laudantium. Quis aut est modi odio nisi soluta. Et eveniet dolor enim laborum nulla consequatur culpa temporibus.",
      },
    ],
  };


  // Determine if user is logged in    
  const isAuthenticated = false;

  return (
    <>
      <Header currentRouteName="home" route={route} appName="AfriGuard" />
      <IntroSection />

      <main id="main">
        <AboutUs />
        <WhatWeOfferSection />
        <PlansPricing pricing_data={pricing_data} />
        <Partners />
        <ContactUs />
        <Faq faqs={faqQuestions} />
      </main>

      <Footer settings={settings} isAuthenticated={isAuthenticated} appName="AfriGuard" />
    </>
  );
};

export default Home;
