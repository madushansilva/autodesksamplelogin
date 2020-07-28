import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const FooterLogin = () => {
  return (
    <div>
      <div className="link-div divspecial">
        <p className="pline pspecial ">Already have an account?</p>
        <Link className="plink" to={'/'}>
          Sign in
        </Link>
      </div>
      <div className="link-div">
        <p className="pline">Your account for everything</p>

        <Link className="plink " to={''}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default FooterLogin;
