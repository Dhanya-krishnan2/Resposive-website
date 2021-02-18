import React, { useState } from 'react'
// making a form for the quote to initiate
export default function Form() {
    const [values, setValues] = useState({
        
        fullName: "",
        email: "",
        phoneNumber: ""

    });
    return (
        <div className="form-container">
        <form className="register-form">
        <input className="form-field"
               placeholder="Full-name"
               name="fullName"
               value={values.fullName}
        />
        <input className="form-field"
               placeholder="
               Email addres"
               name="email"
               value={values.email}
        />
        <input className="form-field"
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
