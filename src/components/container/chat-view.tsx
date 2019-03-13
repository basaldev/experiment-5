import * as React from 'react';
import { Category } from '@material-ui/icons';
import { Avatar, Grid, Card, CardContent, InputBase, Paper, IconButton, Divider} from '@material-ui/core';
import { css } from 'emotion';


function Bubble(content:any){
  return (
    <Card>
      <CardContent>
      {content}
      </CardContent>
    </Card>
  )
}
function Speaker(show: boolean){
  return (
    <Avatar className={css`
           margin: 10;
          color: '#fff';
          background: hotpink;
          visibility: ${!show ? 'hidden': ''};
        `}>
          <Category />
        </Avatar>
  )
}

function Message(direction:any, showSpeaker: boolean, content: any){
  return (
    <Grid container key={content} spacing={16} direction={direction}>
        <Grid item>{Speaker(showSpeaker)}</Grid>
        <Grid item>{Bubble(content)}</Grid>
      </Grid>
  )
}
function MessageInput(){
  return (
    <Paper elevation={1}>
      <InputBase  placeholder="Search Google Maps" />
      <IconButton  aria-label="Search">
        {/* mic */ }
      </IconButton>
      <Divider  />
      <IconButton color="primary" aria-label="Directions">
        { /* send */}
      </IconButton>
    </Paper>
  )
}

export function ChatView(props:any){
  return (
    <div className={css`padding: 8px;`}>
        {props.messages.map((message => {
          return Message(message.direction , message.showSpeaker, message.content);
        }))}
      <MessageInput />
    </div>
  )
}