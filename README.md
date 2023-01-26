# TodoList

[원티드 프리온보딩 프론트엔드 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_5) 강의 과정에서 작성한 코드입니다.

## 1.실행화면

### 회원가입

https://user-images.githubusercontent.com/22088158/214752390-3221a7a6-22ed-4c7d-ac8d-fefbc16df3ab.mov

### 로그인

https://user-images.githubusercontent.com/22088158/214752238-b38d62b9-4482-44c1-b4d9-2f3acb0e5b4b.mov

### todolist

https://user-images.githubusercontent.com/22088158/214752399-a130dfd9-cf2c-4ce7-ba91-7dd293e1c295.mov

## 2.실행방법

### API 서버 
[레파지토리](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

### 웹

```
yarn install  // 패키지 설치
yarn dev  // 개발서버 실행
```

## 3.요구사항

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다



## 4. 기술 스택

### 4.1 번들러
`vite`
- 빠른 개발환경 구축을 위해 사용
- esbuild로 dependency 라이브러리들을 미리 번들링하여 개발 서버를 빠르게 실행
- 모든 파일을 하나로 번들링하는 방식이 아닌 Native ESM으로 필요한 소스코드만 가져와 실행


### 4.2 form
`react-hook-form`
- 적은 양의 코드로 form validation 및 성능이 뛰어난 form을 구현하기 위해 사용

`yup`
- validation코드를 선언형으로 작성하기 위해 사용


### 4.3 서버 데이터
`axios`
- HTTP 통신에 필요한 baseURL, header등을 간편하게 설정하기 위해 사용
- request, reponse를 인터셉트하여 적절한 토스트 메시지를 뛰움

`react-query`
- SWR(Stale-While-Revalidate)전략으로 서버데이터를 캐싱하여 응답속도 최적화함
- 서버 상태와 클라이언트 상태를 명확하게 분리
- isLaoding, isError등 HTTP요청 상태를 간편하게 관리
- TodoList 데이터는 사용자에 의해서만 변경됨으로 `staleTime`을 `Infinite`로 설정하여 불필요한 요청을 줄임


### 4.5 상태관리
`recoil`
- props drilling을 피하고 여러 컴포넌트에서 사용이 필요한 데이터를 관리하기 위해 사용
- 모달상태 및 Todo Detail 읽기, 편집 모드를 관리할 때 사용 


### 4.5 스타일링
`tailwindcss`
- 스타일링 코드를 빠르게 작성하고 일관된 스타일을 적용하기 위해 사용

### 4.6 UI
`react-toastify`
- 토스트 컴포넌트 라이브러리

## 5. 폴더구조
```
src/
├── api/
│   │   # axios객체 생성 및 request, response 인터셉터 관련 코드 
│   └── axiosInstance.ts  
│       # feature별로 관련 파일들을 한 폴더에 위치시켜 특정 feature 수정 시 어느 파일을 수정해야 하는지 예측 가능하게 한다
└── features/ 
│   ├── auth/
│   │   ├── mutation/
│   │   │   ├── useLoginMutation.ts
│   │   │   └── useSignUpMutation.ts
│   │   ├── LoginForm.tsx
│   │   └── ...
│   ├── todo/
│   │   │   # mutation과 query코드를 별도 폴더로 관리
│   │   ├── mutation/
│   │   ├── queries/
│   │   │   ├── queryKeys.ts
│   │   │   └── useTodoList.ts
│   │   ├── constants.ts
│   │   ├── Todo.tsx
│   │   │   # 자식 컴포넌트를 부모 컴포넌트와 같은 폴더에 위치 시킴
│   │   └── TodoList
│   │       ├── TodoList.tsx
│   │       └── TodoListItem.tsx
│   │   # 여러 feature에서 사용될 수 있는 hooks
│   ├── hooks/
│   │   ├── useConfirm.ts
│   │   └── useModal.tsx
│   │   # 일반적인 UI 컴포넌트
│   └── ui/
│       ├──  Button.tsx
│       └── ...
│   # entry point를 한 폴더에서 관리 
├── pages/
│   ├── Home.tsx
│   └── ...
├── router/
│   ├── Router.tsx
│   └── ...
├── store/
│   └── atoms.ts
└── utils/
    ├── localStorageValue.ts
    └── ...
```

  
