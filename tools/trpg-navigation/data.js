// 素材站数据配置
const imgIcon = (src, alt) => ({ type: 'image', src, alt });

window.TOOLS = [
  {
    icon: '🧩',
    title: '综合类',
    items: [
      { icon: imgIcon('http://www.vita-chi.net/ico.jpg', 'びたちー素材館'), title: 'びたちー素材館', desc: '日文小说游戏素材', href: 'http://www.vita-chi.net/sozai1.htm' },
      { icon: imgIcon('https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico', '爱给网'), title: '爱给网', desc: '国内各类综合素材', href: 'https://www.aigei.com' },
      { icon: imgIcon('https://moonwind.pw/favicon.ico', 'MATERIAL'), title: 'MATERIAL', desc: '日文小说游戏素材', href: 'https://moonwind.pw/material.html#pageLink04' },
      { icon: '🔗', title: '异界原创工具', desc: '', href: 'https://lkljty.gitee.io/fantasy-tool/', hide: true },
      { icon: imgIcon('https://pixabay.com/apple-touch-icon.png', 'pixabay'), title: 'pixabay', desc: '免税图片音乐', href: 'https://pixabay.com/zh/' },
      { icon: imgIcon('https://www.67tool.com/favicon.ico', '即时工具'), title: '即时工具', desc: '工具集合，视频图片音乐在线编辑', href: 'https://www.67tool.com/' }
    ]
  },
  {
    icon: '🎵',
    title: '音乐音效类',
    items: [
      { icon: imgIcon('https://maou.audio/wp-content/themes/jks_maoudamashii/favicon.ico', '魔王魂'), title: '魔王魂', desc: '日文免费音乐', href: 'https://maou.audio/' },
      { icon: '🔗', title: '甘茶の音楽工房', desc: '', href: 'http://amachamusic.chagasi.com/', hide: true },
      { icon: imgIcon('https://taira-komori.jpn.org/favicon.ico', '小森平的免费下载音效'), title: '小森平的免费下载音效', desc: '中文免费音效', href: 'https://taira-komori.jpn.org/freesoundcn.html' },
      { icon: imgIcon('https://assets.mixkit.co/build/favicons/apple-icon-72x72-65d8de4120b737fcccf4be0dd5e3604c7d0aa062eeb594876e4aac1f3aaf22a6.png', 'Mixkit'), title: 'Mixkit', desc: '英文音乐音效视频下载', href: 'https://mixkit.co/' },
      { icon: imgIcon('https://sounddictionary.info/favicon.ico', '效果音辞典'), title: '效果音辞典', desc: '日文音效免费商用', href: 'https://sounddictionary.info/' },
      { icon: imgIcon('https://www.ear0.com/public/images/favicon.ico', '耳聆网'), title: '耳聆网', desc: '中文声音分享平台', href: 'https://www.ear0.com' },
      { icon: imgIcon('https://freesound.org/apple-touch-icon.png', 'freesound'), title: 'freesound', desc: '英文共享声音协作数据库', href: 'https://freesound.org' },
      { icon: '🔗', title: 'On-Jin ～音人～', desc: '', href: 'https://on-jin.com/', hide: true },
      { icon: imgIcon('http://www.aoitorinouta.com/favicon.ico', '癒し系音楽素材'), title: '癒し系音楽素材', desc: '日文免费使用的音乐素材', href: 'http://www.aoitorinouta.com/sozai/index.html' },
      { icon: '🔗', title: 'H/MIX', desc: '日文免费高品质音乐素材', href: 'http://www.hmix.net' },
      { icon: '🔗', title: 'PURPLE PLANET', desc: '', href: 'https://www.purple-planet.com', hide: true },
      { icon: imgIcon('https://pocket-se.info/favicon.ico', '口袋音效'), title: '口袋音效', desc: '日文音乐音效素材可商用', href: 'https://pocket-se.info' },
      { icon: imgIcon('https://www.tunefind.com/favicon.ico', 'Tunefind'), title: 'Tunefind', desc: '英文电影电视音乐下载', href: 'https://www.tunefind.com/' },
      { icon: imgIcon('https://tabletopaudio.com/favicon.ico', 'Tabletop Audio'), title: 'Tabletop Audio', desc: '英文专为跑团制作的音乐', href: 'https://tabletopaudio.com' },
      { icon: imgIcon('https://www.tosound.com/favicon.ico', '淘声网'), title: '淘声网', desc: '中文免费声音素材聚合平台', href: 'https://www.tosound.com' },
      { icon: imgIcon('https://dova-s.jp/_assets/img/favicon.ico', 'DOVA-SYNDROME'), title: 'DOVA-SYNDROME', desc: '日文免费音乐', href: 'https://dova-s.jp/' },
      { icon: imgIcon('http://www.kurage-kosho.info/favicon.ico', 'くらげ工匠'), title: 'くらげ工匠', desc: '日文効果音素材', href: 'http://www.kurage-kosho.info/' },
      { icon: imgIcon('https://www.bensound.com/favicon.png', 'Bensound'), title: 'Bensound', desc: '英文免版税音乐', href: 'https://www.bensound.com/' }
    ]
  },
  {
    icon: '🧑‍🎨',
    title: '人物立绘/头像类',
    items: [
      { icon: imgIcon('https://www.neka.cc/images/neka_logo_icon_02_compressed.png', '捏咔~'), title: '捏咔~', desc: '中文免费捏立绘头像', href: 'https://www.neka.cc' },
      { icon: imgIcon('https://huaban.com/favicon.ico', 'PNG立绘花瓣合集'), title: 'PNG立绘花瓣合集', desc: '收集自网络的透明立绘', href: 'https://huaban.com/boards/80115628' },
      { icon: imgIcon('https://carlmary.jp/favicon.ico', 'TRPG立ち絵素材'), title: 'TRPG立ち絵素材', desc: '日文专为跑团提供立绘', href: 'https://carlmary.jp/gallery/materials-300/' },
      { icon: '🔗', title: 'dreamself', desc: '', href: 'http://www.dreamself.me（挂了，建议用离线版）', hide: true },
      { icon: '🔗', title: 'picrew', desc: '', href: 'https://picrew.me', hide: true },
      { icon: '🔗', title: 'charat', desc: '日文捏角色', href: 'https://charat.me' },
      { icon: imgIcon('https://make.girls.moe/favicon.ico', '美少女头像'), title: '美少女头像', desc: '早期AI选项捏人', href: 'https://make.girls.moe/#/' },
      { icon: '🔗', title: 'artbreeder', desc: '', href: 'https://www.artbreeder.com', hide: true },
      { icon: '🔗', title: 'とくだ屋', desc: '日文免费立绘素材', href: 'http://tokudaya.net/index.html' }
    ]
  },
  {
    icon: '🗺️',
    title: '地图制作类',
    items: [
      { icon: '🔗', title: 'inkarnate', desc: '', href: 'https://inkarnate.com/' },
      { icon: '🔗', title: 'watabou', desc: '', href: 'https://watabou.itch.io' },
      { icon: '🔗', title: 'azgaar', desc: '', href: 'https://azgaar.github.io/Fantasy-Map-Generator/' },
      { icon: '🔗', title: '易制地图', desc: '', href: 'https://www.makeamap.cn' }
    ]
  },
  {
    icon: '🖼️',
    title: '图片类',
    items: [
      { icon: '🔗', title: '壁纸网', desc: '', href: 'https://wallpaperaccess.com/' },
      { icon: '🔗', title: 'フリー素材検索', desc: '', href: 'http://search.websozai.jp' },
      { icon: '🔗', title: '百度图片', desc: '', href: 'http://image.baidu.com/' },
      { icon: '🔗', title: '谷歌图片', desc: '', href: 'https://www.google.co.jp/imghp?hl=zh-CN&tab=wi&ogbl' },
      { icon: '🔗', title: 'photock', desc: '', href: 'https://www.photock.asia' },
      { icon: '🔗', title: 'pexels', desc: '', href: 'https://www.pexels.com/zh-cn/' },
      { icon: '🔗', title: 'pxhere', desc: '', href: 'https://pxhere.com/' },
      { icon: '🔗', title: 'pakutaso', desc: '', href: 'https://www.pakutaso.com/' },
      { icon: '🔗', title: 'unsplash', desc: '', href: 'https://unsplash.com' },
      { icon: '🔗', title: 'reshot', desc: '', href: 'https://www.reshot.com/' },
      { icon: '🔗', title: 'あやえも研究所', desc: '', href: 'https://ayaemo.skr.jp/materials.html' },
      { icon: '🔗', title: '美食图片', desc: '', href: 'https://www.foodiesfeed.com' },
      { icon: '🔗', title: 'jpg变掉SANgif', desc: '', href: 'https://photomosh.com/' },
      { icon: '🔗', title: 'AI拼接，3图合一', desc: '', href: 'https://app.wombo.art/' },
      { icon: '🔗', title: 'Atelier B/W 儿童插画', desc: '', href: 'https://atelier-bw.net' },
      { icon: '🔗', title: 'KANARI.INFO', desc: '', href: 'https://www.kanari.info/' },
      { icon: '🔗', title: 'k-kabegami壁纸', desc: '', href: 'http://k-kabegami.com/' },
      { icon: '🔗', title: 'KNT绘画CG背景', desc: '', href: 'http://kntgraphics.web.fc2.com/' },
      { icon: '🔗', title: 'きまぐれアフター', desc: '', href: 'http://www5d.biglobe.ne.jp/~gakai/' },
      { icon: '🔗', title: '消失点 禁止商用', desc: '', href: 'http://www.aj.undo.jp/' },
      { icon: '🔗', title: 'L+T纹理素材', desc: '', href: 'https://lostandtaken.com/' },
      { icon: '🔗', title: '空想曲線 UI素材', desc: '', href: 'https://kopacurve.blog.fc2.com/' },
      { icon: '🔗', title: 'momoizm 对话框', desc: '', href: 'http://momoizm.web.fc2.com/' },
      { icon: '🔗', title: 'scramble', desc: '', href: 'http://kplaza.blog6.fc2.com/' },
      { icon: '🔗', title: 'ANCESTRY IMAGES', desc: '', href: 'https://www.ancestryimages.com/' },
      { icon: '🔗', title: 'StockSnap', desc: '', href: 'https://stocksnap.io/' },
      { icon: '🔗', title: '手写字体生成器', desc: '', href: 'https://shouxie.laoxiezi.com/' }
    ]
  },
  {
    icon: '🔤',
    title: '字体类',
    items: [
      { icon: '🔗', title: '谷歌字体', desc: '', href: 'https://fonts.google.com/?query=noto' },
      { icon: '🔗', title: '免费商用中文字体', desc: '', href: 'https://www.fonts.net.cn/commercial-free/fonts-zh-1.html' },
      { icon: '🔗', title: '免费字体', desc: '', href: 'https://www.100font.com/' },
      { icon: '🔗', title: '字体外网', desc: '', href: 'https://www.fontshare.com/' },
      { icon: '🔗', title: '猫啃网', desc: '', href: 'https://www.maoken.com/' }
    ]
  },
  {
    icon: '🎬',
    title: '视频类',
    items: [
      { icon: '🔗', title: '视频素材', desc: '', href: 'https://www.videvo.net/' },
      { icon: '🔗', title: '视频素材', desc: '', href: 'https://www.videezy.com/' },
      { icon: '🔗', title: '片头制作', desc: '', href: 'https://panzoid.com' },
      { icon: '🔗', title: 'MotionElements', desc: '', href: 'https://www.motionelements.com/ja/free/stock-footage' },
      { icon: '🔗', title: 'Mazwai', desc: '', href: 'https://mazwai.com/' }
    ]
  },
  {
    icon: '🧷',
    title: 'PNG/图标类',
    items: [
      { icon: '🔗', title: '矢量图', desc: '', href: 'https://igoutu.cn/illustrations' },
      { icon: '🔗', title: 'cleanpng', desc: '', href: 'https://www.cleanpng.com/' },
      { icon: '🔗', title: 'imgbin', desc: '', href: 'https://imgbin.com/' },
      { icon: '🔗', title: 'pngtree', desc: '', href: 'https://zh.pngtree.com' },
      { icon: '🔗', title: 'logo生成', desc: '', href: 'https://www.logomaker.com.cn' },
      { icon: '🔗', title: 'logo生成', desc: '', href: 'https://www.logosc.cn' },
      { icon: '🔗', title: '谷歌图标库', desc: '', href: 'https://fonts.google.com/icons' },
      { icon: '🔗', title: '图标', desc: '', href: 'https://iconstore.co/' },
      { icon: '🔗', title: 'Q版素材', desc: '', href: 'https://www.irasutoya.com/' },
      { icon: '🔗', title: '少女感素材', desc: '', href: 'http://girlysozai.com/' },
      { icon: '🔗', title: '剪影素材', desc: '', href: 'https://www.silhouette-ac.com/' },
      { icon: '🔗', title: 'あひる小屋', desc: '', href: 'http://momomohouse.moo.jp/' }
    ]
  },
  {
    icon: '🗣️',
    title: 'TTS',
    items: [
      { icon: '🔗', title: '朗读女', desc: '', href: 'http://www.443w.com/tts/' },
      { icon: '🔗', title: '字幕说', desc: '', href: 'https://www.subspeak.top/speaker' },
      { icon: '🔗', title: '迅捷文字转语音', desc: '', href: 'https://www.luyinzhushou.com/text2voice/' },
      { icon: '🔗', title: '录音啦', desc: '', href: 'https://www.luyinla.com/' },
      { icon: '🔗', title: '讯飞开放平台', desc: '', href: 'https://www.xfyun.cn/services/online_tts' },
      { icon: '🔗', title: '百度AI开放平台', desc: '', href: 'https://ai.baidu.com/tech/speech/tts_online' },
      { icon: '🔗', title: '阿里云语音合成', desc: '', href: 'https://ai.aliyun.com/nls/tts' },
      { icon: '🔗', title: '标贝科技语音合成', desc: '', href: 'https://www.data-baker.com/specs/compose/online/' },
      { icon: '🔗', title: '录音转文字助手', desc: '', href: 'https://www.luyinzhushou.com/text2voice/' },
      { icon: '🔗', title: '在线AI转换', desc: '', href: 'https://www.zaixianai.cn/voiceCompose' }
    ]
  },
  {
    icon: '🛠️',
    title: '其他',
    items: [
      { icon: '🔗', title: '城市地名生成器', desc: '', href: 'https://www.fantasynamegenerators.com/city-names.php' },
      { icon: '🔗', title: '对话记录生成器', desc: '', href: 'https://www.vjietu.com/index/old.html' },
      { icon: '🔗', title: '中国风起名工具', desc: '', href: 'http://xiaosang.net/gushi_namer/' },
      { icon: '🔗', title: '美国人名普查', desc: '', href: 'https://namecensus.com/' },
      { icon: '🔗', title: '3d模型素材', desc: '', href: 'https://sketchfab.com' },
      { icon: '🔗', title: '工具网站', desc: '', href: 'https://labs.sketchfab.com/experiments/' }
    ]
  }
];