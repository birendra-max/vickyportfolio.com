// src/components/LinkedInCallback.jsx
import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CLIENT_ID = "867166u1h67vhd";
const CLIENT_SECRET = "AGSDFLn9HQBqxWNk";
const REDIRECT_URI = "YOUR_REDIRECT_URI";
const TOKEN_URL = "https://www.linkedin.com/in/birendra-kumar-pradhan-487b96269/";

const LinkedinApis = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get("code");

  useEffect(() => {
    if (code) {
      axios
        .post(TOKEN_URL, null, {
          params: {
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          const { access_token } = response.data;
          // Store the access token in localStorage or state
          localStorage.setItem("linkedin_access_token", access_token);
          // Redirect or update UI accordingly
          window.location.href = "/profile"; // Example: redirect to profile page
        })
        .catch((error) => {
          console.error("Error getting access token", error);
        });
    }
  }, [code]);

  return <div>Loading...</div>;
};

export default LinkedinApis;
