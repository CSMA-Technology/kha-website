import { INSTAGRAM_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';
import Instafeed from 'instafeed.js';
import { onMount } from 'svelte';

export const load: PageServerLoad = () => {
  var feed = getInstafeed();
  return {feed};
}

const getInstafeed = () => {
  var feed = new Instafeed({
    accessToken: INSTAGRAM_TOKEN,
    limit: 3,
    template: '<div class="post"><a href="{{link}}"><img title="{{caption}}" src="{{image}}" width="200" /></a></div>'
  });
  return feed;
}