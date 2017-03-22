import React from 'react';
import {SignIn} from 'components/Form/SignIn';
import {Grid} from 'react-bootstrap';

export default function SignInView(props) {
  return (
    <Grid>
      <h1>Sign In</h1>
      <SignIn />
    </Grid>
  );
}
