import React from "react";
import "./css/style.css"; // Import your custom CSS file
import myImage from "./images/home.png";
import aboutUs from "./images/about us.png";
import education1 from "./images/education1.png";
import education2 from "./images/education2.png";
import education3 from "./images/education3.png";
import gif from "./images/contact.gif";
import Header from "./components/header";


function Home({username}) {
  return (
    <div>
      <Header />
     

      {/* Home Section */}
      
      <section className="home" id="home">
        <div className="content">
          <h3>
            welcome to our Brainy Buds <span> {username}</span>
          </h3>
          <p>
            We are a team of educators and experts who are dedicated to
            providing high-quality educational content that sparks curiosity and
            fosters a love for learning. We understand that every child is
            unique, so we tailor our resources to cater to various learning
            styles and interests.{" "}
          </p>
          <a href="#" className="btn">
            learn more
          </a>
        </div>

        <div className="image">
          <img src={myImage} alt="My Image" />
        </div>

        <div className="custom-shape-divider-bottom-1684324473">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={aboutUs} alt="My Image" />
          </div>
          <div className="content">
            <h3>Exploring, Growing, And Thriving Together</h3>
            <p>
              Welcome to Brainy Buds, where learning is an adventure! At Brainy
              Buds, we believe that education should be exciting, engaging, and
              fun! We're here to make learning an enjoyable journey for kids of
              all ages. Our team is passionate about creating a world of
              knowledge that's accessible and enjoyable for young minds.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h1 className="heading">
          our <span> education</span>
        </h1>
        <div className="box-container">
          <div className="box">
         
              <h3>Class 1</h3>
            
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio ration
            </p>
            <img src={education1} alt="My Image" />
          </div>
          <div className="box">
            <h3>Class 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio ration
            </p>
            <img src={education2} alt="My Image" />
          </div>
          <div className="box">
            <h3>Class 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio ration
            </p>
            <img src={education3} alt="My Image" />
          </div>
        </div>
      </section>

      

      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>contact</span> us
        </h1>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-clock"></i>
            <h3>Study Anytime</h3>
            <p>Interactive Lessons</p>
            <p>Games and Quizzes</p>
            <p>Videos and Animation</p>
          </div>
          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>email</h3>
            <p>raghavraj.sobti.21cse@bmu.edu.in</p>
            <p>palak.gupta.21cse@bmu.edu.in</p>
          </div>
          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>phone number</h3>
            <p>+123-456-7890</p>
            <p>+123-456-7890</p>
          </div>
        </div>

        <div className="row">
          <div className="image">
            <img src={gif} alt="" />
          </div>

          <form>
            <h3 style={{ fontSize: "30px" }}>get in touch</h3>
            <br />
            <br />
            <h2>
              We're here to bridge the gap between rural communities and
              affordable lab services. Whether you have questions, need
              assistance, or want to explore the possibilities of accessing
              cost-effective labs, don't hesitate to reach out. Your connection
              with us is the first step towards unlocking a world of healthcare
              and scientific opportunities. Let's work together to make quality
              labs accessible to all.
            </h2>
            <br />
            <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-otQ5A0qXcHFXLsY62Hs3LBa4kRPbkJd-AooxcW6GUEK0mA/viewform"
              className="btn"
            >
              Send Message
            </a>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
