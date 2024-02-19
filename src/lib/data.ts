import { colors } from "./colors";
import songMocks from "./songs.json";
import playlistMocks from "./playlist.json";

type ColorKey = keyof typeof colors;
type Color = (typeof colors)[ColorKey];

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: Color;
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = playlistMocks.map((item) => ({
  ...item,
  color: colors[item.color as ColorKey],
}));

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = songMocks;
