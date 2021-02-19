import React, { useState } from 'react'
// making a form for the quote to initiate
export default function Form() {
    const [values, setValues] = useState({
        
        fullName: "",
        email: "",
        phoneNumber: ""

    });
    // this handlefunction is to accept the name entering of a user, we using the spread operator to spread the values
    const handleFullNameInputChange = (event) => {
        setValues({...values, fullName: event.target.value})
    }
    // setting it for email 
    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }
    // setting it for phone number
    const handlePhoneNumberInputChange = (event) => {
        setValues({...values, phoneNumber: event.target.value})
    }

    return (
        <div className="form-container">
        <form className="register-form">
        <input className="form-field"
               onChange={handleFullNameInputChange}
               placeholder="Full-name"
               name="fullName"
               value={values.fullName}
        />
        <input className="form-field"
             onChange={handleEmailInputChange}
               placeholder="
               Email addres"
               name="email"
               value={values.email}
        />
        <input className="form-field"
               onChange={handlePhoneNumberInputChange}
               placeholder="
               Phone Number"
               name="phoneNumber"
               value={values.phoneNumber}
        />
        <button className="form-container" type="submit">
           GET MY FREE QUOTE
        </button>
        </form>
            
        </div>
    )
}
