import homeAlonePoster from "$lib/assets/events/home-alone.jpeg";
import golfCartParade from "$lib/assets/events/golf-cart-parade.jpg";
import springFestival from "$lib/assets/events/spring_festival.png";
import faithandfitness from "$lib/assets/events/faithandfitnessfull.png";
import khaLogo from "$lib/assets/logo-no-text.svg";
import juneMovieNightPoster from "$lib/assets/events/june-movie-night-poster.jpeg";
import yogaFlyer from "$lib/assets/events/yoga-flyer.jpeg";
import septemberCommunityFitness from "$lib/assets/events/community-fitness-september-23.jpeg";
import KHAGeneralMeetingOctober23 from "$lib/assets/events/kha_general_meeting_1023.png";
import halloweenGoldCartParade from "$lib/assets/events/kha_halloween_golf_cart_parade.jpeg";
import octoberYogaFlyer from "$lib/assets/events/yoga_10-23.jpeg";
import golfCartParadeRoute from "$lib/assets/events/golf_cart_parade_route.jpeg";
import garageSalePoster from "$lib/assets/events/garage-sale-poster.jpeg";
import marioMovie from "$lib/assets/events/mario-movie.png";
import golfCardParade23 from "$lib/assets/events/golf-cart-parade-2023.png";
import crimeWatchFlyer from "$lib/assets/events/ccw_flyer.png";
import khaSpringFestivalPlanningFlyer from "$lib/assets/events/kha_spring_festival_planning_flyer.jpeg";
import yogaMeditationFlyer from "$lib/assets/events/kha_yoga_flyer_202403.jpeg";
import springFestival2024 from "$lib/assets/events/spring-festival-2024.jpeg";
import yogaMeditationMay24 from "$lib/assets/events/yoga-meditation-may-24.png";
import communityHangout from "$lib/assets/events/community-hangout.jpg";
import bikeRideFlyer from "$lib/assets/events/bike-ride-flyer.jpeg";
import fullMoonYoga from "$lib/assets/events/full-moon-yoga.jpeg";
import golfCartParade2024 from "$lib/assets/events/golf-cart-parade-2024.jpeg";
import costumeContest2024 from "$lib/assets/events/costume-contest-2024.png";

