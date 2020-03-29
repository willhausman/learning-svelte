import App from './App.svelte';
import { render } from '@testing-library/svelte';

describe('App', () => {
  it('should create', () => {
    // Act
    const app = render(App);

    // Assert
    expect(app).toBeTruthy();
  });

  describe('render', () => {
    it('should display the default name', () => {
      // Act
      const { getByText } = render(App);

      // Assert
      expect(getByText('Hello default!')).toBeTruthy();
    });

    it('should display the name parameter', () => {
      // Act
      const { getByText } = render(App, { name: 'test' });

      // Assert
      expect(getByText('Hello test!')).toBeTruthy();
    });
  });
});
