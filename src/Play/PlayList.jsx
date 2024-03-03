import React, { useState } from "react";
import Play from "./Play";
import { motion, AnimatePresence } from "framer-motion";

const Lists = [
    {
        id:1,
        title:'윷놀이',
        src:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTVfNyAg%2FMDAxNjkyMDk0NTc5ODE0.DgFzkb18oLPYwtbFeWEFkmzXNJJCbBE3i-PVWCvqPA4g.2uA5wOiOy3dV88A0VI0OH8OWb2Sql7J0DApGnQc-NU8g.JPEG.gomtaeng09%2F%25BF%25EC%25B8%25AE%25B3%25AA%25B6%25F3_%25C0%25FC%25C5%25EB%25B3%25EE%25C0%25CC_%2528%25C0%25B7%25B3%25EE%25C0%25CC_%25B1%25D4%25C4%25A2%2529.jpg&type=sc960_832',
        src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MzBfMzcg%2FMDAxNjk2MDUyNzY2NDIw.gqZoLA39qI3qSXZq3uIxneM5VtAoxsq824PsqkAKT90g.wNudsXULrCb-RDGK24I_fz_XG1hAYXZD0jsyCjFJtpIg.JPEG.ragi1018%2F%25C0%25B7%25B3%25EE%25C0%25CC%25C6%25C7jpg.jpg&type=sc960_832',
        description:'대한민국의 전통 놀이 중 하나. 보통 정월 초하루부터 대보름까지 즐긴다. 다른 민속놀이와 달리 현대 보드게임과 유사한 요소가 많아 여러명이 편을 짜 머리를 맞대고 협력하며 화합을 도모하기 좋고, 플레이타임이 적당한 등 요소의 장점으로 가장 많이 애용되는 놀이이기도 하다',
        rule:`총 4개의 윷을 손에 쥐고 집어던져서 바닥에 떨어졌을 때 윷의 방향에 따라서 이동하는 수치가 달라진다. 임의적으로 평평한 면을 '앞면'이라고 부른다. 뒷면은 평평한 면이 완전히 바닥에 닿아야 뒷면으로 간주한다. 도, 개, 걸, 윷, 모의 명칭은 동물에서 따온 것인데 도는 돼지, 개는 개, 걸은 양, 윷은 소, 모는 말이라고 한다. 윷놀이에서는 지역마다 말 3~5개, 보통 4개를 이용해 논다. 즉, 3~5개의 말이 한 판 위에 올라올 수 있는데, 어떤 말을 움직일 것인가/움직이지 않고 말판에 말을 올려놓을 것인가는 자유다. 이 부분이 윷놀이라는 게임에 상당한 전략성을 부여하기 때문에, 상황에 따라 이러한 판단을 잘하는 사람을 실력자로 보는 것이 보통이다. 또 다른 실력판단 요소는 특정한 칸수가 필요할때 그거에 맞춰서 잘 던지는 정도인데 이거는 윷이나 윷판에 익숙한 사람이 유리하므로 홈그라운드인 쪽이 유리하다.`,
        show:false
    },
    {
        id:2,
        title:'투호',
        src:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MzFfNiAg%2FMDAxNjIyNDM3MTM2MDA0.TWjWRHDW8yQ013beS--5ZJBltIMi4dpZI7XEghcHWGUg.S_EJdGgvKDIV55EoWVzt9HBm2G5JsNDo1i6pSCmYOvIg.JPEG.shrinkles%2F2021_05_%25C0%25FC%25C5%25EB%25B3%25EE%25C0%25CC%2528%25BB%25F6%2529_01_007.jpg&type=sc960_832',
        src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_4305556%2F43055561111.20231006214124.jpg&type=sc960_832',
        description:'투호는 마당이나 마루에 항아리를 세운 다음 창을 던져 누가 항아리 안에 더 많이 넣는지 겨루는 전통놀이다. ',
        rule:`투호에 쓰이는 병에는 구멍이 3개가 있는데, 가운데 병 입의 지름이 3치, 병 옆의 구멍을 귀라 하는데, 이 귀 입구 지름은 1치며 높이는 1자이다.
        병 속에는 팥으로 채우고, 병은 던지는 사람의 앉은 자리에서 화살 두개 반 만큼 거리에 놓고 살은 12개를 사용하며 그 길이는 2자 4치이다. 실수하지않고 병에 던져 꽂히는 걸 상(上)으로 치는데 먼저 120을 채우는 쪽이 이긴다고 전해지지만, 문제는 당시 도량형이나, 점수 계산 방식, 놀이 기구나 놀이 방법에 대해서는 자세히 전달되지는 않는다고 한다.
        현대 전래되는 방식은 병의 종류, 화살의 종류가 다양해지고 노는 방법, 점수 계산방식도 다양하지만 기본적으로 화살을 구멍이 세 개인 병에 넣는다는 큰 틀은 예나 지금이나 동일하다.`,
        show:false
    },
    {
        id:3,
        title:'씨름',
        src:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjlfMjQ5%2FMDAxNjcyMjc0MjI5MzE4.DakdgQ5wNIwb0cd1dlrD49b1vydg7JBiDzutx5KgiWYg.4ra34prn8rBjk2YcSNogyH4T604hlweqB3dco9vKWPUg.JPEG.ssclub2021%2FIMG_0281.MOV_20221103_160745.251.jpg&type=sc960_832',
        src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMjZfNTgg%2FMDAxNjk4Mjg4MTk1MDA4.ctqcsp8JEuwa6P0T8TavAGc5nks5BwkwaJTZKh8scRcg.ji4wtUig2C3RqJ9ahyWzzpTexZxpC3_1WtVDkbYXBkIg.JPEG.bdk0501%2F%25C5%25A9%25B1%25E2%25BA%25AF%25C8%25AF_20160407_%25B1%25E8%25C8%25AB%25B5%25B5%25BE%25BE%25B8%25A7.jpg&type=sc960_832',
        description:`한반도에서 고대부터 전해졌다고 알려진 일종의 그래플링 스포츠이자 민속놀이. 어원은 중세 한국어 어휘 힐훔으로, '논쟁하다', '다투다'의 뜻을 지닌 어휘였다. 이 어휘는 방언에 아직도 "시루다, 씨루다' 의 형태로 남아있다.`,
        rule:'씨름은 모래판이나 매트 위에서 샅바를허리춤에 둘러맨 두 선수가 상대편의 샅바를 잡고 손 기술, 다리 기술이나 허리 기술 등으로 상대를 넘어뜨리는 스포츠다. 발바닥을 제외한 상대의 신체 어느 부분이라도 먼저 땅에 닿으면 승부가 나기 때문에 무척이나 단순한 경기이긴 하지만 오히려 단 한 순간의 실수나 체중 쏠림, 자세 무너짐이 곧 실점으로 직결되는 단순함 때문에 매우 짧은 순간에도 수많은 심리전과 복잡한 기술들이 오고 가는 스포츠이다.',
        show:false
    },
    {
        id:4,
        title:'제기차기',
        src:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160204_198%2Fshrinkles_1454551204712Qti1p_JPEG%2F%25C1%25A6%25B1%25E2_outline.jpg&type=sc960_832',
        src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_1058656%2F10586567766.20161104023151.jpg&type=sc960_832',
        description:`제기를 차는 놀이. 제기는 동전을 헝겊으로 감싸고 실로 묶은 다음 늘어진 천 부분을 국수가락처럼 여러 갈래로 늘여 만드는 장난감이다. 요즘에는 안에 금속 원판이 들어있는 플라스틱 케이스에 유광 비닐끈이 주렁주렁 달려있는 제품을 주로 사용한다. 제기는 지방에 따라 다르게 불리기도 하는데, 평안도에서는 '테기', '체기', 전라도에서는 '재기', 제주도에서는 '쪽기' 등으로 불린다.`,
        rule:'놀이의 규칙 중 가장 널리 알려진 것은 제기를 떨어뜨리지 않은 채로 최대한 여러 번 차올리는 것이다. 물론, 이 외에도 제기를 가지고 할 수 있는 모든 놀이를 제기차기라고 한다. 그런데 생각보다 제기를 차는 것이 어려워서 운동 신경이 좋지 않은 사람은 두 번 차기도 쉽지 않다',
        show:false
    }
]

