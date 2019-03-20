import {
  Button,
  CardContent,
  Card,
  CardActions,
  Typography,
  CardMedia,
  Chip,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core"
import { css } from "emotion"
import React from "react"

export function CampaignCard(tile: any) {
  return (
    <Card
      key={tile.name}
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
          <Chip key={tile.tag} label={tile.tag} variant="outlined" />
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
  )
}

export function CampaignListItem(tile: any) {
  return (
    <ListItem alignItems="flex-start" key={tile.name}>
      <ListItemAvatar>
        <Avatar alt={tile.name} src={tile.img} />
      </ListItemAvatar>
      <ListItemText
        primary={tile.name}
        secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              {tile.description}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  )
}
