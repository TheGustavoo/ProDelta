import {
  Beef,
  CloudSun,
  Dna,
  FlaskConical,
  GraduationCap,
  Handshake,
  Leaf,
  Sprout,
  Tractor,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/event";

const registry: Record<IconName, LucideIcon> = {
  Sprout,
  Handshake,
  Leaf,
  FlaskConical,
  GraduationCap,
  Dna,
  Beef,
  CloudSun,
  Wheat,
  Tractor,
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = registry[name];
  return <Component className={className} aria-hidden="true" />;
}
