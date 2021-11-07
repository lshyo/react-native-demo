/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconCloud from './IconCloud';
import IconBxDetail from './IconBxDetail';
import IconSet from './IconSet';
import IconSet1 from './IconSet1';
import IconSet2 from './IconSet2';
export { default as IconCloud } from './IconCloud';
export { default as IconBxDetail } from './IconBxDetail';
export { default as IconSet } from './IconSet';
export { default as IconSet1 } from './IconSet1';
export { default as IconSet2 } from './IconSet2';

export type IconNames = 'icon-Cloud' | 'icon-bx-detail' | 'icon-set' | 'icon-set1' | 'icon-set2';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-Cloud':
      return <IconCloud key="1" {...rest} />;
    case 'icon-bx-detail':
      return <IconBxDetail key="2" {...rest} />;
    case 'icon-set':
      return <IconSet key="3" {...rest} />;
    case 'icon-set1':
      return <IconSet1 key="4" {...rest} />;
    case 'icon-set2':
      return <IconSet2 key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
