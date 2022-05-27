import React from 'react'
import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import './App.css'
import { auth } from './firestore-config'

function App() {
  return (
    <div>
      <h1></h1>
    </div>
  )
  
}

export default App
