import type { FC } from "react";

interface CurrentSongProps {
  image?: string;
  title?: string;
  artists?: string[];
}

export const CurrentSong: FC<CurrentSongProps> = ({
  image = "",
  title = "",
  artists = [""],
}) => {
  return (
    <div className={`flex items-center gap-5 relative, overflow-hidden`}>
      <picture className="size-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title}></img>
      </picture>
      <div className="flex flex-col">
        <h3 className="font-semi-bold text-base block">{title}</h3>
        <span className="text-xs opacity-80">{artists.join(", ")}</span>
      </div>
    </div>
  );
};
