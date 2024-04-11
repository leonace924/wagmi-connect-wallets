import { Icon } from "@iconify/react";
import "./_loader.scss";

export function Loader({ big }) {
  return big ? (
    <div className="bigloader">
      <Icon icon="eos-icons:three-dots-loading" />
    </div>
  ) : (
    <Icon icon="eos-icons:three-dots-loading" />
  );
}
