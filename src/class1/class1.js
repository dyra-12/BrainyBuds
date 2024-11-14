import React from "react";
import "../css/style.css";
import Header from "../components/header";
import maths from '../pages/assets/maths.jpeg'
import evs from '../pages/assets/evs.webp'
import english from '../pages/assets/english.png'
import guess from '../pages/assets/guess.png'
import mario from '../pages/assets/mario.png'
import mathsgame from '../pages/assets/maths game.png'
import science from '../pages/assets/science.png'
import ss from '../pages/assets/ss.png'
import ee from '../pages/assets/ee.png'
import gk from '../pages/assets/gk.png'
import englishBook from '../pages/assets/eclass1.jpeg'
import mathsBook from '../pages/assets/mclass1.jpeg'
import evsBook from '../pages/assets/s1.jpeg'
import gkBook from '../pages/assets/gk1.webp'
import ContactSection from '../pages/bookc1'

function Class1page() {

  return (
    <div>
      <Header />

      <section className="teacher" id="teacher">
        <h1 className="heading" style={{ marginTop: "150px" }}>
          Class<span> 1</span>
        </h1>
      </section>

      <ContactSection />

      <section className="Lectures">
        <div className="classhead">
          <h2>Video Lectures</h2>
        </div>
        <div className="box-container">
          <div className="box">
            <img src={maths} style={{ width: "370px" }} alt="" />
            <h3 id="downloadButton">Maths</h3>
            
          </div>
          <div className="box">
            <img src={evs} style={{ width: "370px" }} alt="" />
            <h3 id="downloadButton2">EVS</h3>
            
          </div>
          <div className="box">
            <img src={english} style={{ width: "370px" }} alt="" />
            <h3 id="downloadButton3">English</h3>
            
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="textbooks">
  <div className="classhead">
    <h2>TextBooks</h2>
  </div>

  <div className="box-container" id="quiz">
    <div className="box">
    <a href="https://zietmysorelibrary.files.wordpress.com/2012/12/h2.pdf" target="_blank" rel="noopener noreferrer">
        <img src={evsBook} alt="" />
        <h3>EVS</h3>
      </a>
    </div>
    <div className="box">
      <a href="https://scert.mizoram.gov.in/uploads/attachments/9a14dcbd730c28a04c457cf322affa2c/marigold-2.pdf" target="_blank" rel="noopener noreferrer">
        <img src={englishBook} alt="" />
        <h3>English</h3>
      </a>
    </div>
    <div className="box">
      <a href="https://ncert.nic.in/textbook/pdf/aejm1ps.pdf" target="_blank" rel="noopener noreferrer">
        <img src={mathsBook} alt="" />
        <h3>Maths</h3>
      </a>
    </div>
    <div className="box">
      <a href="https://ncert.nic.in/textbook/pdf/aejm1ps.pdf" target="_blank" rel="noopener noreferrer">
        <img src={gkBook} alt="" />
        <h3>GK</h3>
      </a>
    </div>
  </div>
</section>



      <section className="activities">
        <div className="classhead">
          <h2>Quizzes</h2>
        </div>

        <div className="box-container" id="quiz">
          <div className="box">
            <img src={ss} alt="" />
            <h3>EVS</h3>
            
          </div>
          <div className="box">
            <img src={ee} alt="" />
            <h3>English</h3>
            
          </div>
          <div className="box">
            <img src={mathsgame} alt="" />
            <h3>Maths</h3>
            
          </div>
          <div className="box">
            <img src={gk} alt="" />
            <h3>GK</h3>
           
          </div>
        </div>
      </section>

      <section className="activities">
        <div className="classhead">
          <h2>Games</h2>
        </div>

        <div className="box-container" id="quiz">
          <div className="box">
            <a href="/Users/stardyu785gmail.com/Desktop/projects/brainybuds/Game 2/index.html">
            <img src={ss} alt="" />
            <h3>EVS</h3>
            </a>
            
          </div>
          <div className="box">
            <img src={ee} alt="" />
            <h3>English</h3>
            
          </div>
          <div className="box">
            <img src={mathsgame} alt="" />
            <h3>Maths</h3>
            
          </div>
          <div className="box">
            <img src={gk} alt="" />
            <h3>GK</h3>
           
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Class1page;
