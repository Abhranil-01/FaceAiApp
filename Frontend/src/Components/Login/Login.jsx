import React from 'react'
import { Button, Input, PasswordInput } from '../FormControl'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

function Login() {
  return (
    <>
      <div className="w-75">
        <form >
          <Input
            placeholderText="Enter Username/Email"
            // register={register("identifier", { required: true })}
            icon={faUser}
          />
          <PasswordInput
            type="password"
            placeholderText="Enter Password"
            // register={register("password", { required: true })}
            icon={faLock}
          />
          <Button type="submit" text="Login" />
        </form>
    
      </div>{" "}
    </>
  )
}

export default Login
