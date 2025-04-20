# React 애플리케이션을 Vercel에 배포하는 가이드

Vercel은 프론트엔드 프로젝트를 쉽게 배포할 수 있는 플랫폼으로, 특히 React 애플리케이션에 최적화되어 있습니다. 이 가이드에서는 React 프로젝트를 생성하고 Vercel에 배포하는 전체 과정을 단계별로 설명합니다.

## 1. 사전 준비

### 필요한 도구
- Node.js와 npm 설치 (https://nodejs.org)
- Git 설치 (https://git-scm.com)
- GitHub 계정 (https://github.com)
- Vercel 계정 (https://vercel.com)

## 2. React 프로젝트 준비

### 새 React 프로젝트 생성
```bash
npx create-react-app my-project
cd my-project
```

### 필요한 패키지 설치
```bash
npm install [필요한 패키지명]
# 예: npm install recharts axios styled-components
```

### 프로젝트 개발
- `src` 폴더에 컴포넌트와 기능 구현
- 필요한 경우 `public` 폴더에 정적 자산 추가

### 로컬에서 테스트
```bash
npm start
```
브라우저에서 http://localhost:3000 접속하여 정상 작동 확인

## 3. GitHub 저장소 설정

### GitHub에 새 저장소 생성
1. GitHub 계정에 로그인
2. 오른쪽 상단의 '+' 버튼 클릭 후 'New repository' 선택
3. 저장소 이름 입력 (예: my-project)
4. 저장소 설정 후 'Create repository' 클릭

### 로컬 프로젝트를 GitHub에 연결
```bash
# 프로젝트 폴더에서
git init
git add .
git commit -m "Initial commit"
```

### GitHub 저장소와 연결하고 푸시
```bash
git branch -M main
git remote add origin https://github.com/사용자이름/저장소이름.git
git push -u origin main
```

## 4. Vercel에 배포하기

### 웹 인터페이스를 통한 배포 (권장)

1. **Vercel 로그인**
   - [Vercel](https://vercel.com) 웹사이트에 접속
   - GitHub, GitLab, Bitbucket 계정으로 로그인 또는 회원가입

2. **프로젝트 가져오기**
   - 대시보드에서 'New Project' 버튼 클릭
   - 'Import Git Repository' 섹션에서 GitHub 계정 연결 (아직 연결하지 않은 경우)
   - 배포할 저장소 선택

3. **프로젝트 설정**
   - 프레임워크 프리셋: '`Create React App`' (자동 감지됨)
   - 프로젝트 이름: 원하는 이름 입력 (선택 사항)
   - 루트 디렉토리: 비워두기 (기본값)
   - 빌드 설정: 기본값 유지 (자동 감지됨)
   - 환경 변수: 필요한 경우 추가

4. **배포하기**
   - 'Deploy' 버튼 클릭
   - 배포 진행 과정 확인
   - 배포 완료 후 제공되는 URL로 접속하여 확인

### CLI를 통한 배포 (대안)

1. **Vercel CLI 설치**
   ```bash
   npm install -g vercel
   ```

2. **Vercel 로그인**
   ```bash
   vercel login
   ```
   이메일 인증 또는 브라우저에서 로그인

3. **프로젝트 배포**
   ```bash
   # 프로젝트 폴더에서
   vercel
   ```
   대화형 설정을 통해 배포 옵션 선택

## 5. 지속적인 배포 및 관리

### 자동 배포
- GitHub 저장소에 변경사항을 푸시하면 Vercel이 자동으로 새 버전을 배포
- 기본 브랜치(main/master)에 병합된 PR도 자동 배포

### 프리뷰 배포
- PR을 생성하면 Vercel은 자동으로 프리뷰 배포를 생성
- 각 PR에 대한 고유 URL 제공으로 변경사항 검토 가능

### 도메인 설정
1. Vercel 대시보드에서 프로젝트 선택
2. 'Settings' > 'Domains' 메뉴로 이동
3. 'Add' 버튼을 클릭하여 커스텀 도메인 추가
4. DNS 설정 지침에 따라 도메인 제공업체에서 설정

### 환경 변수 관리
1. 프로젝트 대시보드에서 'Settings' > 'Environment Variables' 메뉴로 이동
2. 필요한 환경 변수 추가 (개발/프리뷰/프로덕션 환경별로 설정 가능)

## 6. 문제 해결 및 팁

### 일반적인 문제 해결
- **빌드 실패**: Vercel 대시보드에서 빌드 로그 확인
- **환경 변수 문제**: 환경 변수가 올바르게 설정되었는지 확인
- **배포는 성공했지만 앱이 작동하지 않음**: 브라우저 개발자 도구에서 콘솔 에러 확인

### 최적화 팁
- **빌드 시간 단축**: 불필요한 종속성 제거
- **성능 향상**: Vercel Analytics로 성능 모니터링
- **배포 Preview**: PR마다 생성되는 프리뷰 환경에서 테스트 수행

## 7. 다중 환경 관리

### 환경별 설정
- **개발(Development)**: 로컬 개발 환경
- **프리뷰(Preview)**: PR 및 기능 브랜치 환경
- **프로덕션(Production)**: 메인 브랜치 배포 환경

### 브랜치 기반 워크플로우
1. 기능 개발을 위한 새 브랜치 생성
2. 변경사항 커밋 및 푸시
3. PR 생성 시 자동 프리뷰 환경 생성
4. 검토 후 메인 브랜치에 병합하면 프로덕션 환경에 자동 배포

---

이 가이드를 따라 React 애플리케이션을 Vercel에 배포하면, 지속적 통합(CI) 및 지속적 배포(CD) 워크플로우를 활용한 현대적인 웹 개발 환경을 갖출 수 있습니다. Vercel의 자동화된 배포 프로세스는 개발 생산성을 높이고, 전 세계 CDN을 통한 빠른 로딩 시간으로 사용자 경험을 향상시킵니다.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
