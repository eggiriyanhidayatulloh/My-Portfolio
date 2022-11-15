import React, { Component } from "react";
import About from "./about";
import Footer from "./footer";
import Navbar from "./navbar";

export default class Home extends Component {
  render() {
    return (
      //Hero section
      <section
        id="hero"
        className="pt-36 lg:pt-20 bg-gradient-to-r from-gray-900 to-sky-800"
      >
        <Navbar />
        <div className="container">
          {/* flex-warp agar responsif kebawah */}
          <div className="flex flex-wrap mb-5  px-10 right-0 ">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base mb-2 pt-10 lg:pt-0 font-semibold text-primary md:text-xl">
                Hello Everyone, I am
                <span className=" block font-bold text-white text-3xl mt-1 mb-5 lg:text-5xl">
                  Eggi Riyan Hidayatulloh
                </span>
              </h1>
              <h2 className="font-medium text-slate-400 text-lg mb-0">
                I am a fresh graduate majoring in information systems
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                My dream is to become a Full Stack Web Developer
              </p>

              <a
                href="https://wa.me/62895339729517?text=Hi%20!!!%20"
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold text-primary bg-dark shadow-lg border-solid border border-primary rounded-full py-3 px-6 hover:shadow-lg hover:bg-gray-800 hover:opacity-90 tansition duration-300"
              >
                Contact me
              </a>
            </div>
            <div className="w-full self mt-7 px-2 lg:w-1/2 ">
              <div className="relative   lg:mt-9 lg:mb-2 lg:right-0">
                <img
                  className="max-w-full mx-auto "
                  src="/wisuda1.png"
                  alt="egi"
                />
              </div>
            </div>
          </div>
        </div>
        <About />
        <Footer />
      </section>
    );
  }
}
