const search = document.querySelector(".main-nav2-search");
const nav2 = document.querySelectorAll(".main-nav2-list");
const searchExpand = document.querySelector(".main-nav2-search-focused-box");
const searchRecommend = document.querySelectorAll(
  ".main-nav2-search-recommend"
);
const navShadow = document.querySelector(".main-nav-super-box");

export const movieTitle = [
  "아메리칸 호러 스토리",
  "안데스 설원의 생존자들",
  "아라문의 검",
  "BEEF",
  "종이의집 베를린",
  "The Big Country",
  "Fool Me Once",
  "Boy Swallows Universe",
  "콘크리트 유토피아",
  "초토화",
  "Delicious Dungeon",
  "Death and other Details",
  "Degrassi Next Class",
  "카우보이의 노래",
  "The Office",
  "The Trust",
  "아트풀 다저",
  "장고, 분노의 추적자",
  "닥터 슬럼프",
  "천박사 퇴마연구소",
  "ECHO",
  "EXPATS",
  "거미집",
  "GRISELDA",
  "경성크리처",
  "Hazbin Hotel",
  "REACHER",
  "장송의 프리렌",
  "Sengoku Youko",
  "중쇄를 찍자",
  "크리미널 레코드",
  "킬러들의 쇼핑몰",
  "The Head of Joaquin Murrieta",
  "마이데몬",
  "Modern Family",
  "남과여",
  "Tree Climbing Lions",
  "나의 해피엔드",
  "나 혼자만 레벨업",
  "NOTHING",
  "외계+인 1부",
  "오늘도 사랑스럽개",
  "Captain Underpants",
  "퍼시잭슨과 올림포스의 신들",
  "재벌X형사",
  "외딴 곳의 살인 초대",
  "LAW & ORDER",
  "Secrets of Christs Tomb",
  "세작, 매혹한 자들",
  "석양의 무법자",
  "The Brothers Sun",
  "선산",
  "SPY X FAMILY",
  "SHERLOCK",
  "친구에서 연인이 되는 경우의 수",
  "태어난 김에 세계일주",
  "사랑한다고 말해줘",
  "트라이건 스탬피드",
  "크리에이터",
  "웰컴투 삼달리",
  "원피스",
  "약사의 혼잣말",
];

export function handleSearchFocus() {
  nav2.forEach((nav) => {
    nav.classList.add("main-nav-hidden");
  });
  searchExpand.classList.remove("main-nav-hidden");
  searchRecommend.forEach((recommend) => {
    let i = Math.ceil(Math.random() * 62);
    recommend.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> ${movieTitle[i]} `;
  });
  navShadow.classList.add("main-nav-shadow");
}

export function handleSearchFocusOut() {
  nav2.forEach((nav) => {
    nav.classList.remove("main-nav-hidden");
  });
  searchExpand.classList.add("main-nav-hidden");
  navShadow.classList.remove("main-nav-shadow");
}

search.addEventListener("focus", handleSearchFocus);
search.addEventListener("focusout", handleSearchFocusOut);