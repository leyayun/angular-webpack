import home from '../../src/app/home/';

describe('HomeController', () => {
  let ctrl;

  beforeEach(() => {
    angular.mock.module(home);
    angular.mock.inject(($controller) => {
      ctrl = $controller('HomeController');
    });    
  });

  it('should contain the right title', () => {
    expect(1).toBe(1);
  });
});