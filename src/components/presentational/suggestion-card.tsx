import { Button, CardContent, Card, CardActions, Typography, Chip, CardMedia } from "@material-ui/core"
import { css } from "emotion"
import React from "react"

function Buttons(type: string, button: any) {
  return (
    <Button
      size="small"
      color="primary"
      onClick={() => {
        window.open(button.url)
      }}
    >
      {button.text}
    </Button>
  )
}

export function SuggestionCard(tile: any) {
  return (
    <Card key={tile.name + Math.random()}>
      <CardMedia
        className={css`
          min-height: 20vh;
        `}
        image={tile.img}
        title={tile.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {" "}
          {tile.name}{" "}
        </Typography>
        <Typography component="p"> {tile.description} </Typography>
      </CardContent>
      <CardActions> {Buttons(tile.type, tile.button)}</CardActions>
    </Card>
  )
}

export function SuggestionListItem(tile: any) {
  return (
    <Card
      key={tile.name + Math.random()}
      className={css`
        display: flex;
      `}
    >
      <CardMedia
        className={css`
          width: 150px;
          min-height: 100px;
        `}
        image={tile.img}
        title={tile.name}
      />
      <CardContent
        className={css`
          &&& {
            flex: 1;
            padding-bottom: 0;
          }
        `}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {" "}
          {tile.name}{" "}
        </Typography>
        <Typography component="p"> {tile.description} </Typography>
        <CardActions
          className={css`
            margin: auto -10px;
          `}
        >
        </CardActions>
        <CardActions
          className={css`
            margin: auto -10px;
          `}
        >
          <Button
            size="small"
            color="primary"
            href={tile.button.url}
            className={css`
              &&& {
                text-transform: none;
              }
            `}
          >
            {tile.button.text}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}