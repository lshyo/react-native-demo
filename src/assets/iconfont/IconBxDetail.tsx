/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconBxDetail: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 128H170.666667c-47.061333 0-85.333333 38.272-85.333334 85.333333v597.333334c0 47.061333 38.272 85.333333 85.333334 85.333333h682.666666c47.061333 0 85.333333-38.272 85.333334-85.333333V213.333333c0-47.061333-38.272-85.333333-85.333334-85.333333zM170.666667 810.666667V213.333333h682.666666l0.085334 597.333334H170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M256 298.666667h512v85.333333H256z m0 170.666666h512v85.333334H256z m0 170.666667h256v85.333333H256z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBxDetail.defaultProps = {
  size: 18,
};

IconBxDetail = React.memo ? React.memo(IconBxDetail) : IconBxDetail;

export default IconBxDetail;
