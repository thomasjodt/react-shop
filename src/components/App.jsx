import React from 'react'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import '../styles/main.css'
import RecoveryPassword from './RecoveryPasword'

const App = () => (
  <Layout>
    <Login />
    <RecoveryPassword />
  </Layout>
)

export default App