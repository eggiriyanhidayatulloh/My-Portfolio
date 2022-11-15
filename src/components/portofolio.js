import React, { Component } from "react";
import Footer from "./dasboard/footer";
import Navbar from "./dasboard/navbar";

export default class Portofolio extends Component {
  render() {
    return (
      <section
        id="portofolio"
        className="pt-20 lg:-15 bg-gradient-to-r from-slate-900 to-blue-900"
      >
        <Navbar />
        <div className="container  lg:mb-10">
          <div flex flex-wrap fx-10>
            <p className="text-base font-bold mt-10 text-center text-primary lg:text-lg lg:mt-18">
              Portfolio
            </p>
            <h1 className="font-extrabold  text-3xl mt-5 text-slate-200 w-full text-center lg:text-4xl lg:mb-20 mb-10">
              My Project
            </h1>
            <a
              target="_blank"
              href="https://github.com/eggiriyanhidayatulloh/website-based-rice-shop-application-design-with-bootstrap-framework"
              rel="noreferrer"
            >
              <div className="drop-shadow-xl bg-slate-800 hover:shadow-primary max-w-md mx-auto mb-10  rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:w-1/2">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="beras.JPG"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                      rice shop website application Agent Beras Tani
                    </div>
                    <p className="mt-2 text-slate-400">
                      This application sells various types of rice from farmers
                      in Karawang, made to make it easier for customers to buy
                      rice online
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://github.com/eggiriyanhidayatulloh/clothes-online-shop-website-with-bootstrap-framework"
              rel="noreferrer"
            >
              <div className="drop-shadow-xl bg-slate-800 hover:shadow-primary max-w-md mx-auto mb-10  rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:w-1/2">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="/tokobaju.JPG"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                      Distro Higher Frequencies online clothing store
                    </div>
                    <p className="mt-2 text-slate-500">
                      This application sells trending distro clothes for young
                      people, and this application also makes it easy for distro
                      shops to sell their products online
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://github.com/eggiriyanhidayatulloh/absebt-react"
              rel="noreferrer"
            >
              <div className="drop-shadow-xl bg-slate-800 hover:shadow-primary max-w-md mx-auto mb-20  rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:w-1/2">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="/absen.jpg"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                      Simple timesheet app with react js with api
                    </div>
                    <p className="mt-2 text-slate-500">
                      This absence application is my training project in making
                      applications with the React JS framework, in which users
                      can be absent or change passwords to login
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </section>
    );
  }
}
