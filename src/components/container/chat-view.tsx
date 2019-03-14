import * as React from 'react';
import { css } from 'emotion';
import { scrollbottom } from 'domain/middleware/user';
import { Message } from 'components/presentational/message';
import { MessageInput } from 'components/presentational/message-input';
export class ChatView extends React.Component {
  props: {
    sessionAttributes: any;
    textInput: string;
    lexruntime: any;
    messages: Array<any>;
  }
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    scrollbottom(this.refs.scrollContainer);
  }
  render() {
    return (
      <div className={css`padding: 8px;`}>
        <div ref="scrollContainer" className={css`
      overflow:scroll;
      height: 80vh;
    `}>
          {this.props.messages.map((message => {
            return Message(message.direction, message.showSpeaker, message.content, message.speaker);
          }))}
        </div>
        <MessageInput scrollContainer={this.refs.scrollContainer} sessionAttributes={this.props.sessionAttributes} textInput={this.props.textInput} lexruntime={this.props.lexruntime} />
      </div>
    )
  }
}