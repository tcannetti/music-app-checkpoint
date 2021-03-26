import React, { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import { Typography } from '@material-ui/core';


export default function Switches(props) {
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: false,
  // });
  useEffect(() => {
    console.log(props.online)
  }, [props.online.checkedA, props.online.checkedB]);

  const handleChange = (event) => {
    if(props.online.checkedA === false){
      console.log("checkedA is false")
    // props.setOnline({ ...props.online, [event.target.name]: event.target.checked })
    props.setOnline({ checkedB: false, checkedA: true })
  } else {
    console.log("checkedB is false")
    props.setOnline({ checkedA: false, checkedB: true })
    } ;
  };

  return (
    <div>
      <Typography variant="h5">Online Mode</Typography>
      <Typography variant="body2">Is the application connected to the internet?</Typography>
      <Switch
        checked={props.online.checkedB}
        onChange={handleChange}
        value={props.online}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
