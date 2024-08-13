import React from "react";

const About = () => {
  return (
    <>
    <div className="container flex-col justify-center space-x-12 px-8 py-2 md:px-4">
    <h1 className="text-2xl font-semibold mb-4 pt-4">About Get Me a Chai!</h1>
      <h2 className="text-xl font-semibold mb-4">Benefits for Fans</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Exclusive Content: Access to unique content that isn’t available to
          the general public.
        </li>
        <li>
          Direct Interaction: Engage directly with your favorite creators
          through messages and special updates.
        </li>
        <li>
          Special Rewards: Receive personalized rewards and acknowledgments from
          creators.
        </li>
        <li>
          Support Creativity: Help creators continue to produce high-quality
          content by providing financial support.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Why Choose GetMeachai?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          User-Friendly Interface: An intuitive platform that’s easy to navigate
          for both fans and creators.
        </li>
        <li>
          Secure Transactions: Robust security measures to ensure safe and
          secure financial transactions.
        </li>
        <li>
          Flexible Payment Options: Multiple payment methods to choose from,
          making it convenient for everyone.
        </li>
        <li>
          Community Growth: Join a community of like-minded individuals who
          share your passion for creativity.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">How It Works</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Sign Up: Create an account as a fan or creator in just a few simple
          steps.
        </li>
        <li>
          Discover Creators: Browse through a diverse range of creators and find
          your favorites.
        </li>
        <li>
          Support: Choose your preferred support tier and start contributing.
        </li>
        <li>
          Enjoy: Gain access to exclusive content and interact with creators on
          a personal level.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Creator A: "GetMeachai has allowed me to turn my passion into a
          sustainable career. The support from my fans has been incredible!"
        </li>
        <li>
          Fan B: "I love being able to support my favorite creators directly.
          The exclusive content and interactions make it all worth it."
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">
        Join the GetMeachai Community
      </h2>
      <ul className="list-disc pl-6">
        <li>
          For Creators: Start earning from your content today. Sign up and
          create your profile to connect with fans who appreciate your work.
        </li>
        <li>
          For Fans: Discover new creators and support your favorites. Enjoy
          exclusive content and build a closer relationship with the creators
          you love.
        </li>
      </ul>
      </div>
    </>
  );
};

export default About;


export const metadata = {
  title: "About - Get Me A chai"
}