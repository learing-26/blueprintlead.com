import { cn } from "@/lib/utils";
import React from "react";
import { Image as ImageIcon } from "lucide-react";

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Description of the image to be added
   */
  description: string;
  /**
   * Recommended image dimensions
   */
  dimensions?: string;
  /**
   * Height class for the placeholder
   */
  height?: string;
}

/**
 * ImagePlaceholder component for temporary image locations
 * Displays TODO note for images to be added later
 *
 * @example
 * ```tsx
 * <ImagePlaceholder
 *   description="LA County map with location markers"
 *   dimensions="600x400"
 *   height="h-64 md:h-80"
 * />
 * ```
 */
export function ImagePlaceholder({
  description,
  dimensions,
  height = "h-64",
  className,
  ...props
}: ImagePlaceholderProps): React.ReactElement {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-dashed border-slate-300",
        height,
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <ImageIcon className="h-12 w-12 text-slate-400 mb-4" />
        <div className="text-slate-600 font-semibold mb-2">TODO: Add Image</div>
        <div className="text-slate-500 text-sm mb-1">{description}</div>
        {dimensions && (
          <div className="text-slate-400 text-xs font-mono">
            {dimensions}
          </div>
        )}
      </div>
    </div>
  );
}
