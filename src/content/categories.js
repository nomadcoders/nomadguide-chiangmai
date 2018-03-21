const Categories = {
  준비사항: {
    name: "준비사항",
    photo: require("../assets/categories/category.jpg"),
    description:
      "떠나기 전에 알아둘 것. 비자, 환전, 날씨, 도착 직후 심카드 구입까지.",
    articles: [
      {
        name: "비자",
        description: "태국 비자 및 입국 심사",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "환전",
        description: "태국돈 (THB) 환전하기",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "날씨",
        description: "치앙마이 방문 최고의 시즌은",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "도착 직후",
        description: "치앙마이 공항에서 해야할 것",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "심카드",
        description: "심카드 구입은 어떻게",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  },
  교통수단: {
    name: "교통수단",
    photo: require("../assets/categories/category.jpg"),
    description: "우버, 툭툭, 스쿠터 렌탈은 이렇게.",
    articles: [
      {
        name: "우버/그렙",
        description: "우버 사용의 팁",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "쏭태우/툭툭",
        description: "쏭태우와 툭툭 타는 법",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "스쿠터 렌탈",
        description: "스쿠터 렌탈 가격 및 체크 리스트",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "유의사항",
        description: "스쿠터 운전 시 유의사항",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  },
  "집 구하기": {
    name: "집 구하기",
    photo: require("../assets/categories/category.jpg"),
    description: "어느 동네에 살아야 할까요. 나에게 맞는 집을 찾는 기술.",
    articles: [
      {
        name: "지도",
        description: "치앙마이 구역별 지도",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "콘도",
        description: "풀옵션 럭셔리 콘도",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "아파트",
        description: "합리적인 가격의 아파트",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "주택",
        description: "자연과 함께하는 조용한 주택 단지",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "체크할 사항",
        description: "집 계약시 유의사항",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "유용한 링크",
        description: "콘도 및 아파트 매물, 시세 확인",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  },
  먹기: {
    name: "먹기",
    photo: require("../assets/categories/category.jpg"),
    description: "어디서 무엇을 먹을까. 매일 건강하게 잘 먹기위한 가이드.",
    articles: [
      {
        name: "레스토랑",
        description: "치앙마이 맛집 리스트",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "현지 식당",
        description: "주요 메뉴 리스트",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "슈퍼마켓",
        description: "대형 슈퍼마켓 위치",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "마켓",
        description: "벼룩시장, 수공예품 마켓 리스트",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  },
  일하기: {
    name: "일하기",
    photo: require("../assets/categories/category.jpg"),
    description: "코워킹 스페이스, 일하기 좋은 카페 모음.",
    articles: [
      {
        name: "코워킹 스페이스",
        description: "주요 코워킹 스페이스 리스트",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "카페",
        description: "일하기 좋은 카페 리스트",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  },
  커뮤니티: {
    name: "커뮤니티",
    photo: require("../assets/categories/category.jpg"),
    description: "밋업, 이벤트, 모임에서 좋은 사람들 만나고, 배우기.",
    articles: [
      {
        name: "노마드 커뮤니티",
        description: "치앙마이 거주하는 노마드들 만나기",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "개발자 커뮤니티",
        description: "프로그래밍, 비트코인 밋업 리스트",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "요가 커뮤니티",
        description: "요가, 명상, 타이 마사지 커뮤니티",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "그 외",
        description: "무에타이, 퍼머컬쳐, 재즈, 댄스 커뮤니티",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  },
  "노마드 꿀팁": {
    name: "노마드 꿀팁",
    photo: require("../assets/categories/category.jpg"),
    description: "기본 태국어, 병원, 한달살기 비용 등등.",
    articles: [
      {
        name: "기본 태국어",
        description: "기본은 알아야 흥정도 잘한다",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "월별 치앙마이 즐기기",
        description: "4월은 쏭크란, 11월은 러이끄라통!",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "병원",
        description: "그냥 아프지 말자",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "한달살기 비용",
        description: "대략 한달에 이정도 감안하자",
        photo: require("../assets/categories/category.jpg")
      },
      {
        name: "마지막으로",
        description: "노마드 가이드를 왜 썼냐면",
        photo: require("../assets/categories/category.jpg")
      }
    ]
  }
};

export default Categories;
