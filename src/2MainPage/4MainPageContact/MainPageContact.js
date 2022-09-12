import React from 'react'
import './MainPageContact.css'
import { TextField, Button, InputLabel, MenuItem, Select, FormControl } from '@mui/material';



function MainPageContact() {



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
          <FormControl>
              <InputLabel id="demo-simple-select-label">Package</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Package"
              >
                <MenuItem value={1}>Standard</MenuItem>
                <MenuItem value={2}>Premium</MenuItem>
                <MenuItem value={3}>Unlimited</MenuItem>
              </Select>
            </FormControl >
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

export default MainPageContact