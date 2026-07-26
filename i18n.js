(function () {
  'use strict';

  const storageKey = 'serena-site-language';
  const requested = new URLSearchParams(window.location.search).get('lang');
  const saved = localStorage.getItem(storageKey);
  const language = requested === 'zh' || requested === 'en'
    ? requested
    : (saved === 'zh' || saved === 'en'
      ? saved
      : ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en'));
  const isEnglish = language === 'en';
  if (requested === 'zh' || requested === 'en') localStorage.setItem(storageKey, requested);

  const copy = {
    '存在体概况': 'Entity Profile',
    '异常事件记录': 'Anomaly Records',
    '信号追踪': 'Signal Trace',
    '接触协议': 'Contact Protocol',
    '[ 存在体概况 · 访问级别：公开 ]': '[ ENTITY PROFILE · ACCESS: PUBLIC ]',
    '此行风大雨大，风雨间歇时出发': 'Storm-lashed the way,\nwe ride the lull’s soft ray.',
    '一个不太松弛的中文系女生': 'A Chinese-literature girl still learning to loosen up',
    '无意中看到Agent橘的CC小白教程': 'A chance encounter with Agent Orange’s CC primer',
    '自此打开AI世界的大门': 'opened the door to the world of AI.',
    '团队成员有': 'My team includes',
    '艺术总监': 'Art Director',
    '执行总监': 'Executive Director',
    '谷歌大使': 'Google Ambassador',
    '首席管家': 'Chief Steward',
    '（养团队太贵了 遂外出打猎': '(Keeping a team is expensive, so I went out hunting.',
    '梦想是成为会说十门语言的cool girl': 'Dreaming of becoming a cool girl who speaks ten languages',
    '于是法语、德语、日语、韩语都学了点': 'so I have dipped into French, German, Japanese, and Korean.',
    '都没去考级 好在雅思7.0 勉强过关': 'No certificates, but an IELTS 7.0 gets me through.',
    '写过公众号，做过央视微纪录片': 'I have written for WeChat and made a CCTV micro-documentary.',
    '和抖音博主稳定合作两年': 'I partnered steadily with a Douyin creator for two years.',
    '在重卡自动驾驶行业干过pr': 'I have also worked in PR for autonomous heavy trucks.',
    '持续折腾中……': 'Still making a beautiful mess…',
    '教育经历': 'Education',
    '2022.9 – 2026.6　兰州大学': 'Sep 2022 – Jun 2026 · Lanzhou University',
    '上海大学 创意写作 准研究生': 'Shanghai University · Incoming MA, Creative Writing',
    '联络方式': 'Contact',
    '最快响应': 'Fastest response',
    '网站参考': 'Site reference',
    '以上为已批准的接触渠道。': 'These are the approved channels of contact.',
    '请选择适合你的频段。': 'Please choose the frequency that suits you.',
    'AI 定时跑热点日报、校内简报，每天自动推送。': 'AI runs daily trend and campus briefings, then delivers them automatically.',
    '市场追踪': 'Market Tracking',
    'AI 辅助调研产品动态、用户需求': 'AI-assisted research into product movement and user needs.',
    'SPARK框架': 'SPARK Framework',
    '从灵感碎片到选题产出，不断让AI拷问自己。': 'From fragments of inspiration to finished ideas—letting AI keep asking the hard questions.',
    '内容工厂': 'Content Factory',
    '口播文案、评论生成、视频剪辑半自动化。': 'Semi-automating scripts, comment generation, and video editing.',
    '视觉仓库': 'Visual Library',
    '插画 prompt、素材整理、风格规范。': 'Illustration prompts, asset organisation, and style systems.',
    '工具套件': 'Tool Suite',
    '浏览器插件、HTML 在线编辑器、YouTube 监测。': 'Browser extensions, an online HTML editor, and YouTube monitoring.',
    '用户招募': 'User Recruitment',
    '通过访谈招募收集真实用户需求，验证内容、工具和场景假设。': 'Collecting real needs through interview recruitment to validate content, tools, and use cases.',
    '项目管理': 'Project Management',
    '飞书多维表格 + 自动化流程，追踪任务、合作、反馈和执行状态。': 'Feishu databases plus automation for tasks, collaborators, feedback, and execution.',
    '数据分析': 'Data Analysis',
    '判断内容效果、转化表现和下一步增长方向。': 'Reading content impact, conversion, and the next direction for growth.',
    '信号样本库': 'Signal Samples',
    '点击图片查看更多': 'Click an image to see more',
    '小红书': 'Xiaohongshu',
    '2个月更新32篇笔记，9篇爆款': '32 posts in two months; 9 went viral',
    '2篇40w+阅读': '2 reached 400K+ reads',
    '公众号': 'WeChat Official Account',
    '公司品牌账号：运营半年，发布13篇内容，涨粉800+': 'Company brand account: 13 posts over six months; 800+ new followers',
    '个人账号：运营三个月，涨粉800+': 'Personal account: 800+ new followers in three months',
    '抖音博主合作': 'Douyin Creator Collaboration',
    '最高单条视频涨粉近70w': 'One video brought nearly 700K followers',
    '用户调研': 'User Research',
    '发布8条招募笔记，触达20+意向用户': '8 recruitment posts reached 20+ prospective users',
    '转化率75%': '75% conversion rate',
    'App 设计稿': 'App Design',
    'YouTube 爆款监测': 'YouTube Viral Monitor',
    '简历修改网站': 'Resume Editor',
    '跳过': 'Skip',
    '▲ 档案被遮挡 · 拖动她查看全部': '▲ Profile obscured · drag her to reveal all',
    '进入异常事件记录 →': 'Enter anomaly records →',
    '[ 异常事件记录 · 云层稳定 · 信号正在靠近 ]': '[ ANOMALY RECORDS · CLOUDS STABLE · SIGNAL APPROACHING ]',
    '打开独立项目页 ↗': 'Open project page ↗',
    '项目切换': 'Project switcher',
    '上一个项目': 'Previous project',
    '下一个项目': 'Next project',
    '个人简历修改网站': 'Personal Resume Editor',
    'YouTube 爆款监测系统': 'YouTube Viral Monitoring System',
    '捕获到 4 条异常信号，点击角色查看档案。': '4 anomalous signals captured. Click a character to open its profile.',
    '捕获到 4 条异常信号，\n点击角色查看档案。': '4 anomalous signals captured.\nClick a character to open its profile.'
  };

  const homeLines = [
    '[ SYSTEM INITIALIZING… ]', '',
    'Hello, traveller.',
    'An unfamiliar visitor has been detected —',
    'loading entity profile', '',
    'CODENAME / SERENA_XIRAN',
    'TYPE / researcher · maker · wanderer',
    'KNOWN TRAIT / turning ideas into real things',
    'KNOWN RISK / refuses the obvious route', '',
    'WARNING: contact may cause the following —',
    'persistent thinking · an uncontrollable urge to express',
    'an excessive enthusiasm for this world', '',
    'RULES FOLLOW —',
    'Rule one: there are no rules.',
    'Rule two: see rule one.', '',
    '[ PROFILE LOADED ]',
    'Welcome. Or perhaps it is already too late to regret it.'
  ];

  function translateTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const original = node.nodeValue;
      const key = original.trim();
      if (!copy[key]) return;
      node.nodeValue = original.replace(key, copy[key]);
    });
    document.querySelectorAll('[aria-label], [alt], [title]').forEach((element) => {
      ['aria-label', 'alt', 'title'].forEach((name) => {
        const value = element.getAttribute(name);
        if (value && copy[value]) element.setAttribute(name, copy[value]);
      });
    });
  }

  function setMetadata() {
    document.documentElement.lang = 'en';
    const pageNames = {
      'about.html': 'Entity Profile', 'works.html': 'Anomaly Records',
      'talks.html': 'Signal Trace', 'contact.html': 'Contact Protocol'
    };
    const page = location.pathname.split('/').pop() || 'index.html';
    document.title = pageNames[page] ? pageNames[page] + ' — Serena' : 'Serena';
    const description = 'A Chinese-literature girl making her way through the world alongside AI agents.';
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => meta.content = description);
    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.content = 'en_US';
  }

  function addSwitcher() {
    const control = document.createElement('div');
    control.className = 'language-switcher';
    control.setAttribute('role', 'group');
    control.setAttribute('aria-label', isEnglish ? 'Language' : '语言');
    control.innerHTML = '<button type="button" data-language="zh">中</button><span aria-hidden="true">/</span><button type="button" data-language="en">EN</button>';
    control.querySelector('[data-language="' + language + '"]').classList.add('active');
    control.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language]');
      if (!button || button.dataset.language === language) return;
      localStorage.setItem(storageKey, button.dataset.language);
      const url = new URL(location.href);
      url.searchParams.set('lang', button.dataset.language);
      location.href = url;
    });
    document.body.appendChild(control);
  }

  function init() {
    addSwitcher();
    if (!isEnglish) return;
    setMetadata();
    translateTextNodes();
    const education = document.querySelector('.about-edu-head');
    if (education && education.lastChild.nodeType === Node.TEXT_NODE) education.lastChild.nodeValue = '';
  }

  window.SerenaI18n = { language, isEnglish, homeLines, t: (key) => isEnglish ? (copy[key] || key) : key, init };
  document.addEventListener('DOMContentLoaded', init);
}());
