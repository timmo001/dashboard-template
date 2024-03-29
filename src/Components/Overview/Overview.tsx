// @flow
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { ConfigProps, CardProps } from '../Configuration/Config';
import { HomeAssistantChangeProps } from '../HomeAssistant/HomeAssistant';
import Base from '../Cards/Base';
import Header from './Header/Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  container: {
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0.5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0)
    }
  },
  containerNavShown: {
    paddingBottom: theme.spacing(10)
  },
  groupContainer: {
    overflowX: 'auto',
    overflowY: 'hidden'
  }
}));

interface OverviewProps
  extends RouteComponentProps,
    ConfigProps,
    HomeAssistantChangeProps {
  mouseMoved: boolean;
}

function Overview(props: OverviewProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classnames(
          classes.container,
          props.mouseMoved && classes.containerNavShown
        )}
        container
        direction="column"
        justify="flex-start"
        alignContent="flex-start">
        <Header {...props} />
        <Grid
          className={classes.groupContainer}
          item
          xs
          container
          direction="column"
          justify="flex-start"
          alignContent="flex-start"
          spacing={1}>
          {props.config.cards.map((card: CardProps, key: number) => (
            <Base {...props} key={key} card={card} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

Overview.propTypes = {
  config: PropTypes.any,
  editing: PropTypes.number,
  mouseMoved: PropTypes.bool,
  hassConfig: PropTypes.any,
  hassEntities: PropTypes.any
};

export default Overview;
