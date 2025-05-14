function getUniqueUserId() {
  let userId = localStorage.getItem('cozeChatUserId');
  if (!userId) {
    // 生成一个简单的唯一ID (可以使用更健壮的UUID库如 uuid.js)
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('cozeChatUserId', userId);
  }
  return userId;
}

new CozeWebSDK.WebChatClient({
    /**
    * 代理或应用设置
    * 对于代理:
    * @param config.bot_id - 代理 ID.
    * 对于应用:
    * @param config.type - 集成 Coze 应用时必须将值设置为 app.
    * @param config.appInfo.appId - AI 应用 ID.
    * @param config.appInfo.workflowId - 工作流或聊天流程 ID.
    */
    config: {
      bot_id: '7502465348194058281',
    },
    /**
    * auth 属性用于配置认证方式.
    * @param type - 认证方式，默认值为 'unauth'，表示不需要认证；建议设置为 'token'，表示使用 PAT（个人访问令牌）或 OAuth 进行认证.
    * @param token - 当 type 设置为 'token' 时，需要配置 PAT（个人访问令牌）或 OAuth 访问密钥.
    * @param onRefreshToken - 当访问密钥过期时，可按需设置新的密钥.
    */
    auth:  {
      type: 'token',
      token: 'pat_kP8na2peoU2jwcj9g5In7Aeg9dE8AGdbkd05V9tnLFPUkP2bGoDrgejse1KISall',
      onRefreshToken: async () => '',
    },
    /**
    * userInfo 参数用于设置代理用户在聊天窗口的显示信息.
    * @param userInfo.id - 代理用户的 ID.
    * @param userInfo.url - 用户头像的 URL 地址.
    * @param userInfo.nickname - 代理用户的昵称.
    */
    userInfo: {
      id: getUniqueUserId(), // 使用动态生成的唯一ID
      url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
      nickname: '访客', // 或者可以允许用户自定义，或者基于生成的ID生成一个昵称
    },
    ui: {
      /**
      * ui.base 参数用于添加聊天窗口的整体 UI 效果.
      * @param base.icon - 应用图标 URL.
      * @param base.layout - 代理聊天框窗口的布局样式，可以设置为 'pc' 或 'mobile'.
      * @param base.lang - 代理的系统语言，可以设置为 'en' 或 'zh-CN'.
      * @param base.zIndex - 聊天框的 z-index.
      */
      base: {
        icon: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
        layout: 'pc',
        lang: 'zh-CN',
        zIndex: 1000,
      },
      /**
      * 控制聊天窗口的 UI 以及基本功能.
      * @param chatBot.title - 聊天窗口的标题.
      * @param chatBot.uploadable - 是否支持文件上传.
      * @param chatBot.width - PC 上代理窗口的宽度，以 px 为单位，默认值为 460.
      * @param chatBot.el - 设置聊天窗口放置位置的容器（元素）.
      */
      chatBot: {
        title: 'AI导诊助手',
        uploadable: true,
        width: 390
      },
      /**
      * 控制是否在页面右下角显示悬浮球.
      */
      asstBtn: {
        isNeed: true,
      },
      /**
      * ui.footer 参数用于添加聊天窗口的页脚.
      * @param footer.isShow - 是否显示底部版权模块.
      * @param footer.expressionText - 底部显示的文本信息.
      * @param footer.linkvars - 页脚中的链接文字及链接地址.
      */
      footer: {
        isShow: true,
        expressionText: 'Powered by & 脑叶公司',
        linkvars: {
          name: {
            text: 'A',
            link: 'https://www.test1.com'
          },
          name1: {
            text: 'B',
            link: 'https://www.test2.com'
          }
        }
      }
    },
  });