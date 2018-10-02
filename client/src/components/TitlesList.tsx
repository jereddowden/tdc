import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme: any) => ({
  link: {
    textDecoration: 'none'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    listStyleType: 'none',
    padding: theme.spacing.unit
  },
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
  }
});

const TitlesList = ({ titles, classes }: any) => (
  <Paper className={classes.root}>
    <ul className={classes.list}>
      {titles.length > 0 ? (
        titles.map((title: any) => (
          <li className={classes.listItem} key={title.TitleId}>
            <Link className={classes.link} to={`/title/${title.TitleId}`}>
              {title.TitleName}
            </Link>
          </li>
        ))
      ) : (
        <li>No Titles Found</li>
      )}
    </ul>
  </Paper>
);

export default withStyles(styles)(TitlesList);
