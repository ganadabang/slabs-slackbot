//const { User } = require('../models');
const { Suggestion } = require('../models');
const NumberUtils = require('../common/NumberUtils');
const ArrayUtils = require('../common/ArrayUtils');
const commandManual = require('../docs/commandManual');

// TODO command 각각에 대한 파일을 나눠서 require 하는 방식으로 (api 폴더 나누기)
const apiNoneCommands = {
  mail : async function(apiData, channelId) {
    const message = "born2code@42seoul.kr";
    return (message);
  },
  help : async function(apiData, channelId) {
    const message = "https://github.com/innovationacademy-kr/slabs-slackbot";
    return (message);
  },
  suggest : async function(apiData, channelId) {
    let message;
    if (apiData === "empty string") {
      message = "📭 요청 사항이 입력되지 않았어요..🌝\n너무 완벽한건가 hoxy 🏖";
    } else {
      Suggestion.create({
        content: `${apiData}`
      }).catch((err) => {
        if (err) {
          console.log(err);
        }
      })
      message = "📬 빠른 시일내에⏳ 구현하도록💻 노력해보겠습니다! 감사합니다🤓";
    }
    return (message);
  },
  lotto : async function(userData, channelId) {
    let message;
    if (Math.random() > .2) {
      const list = NumberUtils.getRandomList(45, 6);
      message = list.join(', ');
    } else {
      const shuffled = ArrayUtils.shuffle(words);
      message = '코딩이 로또다';
    }
    return (message);
  },
  secret : async function(userData, channelId) {
    const shuffled = ArrayUtils.shuffle(words);
    let message = shuffled.pop();
    return (message);
  },
  menu : async function(userData, channelId) {
    const menuList = ['찌개', '덥밥/볶음밥', '일식', '중식', '분식', '국밥/탕', '양식', '피자', '햄버거'];
    const menu = ArrayUtils.shuffle(menuList);
    let message = menu.pop();
    return (message);
  }
}

