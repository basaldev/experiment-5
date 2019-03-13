import * as React from 'react';
import { currentPage } from 'domain/store/selectors/main';
import { Grid }  from '@material-ui/core';

export function App() {

  const content = (pageName => {
    switch (pageName) {
      case 'HOME_PAGE':
        return <div>HOMEPAGE</div>
      case 'DETAIL_PAGE':
        return <div></div>
      default:
        return <p>Page not found</p>;
    }
  })(currentPage().name);

  return (
    <Grid className={`container`}>
          { content }
    </Grid>
  );
}
