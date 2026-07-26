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
    '一些值得留住的发现，和一些还在慢慢想明白的事。': 'Finds worth keeping, and things I am still slowly making sense of.',
    '拾记': 'Finds',
    '随记': 'Notes',
    '那些让人想马上转发给朋友的工具、网页和意外发现。': 'Tools, websites, and unexpected finds I want to send straight to a friend.',
    '实习、工作和生活里，暂时还没有答案的片段。': 'Fragments from internships, work, and life that do not have answers yet.',
    '新的信号正在路上。': 'New signals are on their way.',
    '[ 存在体概况 · 访问级别：公开 ]': '[ ENTITY PROFILE · ACCESS: PUBLIC ]',
    '此行风大雨大，风雨间歇时出发': 'Storm-lashed the way,\nwe ride the lull’s soft ray.',
    '一个不太松弛的中文系女生': 'A Chinese-literature girl still learning to loosen up,',
    '无意中看到Agent橘的CC小白教程': 'I came across Agent Orange’s CC primer by chance—',
    '自此打开AI世界的大门': 'and it opened the door to the world of AI.',
    '团队成员有': 'My team includes',
    '艺术总监': 'Art Director',
    '执行总监': 'Executive Director',
    '谷歌大使': 'Google Ambassador',
    '首席管家': 'Chief Steward',
    '（养团队太贵了 遂外出打猎': '(Keeping a team is expensive, so I went out hunting.)',
    '梦想是成为会说十门语言的cool girl': 'Dreaming of becoming a cool girl who speaks ten languages.',
    '于是法语、德语、日语、韩语都学了点': 'So I have dipped into French, German, Japanese, and Korean.',
    '都没去考级 好在雅思7.0 勉强过关': 'No certificates—but an IELTS 7.0 gets me through.',
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
    '捕获到 4 条异常信号，\n点击角色查看档案。': '4 anomalous signals captured.\nClick a character to open its profile.',
    '背景': 'Context', '搭建': 'Build', '技术栈': 'Tech Stack', '功能': 'Features', '演示': 'Demo', '现场': 'In the Field', '迭代': 'Iteration', '能力': 'Capabilities',
    '房间物品一目了然，轻松出行不在话下': 'Know what is in your room. Leave with ease.',
    '旅行、搬家、社交活动，出行要带的东西大不相同，每次都要重新列清单，非常繁琐。': 'Travel, moving, and social plans all require different things. Rebuilding a packing list every time is a chore.',
    '把房间搬进 App': 'Bring your room into the app', '添加全屋物品，一次盘点，永久可见。': 'Add everything in your home once; keep it visible forever.',
    '按场景生成清单': 'Generate lists by scenario', '从物品库筛选需要带的东西，生成对应场景 checklist（出差 / 旅行 / 社交 / 搬家）。': 'Pick what you need from your inventory to create checklists for business trips, travel, social plans, or moving.',
    '快速核对、分享 SOP': 'Check quickly, share the SOP', '出门前逐项打勾，不再漏东西，还能提醒随行伙伴。': 'Tick things off before leaving, miss nothing, and remind your companions.',
    '框架': 'Framework', '状态管理': 'State management', '本地存储': 'Local storage', '能力扩展': 'Extensions', '物品清单 / 出行 SOP': 'Inventory / travel SOP',
    '一款帮你利用锁屏空间的轻应用': 'A lightweight app that makes use of your lock screen',
    '日均解锁手机 136 次': '136 phone unlocks a day', '完全是下意识动作，大部分时候并没有特别明确要做的事情。': 'Usually an unconscious act—with no specific task in mind.',
    '锁屏待办 App 大量涌现': 'A wave of lock-screen to-do apps', '只局限在待办事项，自定义程度不高。': 'They stay confined to to-dos, with little room for customisation.',
    '和 Claude 讨论需求和效果': 'Discuss requirements and outcomes with Claude', '明确技术边界': 'Define the technical boundaries', '不调用生图模型，用代码生成。': 'No image-generation models—built in code.', '测试解锁切换效果': 'Test the unlock-transition effect',
    '生成纯色 / 渐变色壁纸': 'Generate solid or gradient wallpapers', '壁纸': 'Wallpaper', '亮屏时随机切换': 'Randomise when the screen wakes', '随机': 'Random', '支持导入 CSV': 'Import CSV files', '导入': 'Import', '高度自定义': 'Highly customisable', '自定义': 'Custom', '锁屏壁纸随机切换 · 实机录屏': 'Random lock-screen wallpapers · device recording', '锁屏轻应用': 'Lock-screen utility',
    '版本靠猜': 'Versions by guesswork', '每投一个岗位就另存一份 Word——': 'Every job application meant saving another Word file—', '改动靠记': 'Edits by memory',
    '同一段实习经历，投不同岗位时改动了哪些，哪家公司几号投的、用的是哪个版本的简历、JD 是什么，全靠记忆。': 'Which edits went with which role, where and when I applied, which résumé version I used, and what the JD said—all kept in my head.',
    '一个下午出 MVP': 'An MVP in one afternoon', '技术栈：React + Tailwind + FastAPI + Supabase，当晚部署上线。': 'React + Tailwind + FastAPI + Supabase; deployed that night.',
    '核心功能闭环': 'Close the core loop', '粘贴 JD → AI 自动改写简历，匹配现有经历，贴合岗位。': 'Paste a JD → AI rewrites the résumé around existing experience and the role.',
    '版本管理打通': 'Version management connected', '高亮修改部分，存档修改内容，简历关联投递记录。': 'Highlight edits, archive changes, and connect résumés to applications.',
    '不同浏览器兼容修复': 'Cross-browser fixes', '朋友截图反馈浏览器解析异常，逐版排查修复。': 'Friends sent screenshots of rendering bugs; I traced and fixed them release by release.',
    '邮件服务迁移': 'Email service migration', 'Supabase 免费版限制 5 封/小时，更换为 Resend。': 'Supabase’s free plan caps mail at five an hour, so I moved to Resend.',
    '← 左右滑动查看全部 →': '← Swipe to see everything →', '其他功能': 'Other Features', '版本管理': 'Version management', '每次修改可溯源、可对比、可部分恢复': 'Every edit is traceable, comparable, and partly reversible.',
    '中英切换': 'Chinese / English', '一键生成英文版': 'Generate an English version in one click.', '灵活编辑': 'Flexible editing', '自定义模块、字体、字号、API': 'Customise modules, fonts, type sizes, and API.', 'PDF 导出': 'PDF export', 'A4 尺寸所见即所得，清晰度优化': 'A4 WYSIWYG export, optimised for clarity.', '简历评分': 'Résumé scoring', '量化改进方向': 'Quantify the direction for improvement.', '第一个完整的': 'My first complete', '前后端项目': 'full-stack project', '个人简历修改网站': 'Personal Résumé Editor', '前后端项目': 'Full-stack project',
    '你的爆款视频已送达。': 'Your viral videos have arrived.', '定制频道监控规则，让信号主动找上门。': 'Customise channel-monitoring rules and let signals come to you.',
    '增量只能猜': 'Growth is guesswork', '大部分插件只显示发布时间，增量爆发靠人工推测。': 'Most plugins only show publish time; spikes have to be inferred by hand.', '数据逐条查': 'Check data one by one', '手动刷对标，高峰时期会同时打开几十个视频标签。': 'Manual competitive research means dozens of video tabs at peak times.', '爆款易错过': 'Virality is easy to miss', '真正有价值的信号随时可能爆发，难以及时捕捉。': 'The most valuable signals can spike at any moment and are hard to catch in time.',
    '拉取频道数据': 'Pull channel data', '接入 YouTube Data API，拉取频道和视频基础数据，优化配额消耗。': 'Use the YouTube Data API for channel and video basics while optimising quota use.', '获取增量信息': 'Get growth data', '反向获取 vidIQ token，处理接口。': 'Retrieve a vidIQ token and work through the endpoint.', '配置定时同步任务': 'Configure scheduled syncs', '反复测试 QStash，排查 Upstash regional endpoint URL。': 'Test QStash repeatedly and troubleshoot the Upstash regional endpoint URL.', '上线规则引擎': 'Launch the rules engine', '自定义触发爆款推送条件，实现闭环。': 'Define viral-alert triggers and close the loop.',
    '第一次收到爆款通知时，我知道这个工具的': 'When the first viral alert arrived, I knew this tool’s ', '闭环成立了': 'loop was real', '这次跑在生产环境里的，不是 demo。': 'This time it was running in production—not a demo.', '规则触发 · 企业微信推送 · 20 个视频命中': 'Rule triggered · WeCom delivery · 20 videos matched',
    '每个功能，背后都有一个具体的发现。MVP 跑通之后，每加一个功能都是因为用着用着发现缺了什么。': 'Every feature began with one concrete discovery. Once the MVP worked, each addition came from finding something missing in real use.',
    '爆款规则引擎': 'Viral Rules Engine', '↳ 通知了但不知道为什么触发': '↳ An alert arrived, but not why it fired', '从单一阈值升级成自定义条件组合，任意/全部匹配都支持，命中后清楚告诉你触发了哪条规则。': 'From a single threshold to custom condition sets: match any or all, then see exactly which rule fired.', '24h 增量': '24h growth', '条件组合': 'condition sets', '企业微信·飞书·邮箱': 'WeCom · Feishu · email',
    '对标组': 'Benchmark Groups', '↳ 爆款看完就忘，没地方沉淀': '↳ Viral finds disappeared after viewing', '把爆款视频归入"动画科普""讽刺类"等样本组。原来只是监控，现在能把好内容存下来，形成可复盘的内容库。': 'Sort viral videos into sample groups such as “animated explainers” and “satire.” What began as monitoring became a reusable, reviewable content library.', '动画科普': 'animated explainers', '讽刺类': 'satire', '样本沉淀': 'sample library',
    'Chrome 插件': 'Chrome Extension', '↳ 加频道要手动复制链接，太麻烦': '↳ Adding a channel meant copying links by hand', '刷 YouTube 时遇到感兴趣的频道，点一下插件直接加入监控列表，不用离开页面。': 'See an interesting channel while browsing YouTube? One click adds it to the watchlist without leaving the page.', '一键操作': 'one-click action', '设备码同步': 'device-code sync',
    '多维度排行榜': 'Multi-dimensional Rankings', '↳ 只有通知，看不到全局': '↳ Alerts alone give no overall view', '按播放量、内容形态、时间窗口、订阅区间筛选，监控的所有频道视频一屏内对比。': 'Filter by views, format, time window, and subscriber range; compare every monitored video on one screen.', '播放量排序': 'view ranking', '标签分组': 'tag groups', '时间窗口': 'time windows',
    '这个项目，练到的是这四件事': 'This project strengthened four things', '真实需求': 'Real needs', '定义产品': 'define the product', '从自己找频道定位的痛点出发，不先写漂亮文档，而是把每天手动刷视频的重复劳动产品化。': 'Starting from the frustration of finding channels myself: rather than drafting a beautiful document, productise the daily repetition of manually scanning videos.', '自动化': 'Automation', '闭环能力': 'that closes the loop', '频道池、定时任务、增量判断、通知推送、样本沉淀形成闭环，第一次收到通知时系统真正成立。': 'The channel pool, scheduled jobs, growth checks, alerts, and sample library form a loop. The system became real with its first notification.', '全栈': 'Full-stack', '工程实现': 'engineering', '纯前端、Vercel Serverless、Upstash Redis、QStash、Resend、企业微信、Chrome 插件都被串起来。': 'Frontend, Vercel Serverless, Upstash Redis, QStash, Resend, WeCom, and a Chrome extension all connect in one system.', '产品': 'Product', '边界意识': 'scope awareness', '清楚当前完成的是指定频道监控，而不是全网低粉爆款发现；下一步才是机会挖掘和拆解工作台。': 'Be clear about today’s boundary: monitoring selected channels, not discovering low-follower viral videos across the web. Opportunity discovery comes next.',
    '项目仍在运行': 'THE PROJECT IS LIVE', '真实跑在生产环境里的样子': 'See it running in production', '打开生产环境 →': 'Open live product →', '打开 YouTube Signal Hub 生产环境': 'Open YouTube Signal Hub in production'
    ,'01 背景': '01 Context', '02 搭建': '02 Build', '03 技术栈': '03 Tech Stack', '04 演示': '04 Demo', '03 功能': '03 Features', '03 其他功能': '03 Other Features', '01 现场': '01 In the Field', '02 搭建': '02 Build'
    ,'TYPE · 物品清单 / 出行 SOP': 'TYPE · Inventory / Travel SOP', 'TYPE · 锁屏轻应用': 'TYPE · Lock-screen Utility', 'CASE · 个人简历修改网站': 'CASE · Personal Résumé Editor', 'TYPE · 前后端项目': 'TYPE · Full-stack Project'
    ,'「简历-产品-v3」「简历-运营-最终版」「简历-运营-真的最终版」': '“Resume–Product–v3” “Resume–Operations–Final” “Resume–Operations–Actually Final”'
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

  // The Chinese About page is deliberately composed as short, separate lines.
  // English reads more naturally as complete paragraphs, so give it its own
  // semantic copy instead of trying to join the Chinese DOM with CSS.
  function renderEnglishAbout() {
    if (!location.pathname.endsWith('/about.html')) return;

    const intro = document.querySelector('.about-hero-intro');
    if (intro) {
      intro.innerHTML = '<p>A Chinese-literature girl still learning to loosen up, I came across Agent Orange’s CC primer by chance—and it opened the door to the world of AI.</p>';
    }

    const sections = document.querySelectorAll('.journal-text');
    if (sections[0]) {
      sections[0].innerHTML = '<p>My team includes <span class="about-team-role">Art Director <span class="en-hand">Claude</span></span>, <span class="about-team-role">Executive Director <span class="en-hand">Codex</span></span>, <span class="about-team-role">Google Ambassador <span class="en-hand">Gemini</span></span>, and <span class="about-team-role">Chief Steward <span class="en-hand">Cola</span></span>. <span class="about-aside">(Keeping a team is expensive, so I went out hunting.)</span></p>';
    }
    if (sections[1]) {
      sections[1].innerHTML = '<p>Dreaming of becoming a cool girl who speaks ten languages, I have dipped into French, German, Japanese, and Korean. No certificates—but an IELTS 7.0 gets me through.</p>';
    }
    if (sections[2]) {
      sections[2].innerHTML = '<p>I have written for WeChat and made a CCTV micro-documentary, partnered steadily with a Douyin creator for two years, and worked in PR for autonomous heavy trucks. Still making a beautiful mess…</p>';
    }
  }

  function setMetadata() {
    document.documentElement.lang = 'en';
    const pageNames = {
      'about.html': 'Entity Profile', 'works.html': 'Anomaly Records',
      'talks.html': 'Signal Trace', 'contact.html': 'Contact Protocol',
      'resume-editor.html': 'Personal Résumé Editor', 'youtube-signal-hub.html': 'YouTube Signal Hub',
      'locklock.html': 'LockLock', 'home.html': 'Home'
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
    if (!document.documentElement.hasAttribute('data-language-inherited')) addSwitcher();
    if (!isEnglish) return;
    setMetadata();
    translateTextNodes();
    renderEnglishAbout();
    const education = document.querySelector('.about-edu-head');
    if (education && education.lastChild.nodeType === Node.TEXT_NODE) education.lastChild.nodeValue = '';
  }

  window.SerenaI18n = { language, isEnglish, homeLines, t: (key) => isEnglish ? (copy[key] || key) : key, init };
  document.addEventListener('DOMContentLoaded', init);
}());
