import React from 'react'
import './MainPageContact.css'
import { TextField, Button, InputLabel, MenuItem, Select, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';



function MainPageContact({packages, setPackages}) {


  const ref = React.useRef()
  React.useEffect(() => {
    const observerContact = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('showContact')
        })
      })

    const hiddenElementsContact = document.querySelectorAll('.hiddenContact');
    hiddenElementsContact.forEach((el) => {
      observerContact.observe(el)
    })
  }, [ref]
  )


  return (
    <div className="mainPageContact" id="Contact">
      <div className="mainPageContactLeft">
        <div className="mainPageContactLeftTitle hiddenContact">Any questions?</div>
        <div className="mainPageContactLeftSubtitle hiddenContact">Write an email or call us</div>
        <div className="mainPageContactLeft-Contacts hiddenContact">
          <div className="pointer hiddenContact"><i className="fa-solid fa-envelope"></i> info@deliverto.com</div>
          <div className="pointer hiddenContact"><i className="fa-solid fa-phone"></i> 123 456 789</div>
        </div>
      </div>
      <div className="mainPageContactRight hiddenContact">
        <div className="mainPageContact-form hiddenContact">
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
                value={packages}
                onChange={event => setPackages(event.target.value)}
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
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </FormGroup>
          <Button variant="contained" className="button-send">Send</Button>
        </div>
      </div>
    </div>
  )
}

export default MainPageContact