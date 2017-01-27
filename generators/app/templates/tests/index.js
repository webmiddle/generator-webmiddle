import test from 'ava';
import FetchPageLinks from '../src/FetchPageLinks';
import WebMiddle from 'webmiddle';

test.beforeEach(t => {
  t.context.webmiddle = new WebMiddle();
});

test('FetchPageLinks', async t => {
  await t.context.webmiddle.evaluate((
    <FetchPageLinks
      url="https://news.ycombinator.com/"
      query="javascript"
    />
  ), {
    expectResource: true,
  });
});
