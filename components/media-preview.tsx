import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { USER } from "@/constants/user";
import { cn } from "@/lib/utils";

interface MediaPreviewProps {
  src: string;
  title: string;
  className?: string;
  type?: "video" | "image";
}

const MediaPreview = ({
  src,
  title,
  className,
  type = "image",
}: MediaPreviewProps) => {
  const finalSrc =
    !src || src.includes("Preview+Not+Found") ? USER.avatar : src;

  return (
    <div className={cn("w-full rounded-md border p-1", className)}>
      <AspectRatio
        ratio={type === "video" ? 16 / 9 : 1200 / 630}
        className="relative w-full overflow-hidden rounded-sm border select-none"
      >
        <Skeleton className="absolute inset-0 rounded-xs" />
        {type === "video" && (
          <video
            src={finalSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-label={`Preview of ${title}`}
            className="absolute inset-0 z-1 h-full w-full object-cover"
            preload="metadata"
          />
        )}
        {type === "image" && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={finalSrc}
              alt={title || "Anup Tiwari"}
              onError={(e) => {
                (e.target as HTMLImageElement).src = USER.avatar;
              }}
              className="absolute inset-0 z-1 h-full w-full object-cover"
            />
          </>
        )}
      </AspectRatio>
    </div>
  );
};

export { MediaPreview };
