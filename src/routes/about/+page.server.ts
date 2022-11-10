import { INSTAGRAM_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

const instagramUrl = 'https://graph.instagram.com/me/media?';
const fields = 'caption,media_url,username,permalink,media_type,thumbnail_url';
const limit = '6';

export type Post = {
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
  media_url: string;
  username: string;
  permalink: string;
  id: string;
}

export const load: PageServerLoad = async () => {
  let posts: Post[];
  try {
    const response = await fetch(instagramUrl + new URLSearchParams({
      fields: fields,
      limit: limit,
      access_token: INSTAGRAM_TOKEN
    }));
    const responseJson = await response.json();
    posts = responseJson.data;
  } catch (error) {
    console.error(`error in load function calling instagram api: ${error}`);
    posts = [];
  }
  return { posts };
}

