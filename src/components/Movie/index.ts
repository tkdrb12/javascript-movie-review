import { MovieInfo, MovieInfoByKeyword } from '../../types/api';
import { assemble, Event } from '../../core';
import { getElement, $ } from './../../utils/common/domHelper';
import { useState } from '../../core';

export interface MovieProps {
  info: MovieInfo | MovieInfoByKeyword;
}

const Movie = assemble<MovieProps>((props) => {
  const {
    info: { poster_path, title, vote_average, id },
  } = props;

  const $events: Event[] = [
    {
      event: 'click',
      callback(e) {
        e.preventDefault();

        // history.pushState({ poster_path, title, vote_average, id }, '', `#${id}`);
        if ($(`li[data="id=${id}"]`)) console.log($(`li[data="id=${id}"]`));
      },
    },
  ];
  const $template = getElement(`
      <li data=id=${id}>
        <a href="#">
          <div class="item-card movie">
            <img
              class="item-thumbnail"
              src=https://image.tmdb.org/t/p/w200/${poster_path}
              loading="lazy"
              alt=${title}
            />
            <p class="item-title">${title}</p>
            <p class="item-score"><img src="./star_filled.png" alt="별점" />${vote_average}</p>
          </div>
        </a>
    </li>
  `);

  return [$template, $events];
});

export { Movie };
