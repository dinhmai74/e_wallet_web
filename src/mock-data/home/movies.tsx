import moment, { Moment } from "moment";

export interface MovieTicketPriceModel {
  id: string;
  name: string;
  price: number;
}

export const MovieTicketPriceData: MovieTicketPriceModel[] = [
  {
    id: "adult2d",
    name: "Adult 2D",
    price: 45000
  },
  {
    id: "adultvip",
    name: "Adult VIP",
    price: 60000
  },
  {
    id: "adultcouple",
    name: "Adult Couple",
    price: 90000
  }
];

export enum MovieDimensionType {
  "2D",
  "3D"
}

export enum MovieDigitalType {
  Digital
}

export interface CastModel {
  src: string;
  name: string;
}

export interface MovieModel {
  id: string;
  title: string;
  dimensionType: MovieDimensionType;
  digitalType: MovieDigitalType;
  duration: number;
  source: any;
  sourceHorizontal: string;
  stars: number;
  releaseDate: string | Date | Moment;
  director: string;
  cast: string;
  casts: CastModel[];
  description: string;
  trailSrc: string;
}

export interface MovieTimeModel {
  id: string;
  roomName: string;
  time: string | Moment | Date;
}

export interface PlaceModel {
  id: string;
  date: Moment[];
  place: string;
  times: MovieTimeModel[];
}

export const PlaceData: PlaceModel[] = [
  {
    id: "53fb120b-14a9-49eb-b966-c7e5b1cb32a2",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Nguyen Du",
    times: [
      {
        id: "564bb5e1-c08d-4a53-9381-ac68f813470b",
        roomName: "Room 1",
        time: moment().add(5, "hours")
      },
      {
        id: "4a121739-66ef-4e23-9a73-490ea7143024",
        roomName: "Room 2",
        time: moment().add(9, "hours")
      }
    ]
  },
  {
    id: "e99ab361-5a81-4902-b2f2-88c662979606",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Raymond Evans",
    times: [
      {
        id: "f9e8d91d-3302-4180-a5c6-a6aa14e389b5",
        roomName: "Room 1",
        time: moment().add(8, "hours")
      },
      {
        id: "93636526-e5cd-48d5-b15c-a80de782e933",
        roomName: "Room 3",
        time: moment().add(5, "hours")
      }
    ]
  },
  {
    id: "9d04cbd0-620f-4888-83aa-c60cb8b7ddd6",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Samuel Bass",
    times: [
      {
        id: "9d881f63-d912-4112-b671-68e2d2d76c38",
        roomName: "Room 1",
        time: moment().add(5, "hours")
      }
    ]
  },
  {
    id: "ef186a84-b58b-41ec-90fa-5f52592dbd7b",
    date: [moment().add(1, "days"), moment().add(2, "days")],
    place: "Theresa Harrison",
    times: [
      {
        id: "841a6d6b-b22e-4041-82bb-ff5080a4aaa8",
        roomName: "Room 1",
        time: moment().add(5, "hours")
      }
    ]
  },
  {
    id: "06acb3d1-13bf-4f23-a7f0-4c95f9ae3364",
    date: [moment(), moment().add(3, "days")],
    place: "Amelia Perry ",
    times: [
      {
        id: "dd9c5602-7b35-457a-846a-3a194816e197",
        roomName: "Room 1",
        time: moment().add(5, "hours")
      }
    ]
  },
  {
    id: "02fc037d-4907-43aa-8349-0d9486374f8e",
    date: [moment().add(4, "days"), moment().add(3, "days")],
    place: "Gabriel Gray",
    times: [
      {
        id: "58edeb03-b45e-4c70-9302-265e49e6c5ad",
        roomName: "Room 1",
        time: moment().add(5, "hours")
      }
    ]
  }
];

