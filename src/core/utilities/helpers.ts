/* eslint-disable @typescript-eslint/no-explicit-any */
export const cx = (...classNames: (string | (() => string))[]): string =>
  classNames
    .map((className) =>
      typeof className === "function" ? className() : className,
    )
    .filter(Boolean)
    .join(" ");

export const numbersOnly = (e: any) => {
  if (isNaN(e?.key) && e?.key !== "Backspace") {
    e.preventDefault();
  }
};

export const getInitials = (name: string): string => {
  const nameParts = name.trim().split(/\s+/);
  const initials = nameParts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials.padEnd(2, initials.charAt(0));
};
