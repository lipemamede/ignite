import { useEffect, useState } from 'react';

import { Button } from "./Button";
import { api } from "../services/api";

import { GenreResponseProps } from "../App";

import './styles/sidebar.scss';

interface SideBarProps {
  genreId: number;
  setGenreId: React.Dispatch<React.SetStateAction<number>>;
}

export function SideBar({ genreId, setGenreId }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setGenreId(id);
  }

  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}