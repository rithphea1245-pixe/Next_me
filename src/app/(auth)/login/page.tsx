import React from 'react'
// import Link from 'next/link'
export default function LoginPage() {
  const LoginHandler = async () => {
    const response = await fetch('http://localhost:3000/api/login')
    console.log(`==> response`, response)
    return response;
  }
  LoginHandler().then(data => console.log(data));
  return (
    <div>
       <button>Login</button>
    </div>
  )
}
