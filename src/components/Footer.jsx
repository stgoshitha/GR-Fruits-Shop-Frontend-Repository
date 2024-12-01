import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../assets/logo-bgremove.png'

const Footer = ({scrollToAbout, scrollToFeatures }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-10">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:items-left lg:text-left sm:items-center sm:text-center">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
          <Link to={'/'} className=''>
            <div className="flex lg:justify-start lg:items-start sm:justify-center sm:items-center">
              <div className='flex items-end lg:items-left lg:text-left lg:ml-0  sm:items-center sm:text-center sm:mb-5'>
                  <div>
                    <img src={Logo} className='w-12 rounded-full'/>
                  </div>
                  <div>
                    <span className='text-3xl'>GR</span>
                    <span className='text-secondary text-2xl font-bold'>Fruits.</span>
                  </div>
              </div>
            </div>
          </Link>
            <p className="text-gray-400">
              Fresh, hand-picked fruits delivered right to your doorstep. Your
              health, our priority.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
            <hr className="w-16 bg-secondary h-1 rounded-full border-none mb-4 sm:mx-auto  lg:ml-0" />

            <ul className="space-y-2 ">
              <li>
                <Link to="/" className="hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fruits" className="hover:text-secondary">
                  Fruits
                </Link>
              </li>
              <li>
              <button
                  onClick={scrollToAbout}
                  className="hover:text-secondary"
                >
                  About
                </button>
              </li>
              <li>
              <button
                  onClick={scrollToFeatures}
                  className="hover:text-secondary"
                >
                  Benifits
                </button>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Follow Us</h4>
            <hr className="w-16 bg-secondary h-1 rounded-full border-none mb-4 sm:mx-auto  lg:ml-0" />            
            <p className="text-gray-400 mb-4">
              Stay connected with us on social media!
            </p>
            <div className="flex lg:justify-start sm:justify-center space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white p-3 rounded-full hover:bg-secondary transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white p-3 rounded-full hover:bg-secondary transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white p-3 rounded-full hover:bg-secondary transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex justify-center items-center mt-8 sm:border-t w-full border-gray-700 p-5">
          <p className="text-gray-500">
            © {new Date().getFullYear()} GR Fruits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
