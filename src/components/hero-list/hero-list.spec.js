import HeroList from './hero-list.svelte';
import { render } from '@testing-library/svelte';

describe('HeroList', () => {
  it('should create', () => {
    const heroList = render(HeroList);
    expect(heroList).toBeTruthy();
  });

  describe('empty state message', () => {
    it('should show if empty list', () => {
      const { getByText } = render(HeroList);
      expect(getByText('There are no heroes.')).toBeTruthy();
    });

    it('should not show if list is not empty', () => {
      const { queryByText } = render(HeroList, { heroes: [1] });
      expect(queryByText('There are no heroes.')).toBeFalsy();
    });
  });
});
