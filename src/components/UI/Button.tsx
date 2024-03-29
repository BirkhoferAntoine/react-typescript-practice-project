import {type ComponentPropsWithoutRef} from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  to: never;
  textOnly: boolean;
};

type AnchorProps = LinkProps & {
  textOnly: boolean;
}

function isLinkProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return 'to' in props;
}

const Button = (props: AnchorProps | ButtonProps) => {
  if (isLinkProps(props)) {
    return <Link className={props.textOnly ? 'button--text-only' : 'button' } {...props}></Link>
  }

  return (
      <button className={props.textOnly ? 'button--text-only' : 'button' } {...props}></button>
  );
}

export default Button;