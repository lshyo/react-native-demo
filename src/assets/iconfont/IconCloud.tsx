import React, {FunctionComponent} from 'react';
import {ViewProps} from 'react-native';
import {Svg, GProps, Path} from 'react-native-svg';
import {getIconColor} from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconCloud: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 832H288c-141.152 0-256-114.848-256-256a256.16 256.16 0 0 1 96.096-199.776C132.224 203.36 274.144 64 448 64a317.376 317.376 0 0 1 277.056 160.384C728.768 224.128 732.448 224 736 224c105.888 0 192 86.112 192 192 0 10.464-0.992 20.96-3.136 32.128A223.168 223.168 0 0 1 992 608c0 123.52-100.512 224-224 224zM448 128c-141.152 0-256 114.848-256 256l0.416 7.264a31.936 31.936 0 0 1-13.76 27.04A192.224 192.224 0 0 0 96 576c0 105.888 86.112 192 192 192h480c88.224 0 160-71.776 160-160a159.552 159.552 0 0 0-58.912-123.968 32 32 0 0 1-10.56-33.472c3.744-13.184 5.472-24.16 5.472-34.56 0-70.592-57.408-128-128-128-6.912 0-14.24 0.736-23.104 2.368a31.776 31.776 0 0 1-34.592-17.536C635.104 183.488 546.848 128 448 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M64 608a32 32 0 0 1-32-32c0-141.152 114.848-256 256-256a32 32 0 1 1 0 64c-105.888 0-192 86.112-192 192a32 32 0 0 1-32 32zM736 416a32 32 0 0 1-32-32c0-141.152-114.848-256-256-256a32 32 0 1 1 0-64c176.448 0 320 143.552 320 320a32 32 0 0 1-32 32zM288 704c-70.592 0-128-57.408-128-128a32 32 0 1 1 64 0c0 35.296 28.704 64 64 64a32 32 0 1 1 0 64z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCloud.defaultProps = {
  size: 18,
};

IconCloud = React.memo ? React.memo(IconCloud) : IconCloud;

export default IconCloud;
