import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../optionsAPI';
import {
  CastList,
  CastItem,
  Image,
  ActorName,
  ActorCharacter,
  Notification,
} from './Cast.styled';
export default function Cast() {
  const [castInfo, setCastInfo] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        const movieCast = await fetchMovieCast(moviesId);
        setCastInfo(movieCast.cast);
        console.log(movieCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCastInfo();
  }, [moviesId]);
  return (
    <>
      {castInfo.length !== 0 ? (
        <CastList>
          {castInfo.map(actor => (
            <CastItem key={actor.id}>
              {actor.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"
                  alt={actor.name}
                />
              )}

              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <Notification>
          There is no information about the actors of this film, maybe the data
          will appear later, stay tuned
        </Notification>
      )}
    </>
  );
}
