// src/components/LinkedInLogin.jsx
import React from 'react';

const CLIENT_ID = '867166u1h67vhd';
const REDIRECT_URI = 'https://www.linkedin.com/in/birendra-kumar-pradhan-487b96269/';
const AUTH_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;

const LinkedInLogin = () => {
  return (
    <div>
      <a href={AUTH_URL}>Login with LinkedIn</a>
    </div>
  );
};

export default LinkedInLogin;
