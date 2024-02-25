import { allPlaylists, songs as allSongs } from "@/lib/data";

interface GetRequest {
  params: any;
  request: Request;
}

export async function GET({ params, request }: GetRequest) {
  const { url } = request;

  const { searchParams } = new URL(url);
  const id = searchParams.get("id");

  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}
