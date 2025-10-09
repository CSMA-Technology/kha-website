import khaLogo from "$lib/assets/logo-no-text.svg";
import communityBikeRide2024 from "$lib/assets/events/community-bike-ride-2024.jpeg";
import holidayToyDrive2024 from "$lib/assets/events/holiday-toy-drive-2024.jpeg";
import holidayGolfCartParade2024 from "$lib/assets/events/holiday-golf-cart-parade-2024.jpeg";
import holidayGolfCartParadeRoute2024 from "$lib/assets/events/holiday-golf-cart-parade-route-2024.jpeg";
import bikeRide202501 from "$lib/assets/events/bike-ride-2025-01.png";
import halloweenEvent2025 from "$lib/assets/events/halloween-event-2025.png";
import halloweenGolfCartParade2025 from "$lib/assets/events/halloween-golf-cart-parade-2025.png";

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
    name: "Community Bike Ride",
    description: `Let’s ride! Join us on Sunday for a wonderful ride around The Village community. Bring your bikes, scooters or skates! All are welcome!`,
    date: new Date("2024-11-03T17:15"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: communityBikeRide2024,
    photoAlt: "A flyer for the Community Bike Ride",
  },
  {
    name: "Holiday Toy Drive",
    description: `Please join in spreading joy this holiday season! We will be collecting new, unwrapped toys for boys and girls ages 6 & 7 y/o at Riverside Elementary School. <br/>Drop off dates are:
<br/>Sunday, Nov 17   3-5 pm
<br/>Sunday, Nov 24  3-5 pm
<br/>Sunday, Dec 01   3-5 pm
<br/><br/>Donation Drop Off Location:
<br/>D’Arce Home
<br/>10251 SW 91 Street`,
    date: new Date("2024-12-01T17:00"),
    location: "D’Arce Home - 10251 SW 91 Street",
    photo: holidayToyDrive2024,
    photoAlt: "A flyer for the Holiday Toy Drive",
  },
  {
    name: "General Meeting and Elections",
    description: `Join us for our General Meeting and Elections of the 2025 Board. 
    <br/>Important issues affecting our community and upcoming 2025 plans/events will be discussed.
    <br/><br/>Board positions are open. Email us at <a href="mailto:kha@kendalehoa.org">kha@kendalehoa.org</a> if you would like to be nominated.
    <br/><br/>Get involved! We want to hear from you!`,
    date: new Date("2024-12-03T19:00"),
    location: "Ron Ehmann Park - 10995 SW 97 Avenue",
    photo: khaLogo,
    photoAlt: "The KHA Logo",
  },
  {
    name: "Holiday Golf Cart Parade",
    description: `Join us on Sunday, Dec 22 for our 3rd Annual Holiday Golf Cart Parade. Join in the parade with your decorated golf cart or line up along the route and cheer them on! <br/>To see the route, <a href=${holidayGolfCartParadeRoute2024} target="_blank">click here.</a>`,
    date: new Date("2024-12-22T18:30"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: holidayGolfCartParade2024,
    photoAlt: "A flyer for the holiday golf cart parade",
  },
  {
    name: "Community Bike Ride",
    description: "Join us on Sunday, January 5th for our first Community Bike Ride of 2025!",
    date: new Date("2025-01-05T17:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: bikeRide202501,
    photoAlt: "A flyer for the Community Bike Ride",
  },
  {
    name: "Halloween Costume Party",
    description:
      "Come out to Kendale Park beginning at 4 pm for our Halloween Costume Party. Adults and children all welcomed to come dressed in their best costume and enjoy food, music, games and parades.",
    date: new Date("2025-10-26T16:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: halloweenEvent2025,
    photoAlt: "A flyer for the Halloween Costume Party",
  },
  {
    name: "Halloween Golf Cart Parade",
    description: "Join us for our Halloween Golf Cart Parade around The Village starting at 7 pm!",
    date: new Date("2025-10-26T19:00"),
    location: "Kendale Park - 10300 SW 93 Street",
    photo: halloweenGolfCartParade2025,
    photoAlt: "A flyer for the Halloween Golf Cart Parade",
  },
];

export default events;
