import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Modal } from "antd";
import { useState } from "react";
import { Layout } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const sample_API_call = {
    dates: {
      maximum: "2022-09-25",
      minimum: "2022-08-08",
    },
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
        genre_ids: [53],
        id: 985939,
        original_language: "en",
        original_title: "Fall",
        overview:
          "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        popularity: 7087.515,
        poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
        release_date: "2022-08-11",
        title: "Fall",
        video: false,
        vote_average: 7.4,
        vote_count: 997,
      },
      {
        adult: false,
        backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
        genre_ids: [27, 53],
        id: 760161,
        original_language: "en",
        original_title: "Orphan: First Kill",
        overview:
          "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        popularity: 8792.868,
        poster_path: "/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg",
        release_date: "2022-07-27",
        title: "Orphan: First Kill",
        video: false,
        vote_average: 7,
        vote_count: 718,
      },
      {
        adult: false,
        backdrop_path: "/ybvm31ae8WW5O6411PDzwFlETuq.jpg",
        genre_ids: [12, 18, 27],
        id: 760741,
        original_language: "en",
        original_title: "Beast",
        overview:
          "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
        popularity: 3689.282,
        poster_path: "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
        release_date: "2022-08-11",
        title: "Beast",
        video: false,
        vote_average: 7.1,
        vote_count: 473,
      },
      {
        adult: false,
        backdrop_path: "/qaTzVAW1u16WFNsepjCrilBuInc.jpg",
        genre_ids: [16, 28, 12],
        id: 539681,
        original_language: "en",
        original_title: "DC League of Super-Pets",
        overview:
          "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
        popularity: 1826.104,
        poster_path: "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
        release_date: "2022-07-27",
        title: "DC League of Super-Pets",
        video: false,
        vote_average: 7.5,
        vote_count: 638,
      },
      {
        adult: false,
        backdrop_path: "/skL7c4ZhZqo1IFbMcHNrol4fvkc.jpg",
        genre_ids: [28, 80, 53],
        id: 921360,
        original_language: "en",
        original_title: "Wire Room",
        overview:
          "New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.",
        popularity: 1877.037,
        poster_path: "/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg",
        release_date: "2022-09-02",
        title: "Wire Room",
        video: false,
        vote_average: 6.9,
        vote_count: 79,
      },
      {
        adult: false,
        backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
        genre_ids: [16, 12, 35, 14],
        id: 438148,
        original_language: "en",
        original_title: "Minions: The Rise of Gru",
        overview:
          "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        popularity: 1535.662,
        poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        release_date: "2022-06-29",
        title: "Minions: The Rise of Gru",
        video: false,
        vote_average: 7.6,
        vote_count: 2044,
      },
      {
        adult: false,
        backdrop_path: "/wcC7kCICL6x6zHUlUyNp9pWoqW1.jpg",
        genre_ids: [28, 12, 14, 878],
        id: 19995,
        original_language: "en",
        original_title: "Avatar",
        overview:
          "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        popularity: 1651.679,
        poster_path: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        release_date: "2009-12-10",
        title: "Avatar",
        video: false,
        vote_average: 7.5,
        vote_count: 26145,
      },
      {
        adult: false,
        backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
        genre_ids: [16, 878, 28],
        id: 610150,
        original_language: "ja",
        original_title: "ドラゴンボール超 スーパーヒーロー",
        overview:
          "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        popularity: 1963.513,
        poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        release_date: "2022-06-11",
        title: "Dragon Ball Super: Super Hero",
        video: false,
        vote_average: 8,
        vote_count: 1733,
      },
      {
        adult: false,
        backdrop_path: "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
        genre_ids: [27, 53],
        id: 756999,
        original_language: "en",
        original_title: "The Black Phone",
        overview:
          "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
        popularity: 1301.968,
        poster_path: "/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
        release_date: "2022-06-22",
        title: "The Black Phone",
        video: false,
        vote_average: 7.9,
        vote_count: 2620,
      },
      {
        adult: false,
        backdrop_path: "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
        genre_ids: [10749, 18],
        id: 744276,
        original_language: "en",
        original_title: "After Ever Happy",
        overview:
          "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
        popularity: 1314.99,
        poster_path: "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
        release_date: "2022-08-24",
        title: "After Ever Happy",
        video: false,
        vote_average: 6.4,
        vote_count: 88,
      },
      {
        adult: false,
        backdrop_path: "/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
        genre_ids: [27, 9648, 878, 53],
        id: 762504,
        original_language: "en",
        original_title: "Nope",
        overview:
          "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
        popularity: 1007.783,
        poster_path: "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
        release_date: "2022-07-20",
        title: "Nope",
        video: false,
        vote_average: 7,
        vote_count: 1588,
      },
      {
        adult: false,
        backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        genre_ids: [28, 12, 878],
        id: 634649,
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        popularity: 1080.31,
        poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        release_date: "2021-12-15",
        title: "Spider-Man: No Way Home",
        video: false,
        vote_average: 8,
        vote_count: 15226,
      },
      {
        adult: false,
        backdrop_path: "/8wwXPG22aNMpPGuXnfm3galoxbI.jpg",
        genre_ids: [28, 12, 10751, 35],
        id: 675353,
        original_language: "en",
        original_title: "Sonic the Hedgehog 2",
        overview:
          "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        popularity: 977.002,
        poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        release_date: "2022-03-30",
        title: "Sonic the Hedgehog 2",
        video: false,
        vote_average: 7.7,
        vote_count: 3050,
      },
      {
        adult: false,
        backdrop_path: "/pdD47rPAYKVdPasoyhSAFPIFIWo.jpg",
        genre_ids: [28, 35, 53],
        id: 718930,
        original_language: "en",
        original_title: "Bullet Train",
        overview:
          "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        popularity: 1055.774,
        poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        release_date: "2022-07-03",
        title: "Bullet Train",
        video: false,
        vote_average: 7.4,
        vote_count: 893,
      },
      {
        adult: false,
        backdrop_path: "/nYla7faWqM3nLCY9arQH1DwXC84.jpg",
        genre_ids: [16, 12, 10751],
        id: 576925,
        original_language: "ru",
        original_title: "Buka. My favorite monster",
        overview:
          "A scandal in the royal family: the wayward princess Barbara escaped from the palace and went through the forest in search of a handsome prince. However, instead of the cherished meeting with her beloved, she is captured by Buka, the most dangerous robber of the kingdom. But it quickly becomes clear that the brisk princess is ready to turn Buka's life into a nightmare, just to reach her goal. So the restless Varvara begins to establish her own order in the forest.",
        popularity: 753.231,
        poster_path: "/xIbEHAqwK5N7PJJYmbwmxuvC7fL.jpg",
        release_date: "2022-01-27",
        title: "My Sweet Monster",
        video: false,
        vote_average: 6,
        vote_count: 10,
      },
      {
        adult: false,
        backdrop_path: "/qViFGWCHaSmW4gP00RGh3xjMjsP.jpg",
        genre_ids: [27, 9648],
        id: 758724,
        original_language: "en",
        original_title: "The Cellar",
        overview:
          "When Keira Woods' daughter mysteriously vanishes in the cellar of their new house in the country, she soon discovers there is an ancient and powerful entity controlling their home that she will have to face or risk losing her family's souls forever.",
        popularity: 654.588,
        poster_path: "/rtfGeS5WMXA6PtikIYUmYTSbVdg.jpg",
        release_date: "2022-03-25",
        title: "The Cellar",
        video: false,
        vote_average: 6.6,
        vote_count: 241,
      },
      {
        adult: false,
        backdrop_path: "/r26Qj2HfAv6rPXzULLpdDWrkwrT.jpg",
        genre_ids: [53],
        id: 852448,
        original_language: "en",
        original_title: "I Came By",
        overview:
          "A rebellious young graffiti artist, who targets the homes of the wealthy elite, discovers a shocking secret that leads him on a journey endangering himself and those closest to him.",
        popularity: 613.514,
        poster_path: "/856bLLUvEYu3dRDXCCoRE7oxO0V.jpg",
        release_date: "2022-08-19",
        title: "I Came By",
        video: false,
        vote_average: 6.4,
        vote_count: 298,
      },
      {
        adult: false,
        backdrop_path: "/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg",
        genre_ids: [28, 53, 80],
        id: 818397,
        original_language: "en",
        original_title: "Memory",
        overview:
          "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
        popularity: 571.062,
        poster_path: "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
        release_date: "2022-04-28",
        title: "Memory",
        video: false,
        vote_average: 7.2,
        vote_count: 811,
      },
      {
        adult: false,
        backdrop_path: "/ftGzl2GCyko61Qp161bQElN2Uzd.jpg",
        genre_ids: [28, 53],
        id: 961484,
        original_language: "en",
        original_title: "Last Seen Alive",
        overview:
          "After Will Spann's wife suddenly vanishes at a gas station, his desperate search to find her leads him down a dark path that forces him to run from authorities and take the law into his own hands.",
        popularity: 550.197,
        poster_path: "/qvqyDj34Uivokf4qIvK4bH0m0qF.jpg",
        release_date: "2022-05-19",
        title: "Last Seen Alive",
        video: false,
        vote_average: 6.6,
        vote_count: 303,
      },
      {
        adult: false,
        backdrop_path: "/fqw8nJLPRgKRyFSDC0xBsC06NGC.jpg",
        genre_ids: [28, 12, 14],
        id: 639933,
        original_language: "en",
        original_title: "The Northman",
        overview:
          "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
        popularity: 620.301,
        poster_path: "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
        release_date: "2022-04-07",
        title: "The Northman",
        video: false,
        vote_average: 7.2,
        vote_count: 2417,
      },
    ],
    total_pages: 88,
    total_results: 1749,
  };

  console.log(sample_API_call.results[0].poster_path);

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content style={{ padding: "3%" }}>
          <Row
            justify={"start"}
            align={"middle"}
            gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          >
            {/* <div className="grid-container"> */}
            {sample_API_call.results.map((movie) => {
              return (
                <Col key={movie.title} span={4}>
                  <Card
                    className="card"
                    key={movie.title}
                    // title={movie.title}
                    hoverable={true}
                    style={styles}
                    cover={
                      <Image
                        className="coverImage"
                        width={240}
                        height={300}
                        // layout="fill"
                        layout="responsive"
                        alt="poster"
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                      />
                    }
                  >
                    <Meta style={{ textAlign: "center" }} title={movie.title} />
                  </Card>
                </Col>
              );
            })}
            {/* </div> */}
          </Row>
        </Content>
      </Layout>
    </>
  );
}
