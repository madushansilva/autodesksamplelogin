import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="link-div divspecial">
        <p className="pline pspecial ">New to Autodesk?</p>
        <Link className="plink" to={'/register'}>
          Create account
        </Link>
      </div>
      <div className="link-div divspecial_end ">
        <p className="pline">Your account for everything</p>

        <Link className="plink " to={''}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Footer;
