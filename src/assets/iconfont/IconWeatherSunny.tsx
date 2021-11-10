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

let IconWeatherSunny: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.829333 811.093333a32 32 0 0 1 31.701334 27.690667l0.298666 4.352v64a32 32 0 0 1-63.701333 4.309333l-0.298667-4.309333v-64a32 32 0 0 1 32-32z m256.938667-88.405333l45.226667 45.226667a32 32 0 1 1-45.226667 45.269333l-45.269333-45.226667a32 32 0 0 1 45.226666-45.269333z m-468.650667 0a32 32 0 0 1 0 45.226667l-45.226666 45.269333a32 32 0 0 1-45.226667-45.226667l45.226667-45.269333a32 32 0 0 1 45.226666 0zM512 276.266667a235.733333 235.733333 0 1 1 0 471.466666 235.733333 235.733333 0 0 1 0-471.466666z m0 64a171.733333 171.733333 0 1 0 0 343.466666 171.733333 171.733333 0 0 0 0-343.466666z m394.666667 140.501333a32 32 0 0 1 4.309333 63.701333l-4.309333 0.298667h-64a32 32 0 0 1-4.352-63.701333l4.352-0.298667h64z m-725.333334-1.237333a32 32 0 0 1 4.352 63.744l-4.352 0.256h-64a32 32 0 0 1-4.352-63.701334l4.352-0.298666h64z m69.973334-271.786667l3.584 3.072 45.226666 45.226667a32 32 0 0 1-41.642666 48.384l-3.584-3.114667-45.226667-45.226667a32 32 0 0 1 41.642667-48.384z m562.688 3.072a32 32 0 0 1 3.114666 41.685333l-3.114666 3.584-45.226667 45.226667a32 32 0 0 1-48.384-41.642667l3.114667-3.584 45.226666-45.269333a32 32 0 0 1 45.269334 0zM512 84.906667a32 32 0 0 1 31.701333 27.648l0.298667 4.352v64a32 32 0 0 1-63.701333 4.309333l-0.298667-4.352v-64a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWeatherSunny.defaultProps = {
  size: 18,
};

IconWeatherSunny = React.memo ? React.memo(IconWeatherSunny) : IconWeatherSunny;

export default IconWeatherSunny;