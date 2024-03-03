import React from "react";
import LandmarkDetail from "./LandmarkDetail";

const Details = [
    {
        id: 1,
        title: '경복궁',
        address:'서울 종로구 사직로 161 경복궁',
        content: '이성계가 왕이 되어 곧 도읍을 옮기기로 하고, 즉위 3년째인 1394년에 신도궁궐조성도감(新都宮闕造成都監)을 열어 궁의 창건을 시작하였으며 이듬해에 완성',
    },
    {
        id: 2,
        title: '북한산',
        address:'경기 고양시 덕양구 대서문길 375',
        content: '도봉산과 함께 북에서 남으로 뻗어 내린 북한산은 태산준령이 아니면서도 깎아지른 듯한 웅장하고 거대한 암봉들이 산지 곳곳에 넘쳐나며, 암봉들 사이로 흘러내리는 계곡의 아름다움과 어우러져 감탄사가 절로 나오게 하는 산지',
    },
    {
        id: 3,
        title: '남산 서울타워',
        address:'서울 용산구 남산공원길 105',
        content: '서울의 랜드마크이자 대표적인 관광 명소로, 서울특별시 용산구 남산공원길에 있는 N서울타워와 서울타워플라자를 통칭한다. 해발고도 479.7m의 전망타워와 문화·상업 복합시설',
    },
    {
        id: 4,
        title: '에버랜드',
        address:'경기 용인시 처인구 포곡읍 에버랜드로 199',
        content: '계절별 다채롭게 펼쳐지는 축제와 어트랙션, 동물, 식물 등 다양한 시설로 즐거운 휴식과 기쁨을 선사하는 테마파크',
    },
    {
        id: 5,
        title: '동대문 디자인 플라자',
        address:'서울 중구 을지로 281',
        content: '꿈꾸고(Dream), 만들고(Design), 누린다(Play)는 뜻을 가지고 있는 DDP(동대문 디자인 플라자)는 서울특별시 동대문에 위치한 복합문화공간이다. ',
    },
]

function LandmarkDetails(props) {

    return (
        <div>
            <div style={{ display: "flex"}}>
            {Details.map((li) => {
                return (
                    <LandmarkDetail key={li.id} title={li.title}>
                        <p>{li.title}</p>
                        <p>주소 : {li.address}</p>
                        <p>{li.content}</p>
                    </LandmarkDetail>
                );
            })}
        </div>
        </div>
    );
}

export default LandmarkDetails;