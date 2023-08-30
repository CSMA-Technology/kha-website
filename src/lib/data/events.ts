import homeAlonePoster from "$lib/assets/events/home-alone.jpeg";
import golfCartParade from "$lib/assets/events/golf-cart-parade.jpg";
import springFestival from "$lib/assets/events/spring_festival.png";
import faithandfitness from "$lib/assets/events/faithandfitnessfull.png";
import khaLogo from "$lib/assets/logo-no-text.svg";
import juneMovieNightPoster from "$lib/assets/events/june-movie-night-poster.jpeg";
import yogaFlyer from "$lib/assets/events/yoga-flyer.jpeg";
import septemberCommunityFitness from "$lib/assets/events/community-fitness-september-23.jpeg";

export type Event = {
  name: string;
  description: string;
  date: Date;
  location: string;
  photo: string;
  photoAlt: string;
};

const events: Event[] = [
  {
    name: "Movie Night",
    description: `Join us for a movie night at the park! The movie is Home Alone. Popcorn, cookies and glow  necklaces will be provided`,
    date: new Date("2022-12-10T19:00:00"),
    location: "Kendale Park",
    photo: homeAlonePoster,
    photoAlt: "The movie poster for Elf",
  },
  {
    name: "First Annual Holiday Golf Cart Event",
    description: `Join your neighbors for this family friendly event.  If you have a golf cart and want to join in the parade, be at Kendale Park at 6:30 p.m. with your decorated golf cart. Parade route will be announced week of event and all are welcomed to cheer them on throughout the route.`,
    date: new Date("2022-12-23T18:45:00"),
    location: "Kendale Park",
    photo: golfCartParade,
    photoAlt: "A Christmas tree",
  },
  {
    name: "Spring Festival",
    description: `Join your neighbors and friends  for this community fun event. Festivities start at 2 pm at Kendale Park. Access bracelets to rides and food with your paid dues. Hope to see you there!`,
    date: new Date("2023-04-01T14:00:00"),
    location: "Kendale Park",
    photo: springFestival,
    photoAlt: "The flyer for the Spring Festival",
  },
  {
    name: "Faith and Fitness Event",
    description: `Enjoy a quick fitness event to start your weekend off right! Please bring a mat and water bottle.`,
    date: new Date("2023-05-06T07:30:00"),
    location: "Kendale Park",
    photo: faithandfitness,
    photoAlt: "The flyer for the Faith and Fitness event",
  },
  {
    name: "General Community Meeting",
    description: `Meet the NEW Board Members, hear about issues affecting our communities, Public Safety presentation, Killian Parkway damaged wall update, FDOT speed limit campaign for Killian Parkway, Golf Course , upcoming events and future plans for the community and open discussion on community issues/suggestions.`,
    date: new Date("2023-05-23T19:00:00"),
    location: "Ron Ehmann Park",
    photo: khaLogo,
    photoAlt: "The KHA logo",
  },
  {
    name: "Summer Kickoff Movie Night",
    description: `Kick off your summer with your friends and neighbors at our Summer Movie Night! Saturday, June 10th. Movie will start at 8 p.m. Popcorn and glow sticks will be provided to the kids.`,
    date: new Date("2023-06-10T20:00:00"),
    location: "Kendale Park",
    photo: juneMovieNightPoster,
    photoAlt: "Movie Night Flyer",
  },
  {
    name: "Community Fitness Event",
    description: "Rise and shine! Join us for a morning community walk at the park.",
    date: new Date("2023-09-02T07:00"),
    location: "Kendale Park",
    photo: septemberCommunityFitness,
    photoAlt: "A flyer for the community fitness event",
  },
  {
    name: "Community Volunteers and Committee Meeting",
    description: "Join us for a community meeting on September 14th! Find out about our Volunteer opportunities and how you can help in keeping our community a wonderful place to live!",
    date: new Date("2023-09-14T19:30"),
    location: "Regis HR Room - 10625 N Kendall Dr.",
    photo: khaLogo,
    photoAlt: "The KHA Logo"
  },
  {
    name: 'Yoga and Meditation Event',
    description: 'Join your friends and neighbors for a FREE Yoga and Meditation session lead by Gloria, instructor from Gin Yogi.',
    date: new Date("2023-09-19T18:30"),
    location: "Kendale Park",
    photo: yogaFlyer,
    photoAlt: "A flyer for the Yoga and Meditation event"
  }
];

export default events;