function PlayList(props){
    const [Show, setShow] = useState(Lists);
    
    const handleShow = (index) => {
        const newLists = [...Lists];
        newLists[index].show = !newLists[index].show;
        setShow(newLists);
    };

    return(
        <div className="Ppage">
            <div className="First">
                <p>한국의 전통 민속 놀이에 대해서 알아봅시다!</p>
                <p>궁금하신 놀이를 클릭하여 확인해주세요.</p>
            </div>
            <div style={{padding:"12px"}}>
                {Lists.map((play, index) => {
                    return(
                        <Play key={play.id} title={play.title}>
                            <div style={{display:"flex"}}>
                            <div style={{display:"flex", padding:"10px"}}><button className="Pbutton" onClick={() => handleShow(index)}>{play.title}</button></div>
                            <AnimatePresence>
                            {play.show && 
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.5 }}>
                                <div className="discriptions">
                                    <div style={{padding:"12px"}}>
                                        <img src={play.src} className="Pimage"/><img src={play.src2} className="Pimage"/>
                                    </div>
                                    <p className="PP">{play.title}</p><p className="PP2">{play.description}</p><p className="PP">규칙</p><p className="PP2">{play.rule}</p>
                                </div>
                                </motion.div>}
                            </AnimatePresence>
                            </div>
                        </Play>
                    )
                })}
            </div>
            
        </div>
        
    )
}
  
export default PlayList;
