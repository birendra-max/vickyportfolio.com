import React from "react";
import LinkedImg from "../img/linked-in-img.jfif";
import Cv from "../img/Birendra Kumar Pradhan.pdf";
import Cv1 from "../img/resume1.jpg";
// import Cv2 from "./img/2.jpg";
import whatsapp from "../img/whatsapp.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";
import instagram from "../img/instagram.svg";
import html from "../img/html.png";
import css from "../img/css";
import js from "../img/js.png";
import php from "../img/php.png";
import mysql from "../img/mysql.png";
import bootstrap from "../img/bootstrap.png";
import tailwindcss from "../img/tailwind-css";
import reactjs from "../img/ReactJS.png";
import codeigniter from "../img/codeigniter.png";
import wordpress from "../img/wordpress.png";
import linkedinlogo from "../img/linkedinlogo.gif";

export default function About() {
  function hideResume() {
    document.getElementById("popup").style.display = "none";
  }

  function showResume() {
    document.getElementById("popup").style.display = "block";
  }
  return (
    <>
      {/* Popup page */}
      <div id="popup" className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0" style={{ backdropFilter: "blur(10px)" }}>
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="w-full inline-block align-bottom bg-white rounded-lg px-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:align-middle sm:max-w-3xl sm:w-full">
            <div className="sm:flex sm:items-start">
              <div className="flex justify-center items-center">
                <div id="cv" className="flex justify-center items-center">
                  <img src={Cv1} className="w-full" alt="myresume" />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <a
                  href={Cv}
                  download={true}
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Download my CV
                </a>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={hideResume}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Popup page */}

      <div id="About" className="h-full md:mt-10 px-2 md:px-8">
        <div className="rounded-lg shadow-xl pb-8 backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md">
          <div className="w-full md:h-[300px] h-[100px]">
            <img
              src={linkedinlogo}
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
              alt="linkedinbackground"
            />
          </div>
          <div className="flex flex-col items-center -mt-14">
            <img
              src={LinkedImg}
              className="w-40 border-4 border-white rounded-full"
              alt="myimg"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="md:text-2xl text-xl">Birendra Kumar Pradhan</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="md:text-sl text-sm">
              Software Engineer at Anza Solutions LLP
            </p>
            <p className="text-sm">Bangalore Karnataka , India</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <a
                  href="https://www.linkedin.com/in/birendra-kumar-pradhan-487b96269/"
                  alt="linked-In"
                >
                  Connect
                </a>
              </button>
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a href="https://www.linkedin.com/messaging/thread/2-N2Y5M2JjZDItNjAyMi00YmVjLThjOGUtZGM0ZThkY2U5YzY3XzAxMA==/">Message</a>
              </button>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 ">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 rounded-lg shadow-xl p-4 backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md ">
              <h4 className="md:text-xl text-sm font-bold">Personal Info</h4>
              <ul className="mt-2  ">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className=" ">Birendra Kumar Pradhan</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Birthday:</span>
                  <span className=" ">03 Nov , 2001</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Joined:</span>
                  <span className=" ">24 Apr , 2024</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className=" ">+91 9692926869</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className=" ">birendrapradhan112@gmail.com</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className=" ">Bangalore, India</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Languages:</span>
                  <span className=" ">English, Hindi, Odia</span>
                </li>
                <li className="flex items-center border-b py-2 space-x-2 ">
                  <span className="font-bold w-24">Elsewhere:</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=9348302141"
                    title="whatsapp" target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      title="whatsapp"
                      className="h-8 w-8"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/vicky___lacky/"
                    title="instagram" target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src={instagram}
                      alt="instagram"
                      title="instagram"
                      className="h-10 w-10"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/birendra-kumar-pradhan-487b96269/"
                    title="LinkedIn"
                    alt="linkedin" target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      title="linkedin"
                      className="h-8 w-8"
                    />
                  </a>
                  <a
                    href="https://github.com/birendra-max?tab=repositories"
                    alt="Github"
                    title="github" target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      alt="github"
                      title="github"
                      className="h-8 w-8"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 rounded-lg shadow-xl mt-4 p-8 backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">Activity log</h4>
              <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                {/* <!-- start::Timeline item --> */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <a href="https://github.com/birendra-max" className="mt-4 text-blue-600 font-bold">
                      GitHub Profile.
                    </a>
                    <p className="text-sm"></p>
                    <p className="text-xs text-gray-500">Profile Changed 3 min ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Github Repo {" "}
                      <a href="https://github.com/birendra-max/USRECHARGEREFILL.COM.git" className="text-blue-600 font-bold">
                        USRECHARGEREFILL.COM
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">Last Update Jul 7.</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Git Repo{" "}
                      <a href="https://github.com/birendra-max/sqltecherror.com.git" className="text-blue-600 font-bold">
                        sqltecherror.com
                      </a>{" a blogging site"}
                    </p>
                    <p className="text-xs text-gray-500">Last Update Jul 7.</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Git Reppo{" "}
                      <a href="https://github.com/birendra-max/DbMigration.git" className="text-blue-600 font-bold">
                        DbMigration
                      </a>{" Migration App"}
                      .
                    </p>
                    <p className="text-xs text-gray-500">Updated Last week</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Git Repo {" "}
                      <a href="/" className="text-blue-600 font-bold">
                        vickyportfolio.com
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">Last Updated 12 min ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}

                {/* <!-- start::Timeline item --> */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">
                      Message received from{" "}
                      <a href="/" className="text-blue-600 font-bold">
                        Jane Stillman
                      </a>
                      .
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                {/* <!-- end::Timeline item --> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 rounded-lg shadow-xl p-8 backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">About</h4>
              <p className="mt-2 text-justify">
                Hello! I'm Birendra Kumar Pradhan, a tech enthusiast from the
                vibrant state of Odisha. I recently graduated with a BCA degree
                from Berhampur University in 2023. Currently based in Bangalore,
                I've been delving into the dynamic tech ecosystem here.Equipped
                with a solid foundation from Berhampur University, my academic
                journey has laid the groundwork for a versatile skill set.
              </p>

              <p className="mt-4 text-justify">
                My expertise in PHP development, MySQL, JavaScript, HTML, and
                CSS can be effectively utilized.Over the past year, my
                professional journey has involved intensive freelancing, with a
                primary focus on developing website in php and wordpress . This
                experience has not only refined my technical acumen but has also
                afforded me the opportunity to integrate creative solutions into
                the digital realm.
              </p>

              <div className="md:flex md:w-[35%] rounded-md shadow-sm flex justify-between items-center w-[100%] mt-10">
                <a class="button" href={Cv} download={true} type="button" id="ResumeDownload">
                  <span class="button__text" >Download</span>
                  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                </a>

                <button class="view-cv-button" onClick={showResume}>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ml-2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span>View My Cv</span>
                </button>



              </div>
            </div>
            <div className="flex-1 rounded-lg shadow-xl mt-4 p-8 backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md">
              <h4 className="text-xl  font-bold">Technical skills</h4>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4 w-full">
                <img
                  id="imgskills"
                  src={html}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2 w-full "
                  alt="html"
                  title="HTML"
                />

                <img
                  id="imgskills"
                  src={css}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="css"
                  title="CSS"
                />
                <img
                  id="imgskills"
                  src={js}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="javascript"
                  title="JAVASCRIPT"
                />

                <img
                  id="imgskills"
                  src={php}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="php"
                  title="PHP"
                />

                <img
                  id="imgskills"
                  src={mysql}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="mysql"
                  title="MYSQL"
                />

                <img
                  id="imgskills"
                  src={wordpress}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="WORDPRESS"
                  title="WORDPRESS"
                />

                <img
                  id="imgskills"
                  src={reactjs}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="react"
                  title="REACT JS"
                />

                <img
                  id="imgskills"
                  src={bootstrap}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="bootstrap"
                  title="BOOTSTRAP"
                />

                <img
                  id="imgskills"
                  src={tailwindcss}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="tailwind css"
                  title="TAILWIND CSS"
                />

                <img
                  id="imgskills"
                  src={codeigniter}
                  className="backdrop-filter backdrop-blur-none backdrop-saturate-150 bg-opacity-75 border border-gray-300 rounded-lg shadow-md p-2"
                  alt="Codeigniter"
                  title="CODEIGNITER"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
