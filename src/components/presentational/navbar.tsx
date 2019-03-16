import * as React from 'react';
import { BottomNavigation, BottomNavigationAction }  from '@material-ui/core';
import { User, Activity, Heart  } from 'react-feather';




import { css } from 'emotion';
export function Navbar(props: any){
  return (
    <BottomNavigation
        value={props.value}
        showLabels
      >

        <BottomNavigationAction onClick={props.routes[0]} label="Profile" icon={<User />} />
        <BottomNavigationAction onClick={props.routes[1]} label="Help" icon={<Heart />} />
      </BottomNavigation>
  )
}