import React, { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzAIh5T0aBPrTwpkL4RX971HtMpjb7GTWZ6nTBzjFhNiygJtKgNki2kHLgbo-o_60g/exec";
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    })
      .then(() => {
        toast.success("Message sent successfully");
        setFormData({
          Name: "",
          Email: "",
          Message: "",
        });
      })
      .catch((error) => {
        console.error("Error!", error.message);
        toast.error("An error occurred. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <section className="pl-8 py-24 bg-white dark:bg-gray-900">
        <div className=" mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.17188rem] text-emeraldCustom sm:text-base">
            REACT OUT
          </p>
          <h1 className="text-white font-bold capitalize text-3xl sm:text-4xl">
            Let's Connect
          </h1>
          <p className="mt-2 max-w-lg capitalize text-zinc-300">
            Reach Out To Me For Hiring And Business Inquiries.
          </p>
        </div>
        <div className="flex mb-8">
          <h1 className="w-2/4 mt-16 text-white font-bold capitalize text-xl sm:text-xl">
            Fill Out The Form
          </h1>
        </div>

        <div className="lg:flex">
          <div className="lg:w-[50%] border rounded-xl border-slate-700 mr-4">
            <div className="px-6 py-12 ">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 sm:grid-cols-2  lg:gap-4 gap-2">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500"
                      placeholder="John doe"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      id="email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="React@gmail.com"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <input
                    id="message"
                    name="Message"
                    required
                    value={formData.Message}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500 h-28"
                  />
                </div>

                <button
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </form>
              <p className="mt-4 capitalize text-zinc-400">
                Any details submitted on this form will not be shared with
                anyone. This form is purely for business use, any personal
                submissions will not be looked upon.
              </p>
            </div>
          </div>

          <div className="mb-40 pt-16 ">
            <h1 class=" lg:mt-[-60px] mb-4 ml-4 text-white font-bold capitalize text-xl sm:text-xl">
              Connect On Social Media
            </h1>
            <div class="text-white grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-4 xl:grid-cols-2">
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                class="group flex items-center border-zinc-800 p-2 max-sm:rounded-md max-sm:border max-sm:p-2 [&amp;_p.title] gap-3 text-sm [&amp;_.icon]:h-10 [&amp;_.icon]:w-10 px-0"
                href="https://github.com/iamsufiyan560"
              >
                <span class="rounded-full font-semibold group disabled:opacity-80 focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-all active:ring bg-white hover:bg-zinc-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20 active:ring-slate-500/20 aspect-square w-8 h-8 p-[0_!important] grid place-items-center px-3 py-1 gap-1 icon group-hover:bg-gray-400">
                  <FaGithub
                    size={30}
                    className="shrink-0 rounded-md bg-gray-900/5 p-1.5 text-gray-900"
                  />
                </span>
                <div>
                  <p class="title mb-[3px] font-semibold">
                    Checkout My Github Profile
                  </p>
                  <p class="text-zinc-300">https://github.com/iamsufiyan560</p>
                </div>
              </a>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                class="group flex items-center border-zinc-800 p-2 max-sm:rounded-md max-sm:border max-sm:p-2 [&amp;_p.title] gap-3 text-sm [&amp;_.icon]:h-10 [&amp;_.icon]:w-10 px-0"
                href="https://www.linkedin.com/in/sufiyan-chaudhari-8a55502ab/"
              >
                <span class="rounded-full font-semibold group disabled:opacity-80 focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-all active:ring bg-blue-500 hover:bg-blue-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20 active:ring-slate-500/20 aspect-square w-8 h-8 p-[0_!important] grid place-items-center px-3 py-1 gap-1 icon group-hover:bg-blue-400">
                  <FaLinkedinIn
                    size={30}
                    className="shrink-0 rounded-md bg-white-600/5 p-1.5 text-white-500"
                  />
                </span>
                <div>
                  <p class="title mb-[3px] font-semibold">
                    Connect On LinkedIn
                  </p>
                  <p class="text-zinc-300">
                    https://www.linkedin.com/in/sufiyan-chaudhari
                  </p>
                </div>
              </a>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                class="group flex items-center border-zinc-800 p-2 max-sm:rounded-md max-sm:border max-sm:p-2 [&amp;_p.title] gap-3 text-sm [&amp;_.icon]:h-10 [&amp;_.icon]:w-10 px-0"
                href="https://discordapp.com/users/sufiyanchaudhari_14868_97692"
              >
                <span class="rounded-full font-semibold group disabled:opacity-80 focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-all active:ring bg-blue-500 hover:bg-blue-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20 active:ring-slate-500/20 aspect-square w-8 h-8 p-[0_!important] grid place-items-center px-3 py-1 gap-1 icon group-hover:bg-blue-700">
                  <FaDiscord
                    size={30}
                    className="shrink-0 rounded-md bg-white-600/5 p-1.5 text-white-500"
                  />
                </span>
                <div>
                  <p class="title mb-[3px] font-semibold">Let's Have A Chat</p>
                  <p class="text-zinc-300">discord.com/sufiyan</p>
                </div>
              </a>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                class="group flex items-center border-zinc-800 p-2 max-sm:rounded-md max-sm:border max-sm:p-2 [&amp;_p.title] gap-3 text-sm [&amp;_.icon]:h-10 [&amp;_.icon]:w-10 px-0"
                href="mailto:msufiyanhusen@gmail.com"
              >
                <span class="rounded-full font-semibold group disabled:opacity-80 focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-all active:ring bg-white hover:bg-yellow-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20 active:ring-slate-500/20 aspect-square w-8 h-8 p-[0_!important] grid place-items-center px-3 py-1 gap-1 icon group-hover:bg-yellow-100">
                  <SiGmail
                    size={30}
                    className="shrink-0 rounded-md bg-white-600/5 p-1.5 "
                    style={{ color: "#D14836" }}
                  />
                </span>
                <div>
                  <p class="title mb-[3px] font-semibold">Email Me</p>
                  <p class="text-zinc-300">msufiyanhusen@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
