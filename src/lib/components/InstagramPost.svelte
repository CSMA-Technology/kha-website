<script lang="ts">
  export let username: string;
  export let caption: string = '';
  export let imgUrl: string = '';
  export let permalink: string;
</script>

<div class="post">
  <a href={permalink} target="_blank" rel="noreferrer">
    <p class="username">@{username}</p>
    <img alt="instagram post" class="photo" src={imgUrl} />
    <p class="caption">{caption}</p>
  </a>
</div>

<style>
  .post a {
    text-decoration: none;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  .username {
    background-color: white;
    margin-bottom: 0px;
    color: black; 
    padding: 5px;
    border-radius: 10px 10px 0px 0px;
  }

  .caption {
    margin-top: 0px;
    background-color: white;
    color: black;
    font-size: 0.8rem;
    border-radius: 0px 0px 10px 10px;
    padding: 10px;
  }
</style>