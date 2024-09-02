import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-screen-2xl md:px-20 mt-16 dark:bg-slate-900 dark:text-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          About <span className="text-pink-500 dark:text-pink-400">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to bookStore! We’re passionate about offering a diverse range of books and creating an inviting space for all readers. Our mission is to inspire a love for reading with personalized recommendations and a welcoming atmosphere.

</p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Our mission is to cultivate a love for literature by offering a diverse range of books and fostering a community of passionate readers. We strive to provide excellent service and create an inclusive environment where everyone can find their next great read.
           </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/our-mission-rocket-ship-illustration_23-2149111842.jpg?t=st=1725307468~exp=1725311068~hmac=2dcf1f01a508921d863d55d10380232f9541ab678a1436327bc096814737e2a3&w=300"
            alt="Our Mission"
            className="rounded-lg shadow-md dark:shadow-gray-800"
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://img.freepik.com/premium-photo/vision-word-wood-table-business-concept_1627-189.jpg?w=400"
            alt="Our Vision"
            className="rounded-lg shadow-md dark:shadow-gray-800"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Our vision is to be the go-to destination for book lovers, where readers of all kinds can discover new stories and connect with others who share their passion. We aim to be a hub of literary culture, offering more than just books but a space for ideas and community.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Join Us on Our Journey
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We invite you to join us on our journey of discovery and growth. Whether you're a student, parent, or educator, there's a place for you in our vibrant community. Together, we can make a difference and shape the future.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
