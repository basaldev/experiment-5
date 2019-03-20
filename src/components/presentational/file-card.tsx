import { Grid, Card, CardHeader, CardContent, CardMedia, Avatar } from "@material-ui/core"
import * as React from "react"
import { css } from "emotion"
import { Camera } from 'react-feather';
export function FileCard(tile: any, updatePhoto?: any) {
  return (
    <Grid item xs={12}>
      {/* <Avatar
        src={tile.img}
        className={css`
          && {
            width: 150px;
            height: 150px;
            margin: 20px auto;
            filter: invert(1);
            position:relative;
          }
        `}

      >
      </Avatar> */}
      <div
       onClick={updatePhoto}
      className={css`
          &&&& {
            width: 150px;
            height: 150px;
            border-radius: 100%;
            overflow:hidden;
            margin: 20px auto;
            position:relative;
            background: #000;
          }
        `}>
        <img className={css`
          && {
            position:absolute;
            left:-45%;
            height:100%;
            opacity: 0.9;
            filter: invert(1);
          }
        `} src={tile.img} alt=""/>
        <Camera className={css` && {
        position: absolute;
        top: 30%;
        width: 100%;
        height: 35%;
        filter: invert(1);

        }`} />
      </div>
      <Card
        className={css`
          && {
            box-shadow: none;
          }
        `}
      >
        <CardHeader
          title={`${tile.value} Depression`}
          subheader={tile.date}
          className={css`
            && {
              padding-bottom: 0;
              div {
                display: flex;
                align-items: center;

                > span:first-child {
                  flex: 1;
                }
              }
            }
          `}
        />
        <CardContent>{tile.description}</CardContent>
      </Card>
    </Grid>
  )
}
