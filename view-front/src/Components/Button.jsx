import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//import React from 'react'
const STYLE = ['btn--primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large']
export const Button = ({
                      children,
                      type,
                      onClick,
                      buttonStyle,
                      buttonSize

                      }) => {  
            const checkButtonStyle = STYLE.includes(buttonStyle) 
                ? buttonStyle 
                : STYLE[0];
            const chckButtonSize = SIZES.includes(buttonSize) 
                ? buttonSize 
                : SIZES[0];
                 return(

                    <Link to='' className='btn-mobile'>
                        <button>
                        { children}
                        </button>
                    </Link>

                 )
                             

};