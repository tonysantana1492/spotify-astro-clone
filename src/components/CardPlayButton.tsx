import type { FC } from "react";
import { usePlayerStore, type CurrentMusic } from "@/store/playerStore";
import { Pause, Play } from "@/icons/Icons";

interface Props {
  id: string;
  size?: string;
}

export const CardPlayButton: FC<Props> = ({ id, size = "small" }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;

  const handleClick = async () => {
    if (isPlayingPlaylist) return setIsPlaying(false);

    const response = await fetch(`/api/get-info-playlist?id=${id}`);

    const { songs, playlist }: CurrentMusic = await response.json();

    setCurrentMusic({
      playlist,
      songs,
      song: songs[0],
    });
    setIsPlaying(true);
  };

  const iconClassName = size === "small" ? "size-4" : "size-5";

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-[1.02] transition hover:bg-green-400"
      onClick={handleClick}
    >
      {isPlayingPlaylist ? (
        <Play className={iconClassName} />
      ) : (
        <Pause className={iconClassName} />
      )}
    </button>
  );
};
