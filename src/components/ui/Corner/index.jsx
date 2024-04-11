import "./_corner.scss";
import classNames from "classnames";

export function Corner({ reverse, color = "tertiary", status, className }) {
  return (
    <div
      className={classNames("corner", reverse && "reverse", className)}
      data-colors={color}
      data-status={status}
    >
      <span className="corner-left" />
      <span className="corner-right" />
      <span className="corner-top-bottom" />
    </div>
  );
}
