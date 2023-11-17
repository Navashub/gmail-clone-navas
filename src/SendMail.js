import React from 'react';
import './SendMail.css';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function SendMail() {
  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon className='sendMail__close'/>
        </div>

        <form>

            <input placeholder='To' type="text" />
            <input placeholder='Subject' type="text" />
            <input placeholder='Message' type="text" className='sendMail__message' />

            <div className="sendMail__options">
                <Button className='sendMail__send'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail