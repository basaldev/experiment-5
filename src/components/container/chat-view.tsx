import * as React from 'react';
import { Category } from '@material-ui/icons';
import { Avatar, Grid, Card, CardContent, InputBase, Paper, IconButton, Divider} from '@material-ui/core';
import { css } from 'emotion';
import { updateChat, updateInputText, updatesessionAttributes } from 'domain/store/reducers/main';
import FavoriteIcon from '@material-ui/icons/Favorite';

function showResponse(lexResponse){
  if (lexResponse.message) {
    updateChat({
      content: lexResponse.message,
      showSpeaker: true,
      direction: 'row',
      speaker: 'BOT'
      },
    );
  }
  if (lexResponse.dialogState === 'ReadyForFulfillment') {
    console.log('Ready For Fulfillment')
    // TODO:  show slot values
  } else {
    console.log(lexResponse.dialogState);
  }
}


function pushChat(textString, lexruntime, sessionAttributes){
  const params = {
    botAlias: '$LATEST',
    botName: 'Tere',
    inputText: textString,
    userId: 'tere-thursday',
    sessionAttributes: sessionAttributes
  };
  updateChat({
    content: textString,
    showSpeaker: true,
    direction: 'row-reverse',
    speaker: 'USER'
    },
  );
  lexruntime.postText(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    if (data) {
      // capture the sessionAttributes for the next cycle
      updatesessionAttributes(data.sessionAttributes);
      // show response and/or error/dialog status
      showResponse(data);
    }
    //Clean value
  });
}

function onKeyPressUpdateInputText(e) {
  updateInputText(e.target.value)
}

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
    <Grid container key={content+Math.random()} spacing={16} direction={direction}>
        <Grid item>{Speaker(showSpeaker)}</Grid>
        <Grid item>{Bubble(content)}</Grid>
      </Grid>
  )
}
function MessageInput(props:any){
  return (
    <Paper elevation={1}>
    <Grid justify="space-between">
      <Grid item>
      <InputBase onKeyUp={onKeyPressUpdateInputText}  placeholder="Send a message" />
      </Grid>
      <Grid item>
      <IconButton color="primary" onClick={() => {
        pushChat(props.textInput, props.lexruntime, props.sessionAttributes);
        updateInputText('');
      }}>
        <FavoriteIcon />
      </IconButton>
      </Grid>
      </Grid>
    </Paper>
  )
}

export function ChatView(props:any){
  return (
    <div className={css`padding: 8px;`}>
    <div className={css`
      overflow:scroll;
    `}>
        {props.messages.map((message => {
          return Message(message.direction , message.showSpeaker, message.content);
        }))}
    </div>
      <MessageInput sessionAttributes={props.sessionAttributes} textInput={props.textInput} lexruntime={props.lexruntime} />
    </div>
  )
}