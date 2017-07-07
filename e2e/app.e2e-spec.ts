import { MealTrackerPage } from './app.po';

describe('meal-tracker App', () => {
  let page: MealTrackerPage;

  beforeEach(() => {
    page = new MealTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
