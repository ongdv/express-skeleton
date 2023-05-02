# Express Skeleton

## 사전 설치

---

```shell
npm install
npm install -g nodemon # nodemon 전역으로 설치
```

## 환경 변수

---

```shell
# .env
SECRET_KEY=secretkey

DATABASE_HOST=[DATABASE_HOST]
DATABASE_USER=[DATABASE_USER]
DATABASE_PORT=[DATABASE_PORT]
DATABASE_PASS=[DATABASE_PASSWORD]
DATABASE_NAME=[DATABASE_NAME]
```

## 실행

---

```shell
npm start
```

## 구조

---

```shell
skeleton
├── package.json
├── app.js
├── routes
│   ├── User
│   │   ├── UserController.js
│   │   ├── UserRepository.js
│   │   ├── UserService.js
│   │   └── index.js
│   └── index.js
├── utils
│   ├── db.js
│   └── index.js
```

### Controller

사용자의 요청을 처리 한 후 지정된 뷰에 모델 객체를 넘겨주는 역할을 수행

즉, 사용자의 요청이 진입하는 지점이며 요청에 따라 어떤 처리를 할지 결정을 Service에 넘겨줌

---

### Service

Service가 알맞은 정보를 가공하는 과정을 '비즈니스 로직을 수행한다.' 라고 함.

Service가 비즈니스 로직을 수행하고 데이터베이스에 접근하는 DAO를 이용해서 결과값을 받아옴

---

### Repository

DAO(Data Access Object)와 같은 역할을 수행

SQL을 미리 지정하고, 함수형태로 제공하기 때문에, 동적 쿼리도 어느정도 가능

---

### 순서?

Controller에 path와 함께 횡단 관심 작성

Service를 통해 핵심 관심 부분을 작성

Repository를 통해 DB 및 데이터 액세스
