import * as React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';

export default function ListItemLink(props) {
  const { icon, index, primary, selectedIndex, to, onClick } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button selected={selectedIndex === index} component={renderLink} onClick={() => onClick(index)}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  index: PropTypes.number,
  onClick: PropTypes.func,
  primary: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number,
  to: PropTypes.string.isRequired,
};