export type Event = {
  name: string;
  description: string;
  date: Date;
  location: string;
  photo: string;
  photoAlt: string;
  customId?: string;
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
    description:
      "Join us for a community meeting on September 14th! Find out about our Volunteer opportunities and how you can help in keeping our community a wonderful place to live!",
    date: new Date("2023-09-14T19:30"),
    location: "Regis HR Room - 10625 N Kendall Dr.",
    photo: khaLogo,
    photoAlt: "The KHA Logo",
  },
  {
    name: "Yoga and Meditation Event",
    description: "Join your friends and neighbors for a FREE Yoga and Meditation session lead by Gloria, instructor from Gin Yogi.",
    date: new Date("2023-09-19T18:30"),
    location: "Kendale Park",
    photo: yogaFlyer,
    photoAlt: "A flyer for the Yoga and Meditation event",
  },
  {
    name: "General Meeting and Elections",
    description:
      "Join us for our General Meeting and Elections of the 2024 Board.  Important issues affecting our community will be discussed. A Parks Dept Guest speaker will discuss plans for Kendale Park. Hear about all our Community accomplishments of 2023 plus what we have in store for 2024! It’ s OUR community so get involved!",
    date: new Date("2023-10-24T19:30"),
    location: "Ron Ehmann Park",
    photo: KHAGeneralMeetingOctober23,
    photoAlt: "A flyer for the KHA general meeting",
  },
  {
    name: "Yoga and Meditation",
    description:
      "Relax, Stretch and Unwind! Come out and enjoy this wonderful FREE Yoga session taught by instructor Gloria, from Gin Yogi. Class begins at 6 p.m. at Kendale Park.",
    date: new Date("2023-10-26T18:00"),
    location: "Kendale Park",
    photo: octoberYogaFlyer,
    photoAlt: "A flyer for the Yoga and Meditation event",
  },
  {
    name: "Halloween Golf Cart Parade",
    description: `Join us for this fun Village Event! Decorate your golf cart and join the fun or line the parade route and cheer them on! The parade will travel through the route twice, and you can see the route <a href=${golfCartParadeRoute} target="_blank">here</a>.`,
    date: new Date("2023-10-29T18:45"),
    location: "Kendale Park",
    photo: halloweenGoldCartParade,
    photoAlt: "A flyer for the KHA Halloween golf cart parade",
  },
  {
    name: "Community Garage Sale Day",
    description: `Clean out your closet, put up some signs, and make some money! November 4th is the KHA Community Garage Sale Day, and everyone is encouraged to participate by setting up their own garage sale or just driving around and shopping.`,
    date: new Date("2023-11-04T08:00"),
    location: "The Village, Kendale South, Kendale Country Club Estates",
    photo: garageSalePoster,
    photoAlt: "A flyer for the KHA Halloween golf cart parade",
  },
  {
    name: "Holiday Movie Night",
    description: `Join us for a movie night at the park! We will be watching The Super Mario Bros Movie. There will be food trucks starting at 5 PM, and the movie begins at 7 PM.`,
    date: new Date("2023-12-02T17:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: marioMovie,
    photoAlt: "A flyer for the holiday movie night",
    customId: "nextMovieNight",
  },
  {
    name: "Holiday Golf Cart Parade",
    description: `Join us for our Holiday Golf Cart Parade! Decorate your golf carts and join in the parade or line the route and cheer them on!`,
    date: new Date("2023-12-23T18:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: golfCardParade23,
    photoAlt: "A flyer for the holiday golf cart parade",
  },
  {
    name: "Citizens Crimewatch Meeting",
    description: `The Kendale Homeowners Association has organized a Community Citizens Crimewatch Meeting. We urge residents from all 3 communities to come out, gather important program information and voice your concerns to the officers present. Be sure to bring a lawn chair!`,
    date: new Date("2024-01-23T19:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: crimeWatchFlyer,
    photoAlt: "A flyer for the Crimewatch meeting",
  },
  {
    name: "Spring Festival Planning Meeting",
    description: `Calling all KHA residents! We need your help to plan our biggest event of the year, our Spring Festival. The festival is scheduled to take place on April 13th. The Spring Festival is a fun-filled event that is free for all active residents. Come out and volunteer to help with the planning. Together we can make it the best festival yet.`,
    date: new Date("2024-02-13T19:30"),
    location: "Regis HR Room - 10625 N. Kendall Dr.",
    photo: khaSpringFestivalPlanningFlyer,
    photoAlt: "A flyer for the Spring Festival Planning meeting",
  },
  {
    name: "Yoga and Meditation",
    description: `Join us for a great evening of yoga at the park. Remember to bring your mat and water bottle!`,
    date: new Date("2024-03-14T18:30"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: yogaMeditationFlyer,
    photoAlt: "A flyer for the Yoga and Meditation event",
  },
  {
    name: "Spring Festival",
    description: `Mark your calendars  for this wonderful  community event! Join your neighbors and friends for an afternoon of music, food and rides! Sponsorship opportunities are available to not only support this wonderful community event but also promote your business/services. <a href="/stay-connected">Contact us</a> for more information.`,
    date: new Date("2024-04-13T14:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: springFestival2024,
    photoAlt: "A flyer for the Spring Festival",
  },
  {
    name: "Citizens Advisory Committee (CAC) Meeting",
    description: `At the meeting, representatives from various communities will attend and voice their concerns. Officers will review crime trends, criminal cases, and meet our “rookie officer.” Join us to make sure your voice is heard!`,
    date: new Date("2024-05-29T19:00"),
    location: "Kendall District Conference Room - Kendall District Police - 7701 SW 117 Avenue",
    photo: khaLogo,
    photoAlt: "The KHA Logo",
  },
  {
    name: "Yoga and Meditation",
    description: `Join us for a great evening of yoga at the park. All fitness levels are welcome. Remember to bring your mat and water bottle!`,
    date: new Date("2024-05-30T18:30"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: yogaMeditationMay24,
    photoAlt: "A flyer for the Yoga and Meditation event",
  },
  {
    name: "Community Hangout",
    description: `Kick off your Summer with a community hangout at the park! We will have free popsicles and glow sticks while supplies last. Please bring your own seating and any games you would like to play. Bring your family and friends for a fun day out with your neighbors!`,
    date: new Date("2024-06-30T18:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: communityHangout,
    photoAlt: "A flyer for the Community Hangout event",
  },
  {
    name: "Community Bike Ride and Park Hangout",
    description: `We’re excited to invite you to a Community Bike Ride and Hangout at Kendale Park on <strong>Sunday, October 6th, 2024, from 5:00 to 7:00 PM</strong>!
<br><br>Bring your bikes and helmets to join in on the ride, or simply come by to relax and enjoy great conversations at the park.
It's a fantastic opportunity to meet new neighbors and reconnect with familiar faces. Let’s make the most of this beautiful fall evening together!
<br><br>We can’t wait to see you there!`,
    date: new Date("2024-10-06T17:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: bikeRideFlyer,
    photoAlt: "A flyer for the Community Bike Ride event",
  },
  {
    name: "Full Moon Yoga",
    description: `Enjoy a FREE Yoga Class taught by instructor Gloria Navarro from Gin Yogi. It will be an amazing outdoor experience under the full moon. Please bring your own mat and water bottle.`,
    date: new Date("2024-10-17T18:30"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: fullMoonYoga,
    photoAlt: "A flyer for the Full Moon Yoga event",
  },
  {
    name: "Halloween Golf Cart Parade",
    description: `Join us for our third annual Holiday Golf Cart Parade!<br><br>To join the parade, decorate your golf carts and line up at Kendale Park by 6:30.<br><br>To cheer on the parade, line <a href="https://communications.kendalehoa.org/uploads/golf-cart-parade-route.jpeg" target="_blank">the route</a> and enjoy the festive carts as they pass by!`,
    date: new Date("2024-10-27T18:30"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: golfCartParade2024,
    photoAlt: "A flyer for the holiday golf cart parade",
  },
  {
    name: "Halloween Costume Contest",
    description: `Come with your best Halloween costume and win a prize! Be sure to be bring your treat  bag as we will have music, candy and fun!`,
    date: new Date("2024-10-27T17:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: costumeContest2024,
    photoAlt: "A flyer for the Costume Contest",
  },
];

export default events;
