import type { Playlist, Song } from "@/lib/data";
import { create } from "zustand";

export interface CurrentMusic {
  playlist: Playlist | null;
  song: Song | null;
  songs: Song[];
}

interface PlayerStore {
  isPlaying: boolean;
  volume: number;
  setVolume: (volume: number) => void;
  currentMusic: CurrentMusic;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentMusic: (currentMusic: CurrentMusic) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  volume: 1,
  setVolume: (volume) => set({volume}),
  currentMusic: {
    playlist: null,
    song: null,
    songs: [],
  },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
