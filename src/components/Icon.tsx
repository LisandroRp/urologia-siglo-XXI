import IcoMoon, { IconProps, iconList } from "react-icomoon";
import iconSet from "@icomoon/selection.json";

export const Icon = (props: IconProps) => (
  <IcoMoon
    data-testid={`icon-${props.icon}`}
    iconSet={iconSet}
    {...props}
  />);