import { Button, CardContent, Card, CardActions, Typography, CardMedia } from "@material-ui/core"
import TickIcon from "@material-ui/icons/Check"
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
