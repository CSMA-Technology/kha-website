<script lang="ts">
  export let username: string;
  export let caption: string = '';
  export let imgUrl: string = '';
  export let permalink: string;
</script>

<div class="post">
  <a href={permalink}>
    <p>{username}</p>
    <img alt="instagram post" class="photo" src={imgUrl} />
    <p>{caption}</p>
  </a>
</div>

<style>
  .photo {
    width: 200px;
  }
</style>