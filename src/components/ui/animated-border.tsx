import styles from "./animated-border.module.css";
import { cn } from "@/lib/utils";

export function AnimatedBorder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(styles.animatedBorder, className)}>{children}</div>;
}
