// 이른 초기화 기법을 활용해서 하나의 인스턴스를 가지고 글로벌하게 사용한다.
// constructor를 PRIVATE하게 두어, 다른곳에서 new연산자로 인스턴스 생성을 막음으로서,
// 하나의 객체 주소를 공유하게 된다.

// 이른 초기화 기법의 경우에는 멀티 스레드 환경에서도 안전성을 갖지만,
// 인스턴스 크기가 클경우에 사용하지 않고, 호출하지 않아도 메모리를 잡고 있을 수는 있다.

// 타입스크립트에서는 synchronized를 지원하지 않아서 locking기법은 사용이 힘들다.
// final 키워드 대신 readonly사용

class Settings {
  private static readonly INSTANCE = new Settings();

  static getInstance() {
    return Settings.INSTANCE;
  }

  private constructor() {}
}

export default Settings;
