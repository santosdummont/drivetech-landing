import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  children,
  onClick,
  flex,
  justify,
  alignContent,
  alignItems,
  style,
  className,
  sticky,
  stickyOffsetTop,
}) => (
  <div
    onClick={onClick}
    className={className}
    style={{
      ...style,
      display: flex ? 'flex' : 'grid',
      gridGap: gridGap || 0,
      gap: gridGap || 0,
      gridTemplateColumns: gridTemplateColumns || '1fr',
      gridTemplateRows: gridTemplateRows || '1fr',
      gridAutoRows: 'min-content',
      width: '100%',
      justifyContent: justify || 'flex-start',
      alignContent: alignContent || 'flex-start',
      alignItems: alignItems || 'flex-start',
      position: sticky && 'sticky',
      top: stickyOffsetTop,
    }}
  >
    {children}
  </div>
);

Grid.propTypes = {
  gridGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridTemplateColumns: PropTypes.string,
  justify: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  flex: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  sticky: PropTypes.bool,
  stickyOffsetTop: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
export default Grid;
