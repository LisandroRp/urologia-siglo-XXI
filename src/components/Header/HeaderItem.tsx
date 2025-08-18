import classNames from "classnames";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

interface HeaderItemProps {
  text?: string;
  href: string | null;
  exact?: boolean;
  title?: string;
  onClick?: () => void;
  dropDownLinks?: { id: number, text: string, href: string, title: string }[];
}

export function HeaderItem({ title, text, href, onClick, dropDownLinks }: HeaderItemProps) {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const isDropdown = dropDownLinks && dropDownLinks.length
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (e: { stopPropagation: () => void; }) => {
    onClick && onClick()
    if (isDropdown) {
      e.stopPropagation();
      setIsOpen((prevState) => !prevState)
    }
    console.log(href)
    if (href)
      push(href)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }, 0);
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative cursor-pointer" ref={dropdownRef} onClick={handleOnClick}>
      <div
        className={`flex no-underline ${isDropdown ? 'id="menu-button" aria-expanded="true" aria-haspopup="false"' : ""}`}
      >
        <span className="px-2 py-1 hover:underline hover:opacity-80 xl:hover:mb-1 text-base font-semibold hover:text-primary cursor-pointer transition-colors duration-200">
          {text}
        </span>
        {isDropdown ?
          <svg
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            className={classNames(
              "-mr-1 h-5 w-5 text-gray-400",
              { "rotate-180": isOpen }
            )}
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg> : ''}
        <div className="h-[2px]" />
      </div>
      {isDropdown && isOpen ?
        <div className="xl:absolute left-0 z-10 xl:mt-2 w-72 origin-top-right rounded-md bg-white xl:shadow-lg xl:ring-1 xl:ring-black xl:ring-opacity-5 focus:outline-none py-[13px]" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1" role="none">
            {dropDownLinks.map((dropLink) => (
              <a
                href={dropLink.href}
                target="_blank"
                role="menuitem"
                id={dropLink.id.toString()}
                title={`${dropLink}`}
                className="block px-4 py-2 text-sm text-gray-700 no-underline	hover:text-[#FF00D6] hover:bg-[#f8f9fa]"
              >
                {dropLink.text}
              </a>
            ))}
          </div>
        </div> : ""}
    </div>
  );
}
