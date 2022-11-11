<head>
  <title>About - KHA</title>
</head>

<script lang="ts">
  import placeholder from '$lib/assets/avatars/avatar-placeholder.png';
  import TeamMember from '$lib/components/TeamMember.svelte';
  import khaLogo from '$lib/assets/kha-logo.gif';
  import type { PageServerData } from './$types';
  import { Carousel, CarouselControl, CarouselItem } from 'sveltestrap';
  
  export let data: PageServerData;
  const interval = "5000";
  const instagramUrl = "https://www.instagram.com/kendale_hoa";
  let items = data.posts;
  let activeIndex = 0;
</script>

<h1 class="page-heading">About KHA</h1>
<section class="layout">
  <section class="content">
    <h2 class="page-subheading">Our Mission</h2>
    <p>
      To serve and inform the community of the Village of Kendale, Kendale Country Club Estates and Kendale South, to promote safety, foster social and  community activities, 
      to enhance and protect our environment and to further interaction of the Association Membership  while preserving the quality of life and sense of community in our neighborhood.
    </p>
  
    <h2 class="page-subheading">Our Vision</h2>
    <p>
      We envision a community that offers an inspiring lifestyle and quality of life, and is a desirable place in which to live and enjoy the benefits of family, friends and community.
    </p>
    <h2 class="page-subheading">Our Team</h2>
    <div class="team">
      <TeamMember
        img={placeholder}
        position="President"
        name="Ernie Bascuas"
      />
      <TeamMember
        img={placeholder}
        position="Vice President"
        name="Zuriel Carbo"
      />
      <TeamMember
        img={placeholder}
        position="Treasurer"
        name="Migdy Moya"
      />
      <TeamMember
        img={placeholder}
        position="Corresponding Secretary"
        name="Patty Gonzalez"
      />
      <TeamMember
        img={placeholder}
        position="Recording Secretary"
        name="Monica Scudieri"
      />
      <TeamMember
        img={placeholder}
        position="Past President"
        name="Nancy Lyons"
      />
    </div>
  </section>
  <section class="instagram">
    <h2 class="page-subheading">Follow us on Instagram!</h2>
      <a href={instagramUrl} target="_blank" rel="noreferrer"><p>@kendale_hoa</p></a>
      <p>Stay up to date on all of the events around our beautiful community.</p>
    <div class="post">
      <div class="username">
        <img alt="kha instagram profile" class="avatar" src={khaLogo} />
        <p>{items[0].username}</p>
      </div>
      <Carousel {items} bind:activeIndex interval={interval}>
        <div class="carousel-inner">
          {#each items as item, index}
            <CarouselItem bind:activeIndex itemIndex={index}>
              <a href={item.permalink} target="_blank" rel="noreferrer">
                {#if item.media_type=="VIDEO"}
                  <img src={item.thumbnail_url} alt="instagram post" class="d-block w-100" />
                {:else}
                  <img src={item.media_url} alt="instagram post" class="d-block w-100" />
                {/if}
              </a>
            </CarouselItem>
          {/each}
        </div>
        <div class="carousel-controls">
          <div class="carousel-control-left">
            <CarouselControl direction="prev" bind:activeIndex {items} />
          </div>
          <div class="carousel-control-right">
            <CarouselControl direction="next" bind:activeIndex {items}  />
          </div>
        </div>
      </Carousel>
      <p class="caption">{items[activeIndex].caption}</p>
    </div>
  </section>
</section>
<section class="volunteer">
  <h2 class="page-subheading">We need your help!</h2>
  <p>There are many positions open! If you wish to volunteer, send us a message from the <a href="/contact">contact</a> page.</p>
</section>

<style> 
  .layout {
    max-width: 80%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    .layout {
      max-width: 100%;
    }
  }
  
  .team {
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .content {
    margin: 0.5rem;
    max-width: 50rem;
    text-align: left;
    width: 70%;
    padding: 0px 20px;
  }

  .instagram {
    margin: 20px auto;
  }

  .carousel-controls {
    transform: scale(90%);
    filter: invert(100%);
    position: relative;
    bottom: 10rem;
  }

  .carousel-control-left {
    position: relative;
    right: 1.5rem;
  }

  .carousel-control-right {
    position: relative;
    left: 1.5rem;
  }

  .carousel-inner {
    height: 20rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0px 30px;
  }

  .username {
    display: flex;
    align-items: center;
    background-color: white;
    margin-bottom: 0px;
    color: black; 
    padding: 5px;
    padding: 10px 30px 0px;
  }

  .username p {
    margin: 0px 5px;
    font-weight: 600;
  }

  .avatar {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    -o-object-fit: contain;
    object-fit: contain;
  }

  .caption {
    margin-top: 0px;
    background-color: white;
    color: black;
    font-size: 0.8rem;
    text-align: left;
    padding: 10px 30px 10px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    min-height: 5em;
    line-height: 1.2em;
  }

  .post {
    margin: 20px auto;
    max-width: 300px;
  }
</style>