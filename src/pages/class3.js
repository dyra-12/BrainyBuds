import React from "react";
import "../css/style.css";
import Header from "../components/header";
import maths from './assets/maths.jpeg'
import evs from './assets/evs.webp'
import english from './assets/english.png'
import guess from './assets/guess.png'
import mario from './assets/mario.png'
import mathsgame from './assets/maths game.png'
import science from './assets/science.png'
import ss from './assets/ss.png'
import ee from './assets/ee.png'
import gk from './assets/gk.png'
import englishBook from './assets/eclass3.jpg'
import mathsBook from './assets/mclass3.jpg'
import evsBook from './assets/s3.webp'
import gkBook from './assets/gk3.webp'

function Class3page(){
    return (
      <div>
      <Header />

      <section className="teacher" id="teacher">
        <h1 className="heading" style={{ marginTop: "150px" }}>
          Class<span> 3</span>
        </h1>
      </section>

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
      <section className="activities">
        <div className="classhead">
          <h2>Games</h2>
        </div>

        <div className="box-container" id="games">
          <div className="box">
            <img src={mario} alt="" />
            <h3>Mario Game</h3>
            
          </div>
          <div className="box">
            <img src={mathsgame} alt="" />
            <h3>Magic Maths</h3>
            
          </div>
          <div className="box">
            <img src={science} alt="" />
            <h3>Science Stars</h3>
            
          </div>
          <div className="box">
            <img src={guess} alt="" />
            <h3>Guess this</h3>
            
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

      <section className="textbooks">
        <div className="classhead">
          <h2>TextBooks</h2>
        </div>

        <div className="box-container" id="quiz">
          <div className="box">
            <img src={evsBook} alt="" />
            <h3>EVS</h3>
            
          </div>
          <div className="box">
            <img src={englishBook} alt="" />
            <h3>English</h3>
            
          </div>
          <div className="box">
            <img src={mathsBook} alt="" />
            <h3>Maths</h3>
            
          </div>
          <div className="box">
            <img src={gkBook} alt="" />
            <h3>GK</h3>
           
          </div>
          </div>
      </section>
    </div>
    )
}
export default Class3page;