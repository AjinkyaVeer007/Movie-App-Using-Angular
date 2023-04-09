const moviesData = [
  {
    name: "The Godfather",
    type: "Drama",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
    rating: 9.2,
    youtube_embed_url: "https://www.youtube.com/embed/sY1S34973zA",
  },
  {
    name: "The Shawshank Redemption",
    type: "Drama",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/hBcY0fE9pfXzvVaY4GKarweriG2.jpg",
    rating: 9.3,
    youtube_embed_url: "https://www.youtube.com/embed/6hB3S9bIaco",
  },
  {
    name: "The Dark Knight",
    type: "Action",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    youtube_embed_url: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    name: "Forrest Gump",
    type: "Drama",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    rating: 8.8,
    youtube_embed_url: "https://www.youtube.com/embed/bLvqoHBptjg",
  },
  {
    name: "Inception",
    type: "Action",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    rating: 8.8,
    youtube_embed_url: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    name: "Pulp Fiction",
    type: "Crime",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 8.9,
    youtube_embed_url: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    name: "Dangal",
    type: "Biography, Drama, Sport",
    description:
      "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg",
    rating: 8.4,
    youtube_embed_url: "https://www.youtube.com/embed/x_7YlGv9u1g",
  },
  {
    name: "Lagaan",
    type: "Drama, Sport",
    description:
      "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg",
    rating: 8.1,
    youtube_embed_url: "https://www.youtube.com/embed/oSIGQ0YkFxs",
  },
  {
    name: "3 Idiots",
    type: "Comedy, Drama",
    description:
      'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    poster_url:
      "https://www.themoviedb.org/t/p/original/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    rating: 8.4,
    youtube_embed_url: "https://www.youtube.com/embed/xvszmNXdM4w",
  },
  {
    name: "PK",
    type: "Comedy, Drama, Fantasy",
    description:
      "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg",
    rating: 8.1,
    youtube_embed_url: "https://www.youtube.com/embed/SOvGcT92NIA",
  },
  {
    name: "Bajrangi Bhaijaan",
    type: "Comedy, Drama",
    description:
      "An Indian man with a magnanimous heart takes a young mute Pakistani girl back to her homeland to reunite her with her family.",
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4v1UPQJy3YL3A2YCg2MrVLgamj8.jpg",
    rating: 8.0,
    youtube_embed_url: "https://www.youtube.com/embed/nCdLlJ2oP5Y",
  },
  {
    name: "Taare Zameen Par",
    type: "Drama, Family, Music",
    description:
      "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/fwXhw9bERqKrJfJK6WGakPIh3FS.jpg",
    rating: 8.4,
    youtube_embed_url: "https://www.youtube.com/embed/tgtT91V5lUo",
  },
  {
    name: "Sairat",
    type: "Romance, Drama",
    description:
      "In this epic love story, a wealthy girl falls in love with a poor boy from a lower caste, causing a major rift in their families and society.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/d8K4ZI1RSxMkIIwu5cuvZmzwohq.jpg",
    rating: 8.4,
    youtube_embed_url: "https://www.youtube.com/embed/wMrMKnoYWwA",
  },
  {
    name: "Natsamrat",
    type: "Drama",
    description:
      "After retiring as a celebrated stage actor, Ganpat Belwalkar is left to deal with the aftermath of his decision and the consequences of his past.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/idpdndC9eRM4CLH3rttMaMAeXv.jpg",
    rating: 8.4,
    youtube_embed_url: "https://www.youtube.com/embed/jXGFpKjZnBk",
  },
  {
    name: "Court",
    type: "Drama",
    description:
      "A folk singer is accused of abetting the suicide of a sewage worker in a lower caste in a small Indian village. The trial becomes a media circus as politicians, police, and the press get involved.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/zYf9u5aaKcZ6FwZq2tAubvPH2PV.jpg",
    rating: 8.2,
    youtube_embed_url: "https://www.youtube.com/embed/XiSfeIKS97s",
  },
  {
    name: "Fandry",
    type: "Drama",
    description:
      "A young boy from a lower caste falls in love with an upper-caste girl, but faces many obstacles from his family and society.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/8DLwm8rFaR4UNycHFyelk8Ef4Jv.jpg",
    rating: 8.2,
    youtube_embed_url: "https://www.youtube.com/embed/QW1KYUrJvFk",
  },
  {
    name: "Katyar Kaljat Ghusali",
    type: "Musical, Drama",
    description:
      "A classical singer faces challenges and opportunities as he and his protégé prepare for a competition against a rival musician.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/vbpvvVX8EwzDSB6qjoCoiirvSMt.jpg",
    rating: 8.3,
    youtube_embed_url: "https://www.youtube.com/embed/QfKB-ymhT0w",
  },
  {
    name: "Deool",
    type: "Drama",
    description:
      "A man who returns to his village after many years finds that it has become a popular pilgrimage destination, and he decides to exploit this opportunity.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/doTfW0TbTbrMb64Sfaw0lztdOh0.jpg",
    rating: 8.2,
    youtube_embed_url: "https://www.youtube.com/embed/HW7LwBbVDa0",
  },
  {
    name: "Baahubali: The Beginning",
    type: "Action, Adventure, Drama",
    description:
      "In the kingdom of Mahishmati, a young prince named Baahubali is thrown into a conflict when he learns about his heritage and the treachery that caused his father's death.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    rating: 8.1,
    youtube_embed_url: "https://www.youtube.com/embed/VdafjyFK3ko",
  },
  {
    name: "KGF: Chapter 1",
    type: "Action, Drama",
    description:
      "A young man named Rocky rises from poverty to become a gangster and challenges the reigning underworld kingpin in the gold mines of Kolar.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
    rating: 8.2,
    youtube_embed_url: "https://www.youtube.com/embed/rJ6O9JQYzUQ",
  },
  {
    name: "Vikram Vedha",
    type: "Action, Crime, Drama",
    description:
      "In this neo-noir crime thriller, a ruthless police officer named Vikram sets out to capture a notorious gangster named Vedha, but their cat-and-mouse game takes a series of unexpected twists and turns.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/ob9YxdzRu5lfKgz0PNrlL45dorf.jpg",
    rating: 8.5,
    youtube_embed_url: "https://www.youtube.com/embed/1sVr-uWZPjE",
  },
  {
    name: "Sarkar",
    type: "Action, Drama",
    description:
      "A CEO of a multinational corporation takes on the corrupt Indian political system when his rights are violated in Tamil Nadu.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/6uF4MtjUuee9CrlzMr4u9bzEz7P.jpg",
    rating: 6.9,
    youtube_embed_url: "https://www.youtube.com/embed/ODJi6UgKxJA",
  },
  {
    name: "Pariyerum Perumal",
    type: "Drama",
    description:
      "A young law student named Pariyan, who belongs to a lower caste, faces discrimination and violence at a college that is dominated by upper-caste students.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/2G2Pp9Ym0ca9NIrjDF7EOWNrbZb.jpg",
    rating: 8.4,
    youtube_embed_url: "https://www.youtube.com/embed/_HJGwUOg4y4",
  },
  {
    name: "Arjun Reddy",
    type: "Drama, Romance",
    description:
      "A successful young medical student's life spirals out of control after his girlfriend is forced to marry someone else, and he turns to alcohol and drugs to cope with his loss.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg",
    rating: 8.2,
    youtube_embed_url: "https://www.youtube.com/embed/JMU0KA7aOEw",
  },
  {
    name: "John Wick",
    type: "Action, Crime, Thriller",
    description:
      "After the death of his beloved wife, a retired hitman seeks vengeance against the men who wronged him.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/fZn0FGYnR5CTWN6O84zZIG9S4xR.jpg",
    rating: 7.4,
    youtube_embed_url: "https://www.youtube.com/embed/RllJtOw0USI",
  },
  {
    name: "Die Hard",
    type: "Action, Thriller",
    description:
      "A New York City cop tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    rating: 8.2,
    youtube_embed_url: "https://www.youtube.com/embed/2TQ-pOvI6Xo",
  },
  {
    name: "The Raid: Redemption",
    type: "Action, Crime, Thriller",
    description:
      "A SWAT team becomes trapped in a tenement run by a ruthless mobster and his army of killers and must fight their way out to survive.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/Abnm1Ws3JH0ReCfEhLMPwPcMcGO.jpg",
    rating: 7.6,
    youtube_embed_url: "https://www.youtube.com/embed/UcHrMw025p8",
  },
  {
    name: "The Bourne Identity",
    type: "Action, Mystery, Thriller",
    description:
      "A man is found floating in the Mediterranean Sea with two gunshot wounds and no memory of who he is, but as he begins to uncover his past, he realizes he is being hunted by assassins.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/aP8swke3gmowbkfZ6lmNidu0y9p.jpg",
    rating: 7.9,
    youtube_embed_url: "https://www.youtube.com/embed/cD-uQreIwEk",
  },
  {
    name: "Mad Max: Fury Road",
    type: "Action, Adventure, Sci-Fi",
    description:
      "In a post-apocalyptic world, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper, and a drifter named Max.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    rating: 8.1,
    youtube_embed_url: "https://www.youtube.com/embed/hEJnMQG9ev8",
  },
  {
    name: "The Matrix",
    type: "Action, Sci-Fi",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    youtube_embed_url: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
];

console.log(moviesData.length);
