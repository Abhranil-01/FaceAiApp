import React from 'react'
import { Button, Input, PasswordInput } from '../FormControl'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'


function Register() {
  return (
    <>
       <div className="w-75 ">
        <form >
        <Input
            placeholderText="Enter Full Name"
            // register={register("identifier", { required: true })}
            icon={faUser}
          />
          <Input
            placeholderText="Enter Email"
            // register={register("identifier", { required: true })}
            icon={faEnvelope}
          />
          <PasswordInput
            type="password"
            placeholderText="Enter Password"
            // register={register("password", { required: true })}
            icon={faLock}
          />
          <Button type="submit" text="Register" />
        </form>
      </div>{" "}
    </>
  )
}

export default Register
