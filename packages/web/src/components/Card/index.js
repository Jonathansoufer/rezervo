import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    height: '100%',
  },
  cardContent: {
    height: '100%',
  },
  title: {
    fontSize: 16,
    color: '#697B8C',
  },
};

function CardComponent(props) {
  const { classes, title, children } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

CardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.shape().isRequired,
};

export default withStyles(styles)(CardComponent);