var words = ['나까지 나설 필요는 없다',
  '헌신하면 헌신짝 된다',
  '참고 참고 또 참으면 참나무가 된다',
  '포기하면 편하다',
  '왕관을 쓰려는 자, 그 무게를 견뎌라',
  '아니면 말고',
  '나도 나지만 너도 너다',
  '목숨을 버리면 무기만은 살려 주겠다',
  '가는 말이 고우면 사람을 얕본다',
  '잘생긴 놈은 얼굴값하고 못생긴 놈은 꼴값한다',
  '공부는 실수를 낳지만 찍기는 기적을 낳는다',
  '까도 내가 깐다',
  '난 오아시스를 원했고 넌 신기루만으로 좋았던 거지',
  '동정할 거면 돈으로 줘요',
  '“내 너 그럴줄 알았다”? 그럴 줄 알았으면 미리 말을 해주세요',
  '즐길 수 없으면 피하라',
  '이것 또한 지나가리라',
  '대문으로 가난이 찾아오면 사랑은 창문으로 도망간다',
  '일찍 일어나는 새가 더 피곤하다',
  '일찍 일어난 벌레는 잡아 먹힌다',
  '먼저 가는 건 순서가 없다',
  '똥차 가고 벤츠 온다',
  '효도는 셀프',
  '먹는 것이 공부라면 세상에서 공부가 가장 쉬웠어요',
  '어려운 길은 길이 아니다',
  '개천에서 용 난 놈 만나면, 개천으로 끌려 들어간다',
  '이런 인생으론 자서전도 쓸 수 없다',
  '새벽에 맥주와 먹는 치킨은 0칼로리다',
  '늦었다고 생각할 때가 가장 늦은 거다',
  '성형수술하고 나아진 게 아니라 하기 전이 최악이었다',
  '내일 할 수 있는 일을 굳이 오늘 할 필요는 없다',
  '되면 한다',
  '성공은 1%의 재능과 99%의 돈과 빽만 있음 된다',
  '지금 쟤 걱정할 때가 아니다 니가 더 걱정이다',
  '예술은 비싸고 인생은 더럽다',
  '고생 끝에 골병난다',
  '하나를 보고 열을 알면 무당 눈깔이다',
  '원수는 회사에서 만난다',
  '돌다리도 두들겨 보면 내 손만 아프다',
  '재주가 많으면 먹고 살만한 길이 많다',
  '티끌은 모아 봐야 티끌이다',
  '늦잠자는 놈들이 가는 지옥이 있는데 그곳은 바로 다음날 아침이다',
  '기억하자 노력은 종종 배신하지만 포기는 배신하지 않는다',
  '관심이 필요할 땐 좀비가 나오는 게임을 해보자 거기선 세상 모두가 당신을 원한다',
  '어차피 코딩할꺼 행복하게 코딩하자',
  '기분이 태도가 되지 말자',
  '진짜 비밀은 차라리 개에게 털어 놓아라',
  '지금 한다',
  '고통은 지나가지만 아름다움은 남는다',
  '자신감이 약해지면, 남의 충고가 더 크게 들린다',
  '몰래 도망쳐 나왔어. 만사가 싫어졌거든',
  '인생? 나에게 인생에 대해 말하지 마십시오.',
  '내가 매우 우울하다는 것을 알아야 한다고 생각한다.',
  '"오늘까지"라는 말은 "내일 아침까지"라는 말이다.',
  '프로그램은 내가 원하는대로 움직이지 않는다. 타이핑대로 움직인다.',
  '요구 사양은 프로그램을 완성한 후에 추가된다.',
  '기본 사양은 완성품을 고객이 보고 나서 결정된다.',
  '상세 사양은 사용자가 프로그램을 사용해 본 이후에 결정된다.',
  '분명한 결함을 눈치채기 어려울 정도로 복잡하게 만드는 것이 답이다.',
  '디버그는 납기일까지 하는 것이 아니라, 납품된 이후에 하는 것이다.',
  '프로그래머를 죽이기 위해서는 칼이 필요없다. 프로그램의 요구조건을 3번만 바꾸면 된다.',
  '다른 사람을 믿으라. 그 사람이 해결해줄지도 모른다.',
  '개발에 마지막은 없다. 출시만이 있을 뿐이다.',
  '요구사항이 아무리 뒤늦게 추가되어도 마감 일은 변하지 않는다. 이것을 "마감 불변의 법칙"이라고 한다.',
  '우리의 고객들은 물과 기능추가를 공짜라고 생각하고 있다.',
  '주머니가 짠 고객일수록 잔소리가 많다.',
  '개발 스케줄은 산수를 무시하며 짜여진다. 영업팀은 1＋1=2를 이해하지 못하는 사람의 모임이다.',
  '한 명이 쓰러지면 모두가 쓰러진다.',
  '버그가 너무 심하다? 걱정마라. 어느 순간 그것은 기본 사양이 된다.',
  '프로그래머에게 고객은 보이지 않는 악성 바이러스다.',
  '돈과 시간이 있으면, 그 어떤 시스템이라도 만들 수 있다. 하지만 그 기회는 영원히 주어지지 않는다.',
  '영업팀은 공상이 실현된다고 생각하는 몽상가 집단이다.',
  '시스템 엔지니어는 넘을 수 없는 벽이 없다고 믿는 모험가이다.',
  '프로그래머와는 몽상가와 모험가에 의해 칠흑의 바다에 내던져진 표류자이다.',
  '프로그램이란, 운과 감에 의해서 작성되는 기적이다.',
  '정시에 퇴근하면, 일이 늘어난다.',
  '완벽한 프로그램은 완벽한 시간과 돈을 필요로 한다.',
  '프로그램은 머리로 기억하지 않는다. 몸으로 기억한다.',
  '내일 쉴 수 있다면 오늘 죽어도 괜찮다.',
  '고객은 거짓말을 하고 영업은 꿈을 말한다.',
  '"네, 할 수 있습니다"라고 말하기 전에 10초만 곰곰히 다시 생각해보라.',
  '프로그래머는 1분 생각하고 1일을 코딩에 소비한다.',
  '납품 이후의 디버그는 버그를 부른다.',
  '세 개의 디버그는 하나의 버그를 낳는다. 이것을 버그의 엔드리스 루프라고 한다.',
  '안 좋은 예감은 반드시 적중한다.',
  '아수라장을 해결할 수 있는 방법은 오직, 고객이 돈을 지불하는 것 뿐이다.',
  '아마추어는 버그발견의 천재이다.',
  '아, 그건 마이크로소프트에서만 가능한 주문입니다.',
  '건강하기 때문에, 건강을 해친다.',
  '개발실의 창문은 안 열린다. 그 이유는 옛날에 한 프로그래머가 그 창문에서···',
  '고객은 최악의 사태를 믿지 않으며, 그 사태에 대한 준비를 악질적인 비용청구라고 생각한다.',
  '프로그래머는 최악의 사태를 누구보다 잘 예상하지만, 무시한다.',
  '만약 다른 직업을 갖게 된다면, 정시 퇴근을 "도망"이라고 부르지 않는 직업이 좋을 것 같다.',
  '최소한 자기가 쓴 시방서는 읽어주세요.',
  '납기일이란, 작업 현장이 우리 회사에서 고객의 회사로 바뀌는 날을 의미한다.',
  '가끔 일어나는 버그는 버그가 아니다. 스펙이다.',
  '걸레는 빨아도 행주가 되지 않는다.',
  'Simple is simple, not best.',
  '좋은 개발자는 도구를 탓하지 않는다. 키보드만 가릴뿐.',
  '최적화는 미루자. 하드웨어가 곧 빨라진다.',
  '않될 땐 안된다.',
  '프로그래밍이 늦어지는 것은 타자가 늦어서가 아니다.',
  '아닌건 갈아엎고 다시하자.'
];

module.exports = apiNoneCommands;