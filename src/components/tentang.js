import React, { Component } from "react";
import Footer from "./dasboard/footer";
import Navbar from "./dasboard/navbar";

export default class Tentang extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="skill" className="pt-32 lg:pt-30 pb-20 bg-zinc-900">
          <div className="container">
            <div className="flex flex-wrap ">
              <div className="w-full self-center px-4 mb-5 ">
                <img
                  src="/eggi.jpg"
                  className="max-w-full mx-auto w-40 h-40 lg:w-50 lg:h-50 rounded-full"
                  alt="Eggi"
                ></img>
                <h1 className="text-xl lg:text-4xl font-sans font-semibold text-white text-center mt-5">
                  I'm Eggi Riyan Hidayatulloh
                </h1>
                <div className="text-center">
                  <p className="mt-2 inline-block max-w-2xl  text-sm text-center font-normal lg:text-base  text-slate-400">
                    I am a fresh graduate majoring in Information Systems at
                    Gundarma University. I have good communication skills, can
                    work in a team well, hardworking, like new things and also
                    have a high enthusiasm for learning.
                  </p>
                </div>
              </div>
              <div class="flex mx-auto flex-wrap justify-start text-center text-xs lg:text-base ">
                <div className="px-3 py-3 mt-3 md:mt-3 bg-zinc-800 text-slate-400  rounded-full lg:px-3 lg:py-2  mx-2 hover:bg-zinc-700">
                  <a href="/#">
                    <img
                      alt=""
                      className="float-left w-4 mt-0 lg:mt-1 h-4 mr-2 justify-center"
                      src="/code.png"
                    ></img>
                    web developer
                  </a>
                </div>
                <div className="px-3 py-3 mt-3 md:mt-3 bg-zinc-800 text-slate-400  rounded-full lg:px-4 lg:py-2  mx-2 hover:bg-zinc-700">
                  <a href="/#">
                    <img
                      alt=""
                      className="float-left w-4 mt-0 lg:mt-1 h-4 mr-2 justify-center"
                      src="/computer.png"
                    ></img>
                    software engineer
                  </a>
                </div>
                <div className="px-3 py-3 mt-3 lg:mt-3 bg-zinc-800 text-slate-400  rounded-full lg:px-4 lg:py-2  mx-2 hover:bg-zinc-700">
                  <a href="/#">
                    <img
                      alt=""
                      className=" float-left w-4 mt-0 lg:mt-1 h-4 mr-2 justify-center"
                      src="/database.png"
                    ></img>
                    database
                  </a>
                </div>
                <div className="mt-3 px-3 py-3 bg-zinc-800 text-slate-400  rounded-full lg:px-4 lg:py-2 lg:mt-3 mx-2 hover:bg-zinc-700">
                  <a href="/#">
                    <img
                      alt=""
                      className="float-left w-4 mt-0 lg:mt-1 h-4 mr-2 justify-center"
                      src="/analyst.png"
                    ></img>
                    data analyst
                  </a>
                </div>
              </div>
              <div className="w-full self-center px-4 mt-20 lg:w-1/2 ">
                <h1 className="font-bold uppercase text-primary text-xl lg:text-2xl">
                  Education History
                </h1>
                <img
                  alt=""
                  src="/gunadarma.png"
                  className="float-left w-40 h-40 mt-5 mr-4"
                ></img>
                <h1 className="mt-5 font-semibold text-sm py-2 lg:text-xl lg:py-5 mx-4 text-left text-slate-400 ">
                  BACHELOR OF INFORMATION SYSTEMS
                </h1>
                <h2 className="text-sm text-left text-slate-100 ">
                  Institution: Gundarma University{" "}
                  <span className="text-slate-500">
                    Year of Graduation 2021
                  </span>
                </h2>
                <h1 className=" font-semibold text-sm py-2 mx-4 text-left text-slate-200 ">
                  GPA : 3.39
                </h1>
                <div className="my-10">
                  <h1 className="mb-7 uppercase text-xl lg:text-2xl font-bold text-primary lg:mt-20 lg:mb-7">
                    Experient Project
                  </h1>
                  <h2 className="mt-4 text-white text-md mb-2 lg:w-1/2">
                    Thesis design of e-commerce application of Rice Store Agen
                    Berastani
                  </h2>
                  <ul class="list-disc pl-5">
                    <li className="text-slate-400">
                      Designing the appearance of the website using the figma
                      application
                    </li>
                    <li className="text-slate-400">
                      Designing database relations and also making SDLC system
                      designers.
                    </li>
                    <li className="text-slate-400">
                      Creating and developing websites using HTML, CSS,
                      Bootstrap, Javascript, PHP, MySQL
                    </li>
                    <li className="text-slate-400">
                      Designing application database with SQL Query
                    </li>
                  </ul>
                  <h2 className="mt-7 text-white text-md mb-2 lg:w-1/2">
                    Higher Frequencies clothing store web application
                  </h2>
                  <ul class="list-disc pl-5">
                    <li className="text-slate-400">
                      This application is made to sell clothes online through
                      the website
                    </li>
                    <li className="text-slate-400">
                      This online store application is made with Javascript,
                      Html, Css, Php and Bootstrap Framewor.
                    </li>
                    <li className="text-slate-400">
                      Creating a database with SQL Query
                    </li>
                  </ul>
                  <h2 className="mt-7 text-white text-md mb-2 lg:w-1/2">
                    Simple absent web application with React framework
                  </h2>
                  <ul class="list-disc pl-5">
                    <li className="text-slate-400">
                      This application is a simple absent website application
                      using the Javascript, html, css with Api
                    </li>
                  </ul>
                </div>
                <div className="my-10">
                  <h1 className="mb-3 uppercase text-xl lg:text-2xl font-bold text-primary lg:mt-10 lg:mb-4">
                    Hobby
                  </h1>
                  <ul class="list-disc pl-5">
                    <li className="text-slate-400">Gym</li>
                    <li className="text-slate-400">Hiking</li>
                    <li className="text-slate-400">Futsal</li>
                  </ul>
                </div>
              </div>

              {/* skill */}
              <div className="w-full lg:mt-20 px-4 lg:px-10 mt-5 lg:w-1/2">
                <h1 className=" uppercase font-bold text-xl lg:text-2xl text-primary">
                  Skills
                </h1>
                <ul class="list-disc pl-5 mt-5 lg:mt-8">
                  <li className="text-slate-400">Problem Solving</li>
                  <li className="text-slate-400">Team Communication</li>
                  <li className="text-slate-400">Query SQL</li>
                </ul>
                <h1 className="mt-7 lg:text-lg text-slate-400">Databases</h1>
                <ul class=" text-white pl-1 mt-3 lg:mt-3">
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="mysql"
                      className="float-left mr-4 mx-"
                      src="/sql.png"
                    ></img>
                    MySQL
                  </li>
                </ul>
                <h1 className="mt-7 lg:text-lg text-slate-400">Languages</h1>
                <ul class=" text-white pl-1 mt-3 lg:mt-3">
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="html"
                      className="float-left mr-4 mx-"
                      src="/html.png"
                    ></img>
                    HTML
                  </li>
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="css"
                      className="float-left mr-4 mx-"
                      src="/css.png"
                    ></img>
                    Css
                  </li>
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="js"
                      className="float-left mr-4 w-7 h-7"
                      src="/js.png"
                    ></img>
                    Javascript
                  </li>
                  <li className="lg:text-base text-sm mt-5 ">
                    <img
                      alt="php"
                      className="float-left mr-2 mt-0 w-9 h-6"
                      src="/php1.png"
                    ></img>
                    PHP
                  </li>
                </ul>
                <h1 className="mt-7 lg:text-lg text-slate-400">Framework</h1>
                <ul class=" text-white pl-1 mt-3 lg:mt-3">
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="react"
                      className="float-left mr-3 w-8 h-7"
                      src="/react1.png"
                    ></img>
                    React Js
                  </li>
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="bs"
                      className="float-left ml-1 mr-4 w-6 h-6"
                      src="/bs.png"
                    ></img>
                    Bootstrap
                  </li>
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="tw"
                      className="float-left ml-1 mr-4 w-6 h-6"
                      src="/tw.png"
                    ></img>
                    Tailwind Css
                  </li>
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="ft"
                      className="float-left ml-1 mr-4 w-6 h-6"
                      src="/ft.png"
                    ></img>
                    Flutter
                  </li>
                </ul>
                <h1 className=" uppercase mt-10 font-bold text-xl lg:text-2xl text-primary">
                  contact
                </h1>
                <ul class=" text-white pl-1 mt-3 lg:mt-3">
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      alt="wa"
                      className="float-left mr-4 w-7 h-7"
                      src="/wa.png"
                    ></img>
                    <a
                      alt="wa"
                      className="hover:text-slate-400 text-lg"
                      href="https://wa.me/62895339729517?text=Hi%20!!!%20"
                      target="_blank"
                      rel="noreferrer"
                    >
                      0895339729517
                    </a>
                  </li>
                  <li className="lg:text-base text-sm mt-5">
                    <img
                      className="float-left mr-4 w-7 h-7"
                      alt="email"
                      src="/email.png"
                    ></img>
                    <a
                      className="hover:text-slate-400 text-lg"
                      href="https://mail.google.com/mail/u/INBOX@EMAIL.COM/#all/eggiriyanhidayatulloh@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
