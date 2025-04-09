import Link from "next/link";

export function classNames(...args: string[]): string {
  return args.join(" ");
}

export function RLink({
  href,
  children,
  className,
  disabled,
  onClick,
  animate = false,
}: {
  href: string;
  children: any;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  animate?: boolean;
}) {
  return (
    <Link href={!disabled ? href : "#"}>
      <div
        onClick={onClick}
        className={classNames(
          `
        cursor-pointer 
        
        group flex
        transition-all`,
          className ?? "",
          animate ? "text-secondary hover:text-primary font-semibold " : ""
        )}
      >
        {children}
        {animate && (
          <div
            className="
            h-[1.8px] bg-primary
            w-0
            group-hover:w-full
            transition-all
          "
          ></div>
        )}
      </div>
    </Link>
  );
}
