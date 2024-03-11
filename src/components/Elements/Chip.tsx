import { getComplementColor } from "@/helpers";
import type { FunctionComponent } from "react";

interface ChipProps {
  color?: `#${string}`;
  label: string;
}

export const Chip: FunctionComponent<ChipProps> = ({
  color = "#233233",
  label,
}) => {
  return (
    <div
      style={{
        background: color,
        color: getComplementColor(color),
      }}
      className="flex max-w-[200px] flex-row items-center justify-center rounded-full px-4 py-0.5"
    >
      {label}
    </div>
  );
};
