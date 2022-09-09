import React from 'react'
import './MainPageContact.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/Textfield';



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
          <Button variant="contained">Send</Button>
        </div>
      </div>
    </div>
  )
}

export default mainPageContact