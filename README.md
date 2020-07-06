# 레스토랑 상세 페이지 구현하기

![](https://user-images.githubusercontent.com/14071105/86525302-4d69d080-bec0-11ea-825b-18174b9c65bb.gif)

지금은 하나의 페이지에서 모든 정보를 보여주고 있습니다. 사용자에게 각 페이지마다 다른 정보를 보여주고 싶습니다. 우리의 앱을 소개하는 페이지도 만들고 싶고 그리고 레스토랑 상세 정보도 보여주고 싶습니다. 지금은 레스토랑 이름 목록만 보여주고 있지만 레스토랑 상세페이지에서 어떤 메뉴들이 있고 실제 주소는 어떤지도 보여주고 싶습니다.  

레스토랑 상세페이지를 만들어주세요. 그리고 만약 사용자가 잘못된 페이지로 왔을 때 안내도 필요하겠죠?

## 과제 목표

- TDD로 기능 구현
- 커버리지 100% 달성
- About 페이지 구현
- Not found 페이지 구현
- 레스토랑 상세페이지 구현

모든 컴포넌트와 reducer에 테스트를 작성해주세요. 그리고 테스트 커버리지를 100%를 달성해주세요.

## 요구 사항

- ESLint를 돌린 결과 아무런 문제가 없어야 합니다.
- 모든 인수 테스트를 통과시켜야 합니다.
- 한 파일에는 하나의 컴포넌트만 있어야 합니다.
- 테스트 커버리지 100%를 달성해야 합니다.

## 제한 조건

- 모든 기능은 TDD로 구현합니다. 컴포넌트와 reducer에 대한 테스트가 존재해야 합니다. 먼저 테스트를 추가하고 commit 한 뒤 실제 기능을 추가하고 commit합니다. commit 메시지 로그는 아래와 같이 남아야 합니다.

> Restaurant에 대한 테스트를 추가한다
>
> Restaurant을 구현한다
>
> Restaurant를 리팩토링한다
>
> ...

* `if`는 사용할 수 있어도 `else` 사용하실 수 없습니다. `GuardClauses` 방법을 사용해주세요.
* `switch`는 사용하실 수 없습니다.
* `let`은 사용하실 수 없습니다. `const`만을 사용하여 문제를 해결해주세요.
* 함수 이름과 변수 이름에 줄임말은 사용하실 수 없습니다. 길더라도 명확하게 써주세요.
* indent(인덴트, 들여쓰기) depth를 1로 유지해주세요.
예를 들어, for문 안에 if문이 있으면 indent depth는 2입니다.
depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 됩니다.

## 설치하기

```bash
npm install
```

## 실행하기

```bash
npm start
```

자동으로 브라우저가 켜지지는 않으니 브라우저에 `http://localhost:8080`을 입력하여 접속해 주세요.  

만약 현재 컴퓨터에서 이미 `8080`이라는 포트를 사용하고 있다면 `8081`으로 실행이 될 수도 있어요. 만약 `8081`도 사용하고 있으면 `8082`, `8083` ... 순서대로 찾아서 만들어집니다.

## 린트 실행하기

```bash
npm run lint
```

## 테스트 실행하기

### 전체 테스트 실행하기

```bash
npm test
```

### 유닛 테스트 실행하기

```bash
npm run test:unit

# 파일이 저장됐을 때 자동으로 테스트 실행하기
npm run test:unit -- --watch-all

# 커버리지 출력하기
npm run coverage
```

### e2e 테스트 실행하기

서버가 실행중인 상태에서 테스트를 실행해야 합니다.

```bash
npm run test:e2e
```

### Todo
- [X] App의 Restaurants 관련 관심사 분리 (=> RestaurantsPage)
- [ ] `AboutPage` 컴포넌트 구현
- [ ] App 컴포넌트에 라우팅 적용
- [ ] `RestaurantDetailPage` 컴포넌트 구현
- [ ] `RestaurantDetailContainer` 컴포넌트 구현
- [ ] `RestaurantDetail` 컴포넌트 구현
- [ ] `Restaurants` 컴포넌트에 Link 렌더링 적용
