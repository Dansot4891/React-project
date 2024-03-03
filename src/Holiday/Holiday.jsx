import React, { useState } from 'react';
import HolidayDetail from './HolidayDetail';
import './Holiday.css';

const Holiday = () => {
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const holidays = [
    {
      name: '단오',
      src1:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MThfMTkx%2FMDAxNTI5MjgyMDM5NDI1.1LmtBwdfKo06-HFAT_dTxqIyG43-MUoClku2996ZL5Qg.4hN8ILpWE-Y9jWPcux5IAWjCIGYbDQVr9So7TG1eGhwg.JPEG.cityansan%2F07_%25B4%25DC%25BF%25C0%25C0%25BD%25BD%25C4_%25BE%25DE%25B5%25CE%25C8%25AD%25C3%25A4.jpg&type=sc960_832',
      src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160611_278%2Fysh20607_1465580479126g8DbE_JPEG%2FIMG_0598.JPG&type=sc960_832',
      src3:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MjVfMTIx%2FMDAxNDk1NzAzOTAwNDk2.Eld6Jdiu3QVFfBPw_K-EAGEOTfpc-mNLFoxQ7WNjnGYg.WXRngNX6QOuk4K01dIMMG_GWLnTEwxyW6JPM3rZzz-cg.JPEG.sunsun1890%2FP1240215.JPG&type=sc960_832',
      description: `단오(端午)는 1년 중에서 양기(陽氣)가 가장 왕성한 날이라 하여 한국, 일본, 중국에서 음력 5월 5일에 지내는 명절이다. 한국에서는 3대 명절중 하나로 분류하기도 하며 다른 말로 '술의 날' 또는 순우리말로 '수릿날' 이라고도 한다. 시기적으로 더운 여름을 맞기 전의 초하(初夏)의 계절이며, 모내기를 끝내고 풍년을 기원하는 기풍제이기도 하다. 설날, 한식, 추석과 더불어 한국의 4대 명절로 분류되기도 한 주요 명절이었으나 현재는 공휴일에서 제외되어 명절로서의 의미는 많이 퇴색었다.`,
      culture:`단오에 여자들은 특별히 치장을 하였는데 이를 단오장(端午粧)이라 한다. 단오장은 창포를 넣어 삶은 물로 머리를 감는 것에서 시작한다. 창포의 특이한 향기가 나쁜 귀신을 쫓으며 창포물로 머리를 감으면 머리에 윤기가 나고 머리카락이 빠지지 않는다고 믿었다. 단오 때 행해지는 대표적인 민속놀이로는 그네뛰기와 씨름이 있다. 우리나라에서 자연적으로 생겨난 순수 전통 놀이인 씨름은 단오뿐만 아니라 여러 명절에 행해진다. 그 중 단오씨름이 으뜸인 이유는 일 년 중에서 가장 양기(陽氣)가 왕성한 날에 행해지기 때문이다. 남자들이 씨름을 했다면 여자들은 그네뛰기를 했다.`
    },
    {
      name: '추석',
      src1:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MThfMzcg%2FMDAxNjk1MDA0MzY1Mjc1._8AQd6cjgpf0_mI0RD_hT3KPBNp_tYR4Gk5B1Pm2jfIg.V1tIjHKBu1-SWQCJ2wMoBL6-n_OZRTqD-fF-d7zq3EAg.PNG.bodyds1%2Fimage.png&type=sc960_832',
      src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTlfMzcg%2FMDAxNjk1MTE1MTkzNjU0.KlA3vAzu1YphS-notyTuMVOG9_-lAjxOe5O8GC1Yvqkg.8UxzBTxxakjLZJYjQEzGoMN0QEOmj45lRqhYg20xjbUg.JPEG.nanum_in%2FCK_tc03240000103.jpg&type=sc960_832',
      src3:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160917_172%2Fjungdam0979_1474089980925Pu4MX_JPEG%2Fimage_6610846821474089815179.jpg&type=sc960_832',
      description: '추석(秋夕, Chuseok) 또는 한가위(Hangawi)는 음력 8월 15일에 치르는 행사로 설날과 더불어 한국의 주요 연휴이자 민족 최대의 명절이다. 추석은 농경사회였던 예로부터 지금까지 한국인에게 가장 중요한 연중 최대 명절이다. 가배일(嘉俳日), 한가위, 팔월 대보름 등으로도 부른다. 가을 추수를 끝내기 전에(조선시대 추수는 음력 9월) 덜 익은 쌀로 만든 별미 송편과 햇과일을 진설하고 조상들께 감사의 마음으로 차례를 지냈다. 추석에는 일가친척이 고향에 모여 함께 차례를 지내고 성묘를 하는 전통이 있다.  ',
      culture:'추석에는 한복을 입고 햅쌀로 빚은 송편과 여러 가지 햇과일·토란국 등 음식들을 장만하여 추수를 감사하는 차례를 지낸다. 또한 맛있는 음식을 이웃과 다정하게 나누어 먹으며 즐거운 하루를 보낸다. 아무리 가난하고 어렵게 사는 사람도 함께 음식을 나누어 먹으며 즐겁게 보냈으므로 "1년 열두 달 365일 더도 말고 덜도 말고 한가위만 같아라"라는 말도 생겨났다. 온갖 곡식이 무르익는 결실의 계절로서, 가장 밝은 달밤이 들어 있으며, 조상의 은혜에 감사하는 뜻으로 성묘를 드린다. 추석 때는 여러 가지 행사가 펼쳐지며 놀이가 벌어진다. 소싸움·길쌈·강강술래·달맞이 등을 한다. 농악을 즐기는가 하면 마을 주민들끼리 편을 가르거나 다른 마을과 줄다리기를 한다. 잔디밭이나 모래밭에서는 씨름판이 벌어지는데, 이긴 사람은 장사(壯士)라 하여 송아지·쌀·광목 등을 준다. 전라남도 서해안 지방에서는 추석날 달이 뜰 무렵 부녀자들이 공터에 모여 강강술래를 하였으며, 닭싸움·소싸움도 즐겼다고 한다. 추석은 추수기를 맞이하여 풍년을 축하하고, 조상의 은덕을 기리며 제사를 지내고, 이웃과 더불어 따뜻한 마음을 나누는 한국 최대의 명절이다'
    },
    {
      name: '설날',
      src1:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTJfMjE0%2FMDAxNjEzMTM4MTI3NzIz.ezwHqIqFbjE3QVx0y3sO8GdcXmFFzJ46xtD91dxcyFIg.nFWLYOV6WMxdVKzfo5hvQbgWinGoLlnwZ51n0N50-Z0g.JPEG.haesoo7666%2FIMG_6711.jpg&type=sc960_832',
      src2:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDJfODgg%2FMDAxNjEyMjI2NzY4Njc5.YqC2Kmvx8QZTNkkPlcMdBoZVSNw9qo1j5dGtCWB-vDAg.b0zyZsXMsxtsvvFA6bOGuInHD3HiR3d-Nq94WS9bMhkg.JPEG.drhongsyent%2F%25BC%25B3%25B3%25AF%25BB%25F3%25C2%25F7%25B8%25B2_%25BC%25B3%25C0%25BD%25BD%25C4%25C1%25BE%25B7%25F9_%25281%2529.jpg&type=sc960_832',
      src3:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160203_275%2Fk2105356_14544833549858AyVD_JPEG%2F47_shop1_926834.jpg&type=sc960_832',
      description: '설날은 음력 새해의 첫날(음력 1월 1일)을 기념하는 명절이다. 현대 사회에서 전 세계는 그레고리력(양력)을 표준 달력으로 쓰기 때문에 공식적인 새해의 첫날은 양력 1월 1일이다. 따라서 전 세계 대부분의 국가들은 양력 1월 1일을 새해 첫날이자 설날로 기념한다. 동아시아의 일부 국가들은 전통적으로 정월 초하루를 설날(Asian Lunar New Year)로 삼았다. 한국에서 설날은 설, 원일 (元日), 원단(元旦), 세수(歲首), 연수(年首), 단월(端月)이라고도 하며, 조심하고 근신하는 날이라 하여 신일(愼日)이라고도 일컫는다. ',
      culture:'설은 복잡다사한 생활로 가득찼던 한해를 보내고 새로운 희망을 안고 맞는 새해 첫날 명절인 만큼 특별히 더 잘 준비하였으며 당일에는 조상들과 웃어른들에게 예의를 표시하였고 흥미있는 다양한 놀이로 즐기었다. 설맞이행사는 새해 정월 초하룻날 새벽부터 진행되었다. 지난날 우리 나라에서 진행한 설맞이행사로는 차례와 세배, 설음식대접, 민속놀이 등이 있었다. 설날새벽에 먼저 돌아간 조상들에게 드리는 설인사와 같은 것으로서 음식을 차려놓고 차례(제사)를 지내었다. 차례는 윗사람을 존경하던 풍습의 연장으로서 집안의 ‘번영’과 자손의 ‘흥’이 조상을 어떻게 위하는가에 따라 좌우된다고 생각한 조상숭배관념에서 나온 행사였다. 동시에 차례는 돌아간 조상들도 잊지 않고 새해를 맞으면서 세배 드리는 형식의 제사였다. 차례를 지내는 제상에는 몇가지 음식과 함께 반드시 떡국을 올리었다. 그러므로 예로부터 설날차례를 ‘떡국차례’라고도 하였다. 설날 이른 아침에는 웃어른들에게 세배를 하였다. 세배풍습은 우리 주민이 윗사람을 존경하고 예의를 귀중히 여겨온 데서 생겨난 풍습이다. 그러므로 설날이 되면 우선 집안의 윗사람 순서로 차례차례 큰절로 세배를 드렸으며, 다음에는 마을안의 웃어른들을 찾아다니며 세배를 하였다. 가까운 친척집의 윗사람들, 마을의 나이 많은 어른들, 훈장(선생)들에게 의례히 세배를 드리었다.'
    },
  ];

  return (
    <div className='holiday'>
        <div style={{ marginTop: "34px", padding: "32px" }} className="holidays-container">
      <h1>한국의 대표 3대 명절</h1>
      <ul className="holiday-list">
        {holidays.map((holiday, index) => (
          <li
            key={index}
            onClick={() => setSelectedHoliday(holiday)}
            className={selectedHoliday === holiday ? 'selected' : ''}
          >
            <p className='Hname'>{holiday.name}</p>
          </li>
        ))}
      </ul>
      
      {selectedHoliday && <HolidayDetail holiday={selectedHoliday} />}
      
    </div>
    </div>
  );
};

export default Holiday;