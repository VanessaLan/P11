import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import ChatLogo from "../assets/icon-chat.webp";
import MoneyLogo from "../assets/icon-money.webp";
import SecurityLogo from "../assets/icon-security.webp";


const Home = () => {

  return (
    <main>
      <Banner />

      <section className="features">
        <h2 className="sr-only">Features</h2>

        <Feature
          src={ChatLogo}
          alt="Chat Icon"
          title="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />

        <Feature
          src={MoneyLogo}
          alt="Money Icon"
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
        />

        <Feature
          src={SecurityLogo}
          alt="Security Icon"
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
};

export default Home;
