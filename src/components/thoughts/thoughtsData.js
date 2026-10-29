// Every entry under /thoughts. Newest first. The index page and each
// entry's <head> read from here.

export const thoughts = [
  {
    slug: 'meanwhile-web-pages',
    number: '01',
    date: 'October 2026',
    title: 'AI might end humanity. Meanwhile, I’m building web pages with it.',
    blurb: 'A team of AI agents built a 14-section service page. I made the calls at five gates. Here is the pipeline, the rules and the $11.20 receipt.',
    cover: '/images/thoughts/meanwhile-web-pages/terminator-march-poster.webp',
    coverAlt: 'A still from Terminator 2: a T-800 endoskeleton marching in front of a machine army.',
    // Share card for LinkedIn / X link previews. Written to pull the click
    // from a text post: the doom quote, the turn, the receipt.
    share: {
      title: 'AI might end humanity. Meanwhile, I’m building web pages with it.',
      description: 'Elon says we’re summoning the demon. I put it to work: AI agents built a 14-section web page and I made the calls at five gates. The pipeline, the seven rules and the $11.20 receipt.',
      image: '/images/thoughts/meanwhile-web-pages/og.jpg',
      imageAlt: 'On black: Elon Musk’s “summoning the demon” quote in a speech bubble, struck out in orange pencil, “fine. let it happen.”, and the headline Meanwhile, I’m building web pages with it, beside a large Terminator still.',
    },
  },
];

export function getThought(slug) {
  return thoughts.find((entry) => entry.slug === slug);
}
