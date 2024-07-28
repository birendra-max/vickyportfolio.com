// src/components/LinkedInProfile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const LinkedInProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("linkedin_access_token");
      if (token) {
        try {
          const response = await axios.get("/v2/activities", {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-Restli-Protocol-Version": "2.0.0",
            },
          });
          setProfile(response.data);
        } catch (error) {
          setError("Failed to fetch profile");
          console.error("Error fetching LinkedIn profile", error);
        }
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>
        {profile.localizedFirstName} {profile.localizedLastName}
      </h1>
      <p>{profile.headline}</p>
      {profile.profilePicture?.["displayImage~"]?.elements?.[0]
        ?.identifiers?.[0]?.identifier && (
        <img
          src={
            profile.profilePicture["displayImage~"].elements[0].identifiers[0]
              .identifier
          }
          alt="Profile"
        />
      )}
    </div>
  );
};

export default LinkedInProfile;
