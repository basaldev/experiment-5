import * as React from 'react';
import { BottomNavigation, BottomNavigationAction }  from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { css } from 'emotion';
export function Navbar(props: any){
  return (
    <BottomNavigation
        value={props.value}
        onChange={() => {}}
        showLabels
      >
        <BottomNavigationAction onClick={props.routes[0]} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={props.routes[1]}label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction onClick={props.routes[2]}label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction onClick={props.routes[3]} label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
  )
}