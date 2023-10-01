import React from "react";
import { account } from "../appwriteConfig";
import { useAuth } from "../utils/AuthContex";
import { useState, useEffect } from "react";
import { FaUserCheck } from "react-icons/fa"
import AccessDenied from "./denied";

const Profile = () => {
  const [userinfo, setUserinfo] = useState();
  const { user, logoutUser } = useAuth();

  // APPWRITE CONFIGURATION
  useEffect(() => {
    const userData = account.get();
    userData.then(
      function (response) {
        setUserinfo(response);
        console.log(userinfo);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    
    <div className="azul3">
     {user ? (
      <div className="custom-container-tu">
        
        <h1 className="custom-title-tu">
          This page is only for authorized users
        </h1>
        {userinfo ? (
          <div className="custom-text-tu">
            Welcome <i className="custom-text-tu-name" style={{ color:  " #03bcf4 " }}>{userinfo.name}</i>
            <br />
            Your email is <i className="custom-text-tu" style={{ color:  " #03bcf4 " }}>{userinfo.email}</i>
            
            <div className="usericon">
            <FaUserCheck />
            </div>
            Date Registration:{" "}
            <i className="custom-text-tu">{userinfo.registration}</i>
          </div>
        ) : (
          <i className="custom-text-tu">user info loading...</i>
        )}
      
      </div> ) : (
        <div>
          <AccessDenied />
        </div>
      )}
    </div>
  
  );
};

export default Profile;
