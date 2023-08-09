import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `

<svg viewBox="0 0 512 512">

  <path
    fill="#bdbdbd"
    d="m368.545 157.073-14.084-14.085-98.598 98.599-98.13-98.131-14.085 14.084 98.132 98.132-98.132 98.137 14.085 14.084 98.13-98.143 98.598 98.611 14.084-14.086-98.598-98.603z"

  ></path>
</svg>



`;

export default () => <SvgXml xml={xml} width="25" height="25" />;
