import React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '../Avatar/Avatar';
import { getRandomAvatarStyles } from '../../helpers/helpers';
import './header.scss';

const Header = () => {
  const [, setRandom] = useState(Math.random());
  useEffect(() => {
    const timer = setInterval(() => setRandom(Math.random), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <div className="headerText">Pictionary</div>
          </Grid>
          <Grid item xs={12} className="headerAvatars">
            {[...Array(6).keys()].map(key => (
              <Avatar width="50px" height="50px" key={key} avatarStyles={getRandomAvatarStyles()} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
