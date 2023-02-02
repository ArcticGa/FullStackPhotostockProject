import React from 'react'

import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { client } from '../client'
import logo from '../assets/logo.png'

const Login = () => {
  const navigate = useNavigate()

  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential)
    const { name, picture, sub } = decoded
    localStorage.setItem('user', JSON.stringify(decoded))
    const user = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    }

    client.createIfNotExists(user).then(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full bg-white"></div>

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-white">
        <div>
          <img src={logo} alt="logo" className="w-32" />
        </div>

        <div className="shadow-2xl">
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log('Error')}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