const tempDesc = `In the near future, humans are augmented with cybernetic improvements to traits such as vision, strength, and intelligence. Augmentation developer Hanka Robotics establishes a secret project to develop an artificial body, or "shell", that can integrate a human brain rather than an AI. Mira Killian, the sole survivor of a cyberterrorist attack which killed her parents, is chosen as the test subject after her body is damaged beyond repair. Over the objections of her designer Dr. Ouelet, Hanka's CEO, Cutter, decides to use Killian as a counter-terrorism operative.

A year later, Killian has attained the rank of Major in the anti-terrorist bureau Section 9, working alongside operatives Batou and Togusa under Chief Daisuke Aramaki. Killian, who experiences hallucinations that Ouelet dismisses as glitches, is troubled by how little she remembers of her past. The team thwarts a terrorist attack on a Hanka business conference, and Killian destroys a robotic geisha after it murders a hostage. After learning that the geisha was hacked by an unknown entity known as Kuze, Killian breaks protocol and "dives" into its AI for answers. The entity attempts a counter-hack, and Batou is forced to disconnect her. They trace the hacker to a yakuza nightclub, where they are lured into a trap. The explosion destroys Batou's eyes and damages Killian's body. Cutter is enraged by Killian's actions, and threatens to have Section 9 shut down unless Aramaki keeps her in line.

Kuze tracks down Section 9's Hanka consultant, Dr. Dahlin, and kills her. The team links her murder to the deaths of other senior company researchers and realize that Ouelet is the next target. Kuze takes control of two sanitation workers and sends them to kill Ouelet. Batou, now with cybernetic eyes, kills one while the repaired Killian subdues the other. While they interrogate the worker, Kuze speaks through him before compelling him to commit suicide. Togusa traces the hack to a secret location, where the team discovers a large number of humans mentally linked as a makeshift signal network. Killian is captured and Kuze reveals that he is a failed Hanka test subject from the same project that created Killian. He urges her to question her own memories, then frees her and escapes.

Killian confronts Ouelet, who admits that 98 test subjects died before Killian, and that her memories are implanted. Cutter has decided that Killian is a liability and orders Ouelet to kill her after she returns to Hanka Robotics. Instead, Ouelet gives Killian an address and helps her escape. Cutter kills Ouelet, but blames Killian, saying that she has gone rogue. He informs Aramaki and the team that Killian must be terminated.

Killian follows the address to an apartment occupied by a widowed mother, who reveals that her daughter, Motoko Kusanagi, ran away from home a year ago and was arrested. Motoko took her own life while in custody. Killian leaves and contacts Aramaki, who allows Cutter to remotely eavesdrop on their conversation. Batou, Togusa, and Aramaki eliminate Cutter's men trying to ambush them, while Killian follows her memories to the hideaway where Motoko was last seen. There, she and Kuze meet and recall their past lives as anti-augmentation radicals who were abducted by Hanka as test subjects.

Cutter deploys a "spider-tank" to kill them. Kuze nearly dies before Killian is able to tear off the tank's motor, losing an arm in the process. Mortally wounded, Kuze offers to merge his "ghost" with Killian's, but Killian refuses. Kuze fades out, then a Hanka sniper kills him. Batou and the team rescue Killian, while Aramaki executes Cutter with Killian's consent. The next day, Killian, now repaired and embracing her true identity as the Japanese Motoko, reconnects with her mother and returns to work with Section 9.`;

