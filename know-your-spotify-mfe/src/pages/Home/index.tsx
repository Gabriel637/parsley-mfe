// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import DefaultDisc from "../../assets/default-disc.png";
import Logo from "../../assets/spotify.png";
import Card from "../../components/Card";
import api from "../../utils/api";
import {
  Button,
  ButtonBox,
  CardContainer,
  Container,
  Header,
  ImageLogo,
  TextBox,
} from "./styles";
const Home: React.FC = () => {
  interface IArtist {
    id: string;
    name: string;
    image: string;
    genres: any;
    position: number;
  }
  interface ISong {
    id: string;
    name: string;
    image: string;
    artists: any;
    position: number;
  }
  interface IPlaylist {
    id: string;
    name: string;
    image: string;
    owner: string;
    position: number;
  }

  const { hash } = useLocation();
  const [artists, setArtists] = useState<Array<IArtist>>([]);
  const [songs, setSongs] = useState<Array<ISong>>([]);
  const [playlists, setPlaylists] = useState<Array<IPlaylist>>([]);
  const [standby, setStandby] = useState(true);
  const { access_token } = queryString.parse(hash);

  const getTopArtists = () => {
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    const params = {
      limit: 50,
    };
    api
      .get("/me/top/artists", { headers, params })
      .then((response: any) => {
        const artists: any = [];
        const { items } = response.data;
        items.forEach((item: any) => {
          const artist = {
            id: item.id,
            name: item.name,
            genres: item.genres,
            position: items.indexOf(item) + 1,
            image: item.images[0].url,
          };
          artists.push(artist);
        });
        setArtists(artists);
        setStandby(false);
        setSongs([]);
        setPlaylists([]);
      })
      .catch((error: any) => {
        if (error) {
          window.location.replace(
            "https://know-spotify-api.herokuapp.com/login"
          );
        }
      });
  };

  const getTopSongs = () => {
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    const params = {
      limit: 50,
    };
    api
      .get("/me/top/tracks", { headers, params })
      .then((response: any) => {
        const tracks: any = [];
        const { items } = response.data;
        items.forEach((item: any) => {
          const track = {
            id: item.id,
            name: item.name,
            artists: [item.artists[0].name],
            position: items.indexOf(item) + 1,
            image: item.album.images[0].url,
          };
          tracks.push(track);
        });
        setSongs(tracks);
        setStandby(false);
        setArtists([]);
        setPlaylists([]);
      })
      .catch((error: any) => {
        if (error) {
          window.location.replace(
            "https://know-spotify-api.herokuapp.com/login"
          );
        }
      });
  };

  const getPlaylists = () => {
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    const params = {
      limit: 50,
    };
    api
      .get("/me/playlists", { headers, params })
      .then((response: any) => {
        const playlists: any = [];
        const { items } = response.data;
        items.forEach((item: any) => {
          const playlist = {
            id: item.id,
            name: item.name,
            owner: [item.owner.display_name],
            image: item.images[0] ? item.images[0].url : DefaultDisc,
            position: items.indexOf(item) + 1,
          };
          playlists.push(playlist);
        });
        setPlaylists(playlists);
        setStandby(false);
        setArtists([]);
        setSongs([]);
      })
      .catch((error: any) => {
        if (error) {
          window.location.replace(
            "https://know-spotify-api.herokuapp.com/login"
          );
        }
      });
  };

  const messages = [
    "Please, Justin Bieber no",
    "I'm praying that you do not listen to Lana del Rey",
    "Awesome taste! I'm kidding",
    "Another Taylor Swift fan, meh",
    "Call me, I'show what is good music",
  ];

  return (
    <Container>
      <Header>
        <ImageLogo src={Logo} />
        <ButtonBox>
          <Button onClick={getTopArtists}> My top artists </Button>
          <Button onClick={getTopSongs}> My top songs </Button>
          <Button onClick={getPlaylists}> My playlists </Button>
        </ButtonBox>
      </Header>
      <TextBox>
        <h1>
          {hash
            ? messages[Math.floor(Math.random() * messages.length) + 1]
            : "Click in any button above to login"}
        </h1>
      </TextBox>
      <CardContainer style={{ opacity: !standby ? 1 : 0 }}>
        {artists &&
          artists.map((artist: IArtist) => {
            return (
              <Card
                key={artist.id}
                name={artist.name}
                image={artist.image}
                content={artist.genres}
                position={artist.position}
              />
            );
          })}
        {songs &&
          songs.map((song: ISong) => {
            return (
              <Card
                key={song.id}
                name={song.name}
                image={song.image}
                content={song.artists}
                position={song.position}
              />
            );
          })}
        {playlists &&
          playlists.map((playlist: IPlaylist) => {
            return (
              <Card
                key={playlist.id}
                name={playlist.name}
                image={playlist.image}
                content={playlist.owner}
                position={playlist.position}
              />
            );
          })}
      </CardContainer>
    </Container>
  );
};

export default Home;
