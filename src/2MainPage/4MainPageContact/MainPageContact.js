import React from 'react'
import './MainPageContact.css'
import { TextField, Button } from '@mui/material';



function mainPageContact() {

  return (
    <div>
      <div className="mainPageContact">
        <div className="mainPageContact-title" id="Contact">Contact</div>
        <div className="mainPageContact-form">
          <TextField
            required
            id="outlined-required"
            label="E-mail"
          />
          <TextField
            id="outlined"
            label="Phone number"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={6}
          />
          <Button variant="contained" className="button-send">Send</Button>
        </div>
      </div>
    </div>
  )
}

export default mainPageContact