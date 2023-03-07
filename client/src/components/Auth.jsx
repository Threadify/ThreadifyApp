import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/Signin.png';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
   
    const handleChange = () => {}

    const switchMode = () => {
        setIsSignup((previousIsSignup) => !previousIsSignup);
    }
  return (
    <div className='auth_form-container'>
        <div className='auth_form-container_fields'>
            <div className='auth_form-container_fields-content'>
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={() => {}}>
                    {isSignup && (
                        <div className='auth_form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input
                                name='fullName'
                                type='text'
                                placeholder='Full Name'
                                onChange={handleChange}
                                required
                            />

                        </div>
                    )}
                    <div className='auth_form-container_fields-content_input'>
                            <label htmlFor='username'>Username</label>
                            <input
                                name='username'
                                type='text'
                                placeholder='UserName'
                                onChange={handleChange}
                                required
                            />

                        </div>
                        {isSignup && (
                        <div className='auth_form-container_fields-content_input'>
                            <label htmlFor ='phoneNumber'>Phone Number</label>
                            <input
                                name='phoneNumber'
                                type='text'
                                placeholder='Phone Number'
                                onChange={handleChange}
                                required
                            />

                        </div>
                    )}
                    {isSignup && (
                        <div className='auth_form-container_fields-content_input'>
                            <label htmlFor ='avatarURL'>avatar URL</label>
                            <input
                                name='avatarURL'
                                type='text'
                                placeholder='Avatar URL'
                                onChange={handleChange}
                                required
                            />

                        </div>
                    )}
                    <div className='auth_form-container_fields-content_input'>
                            <label htmlFor ='password'>Password</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                onChange={handleChange}
                                required
                            />

                        </div>
                    {isSignup && (
                        <div className='auth_form-container_fields-content_input'>
                            <label htmlFor ='confirmPassword'>Confirm Password</label>
                            <input
                                name='confirmPassword'
                                type='password'
                                placeholder=' Confirm Password'
                                onChange={handleChange}
                                required
                            />

                        </div>
                    )}
                </form>
                <div className='auth_form-container-fields-account'>
                    <p>
                        {isSignup
                        ?'Already have and account?'
                        :"Don't have and account"
                        }
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign In' : 'Sign Up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='auth_form-container_image'>
            <img src={signinImage} alt='sign in' />
        </div>
    </div>
  )
}

export default Auth