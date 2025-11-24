export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  director: string;
  rating: number;
  duration: number;
  description: string;
  thumbnail: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    director: "Frank Darabont",
    rating: 9.3,
    duration: 142,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    thumbnail: "https://via.placeholder.com/300x450/4a5568/ffffff?text=Shawshank"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    rating: 9.2,
    duration: 175,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    thumbnail: "https://via.placeholder.com/300x450/2d3748/ffffff?text=Godfather"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    rating: 9.0,
    duration: 152,
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    thumbnail: "https://via.placeholder.com/300x450/1a202c/ffffff?text=Dark+Knight"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    rating: 8.9,
    duration: 154,
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    thumbnail: "https://via.placeholder.com/300x450/744210/ffffff?text=Pulp+Fiction"
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    rating: 8.8,
    duration: 142,
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    thumbnail: "https://via.placeholder.com/300x450/065f46/ffffff?text=Forrest+Gump"
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    rating: 8.8,
    duration: 148,
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    thumbnail: "https://via.placeholder.com/300x450/1e3a8a/ffffff?text=Inception"
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski",
    rating: 8.7,
    duration: 136,
    description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Matrix"
  },
  {
    id: 8,
    title: "Goodfellas",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    director: "Martin Scorsese",
    rating: 8.7,
    duration: 146,
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Goodfellas"
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    rating: 8.9,
    duration: 201,
    description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
    thumbnail: "https://via.placeholder.com/300x450/059669/ffffff?text=LOTR+Return"
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    genre: ["Drama"],
    director: "David Fincher",
    rating: 8.8,
    duration: 139,
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Fight+Club"
  },
  {
    id: 11,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    genre: ["Action", "Adventure", "Fantasy"],
    director: "Irvin Kershner",
    rating: 8.7,
    duration: 124,
    description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training.",
    thumbnail: "https://via.placeholder.com/300x450/1e40af/ffffff?text=Empire+Strikes"
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genre: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    rating: 8.8,
    duration: 178,
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.",
    thumbnail: "https://via.placeholder.com/300x450/059669/ffffff?text=LOTR+Fellowship"
  },
  {
    id: 13,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    rating: 8.6,
    duration: 169,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    thumbnail: "https://via.placeholder.com/300x450/1e3a8a/ffffff?text=Interstellar"
  },
  {
    id: 14,
    title: "Parasite",
    year: 2019,
    genre: ["Comedy", "Drama", "Thriller"],
    director: "Bong Joon Ho",
    rating: 8.6,
    duration: 132,
    description: "A poor family schemes to become employed by a wealthy family by infiltrating their household.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Parasite"
  },
  {
    id: 15,
    title: "Spirited Away",
    year: 2001,
    genre: ["Animation", "Adventure", "Family"],
    director: "Hayao Miyazaki",
    rating: 9.2,
    duration: 125,
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and witches.",
    thumbnail: "https://via.placeholder.com/300x450/065f46/ffffff?text=Spirited+Away"
  },
  {
    id: 16,
    title: "Saving Private Ryan",
    year: 1998,
    genre: ["Drama", "War"],
    director: "Steven Spielberg",
    rating: 8.6,
    duration: 169,
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Saving+Ryan"
  },
  {
    id: 17,
    title: "The Green Mile",
    year: 1999,
    genre: ["Crime", "Drama", "Fantasy"],
    director: "Frank Darabont",
    rating: 8.6,
    duration: 189,
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder.",
    thumbnail: "https://via.placeholder.com/300x450/4a5568/ffffff?text=Green+Mile"
  },
  {
    id: 18,
    title: "Life Is Beautiful",
    year: 1997,
    genre: ["Comedy", "Drama", "Romance"],
    director: "Roberto Benigni",
    rating: 8.6,
    duration: 116,
    description: "When an open-minded Jewish waiter and his son are imprisoned in a concentration camp, he uses humor to protect his son.",
    thumbnail: "https://via.placeholder.com/300x450/dc2626/ffffff?text=Life+Beautiful"
  },
  {
    id: 19,
    title: "Se7en",
    year: 1995,
    genre: ["Crime", "Drama", "Mystery"],
    director: "David Fincher",
    rating: 8.6,
    duration: 127,
    description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    thumbnail: "https://via.placeholder.com/300x450/1f2937/ffffff?text=Se7en"
  },
  {
    id: 20,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    rating: 8.6,
    duration: 118,
    description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Silence+Lambs"
  },
  {
    id: 21,
    title: "City of God",
    year: 2002,
    genre: ["Crime", "Drama"],
    director: "Fernando Meirelles",
    rating: 8.6,
    duration: 130,
    description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    thumbnail: "https://via.placeholder.com/300x450/ea580c/ffffff?text=City+God"
  },
  {
    id: 22,
    title: "It's a Wonderful Life",
    year: 1946,
    genre: ["Drama", "Family", "Fantasy"],
    director: "Frank Capra",
    rating: 8.6,
    duration: 130,
    description: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like.",
    thumbnail: "https://via.placeholder.com/300x450/059669/ffffff?text=Wonderful+Life"
  },
  {
    id: 23,
    title: "Seven Samurai",
    year: 1954,
    genre: ["Action", "Adventure", "Drama"],
    director: "Akira Kurosawa",
    rating: 9.0,
    duration: 207,
    description: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Seven+Samurai"
  },
  {
    id: 24,
    title: "The Usual Suspects",
    year: 1995,
    genre: ["Crime", "Mystery", "Thriller"],
    director: "Bryan Singer",
    rating: 8.5,
    duration: 106,
    description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Usual+Suspects"
  },
  {
    id: 25,
    title: "León: The Professional",
    year: 1994,
    genre: ["Action", "Crime", "Drama"],
    director: "Luc Besson",
    rating: 8.5,
    duration: 110,
    description: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Leon"
  },
  {
    id: 26,
    title: "Harakiri",
    year: 1962,
    genre: ["Action", "Drama", "Mystery"],
    director: "Masaki Kobayashi",
    rating: 8.7,
    duration: 133,
    description: "An elder ronin arrives at a feudal lord's home and requests an honorable place to commit suicide.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Harakiri"
  },
  {
    id: 27,
    title: "Whiplash",
    year: 2014,
    genre: ["Drama", "Music"],
    director: "Damien Chazelle",
    rating: 8.5,
    duration: 106,
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams are mentored by an instructor.",
    thumbnail: "https://via.placeholder.com/300x450/ea580c/ffffff?text=Whiplash"
  },
  {
    id: 28,
    title: "The Intouchables",
    year: 2011,
    genre: ["Biography", "Comedy", "Drama"],
    director: "Olivier Nakache",
    rating: 8.5,
    duration: 112,
    description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man to be his caregiver.",
    thumbnail: "https://via.placeholder.com/300x450/059669/ffffff?text=Intouchables"
  },
  {
    id: 29,
    title: "The Prestige",
    year: 2006,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    director: "Christopher Nolan",
    rating: 8.5,
    duration: 130,
    description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.",
    thumbnail: "https://via.placeholder.com/300x450/1e3a8a/ffffff?text=Prestige"
  },
  {
    id: 30,
    title: "The Departed",
    year: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Martin Scorsese",
    rating: 8.5,
    duration: 151,
    description: "An undercover cop and a police informant play a cat and mouse game with each other.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Departed"
  },
  {
    id: 31,
    title: "Gladiator",
    year: 2000,
    genre: ["Action", "Adventure", "Drama"],
    director: "Ridley Scott",
    rating: 8.5,
    duration: 155,
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Gladiator"
  },
  {
    id: 32,
    title: "Apocalypse Now",
    year: 1979,
    genre: ["Drama", "Mystery", "War"],
    director: "Francis Ford Coppola",
    rating: 8.4,
    duration: 147,
    description: "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Apocalypse+Now"
  },
  {
    id: 33,
    title: "Memento",
    year: 2000,
    genre: ["Mystery", "Thriller"],
    director: "Christopher Nolan",
    rating: 8.4,
    duration: 113,
    description: "A man with short-term memory loss attempts to track down his wife's murderer.",
    thumbnail: "https://via.placeholder.com/300x450/1e3a8a/ffffff?text=Memento"
  },
  {
    id: 34,
    title: "WALL·E",
    year: 2008,
    genre: ["Animation", "Adventure", "Family"],
    director: "Andrew Stanton",
    rating: 8.4,
    duration: 98,
    description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey.",
    thumbnail: "https://via.placeholder.com/300x450/059669/ffffff?text=WALL-E"
  },
  {
    id: 35,
    title: "The Lion King",
    year: 1994,
    genre: ["Animation", "Adventure", "Drama"],
    director: "Roger Allers",
    rating: 8.5,
    duration: 88,
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    thumbnail: "https://via.placeholder.com/300x450/ea580c/ffffff?text=Lion+King"
  },
  {
    id: 36,
    title: "Alien",
    year: 1979,
    genre: ["Horror", "Sci-Fi"],
    director: "Ridley Scott",
    rating: 8.4,
    duration: 117,
    description: "After a space merchant vessel receives an unknown transmission, they land on a deadly planet.",
    thumbnail: "https://via.placeholder.com/300x450/1f2937/ffffff?text=Alien"
  },
  {
    id: 37,
    title: "Sunset Boulevard",
    year: 1950,
    genre: ["Drama", "Film-Noir"],
    director: "Billy Wilder",
    rating: 8.4,
    duration: 110,
    description: "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Sunset+Blvd"
  },
  {
    id: 38,
    title: "Dr. Strangelove",
    year: 1964,
    genre: ["Comedy", "War"],
    director: "Stanley Kubrick",
    rating: 8.4,
    duration: 95,
    description: "An insane general triggers a path to nuclear holocaust that a War Room full of politicians try to stop.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Dr+Strangelove"
  },
  {
    id: 39,
    title: "The Great Dictator",
    year: 1940,
    genre: ["Comedy", "Drama", "War"],
    director: "Charlie Chaplin",
    rating: 8.4,
    duration: 125,
    description: "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Great+Dictator"
  },
  {
    id: 40,
    title: "Witness for the Prosecution",
    year: 1957,
    genre: ["Crime", "Drama", "Mystery"],
    director: "Billy Wilder",
    rating: 8.4,
    duration: 116,
    description: "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    thumbnail: "https://via.placeholder.com/300x450/7c2d12/ffffff?text=Witness"
  },
  {
    id: 41,
    title: "Paths of Glory",
    year: 1957,
    genre: ["Drama", "War"],
    director: "Stanley Kubrick",
    rating: 8.4,
    duration: 88,
    description: "After refusing to attack an enemy position, a general accuses the soldiers of cowardice.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Paths+Glory"
  },
  {
    id: 42,
    title: "Django Unchained",
    year: 2012,
    genre: ["Drama", "Western"],
    director: "Quentin Tarantino",
    rating: 8.4,
    duration: 165,
    description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner.",
    thumbnail: "https://via.placeholder.com/300x450/744210/ffffff?text=Django"
  },
  {
    id: 43,
    title: "The Shining",
    year: 1980,
    genre: ["Drama", "Horror"],
    director: "Stanley Kubrick",
    rating: 8.4,
    duration: 146,
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.",
    thumbnail: "https://via.placeholder.com/300x450/1f2937/ffffff?text=Shining"
  },
  {
    id: 44,
    title: "ONCE UPON A TIME IN THE WEST",
    year: 1968,
    genre: ["Western"],
    director: "Sergio Leone",
    rating: 8.5,
    duration: 165,
    description: "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow.",
    thumbnail: "https://via.placeholder.com/300x450/744210/ffffff?text=Once+West"
  },
  {
    id: 45,
    title: "Casablanca",
    year: 1942,
    genre: ["Drama", "Romance", "War"],
    director: "Michael Curtiz",
    rating: 8.5,
    duration: 102,
    description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Casablanca"
  },
  {
    id: 46,
    title: "Grave of the Fireflies",
    year: 1988,
    genre: ["Animation", "Drama", "War"],
    director: "Isao Takahata",
    rating: 8.5,
    duration: 89,
    description: "A young boy and his little sister struggle to survive in Japan during World War II.",
    thumbnail: "https://via.placeholder.com/300x450/991b1b/ffffff?text=Fireflies"
  },
  {
    id: 47,
    title: "Rear Window",
    year: 1954,
    genre: ["Mystery", "Thriller"],
    director: "Alfred Hitchcock",
    rating: 8.5,
    duration: 112,
    description: "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one has committed murder.",
    thumbnail: "https://via.placeholder.com/300x450/374151/ffffff?text=Rear+Window"
  },
  {
    id: 48,
    title: "Cinema Paradiso",
    year: 1988,
    genre: ["Drama", "Romance"],
    director: "Giuseppe Tornatore",
    rating: 8.5,
    duration: 155,
    description: "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village.",
    thumbnail: "https://via.placeholder.com/300x450/ea580c/ffffff?text=Cinema+Paradiso"
  },
  {
    id: 49,
    title: "Alien",
    year: 1979,
    genre: ["Horror", "Sci-Fi"],
    director: "Ridley Scott",
    rating: 8.4,
    duration: 117,
    description: "After a space merchant vessel receives an unknown transmission, they land on a deadly planet.",
    thumbnail: "https://via.placeholder.com/300x450/1f2937/ffffff?text=Alien"
  },
  {
    id: 50,
    title: "Raiders of the Lost Ark",
    year: 1981,
    genre: ["Action", "Adventure"],
    director: "Steven Spielberg",
    rating: 8.5,
    duration: 115,
    description: "In 1936, archaeologist and adventurer Indiana Jones is hired to find the Ark of the Covenant.",
    thumbnail: "https://via.placeholder.com/300x450/744210/ffffff?text=Raiders"
  }
];
