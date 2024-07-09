// pages/login/login.js
Page({
  data: {
    nickname: '',
    password: ''
  },

  onNicknameInput(e) {
    this.setData({ nickname: e.detail.value });
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  register() {
    const { nickname, password } = this.data;
    wx.showToast({
```javascript
      title: '注册成功',
      icon: 'success'
    });
  },

  login() {
    const { nickname, password } = this.data;
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    });
    wx.navigateTo({
      url: `/pages/game/game?aiMode=false`
    });
  },

  startAIGame() {
    wx.navigateTo({
      url: `/pages/game/game?aiMode=true`
    });
  }
});
