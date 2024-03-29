import * as React from "react"
import { Grid, Typography, List } from "@material-ui/core"
import { css } from "emotion"
import { CampaignCard, CampaignListItem } from "components/presentational/campaign-card"

export function SocialView(props: any) {
  return (
    <>
      <Typography
        variant="headline"
        className={css`
          padding: 24px;
        `}
      >
        Social media
      </Typography>
      <Grid
        container
        direction="column"
        spacing={8}
        className={css`
          padding: 16px;
        `}
      >
          <Grid item key={props.campaigns[0].name}>
            {CampaignCard(props.campaigns[0])}
          </Grid>
      </Grid>
      <Typography
        variant="title"
        className={css`
          padding: 24px;
        `}
      >
        Past campaigns
      </Typography>
      <List>{CampaignListItem(props.campaigns[1])}</List>
    </>
  )
}
