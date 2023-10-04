import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";
import { useHistory } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      
      let accountDetails = await account.get();
      history.push('/profile');
      //console.log("accountDetails:", accountDetails);
      setUser(accountDetails);
     
    } catch (error) {
      console.log(error);
      alert("An error occurred while creating the user. Please try again. ");
    }

    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    history.push('/');
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name
      );

      await account.createEmailSession(userInfo.email, userInfo.password1);
      let accountDetails = await account.get();
      setUser(accountDetails);
      history.push('/profile');
    } catch (error) {
      alert("An error occurred while creating the user. Please try again. Password must be 8 characters");
      console.error(error);
    }

    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {}
    
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
