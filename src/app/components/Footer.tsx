import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="flex items-center mt-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a4 4 0 00-5.656 0L6.343 16.657c-.726.726-.03 2.06.919 2.06h12a2 2 0 002-2z"></path></svg>
              <p>Opening Hours</p>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a4 4 0 00-5.656 0L6.343 16.657c-.726.726-.03 2.06.919 2.06h12a2 2 0 002-2z"></path></svg>
              <p>Monday - Friday: 9:00 - 6:00</p>
            </div>
            <div className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a4 4 0 00-5.656 0L6.343 16.657c-.726.726-.03 2.06.919 2.06h12a2 2 0 002-2z"></path></svg>
              <p>Saturday - Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">Contacts</a></li>
            </ul>
          </div>

          {/* Help? */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help?</h3>
            <ul>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Term & Conditions</a></li>
              <li><a href="#" className="hover:underline">Reporting</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Support Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Post</h3>
            <div className="flex items-center mb-4">
              <img src="/footer1.jpg" alt="Post 1" className="w-12 h-12 mr-4 rounded-lg" />
              <div>
                <p className="text-sm">25-Feb-2023</p>
                <a href="#" className="hover:underline">Keep Your Business</a>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/footer2.jpg" alt="Post 2" className="w-12 h-12 mr-4 rounded-lg" />
              <div>
                <p className="text-sm">25-Feb-2022</p>
                <a href="#" className="hover:underline">Keep Your Business</a>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/footer3.jpg" alt="Post 3" className="w-12 h-12 mr-4 rounded-lg" />
              <div>
                <p className="text-sm">25-Feb-2021</p>
                <a href="#" className="hover:underline">Keep Your Business</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t bg-slate-800 border-gray-700 mt-8 pt-4">
          <div className=" flex justify-between items-center">
            <p>&copy; Copyright 2024 by [Harmain]. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:bg-white hover:text-black p-2 rounded-full"><TiSocialFacebook /><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:bg-white hover:text-black p-2 rounded-full"><FaTwitter /><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:bg-white hover:text-black p-2 rounded-full"><FaInstagram /><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:bg-white hover:text-black p-2 rounded-full"><CiLinkedin /><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:bg-white hover:text-black p-2 rounded-full"><FaGithub /><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>













      </div>
    </footer>
  );
}

export default Footer;