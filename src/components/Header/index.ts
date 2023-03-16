import { assemble, Event } from '../../core';
import { getElement } from './../../utils/common/domHelper';
import { $ } from './../../utils/common/domHelper';

export interface HeaderProps {
  handleKeyword(keyword: string): void;
}

const Header = assemble<HeaderProps>(({ handleKeyword }) => {
  const $events: Event[] = [
    {
      event: 'submit',
      callback(e) {
        if (e.target === $('.search-form')) {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const fields = Object.fromEntries(formData);

          handleKeyword(fields['keyword'] as string);
        }
      },
    },
  ];

  const $template = getElement(`
    <header>
      <h1><a href="/"><img src="./logo.png" alt="MovieList 로고" /></a></h1>
      <div class="search-box">
        <form class="search-form">
          <input type="text" name="keyword" placeholder="검색" />
          <button class="search-button">검색</button>
        </form>
      </div>
    </header>
  `);

  return [$template, $events];
});

export { Header };
