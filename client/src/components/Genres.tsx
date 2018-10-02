import * as React from 'react';

const Genres = ({ title }: any) => (
  <div>
    {title.Genres &&
      title.Genres.length > 0 && (
        <div>
          <h3>Genres</h3>
          {title.Genres.map((genre: string, idx: number) => (
            <span key={`${genre}_${idx}`}>
              {title.KeyGenres && title.KeyGenres.indexOf(genre) !== -1 ? (
                <b>{genre}</b>
              ) : (
                genre
              )}
            </span>
          )).reduce((prev: any, curr: any) => [prev, ', ', curr])}
        </div>
      )}
  </div>
);

export default Genres;
