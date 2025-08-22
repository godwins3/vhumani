import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "max-w-screen-4xl mx-auto w-full px-2 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
