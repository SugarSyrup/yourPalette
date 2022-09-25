# YOUR PALLETE(가제)

## 기능/특징

Pallete 구현하기 위해 첫번째로 어떤 기준으로 색을 추천할 것 인가에 대해서는.. 톤? 이라는 개념을 적용해보기로 했다.

![image2](./assets/image/tone2.jpg)

3번 이미지를 참고로 13가지 톤을 기준으로 정하고

16 or 20가지 생상을 정하려고 한다.(아직 미정)

## 구조

/ : 원하는 tone을 선택할수 있는 화면을 시작으로 한다.

모든 톤을 보여주며 톤을 고를 수 있는 페이지와
원하는 톤을 클릭시 확대되고 좌우 화살표를 놔두어 확대된 상태로 다시한번 톤을 고를수 있게 한다.

/[tonename]
톤을 골랐다면 총 색상을 보여준다.

## 고민중

- 색상 사이에 margin 을 두고 background-color 를 사용자가 선택할수 있게 구현하는건 어떨까 고민 중 이다. => background 변경을 통해 기존에 메인 색상을 가지고 있다면 어울리는지 비교 가능하게?
  or 그냥 dark mode 정도만..

- 색상 랭킹 / 톤 랭킹
