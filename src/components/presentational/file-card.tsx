import { Grid, Card, CardHeader, CardContent, CardMedia, Avatar } from "@material-ui/core"
import * as React from "react"
import { css } from "emotion"

export function FileCard(tile: any, updatePhoto?: any) {
  return (
    <Grid item xs={12}>
      <Avatar
        src={tile.img}
        className={css`
          && {
            width: 100px;
            height: 100px;
            margin: 20px auto;
            filter: invert(1);
          }
        `}
        onClick={updatePhoto}
      />
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
