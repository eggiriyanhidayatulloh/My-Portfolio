import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section>
          <footer className="bg-dark pt-24 pb-5">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="w-full px-4 mb-12  text-slate-300 lg:w-1/3">
                  <h2 className=" mb-2 text-2xl font-bold">
                    Eggi Riyan Hidayatulloh
                  </h2>
                  <h3 className="text-xl mb-1">Address</h3>
                  <p className="text-base">
                    Jl. Surkalim Rt.01 Rw.09 Kel.Tegal Waru Kec.Cilamaya Wetan
                    Kab.Karawang Jawa Barat
                  </p>
                </div>
                <div className="w-full px-5 mb-12 md:w-1/3 lg:w-1/3 lg:pl-10">
                  <h3 className="font-semibold text-xl text-slate-300 mb-4">
                    Made with
                  </h3>
                  <ul className="text-slate-300">
                    <li>
                      <a
                        className="inline-block text-base hover:text-primary mb-3"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        React js
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-base hover:text-primary mb-2"
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Tailwind Css
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-base hover:text-primary mb-2"
                        href="https://react-bootstrap.github.io/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ReactBootstrap
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-5 mb-12 md:w-1/3 lg:w-1/3">
                  <h3 className="font-semibold text-xl text-slate-300 mb-4">
                    Link
                  </h3>
                  <ul className="text-slate-300">
                    <li>
                      <Link
                        className="inline-block text-base hover:text-primary mb-3"
                        to="/"
                        target="_parent"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-base hover:text-primary mb-2"
                        to="/tentang"
                        target="_parent"
                      >
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-base hover:text-primary mb-2"
                        to="/portofolio"
                        target="_parent"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-base hover:text-primary mb-2"
                        to="/contact"
                        target="_parent"
                      >
                        Contact me
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full pt-5 border-t border-slate-800">
                <div className="flex items-center justify-center">
                  <p className="text-medium text-sm text-slate-400">
                    Create By Eggi Riyan Hidayatulloh
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}
