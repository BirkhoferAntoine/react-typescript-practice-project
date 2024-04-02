import {type ComponentPropsWithoutRef} from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  to: never;
};

type AnchorProps = LinkProps & {
}

function isLinkProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return 'to' in props;
}

const Button = (props: AnchorProps | ButtonProps) => {
  if (isLinkProps(props)) {
    return <Link {...props} className={'button ' + (props.className ? props.className : '')}></Link>
  }

  return (
      <button {...props} className={'button ' + (props.className ? props.className : '')}></button>
  );
}

export default Button;