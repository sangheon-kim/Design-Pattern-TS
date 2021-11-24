namespace MyModule {
  // static inner클래스 사용
  export class Settings {
    protected constructor() {}

    static getInstance() {
      return SettingsHolder.INSTANCE;
    }
  }

  class SettingsHolder extends Settings {
    static readonly INSTANCE = new Settings();
  }
}

export default MyModule.Settings;
