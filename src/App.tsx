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
import { Products } from './User/component/Products'

function App() {
  return (
    <div>
      <Products />
    </div>
  )
}

export default App
