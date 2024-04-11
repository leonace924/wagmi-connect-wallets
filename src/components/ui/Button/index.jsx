import "./_button.scss";
import { Corner } from "../Corner";
import { Loader } from "../Loader";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function Button({
  href,
  icon,
  sprite,
  onClick,
  status,
  children,
  title,
  className,
  minus,
  color = "primary",
  pathSoundClick,
  pathSoundHover,
  blank,
  reverseCorner,
  loaded,
}) {
  const Content = (
    <>
      {!minus && children && <span className="btn-txt">{children}</span>}
      {loaded ? (
        <Loader />
      ) : (
        <>
          {icon && <Icon icon={icon} />}
          {sprite && sprite}
        </>
      )}
      <Corner reverse={reverseCorner} color={color} />
    </>
  );

  const commonProps = {
    className: classNames("btn", className, { minus: minus, loaded: loaded }),
    title: title,
    "data-colors": color,
    "data-status": status,
  };

  if (onClick) {
    return (
      <button
        onClick={(e) => {
          onClick(e);
        }}
        {...commonProps}
      >
        {Content}
      </button>
    );
  }

  if (blank) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {Content}
      </a>
    );
  }

  if (!href) {
    return <div {...commonProps}>{Content}</div>;
  }

  return (
    <Link to={href} {...commonProps}>
      {Content}
    </Link>
  );
}
