import React from 'react';
import { currentPage, getMessages, getDocuments } from 'domain/store/selectors/main';
import { Grid } from '@material-ui/core';
import { Navbar } from 'components/presentational/navbar';
import { ChatView } from 'components/container/chat-view';
import { DocumentsView } from 'components/container/documents-view';
import { navigate } from 'domain/middleware/router';
import { css } from 'emotion';

export function App() {

  const content = (pageName => {
    switch (pageName) {
      case 'HOME_PAGE':
        return <ChatView messages={getMessages()} />;
      case 'DOCUMENTS_PAGE':
        return <DocumentsView documents={getDocuments()} />;
      default:
        return <p>Page not found</p>;
    }
  })(currentPage().name);

  return (
    <Grid container direction="column" className={css`
      position:relative;
    `} >
      <Grid item xs={12} className={css`
      min-height: 90vh;
    `}>
        {content}
      </Grid>
      <div>
        <Navbar routes={[
          (e) => { navigate('', e)},
          (e) => { navigate('/history', e)},
          (e) => { navigate('/docs', e)},
        ]} />
      </div>
    </Grid>
  );
}
