import { navigateTo, isExternalHref } from "../navigation";

export default function AppLink({
  href,
  children,
  className,
  target,
  rel,
  ...props
}) {
  const external = isExternalHref(href);

  const handleClick = (event) => {
    if (
      external ||
      event.defaultPrevented ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a
      href={href}
      target={target ?? (external ? "_blank" : undefined)}
      rel={rel ?? (external ? "noreferrer" : undefined)}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
