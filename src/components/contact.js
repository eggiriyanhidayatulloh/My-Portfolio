import React, { Component } from "react";
import Navbar from "./dasboard/navbar";
import Footer from "./dasboard/footer";

export default class Contact extends Component {
  render() {
    const send = () => {
      alert("Pesan sudah terkirim !!");
      window.location.replace("/");
    };
    return (
      <div>
        <section className="pt-32 lg:pt-36 pb-32 bg-zinc-900">
          <Navbar />
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-bold text-3xl sm:text-2xl lg:text-4xl text-primary mb-2">
                  Contact me
                </h4>
              </div>
              <form>
                <div className="w-full lg:mx-auto lg:w-2/3">
                  <div className="w-full px-4 mb-8">
                    <label
                      for="name"
                      className="text-primary text-base font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-200 text-dark p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label
                      for="email"
                      className="text-primary text-base font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-200 text-dark p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label
                      for="pesan"
                      className="text-primary text-base font-bold"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      id="pesan"
                      className="w-full bg-slate-200 text-dark p-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    />
                  </div>
                  <div className="w-full px-4">
                    <button
                      onClick={send}
                      className="text-base font-semibold text-primary bg-dark shadow-lg border-solid border border-primary  py-1 px-6 lg:py-3 lg:px-8 hover:shadow-lg hover:bg-gray-800 hover:opacity-90 tansition duration-300  rounded-full"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
