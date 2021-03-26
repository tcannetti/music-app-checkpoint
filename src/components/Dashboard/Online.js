import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Typography } from '@material-ui/core';

export default function Switches(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography variant="h5">Online Mode</Typography>
      <Typography variant="body2">Is the application connected to the internet?</Typography>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        value={props.online}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
