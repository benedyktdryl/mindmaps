import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  main: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export const SelectType: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Select type of chart to create:
          </Typography>
          <div className={classes.main}>
            <List>
              <ListItem>
                {/* <ListItemIcon>
            <DetailsIcon />
          </ListItemIcon> */}
                <Link to="/workspace/flowchart">
                  <ListItemText
                    primary="Flowchart"
                    style={{ textAlign: 'center' }}
                  />
                </Link>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
