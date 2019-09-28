// @flow
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ConfigProps, CardProps } from '../Configuration/Config';
import { HomeAssistantChangeProps } from '../HomeAssistant/HomeAssistant';
import MarkdownText from '../Utils/MarkdownText';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  card: {
    flex: 1
  }
}));

interface BaseProps
  extends RouteComponentProps,
    ConfigProps,
    HomeAssistantChangeProps {
  card: CardProps;
}

function Base(props: BaseProps) {
  const classes = useStyles();
  const {
    width,
    height,
    elevation,
    square,
    background,
    title,
    content,
    entity,
    chart,
    chart_detail,
    chart_from
  } = props.card;

  return (
    <Grid item style={{ height, width }}>
      <Card
        className={classes.card}
        elevation={elevation}
        square={square}
        style={{ background }}>
        <CardContent>
          {title && (
            <Typography gutterBottom variant="h5" component="h2">
              <MarkdownText text={title} />
            </Typography>
          )}
          {content && (
            <Typography variant="body2" color="textPrimary" component="article">
              <MarkdownText text={content} />
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

Base.propTypes = {
  config: PropTypes.any,
  editing: PropTypes.number,
  mouseMoved: PropTypes.bool,
  hassConfig: PropTypes.any,
  hassEntities: PropTypes.any
};

export default Base;
