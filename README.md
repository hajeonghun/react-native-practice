## 연습용 React Native
> 유용한 라이브러리 & FCM & 배포등을 경험하기 위한  
> 목표한 어플리케이션 개발 전 연습용 프로젝트 입니다.  
  
## 폴더 구조
```text
- src 폴더
- src/assets: 이미지, 폰트 등
- src/constants: 상수
- src/pages: 페이지 단위 컴포넌트
- src/components: 기타 컴포넌트
- src/contexts: context api 모음
- src/hooks: 커스텀 훅 모음
- src/modules: 네이티브 모듈
- src/store: 리덕스 스토어 세팅
- src/slices: 리덕스 슬라이스
    - slices 대신 features
- @types: 타입 정의
```
.  
├── @types  
├── App.tsx  
├── AppInner.tsx  
├── Gemfile  
├── Gemfile.lock  
├── README.md  
├── app.json  
├── babel.config.js  
├── index.js  
├── jest.config.js  
├── metro.config.js  
├── package-lock.json  
├── package.json  
├── src  
│   ├── assets  
│   ├── components  
│   ├── constants  
│   ├── contexts  
│   ├── hooks  
│   ├── modules  
│   ├── pages  
│   ├── slices  
│   ├── store  
│   │   ├── index.ts  
│   │   └── reducer.ts  
│   └── util.ts  
├── tsconfig.json  
└── yarn.lock

## 앱 이름 변경

- name, displayName 중 displayName을 수정한다.
    - name 건드릴 경우 네이티브단에 꽤 많은 파일을 변경해야 함.
    - \android\app\src\main\res\values\strings.xml
    - app.json의 displayName
    - \ios\FoodDeliveryApp\Info.plist의 CFBundleDisplayName

```
💡 **단!** 0.68버전부터는 app.json, strings.xml, CFBundleDisplayName을 한글로하면 튕기는 문제 발생. 
그럴때는 전부 영어로 되돌리고 ios에서는 [링크](https://thddudco.tistory.com/16) 따라서 다국어 설정으로 한국어 설정할 것. 
또한 안드로이드에서는 \android\app\src\main\res\values\strings.xml은 영어로 두고 \android\app\src\main\res\values-ko\strings.xml 을 
새로 만들어 여기서 한글로 변경할 것
```  

## 데이터 저장소

- `react-native-encrypted-storage`
    - 암호화해서 저장 해야할 값
    - 즉, 앱을 꺼도 저장되어야 하고 민감한 값은 encrypted-storage에 저장

    ```tsx
    import EncryptedStorage from 'react-native-encrypted-storage';
    
    await EncryptedStorage.setItem('키', '값');
    await EncryptedStorage.removeItem('키');
    const 값 = await EncryptedStorage.getItem('키');
    ```

- `@react-native-async-storage/async-storage)`
    - 유지만 되면 데이터들은 async-storage에 저장
    - 앱을 껐다켜도 유지됨. (리덕스는 사라짐)
    - Web의 LocalStorage와 비슷하다고 보면 됨.  
  
## 참고사항
- SafeView
    - 노치, 카메라 홀 등 죽은공간 처리
- StatusBar
    - 베터리, 시간 표시 부분
    - react-natvie-status-bar-height 라이브러리로 높이 계산
- ScrollView
    - 공간(텍스트 등)이 많을 경우 스크롤 처리
    - View로 할 경우, 스크롤 안됨
    - `컨텐츠가 많을 경우 성능이슈 발생함으로 FlatList 사용`
        - ScrollView는 안보이는 부분까지 렌더링 함

        ```tsx
        const renderItem = useCallback(({item}: {item: Order}) => {
            return <EachOrder item={item} />;
          }, []);
        
        <FlatList
          data={orders}
          keyExtractor={item => item.orderId}
          renderItem={renderItem}
        />
        ```

- Flipper 모바일앱 디버거
    - 프로젝트에 의존성 추가
    - redux 쓰는 경우 관련 redux 추가, async-storage는 임시 저장소

    ```tsx
    npm i react-native-flipper redux-flipper rn-async-storage-flipper @react-native-async-storage/async-storage --force
    npx pod-install # 아이폰 전용
    ```

- [css 속성 리스트](https://github.com/vhpoet/react-native-styling-cheat-sheet)
- 라우터
    - [React Navigation](https://www.notion.so/Router-9c9a0344ff5b4a62a020566d9f60c56d?pvs=21) 권장
