import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="pt-20 lg:pt-20 pb-20 bg-slate-100">
        <div id="home" className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-7 mb-10 lg:w-1/2  py-7 rounded-lg ">
              <h3 className="font-bold uppercase text-primary text-xl mb-3 lg:text-2xl">
                About me
              </h3>
              {/* <h3 className="font-bold text-white text-xl max-w-md">Project</h3> */}
              <p className="font-medium text-base text-slate-500 leading-relaxed mt-3 max-w-xl lg:text-xl text-justify">
                I am a fresh graduate majoring in Information Systems at
                Gundarma University. I have good communication skills, can work
                in a team well, hardworking, like new things and also have a
                high enthusiasm for learning.
              </p>
            </div>
            <div className="w-full lg:w-1/2  px-7">
              <h3 className="font-semibold text-primary uppercase text-xl mb-4 pt-2 lg:text-2xl lg:mt-4">
                Sosial Media
              </h3>
              <p className="font-medium lg:text-xl text-base text-secondary leading-relaxed mt-0 mb-10 text-justify">
                follow my social media to find out and get to know more about my
                life.
              </p>
              <div className="flex justify-evenly mt-4 pb-3">
                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCFR5kB3wGonNHhSrugDKVBw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="box-content h-17 w-10 mx-4  hover:brightness-50 tansition duration-300"
                    src="/youtube.png"
                    alt="youtube"
                  ></img>
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/eggi_riyan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    onClick={
                      "https://www.youtube.com/channel/UCFR5kB3wGonNHhSrugDKVBw"
                    }
                    to="https://github.com/Joeyryanbridges"
                    className="box-content h-10 w-10 mx-4  hover:brightness-50 tansition duration-300" //www.youtube.com/channel/UCFR5kB3wGonNHhSrugDKVBw""
                    src="/instagram.png"
                    alt="eee"
                  ></img>
                </a>

                {/*Linkedin */}
                <a
                  href="https://www.linkedin.com/in/eggiriyanhidayatulloh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="box-content h-10 w-10 mx-4  hover:brightness-50 tansition duration-300"
                    src="/linkedin.png"
                    alt="eee"
                  ></img>
                </a>

                {/* facebook */}
                <a
                  href="https://www.facebook.com/hidaya.tulloh.14/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="box-content h-10 w-10 mx-4  hover:brightness-50 tansition duration-300"
                    src="/facebook.png"
                    alt="eee"
                  ></img>
                </a>

                {/* github */}
                <a
                  href="https://github.com/eggiriyanhidayatulloh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="box-content h-10 w-10 mx-4  hover:brightness-50 tansition duration-300"
                    src="/github.png"
                    alt="eee"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
