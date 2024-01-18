import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { auth } from '../utility/firebaseApp';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  }, [])

  // regisztráció

  const signUpUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('sikeres regisztráció')
    } catch (err) {
      console.log(err);
    }
  }
  // bejelentkezés

  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //alert('sikeres bejelentkezés')
      setMsg(null)
      navigate('/')
    } catch (err) {
      setMsg(err.message);
    }
  }
  // kijelentkezés 

  const logoutUser = async () => {
    await signOut(auth);
    navigate('/');
  }
  // password

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email)
      alert('jelszómódosítási link küldve')     
      setMsg(null)
      navigate('signinup/in')
    } catch (err) {
      setMsg(err.message);
    }
  }


  return (
    <UserContext.Provider value={{ user, signUpUser, logoutUser, signInUser, resetPassword, msg }}>
      {children}
    </UserContext.Provider>
  )
}