export const HotMovieData: MovieModel[] = [
  {
    id: "43ab99f2-ed61-5ffa-aefd-e7b7f41bae17",
    title: "Ghost in the Shell ",
    source: {
      uri: "http://www.movienewsletters.net/photos/209706R1.jpg"
    },
    sourceHorizontal:
      "https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/03/Ghost-in-the-Shell-static-banner.jpg",
    casts: [
      {
        name: "Leo Rose",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Curtis Bryant",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Johanna Craig",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      }
    ],
    digitalType: 0,
    dimensionType: 0,
    duration: 120,
    releaseDate: "2020-01-20",
    stars: 7,
    director: "	Rupert Sanders",
    trailSrc: "G4VmJcZR0Yg",
    cast:
      "Bryan Dennis,Angel Evans,Hulda Todd,Mayme Newton,Peter Gibson,Angel Smith,Callie Harris,Floyd Hernandez,Helena Watkins",
    description: `In the near future, humans are augmented with cybernetic improvements to traits such as vision, strength, and intelligence. Augmentation developer Hanka Robotics establishes a secret project to develop an artificial body, or "shell", that can integrate a human brain rather than an AI. Mira Killian, the sole survivor of a cyberterrorist attack which killed her parents, is chosen as the test subject after her body is damaged beyond repair. Over the objections of her designer Dr. Ouelet, Hanka's CEO, Cutter, decides to use Killian as a counter-terrorism operative.

      A year later, Killian has attained the rank of Major in the anti-terrorist bureau Section 9, working alongside operatives Batou and Togusa under Chief Daisuke Aramaki. Killian, who experiences hallucinations that Ouelet dismisses as glitches, is troubled by how little she remembers of her past. The team thwarts a terrorist attack on a Hanka business conference, and Killian destroys a robotic geisha after it murders a hostage. After learning that the geisha was hacked by an unknown entity known as Kuze, Killian breaks protocol and "dives" into its AI for answers. The entity attempts a counter-hack, and Batou is forced to disconnect her. They trace the hacker to a yakuza nightclub, where they are lured into a trap. The explosion destroys Batou's eyes and damages Killian's body. Cutter is enraged by Killian's actions, and threatens to have Section 9 shut down unless Aramaki keeps her in line.
      
      Kuze tracks down Section 9's Hanka consultant, Dr. Dahlin, and kills her. The team links her murder to the deaths of other senior company researchers and realize that Ouelet is the next target. Kuze takes control of two sanitation workers and sends them to kill Ouelet. Batou, now with cybernetic eyes, kills one while the repaired Killian subdues the other. While they interrogate the worker, Kuze speaks through him before compelling him to commit suicide. Togusa traces the hack to a secret location, where the team discovers a large number of humans mentally linked as a makeshift signal network. Killian is captured and Kuze reveals that he is a failed Hanka test subject from the same project that created Killian. He urges her to question her own memories, then frees her and escapes.
      
      Killian confronts Ouelet, who admits that 98 test subjects died before Killian, and that her memories are implanted. Cutter has decided that Killian is a liability and orders Ouelet to kill her after she returns to Hanka Robotics. Instead, Ouelet gives Killian an address and helps her escape. Cutter kills Ouelet, but blames Killian, saying that she has gone rogue. He informs Aramaki and the team that Killian must be terminated.
      
      Killian follows the address to an apartment occupied by a widowed mother, who reveals that her daughter, Motoko Kusanagi, ran away from home a year ago and was arrested. Motoko took her own life while in custody. Killian leaves and contacts Aramaki, who allows Cutter to remotely eavesdrop on their conversation. Batou, Togusa, and Aramaki eliminate Cutter's men trying to ambush them, while Killian follows her memories to the hideaway where Motoko was last seen. There, she and Kuze meet and recall their past lives as anti-augmentation radicals who were abducted by Hanka as test subjects.
      
      Cutter deploys a "spider-tank" to kill them. Kuze nearly dies before Killian is able to tear off the tank's motor, losing an arm in the process. Mortally wounded, Kuze offers to merge his "ghost" with Killian's, but Killian refuses. Kuze fades out, then a Hanka sniper kills him. Batou and the team rescue Killian, while Aramaki executes Cutter with Killian's consent. The next day, Killian, now repaired and embracing her true identity as the Japanese Motoko, reconnects with her mother and returns to work with Section 9.`
  },
  {
    id: "49b48aa1-2261-4b30-9454-0da5ee37520f",
    title: "Mantera",
    sourceHorizontal:
      "https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/03/Ghost-in-the-Shell-static-banner.jpg",
    casts: [
      {
        name: "Leo Rose",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Curtis Bryant",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Johanna Craig",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      }
    ],
    source: {
      uri: "https://i.jeded.com/i/mantera.6694.jpg"
    },
    trailSrc: "q4yYeIft61c",
    digitalType: 0,
    dimensionType: 0,
    duration: 120,
    releaseDate: "2020-01-20",
    stars: 7,
    director: "Ada Byrd",
    cast:
      "Marie Perkins, Lawrence Poole, Ola Jones, Rosa Harris, Cameron Pittman, Ronnie Blake, Lawrence Stewart, Ella Erickson, Donald Carr, Johnny Parsons",
    description: `Sam Weston, the owner of Weston Technologies is furious over the security breach in his Research Lab. The prototype of his latest weapon system "Mantera" or MAN - Transformable Exo-Robotic Armour was sabotaged and destroyed. Invaluable research data was stolen and deleted from the company's mainframe. His main scientist who is leading the research team, Dr. Natasya was missing. The buyer for the new technology is pressuring Sam to deliver the prototype or the deal is off. To make matter worse, the wreckage and debris from the destroyed "Mantera" was accidentally shipped to the other side of the world.... to a young man by the name of Azman, in Malaysia. Who is Azman, and what makes him the chosen one? Everything will be revealed in 'MANTERA'.`
  },
  {
    id: "75a7c68b-533a-41dc-9c15-ad1afd846d3b",
    title: "Moon light",
    sourceHorizontal:
      "https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/03/Ghost-in-the-Shell-static-banner.jpg",
    source: {
      uri:
        "https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._SY679_.jpg"
    },
    casts: [
      {
        name: "Leo Rose",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },

      {
        name: "Curtis Bryant",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Johanna Craig",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      }
    ],
    trailSrc: "9NJj12tJzqc",
    digitalType: 0,
    dimensionType: 0,
    duration: 180,
    releaseDate: "2020-01-17",
    stars: 9,
    director: "Robert Goodman",
    description: `The film presents three stages in the life of the main character; his youth, adolescence, and early adult life. It explores the difficulties he faces with his sexuality and identity, including the physical and emotional abuse he endures growing up.[8] Filmed in Miami, Florida, beginning in 2015, Moonlight premiered at the Telluride Film Festival on September 2, 2016. Distributed by A24, the film was released in the United States on October 21, 2016, and grossed over $65 million worldwide.`,

    cast:
      " Samuel Christensen, Essie Hunter, Andrew Vega, Hulda Phelps, Melvin Miles, Amelia Hansen, Rachel Barber, Maria McCormick, Flora Vega"
  },
  {
    id: "f2ea7616-5ecc-468c-9fda-0ecd689490ac",
    title: "Frozen II",
    sourceHorizontal:
      "https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/03/Ghost-in-the-Shell-static-banner.jpg",
    source: {
      uri:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaBMVvmkv08w6m_4FRVQspIV_hc5G_URBlbxnQW_ql18evNvz-"
    },
    trailSrc: "Zi4LMpSDccc",
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-19",
    stars: 10,
    director: "Chris Buck, Jennifer Lee",
    description: `Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled. After hearing a mysterious voice call out to her, Elsa travels to the enchanted forests and dark seas beyond her kingdom -- an adventure that soon turns into a journey of self-discovery.`,
    casts: [
      {
        name: "Leo Rose",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },

      {
        name: "Curtis Bryant",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Johanna Craig",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      }
    ],
    cast:
      "Hunter Moody, Justin McBride, Jerry Adams, Mabelle Williams, Ernest Klein, Ora James, Irene Spencer, Pauline Moran, Josephine Griffith, Betty Steele, Mark Wade"
  }
];

export const MovieData: MovieModel[] = [
  ...HotMovieData,
  {
    id: "5202faa8-d326-4633-8fbf-61c741ed833f",
    title: "Extra ordinary",
    sourceHorizontal:
      "https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/03/Ghost-in-the-Shell-static-banner.jpg",
    casts: [
      {
        name: "Leo Rose",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Curtis Bryant",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Johanna Craig",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      }
    ],
    source: {
      uri:
        "https://m.media-amazon.com/images/M/MV5BOTZiMzZiNTktZGRkNi00Yzc4LWEyZTYtMTEzOGZjOTFkNWZkXkEyXkFqcGdeQXVyMTI4Mjg4MjA@._V1_.jpg"
    },
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-18",
    stars: 8,
    director: "Lettie Wise",
    description: tempDesc,
    trailSrc: "8V1dEsZAQyg",
    cast:
      "Lenora Boyd, Cynthia Flowers, Harold Reeves, Antonio Warner, Isabelle Wallace,Harriett Sanchez , Connor Wolfe, Winifred Lyons, Ann Wallace"
  },
  {
    id: "97dab2ea-62dc-4817-8e2b-dfbefd02cb76",
    title: "Charlies angles",
    trailSrc: "RSUq4VfWfjE",
    source: {
      uri:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-day-movies-charlies-angels-1567050231.jpg?crop=0.9891196834817012xw:1xh;center,top&resize=480:*"
    },
    sourceHorizontal:
      "https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/03/Ghost-in-the-Shell-static-banner.jpg",
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-18",
    stars: 6,
    director: "Jeff Taylor",
    description: tempDesc,

    cast:
      "Josie Lewis, Sally Maxwell, Aiden Ballard, Bertie Torres, Louise Lane,Bill Hunter , Callie Peters",
    casts: [
      {
        name: "Leo Rose",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      },

      {
        name: "Curtis Bryant",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Johanna Craig",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Ronnie Wood",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Lettie Parker",
        src: "https://source.unsplash.com/400x400/?face"
      },
      {
        name: "Susan Perkins",
        src: "https://source.unsplash.com/400x400/?face"
      }
    ]
  }
];
