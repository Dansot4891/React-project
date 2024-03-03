import React, { useState, useCallback } from "react";
import Landmark from "./Landmark";
import LandmarkDetails from "./LandmarkDetails";
import { motion, AnimatePresence } from "framer-motion";

const Profiles = [
    {
        id: 1,
        title: '경복궁',
        intro: '서울에 위치한 조선 왕조의 궁궐',
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MjJfMTQ0%2FMDAxNjk1MzUxMjUyNzM4.9_eAzORM1tEOwzIRlEV8n4cXyre3Y6Wg888KUQOcfSUg.cv5ID6_FkRxDnFkV5HssacUXEHDuxUsBd273F_HePeIg.JPEG.dreameblog%2FKakaoTalk_20230922_095830824_23_%25281%2529.jpg&type=sc960_832",

    },
    {
        id: 2,
        title: '북한산',
        intro: '서울을 대표하는 아름다운 산',
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTNfMjcz%2FMDAxNjk0NTg1NTI2NTQ5.nnedqgF6w7XYV5Zf4Shfn_U9ZMNVscwuu17_ddCrXOkg.6Na_UIt1RHmEeQPfOoike_Thm8g8_OnolGzNCLGYu-cg.JPEG.newtop21c%2F20230909%25A3%25DF153904.jpg&type=sc960_832",
    },
    {
        id: 2,
        title: '남산 서울타워',
        intro: '남산의 정상에 위치한 전망타워',
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDRfODEg%2FMDAxNjk2NDA1MzQyNzA1.AyZym_rvnREwl4Yo5bXSAoYb6QXAK74dO_XhEYE8Jbsg.aGTo18ZdCbkbXIypenLn8bXC6iziFDY-Lq5IV4eA2MMg.JPEG.jso5504%2F20231002_185033.jpg&type=sc960_832",
    },
    {
        id: 2,
        title: '에버랜드',
        intro: '대한민국 최대의 테마파크',
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTRfMTg5%2FMDAxNjk3MjgyNTAyODg4.uTeVFBn3gG_0-KEZJsejlfrRuI2PassVSGPcC-wvrVAg._QtM2vqYcmdtLCD2v7NyDjHtAzrs7aj0tU44dDxShicg.JPEG.22babu%2FP20230928_171449314_FF3E7B73-2FD1-4F19-9251-F943A59D8270.JPG&type=sc960_832",
    },
    {
        id: 2,
        title: '동대문 디자인 플라자',
        intro: '서울 동대문에 위치한 현대적 건물',
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20161004_243%2Fjoo1609_1475575395474iAFlc_JPEG%2F20160908_201606_HDR.jpg&type=sc960_832",
    },
]

function Landmarks(props) {
    const [isClicked, setIsClicked] = useState(false);

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
    }

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: isClicked ? "#fff" : "transparent",
        color: isClicked ? `black` : "#fff",
        border: `2px solid 'black'`,
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        fontSize: "16px",
        fontWeight: "bold",
        outline: "none",

    };

    return (
        <div style={{
            backgroundImage: 'url("https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F001%2F2023%2F03%2F13%2FPGT20230201064201009_P4_20230313155618284.jpg&type=sc960_832")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '100vh',
            overflow: 'hidden',
            marginTop: '50px'
        }}
        >
            <div style={{ display: "flex" }}>
                {Profiles.map((li) => {
                    return (
                        <Landmark key={li.id} title={li.title} backgroundImage={li.src} color={li.color}>
                            <p>{li.title}</p>
                            <p>{li.intro}</p>
                        </Landmark>
                    );
                })}
            </div>
            <div style={buttonContainerStyle}>
                <button
                    className={`button ${isClicked ? 'clicked' : ''}`}
                    style={buttonStyle}
                    onClick={() => setIsClicked(!isClicked)}
                >더 알아보기</button>
            </div>
            <div>
                <AnimatePresence>
                    {isClicked && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <LandmarkDetails />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Landmarks;
