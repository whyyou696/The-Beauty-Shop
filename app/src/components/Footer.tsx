import React from "react";
import Image from 'next/image';
import logo from '@/assets/logo2.png';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-white text-base-content">
    <aside>
        <Image src={logo} alt="Logo" className="w-20 h-20" />
     <p>The Beauty Shop<br/>Copyright ©Since 2024</p>
    </aside> 
    <nav className="text-emerald-700">
      <h6 className="footer-title">Services</h6> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav className="text-emerald-700">
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav className="text-emerald-700">
      <h6 className="footer-title">Legal</h6> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
}