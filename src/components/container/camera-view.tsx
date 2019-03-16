import * as React from 'react';
import { Grid } from '@material-ui/core';
// import TickIcon from '@material-ui/icons/Check';
import { Camera  } from 'react-feather';
import { css, Global } from '@emotion/core';
import CameraFeed from 'react-html5-camera-photo';
import Fab from '@material-ui/core/Fab';
import { saveScan } from 'domain/middleware/user';

export class CameraView extends React.Component {
  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
    saveScan({
      title: `Lastest Scan`,
      date: new Date().toLocaleDateString(),
      value: `Mild`,
      img:  dataUri
    })
  }

  render() {
  return (
    <>
    <Global styles={css`
      .react-html5-camera-photo {
        position: relative;
        text-align: center;
      }

      .react-html5-camera-photo > video {
        width: 768px;
      }

      .react-html5-camera-photo > img {
        width: 768px;
      }

      .react-html5-camera-photo > .display-error {
        width: 768px;
        margin: 0 auto;
      }

      @media(max-width:768px){
        .react-html5-camera-photo > video, .react-html5-camera-photo > img {
          width: 100%;
        }
        .react-html5-camera-photo > .display-error {
          width: 100%;
        }
      }

      /* fullscreen enable by props */
      .react-html5-camera-photo-fullscreen > video, .react-html5-camera-photo-fullscreen > img {
        width: 100vw;
        height:100vh;
      }
      .react-html5-camera-photo-fullscreen > video {
        -o-object-fit: fill;
           object-fit: fill;
      }
      .react-html5-camera-photo-fullscreen > .display-error {
        width: 100vw;
        height:100vh;
      }
      #container-circles {
        position: absolute;
        left: 50%;
        bottom: 90px;
      }

      #outer-circle {
        position: absolute;
        left: -37px;

        height: 75px;
        width: 75px;

        /*
          opacity of 0.4
        */
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 50%;

        z-index: 1;
      }

      #inner-circle {
        position: absolute;
        left: 50%;
        top: 38px;

        height: 44px;
        width: 44px;

        background: white;
        border-radius: 50%;

        /*
         Offset the position correctly with
         minus half of the width and minus half of the height
        */
        margin: -22px 0px 0px -22px;

        /*
          On the top of outer-circle
        */
        z-index: 2;
      }

      #inner-circle.is-clicked {
        height: 38px;
        width: 38px;
        margin: -19px 0px 0px -19px;
      }

    `} />

      <CameraFeed
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
    </>
    )
  }
}