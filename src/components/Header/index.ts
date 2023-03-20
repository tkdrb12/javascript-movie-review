import { assemble, Event } from '../../core';
import { getFormFields, isFormElement, isStringFields } from '../../utils/common/formData';
import { getElement } from './../../utils/common/domHelper';
import { $ } from './../../utils/common/domHelper';
import { KeywordInputComponent } from './action';

export interface HeaderProps {
  handleKeyword(keyword: string): void;
  keyword?: string;
}

const Header = assemble<HeaderProps>(({ handleKeyword, keyword }) => {
  const $events: Event[] = [
    {
      event: 'submit',
      callback(e) {
        e.preventDefault();
        if (!e.target) return new Error('이벤트 타깃이 존재하지 않습니다');

        if (e.target === $('.search-form') && isFormElement(e.target)) {
          const fields = getFormFields(e.target);

          isStringFields(fields['keyword']) && handleKeyword(fields['keyword']);
        }
      },
    },
  ];

  const $template = getElement(`
    <header>
      <h1><a href="/"><img src="./logo.png" alt="MovieList 로고" /></a></h1>
      <div class="search-box">
        <form class="search-form">
        ${keyword ? KeywordInputComponent(keyword) : KeywordInputComponent('검색')}
          <input type="text" name="keyword" placeholder="검색" />
          <button class="search-button">검색</button>
        </form>
      </div>
    </header>
  `);

  return [$template, $events];
});

export { Header };
