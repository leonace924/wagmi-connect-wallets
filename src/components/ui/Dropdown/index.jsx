import "./_dropdown.scss";
import { useState, useEffect, useCallback, useRef } from "react";
import { Corner } from "../Corner";
import classNames from "classnames";

export const Dropdown = ({
  opener,
  children,
  position = "right-bottom",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef < HTMLDivElement > null;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = useCallback(
    (e) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    const handleOutsideClick = (e) => handleClickOutside(e);

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleClickOutside, isOpen]);

  const classContent = classNames("dropdown-content", position);
  const classOpener = classNames("dropdown-opener", isOpen && "active");

  return (
    <div ref={dropdownRef} className={classNames("dropdown", className)}>
      <div onClick={handleToggle} className={classOpener}>
        {opener}
      </div>
      {isOpen && (
        <div className={classContent} data-colors="tertiary">
          <div className="dropdown-content-scroll">{children}</div>
          <Corner />
        </div>
      )}
    </div>
  );
};
