import React from "react";
import Movie from "./Movie";


const Movies = [
  {
    id: 1,
    title:'신세계',
    intro: `"너, 나하고 일 하나 같이 하자" 경찰청 수사 기획과 강과장(최민식)은 국내 최대 범죄 조직인 '골드문'이 기업형 조직으로 그 세력이 점점 확장되자 신입경찰 이자성(이정재)에게 잠입 수사를 명한다. 그리고 8년, 자성은 골드문의 2인자이자 그룹 실세인 정청(황정민)의 오른팔이 되기에 이른다. "우리 브라더는 그냥 딱, 이 형님만 믿으면 돼야!" 골드문 회장이 갑자기 사망하자, 강과장(최민식)은 후계자 결정에 직접 개입하는 '신세계' 작전을 설계한다. 피도 눈물도 없는 후계자 전쟁의 한 가운데, 정청(황정민)은 8년 전, 고향 여수에서 처음 만나 지금까지 친형제처럼 모든 순간을 함께 해 온 자성(이정재)에게 더욱 강한 신뢰를 보낸다. "약속 했잖습니까... 이번엔 진짜 끝이라고" 한편, 작전의 성공만 생각하는 강과장(최민식)은 계속해서 자성(이정재)의 목을 조여만 간다. 시시각각 신분이 노출될 위기에 처한 자성(이정재)은 언제 자신을 배신할 지 모르는 경찰과, 형제의 의리로 대하는 정청(황정민) 사이에서 갈등하게 되는데…`,
    backgroundImage: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130326_40%2Fmildcocacola_1364283104051WF1xw_JPEG%2F%25BD%25C5%25BC%25BC%25B0%25E8%25BF%25B5%25C8%25AD.jpg&type=sc960_832'
  },
  {
    id: 2,
    title:'7번방의 선물',
    intro: '최악의 흉악범들이 모인 교도소 7번방에 이상한 놈이 들어왔다! 그는 바로 6살 지능의 딸바보 용구! 평생 죄만 짓고 살아온 7번방 패밀리들에게 떨어진 미션은 바로 용구 딸 예승이를 외부인 절대 출입금지인 교도소에 반.입.하.는.것! 2013년 새해, 웃음과 감동 가득한 사상초유의 합동작전이 시작된다!',
    backgroundImage: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjRfMTQ1%2FMDAxNjkyODQzMDA0NTgz.7IO3pKd67U8HElSBG7kXI6ZyMeEdt53NkDp14J0bkYog.d0R7ai9T-asU-lN4quIwBDT0EeiV37XgAdHP67dHjkQg.JPEG.oslo59916%2F7%25B9%25F8%25B9%25E6%25C0%25C7_%25BC%25B1%25B9%25B0.jpg&type=sc960_832'
  },
  {
    id: 3,
    title:'명량',
    intro: `1597년 임진왜란 6년, 오랜 전쟁으로 인해 혼란이 극에 달한 조선. 무서운 속도로 한양으로 북상하는 왜군에 의해 국가존망의 위기에 처하자 누명을 쓰고 파면 당했던 이순신 장군(최민식)이 삼도수군통제사로 재임명된다. 하지만 그에게 남은 건 전의를 상실한 병사와 두려움에 가득 찬 백성, 그리고 12척의 배 뿐. 마지막 희망이었던 거북선마저 불타고 잔혹한 성격과 뛰어난 지략을 지닌 용병 구루지마(류승룡)가 왜군 수장으로 나서자 조선은 더욱 술렁인다. 330척에 달하는 왜군의 배가 속속 집결하고 압도적인 수의 열세에 모두가 패배를 직감하는 순간, 이순신 장군은 단 12척의 배를 이끌고 명량 바다를 향해 나서는데…! 12척의 조선 vs 330척의 왜군 역사를 바꾼 위대한 전쟁이 시작된다!`,
    backgroundImage: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MzBfMTAw%2FMDAxNjk2MDY0NzM3NzE5.CPTT6Z7AzEIjmylud1GkTWyKvQPGWy55GifHMYzJSBcg.w94rnDdgCTtxDgIsOktAlEAK_JFHoVxxuXQAAtuE6skg.JPEG.sea11222%2FIMG_2006.jpg&type=sc960_832'
  },
  {
    id: 4,
    title:'극한직업',
    intro: '불철주야 달리고 구르지만 실적은 바닥, 급기야 해체 위기를 맞는 마약반! 더 이상 물러설 곳이 없는 팀의 맏형 고반장은 국제 범죄조직의 국내 마약 밀반입 정황을 포착하고 장형사, 마형사, 영호, 재훈까지 4명의 팀원들과 함께 잠복 수사에 나선다. 마약반은 24시간 감시를 위해 범죄조직의 아지트 앞 치킨집을 인수해 위장 창업을 하게 되고, 뜻밖의 절대미각을 지닌 마형사의 숨은 재능으로 치킨집은 일약 맛집으로 입소문이 나기 시작한다. 수사는 뒷전, 치킨장사로 눈코 뜰 새 없이 바빠진 마약반에게 어느 날 절호의 기회가 찾아오는데… 범인을 잡을 것인가, 닭을 잡을 것인가!',
    backgroundImage: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMDlfMTEy%2FMDAxNTUyMTI4MDAxMDk4.1biAfUgdRMrNtVGyFMeX9txMC9G2A1PbRFEm73p7n-sg.gctDjYbmKR8dUZF9jp-quO9rUrvtIj2FJlCiFtFsaLcg.JPEG.bbaa2010%2FScreenshot_2019-03-09_at_19.16.44.jpg&type=sc960_832'
  },
  {
    id: 5,
    title:'기생충',
    intro: `전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…`,
    backgroundImage: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjRfMTg5%2FMDAxNjkyODg1NTAxMjc2.WRgLar0mMf9Spm6v9-b1Ysr-jf9C7Mz6CiLoGvNjlzAg.DKs8PBGPlV_bO0lDX4cuMWRpcYWtTqlPznoNdyH6Bigg.JPEG.33jansory%2Fee5d8f9e%25A3%25ADfc78%25A3%25AD410a%25A3%25AD9299%25A3%25AD080547ead8ac.jpeg&type=sc960_832'
  },
];

function MovieList(props) {
  return (
    <div style={{ padding:"16px", marginTop:"30px", display: "flex" }}>
      {Movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} backgroundImage={movie.backgroundImage} intro={movie.intro}>
        </Movie>
      ))}
    </div>
  );
}

export default MovieList;