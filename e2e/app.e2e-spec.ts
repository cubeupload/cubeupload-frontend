import { CubeuploadFrontendPage } from './app.po';

describe('cubeupload-frontend App', function() {
  let page: CubeuploadFrontendPage;

  beforeEach(() => {
    page = new CubeuploadFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
