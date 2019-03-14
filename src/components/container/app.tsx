import React from 'react';
import { currentPage, getMessages, getDocuments, getSessionAttributes, getInputText } from 'domain/store/selectors/main';
import { Grid } from '@material-ui/core';
import { Navbar } from 'components/presentational/navbar';
import { ChatView } from 'components/container/chat-view';
import { DocumentsView } from 'components/container/documents-view';
import { navigate } from 'domain/middleware/router';
import { css } from 'emotion';

window['AWS'].config.region = 'us-east-1'; // Region
window['AWS'].config.credentials = new window['AWS'].CognitoIdentityCredentials({
		// Provide your Pool Id here
			IdentityPoolId: 'us-east-1:a7ef0bcd-4c3e-4965-8342-688cedd4f60e',
});
window['lexruntime'] = new window['AWS'].LexRuntime();

export function App() {
  const content = (pageName => {
    switch (pageName) {
      case 'HOME_PAGE':
        return <ChatView
          messages={getMessages()}
          textInput={getInputText()}
          lexruntime={window['lexruntime']}
          sessionAttributes={{}}
          />;
      case 'DOCUMENTS_PAGE':
        return <DocumentsView documents={getDocuments()} />;
      default:
        return <p>Page not found</p>;
    }
  })(currentPage().name);

  return (
    <Grid container direction="column">
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
