import "./home.styles.scss";
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import IntroSection from "../intro";
import AboutUs from "../about";
import WhatWeOfferSection from "../whatweoffer/whatweoffer.page";

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
    footer_description: "In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.",
    contact_phone: "+234 800 000 0000",
    contact_email: "support@afriguard.com",
    footer_twitter: "https://twitter.com/AfriGuard",
    footer_facebook: "https://facebook.com/AfriGuard",
    footer_instagram: "https://instagram.com/AfriGuard",
    footer_linkedin: "https://linkedin.com/company/AfriGuard",
  };

  // Determine if user is logged in (for now, just a mock)
  const isAuthenticated = false;

  return (
    <>
      <Header currentRouteName="home" route={route} appName="AfriGuard" />
      <IntroSection />

      <main id="main">
        <AboutUs />
        <WhatWeOfferSection />
      </main>

      <Footer settings={settings} isAuthenticated={isAuthenticated} appName="AfriGuard" />
    </>
  );
};

export default Home;
