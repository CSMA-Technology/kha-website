import { INSTAGRAM_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

const instagramUrl = 'https://graph.instagram.com/me/media?';
const fields = 'caption,media_url,username,permalink';
const limit = '6';

export const load: PageServerLoad = async () => {
  fetch(instagramUrl + new URLSearchParams({
    fields: fields,
    limit: limit,
    access_token: INSTAGRAM_TOKEN
  }))
  .then(response => response.json())
  .then(data => {
    console.log(data.data);
    return data.data;
  }).catch(error => {
    console.log(error);
    return [];
  });
}
