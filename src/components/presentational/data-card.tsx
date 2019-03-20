import * as React from "react"
import { Grid, Card, CardHeader, CardContent, Typography } from "@material-ui/core"
import { yellow, green, cyan, pink, blue, red, purple, brown } from "@material-ui/core/colors";
import { css } from "emotion"
import { Sun } from "react-feather";

const iconSize = '60px';
const types = {
  1: { color: yellow[700], icon: <Sun size={iconSize} /> },
  2: { color: green[700], icon: <Sun size={iconSize} /> },
  3: { color: cyan[700], icon: <Sun size={iconSize} /> },
  4: { color: pink[700], icon: <Sun size={iconSize} /> },
  5: { color: blue[700], icon: <Sun size={iconSize} /> },
  6: { color: red[700], icon: <Sun size={iconSize} /> },
  7: { color: purple[700], icon: <Sun size={iconSize} /> },
  8: { color: brown[700], icon: <Sun size={iconSize} /> },
}

export function DataCard(tile: any) {
  return (
    <Grid
      key={tile.title}
      item
      xs={6}
    >
      <Card
        className={css`
          && {
            heigth: 100px;
            background: ${types[tile.id].color};
            text-align: center;
          }
        `}
      >
        <div
          className={css`
            && {
              padding-top: 30px;
            }
          `}
        >
          {types[tile.id].icon}
        </div>
        <CardHeader
          title={tile.shortTitle}
          className={css`
            && {
              padding-bottom: 0;
              span {
                font-weight: bold;
              }
            }
          `}
        />
        <CardContent>
          <Typography variant="h6">{tile.value} {tile.unit}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
