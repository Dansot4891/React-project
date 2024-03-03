import React from "react";
import Song from "./Song";

const Songs = [
  {
    id: 1,
    title:'Dynamite',
    singer:'방탄소년단',
    mp3:require('./mp3/Dynamite.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTdfMjM0%2FMDAxNjEwODQ4MzcyMzAy.Vx_DZHpPBpatU5_ljv1dNA3rKwkthkNLKlbgc37GN_gg.ds-4bgJnjKa1_i93L3x9XqbyCyqmm1699xPD8ZxDeWgg.JPEG.akqjqtk1230%2FIMG_4739.jpg&type=sc960_832'
  },
  {
    id: 2,
    title:'Butter',
    singer:'방탄소년단',
    mp3:require('./mp3/Butter.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjZfMjQ4%2FMDAxNjIyMDM0NTQxNTU4.pR2r-N2Rz7wWjV155r1gbCVJCUeF4e2dZINRaf7W83wg.VRXZ4WjChWttQ712hYlUxEa0DAiqmqepVTwVfvA4FQ4g.JPEG.herakim%2Foutput_277846265.jpg&type=sc960_832'
  },
  {
    id: 3,
    title:'붉은노을',
    singer:'빅뱅',
    mp3:require('./mp3/Sunset.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDVfOTIg%2FMDAxNjUxNzYyMDQyODMx.gcM8WRs074Gt6nOZoO5qZ5x45MeYLoY82yhRYtjqj2gg.6P1dQiQO0jXjlzhBVIbF_LOcnvX9VQC2rNr1PycRmNcg.JPEG.jod001%2F%25BA%25F2%25B9%25F0___%25BA%25D3%25C0%25BA_%25B3%25EB%25C0%25BB_%25281%25C0%25FD_%25BE%25D5_%252B_%25C1%25DF%25B0%25A3%25BB%25E8%25C1%25A6_%252B_2%25C0%25FD_%25C8%25C4%25B7%25C5_%25BF%25AC%25B0%25E1_%25C6%25ED%25C1%25FD%2529_-1%25C5%25B0.jpg&type=sc960_832'
  },
  {
    id: 4,
    title:'하루하루',
    singer:'빅뱅',
    mp3:require('./mp3/HaruHaru.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F108%2F2008%2F09%2F04%2F2008090321193605974_3.jpg&type=sc960_832'
  },
  {
    id: 5,
    title:'첫눈처럼 너에게 가겠다',
    singer:'에일리',
    mp3:require('./mp3/Snow.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjZfMTA3%2FMDAxNjQwNDQ1MjI1NjU1.b-aulJA7-2cGkssc9gc_w-WomThcJdE_jYRpU2qs-20g.EDpUm8CBr7oJrZZf4yLtiz__WmzXjNigPhZbZtHg6Swg.JPEG.edia73%2F%25B5%25B5%25B1%25FA%25BA%25F1.jpg&type=sc960_832'
  },
  {
    id: 6,
    title:'너의 모든 순간',
    singer:'성시경',
    mp3:require('./mp3/Moment.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDdfMjc1%2FMDAxNjIzMDQ5MDMzNTA0.LuzbB6m5mz2ctsrFPw9uNv72pknCABtolFFKzOYLmyog.IKVJc9nD-3TFD9XisbwXgXUTxgb8Gn0ORk8D18cgXE0g.JPEG.alsgnl7%2FIMG_8873.JPG&type=sc960_832'
  },
  {
    id: 7,
    title:'벚꽃엔딩',
    singer:'버스커 버스커',
    mp3:require('./mp3/Spring.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTdfMTEy%2FMDAxNjUwMTgwMzgzNDEw.H_a3BzaoeOQNdEe6sO4BabBbjI4C0q1n5kU3DZN0vfgg.qwRy-n7hkbP5EjB8BSz2ZbaNT6s88o7ZdLcBhsXhLScg.PNG.rara0105%2FScreenshot_20220417-162549_%25281%2529.png&type=sc960_832'
  },
  {
    id: 8,
    title:'사랑했나봐',
    singer:'윤도현',
    mp3:require('./mp3/MaybeLove.mp3'),
    backgroundImage:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2FAH13E2NyVbtr76e1wpzaAJIMzNxYh0AkRA41xj2NqoJxS1ja7hWIsTXLcwoZ-l69_RwCTzr9CIMCV6RTWco0_A.webp&type=sc960_832'
  },
  {
    id: 9,
    title:'아무노래',
    singer:'ZICO',
    mp3:require('./mp3/RandomSong.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMjFfMTk4%2FMDAxNTc5NTY2ODM0NjQy.EBHHT_fKleozRggdci1AHvM3BEcQY1ci6JRPhoXhAaIg.CobvxQBPUPSH1FyHXacsQwD9NDq8X42laJOze7A83RUg.JPEG.asdop0%2F1579566832896.jpg&type=sc960_832'
  },
  {
    id: 10,
    title:'강남스타일',
    singer:'PSY',
    mp3:require('./mp3/GangnamStyle.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130404_17%2Fis589_1365068801629PFkDk_JPEG%2F000.jpg&type=sc960_832'
  },
  {
    id: 11,
    title:'미리 메리크리스마스',
    singer:'아이유',
    mp3:require('./mp3/Christmas.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20101209_216%2Fbrandhot100_1291873407705CmeL0_jpg%2F%25BE%25C6%25C0%25CC%25C0%25AF_%25C1%25C1%25C0%25BA%25B3%25AF1_brandhot100.jpg&type=sc960_832'
  },
  {
    id: 12,
    title:'Next Level',
    singer:'aespa(에스파)',
    mp3:require('./mp3/NextLevel.mp3'),
    backgroundImage:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDRfMjMw%2FMDAxNjIyNzk2MDAxMDk2.nE-lqMhp_ogv1g3IGGd3hQHi3pj_pvo49zT76leNVsAg.sdz_9MSebp5TpLebkkfG6_jjCUkUUJs4fmwmIGGYqHIg.JPEG.minimi2634%2Fcommon-9.jpeg&type=sc960_832'
  },
];

function SongList(props) {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  return (
    <div style={{ padding: "16px", marginTop: "30px" }}>
      <div style={containerStyle}>
        {Songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            singer={song.singer}
            mp3={song.mp3}
            backgroundImage={song.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
}

export default SongList;