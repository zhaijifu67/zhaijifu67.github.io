/* ============================================================
   tools.js —— 工具数据配置（唯一需要维护的地方）
   ------------------------------------------------------------
   图标写法（分组图标与工具图标都支持）：
     1) emoji 字符串：      icon: '⛵️'
     2) 图片：              icon: { type: 'image', src: './assets/img/icon.png', alt: '说明' }
     3) 显式 emoji 对象：   icon: { type: 'emoji', value: '⛵️' }
   新增工具：往对应分类的 items 里加一行对象即可
   新增分类：往 TOOLS 里加一个对象，顶部胶囊会自动生成
   href 以 http(s) 开头会自动新窗口打开
   ============================================================ */
window.TOOLS = [{
		icon: '🎮',
		title: '游戏工具箱',
		items: [{
				icon: '⛵️',
				title: '大航海冒险工具箱',
				desc: '开罗游戏《大航海冒险物语》在线工具',
				href: './dahanghai/',
				accent: '#0DCAF0'
			},
			{
				icon: '🎶',
				title: 'FF14 弹琴达人',
				desc: '《最终幻想 14》中乐器演奏制作工具',
				href: 'http://www.zzhai.top/ffxiv/',
				accent: '#F0A868'
			},
			{
				icon: { type: 'image', src: 'https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/leader/s/100580_sw_1_01.jpg', alt: '说明' },
				title: 'GBF 工具箱',
				desc: '纯静态自定义战斗流',
				href: './gbf/',
				accent: '#B02A37'
			}
		]
	},
	{
		icon: '🎲',
		title: '跑团工具箱',
		items: [{
				icon: '📑',
				title: '跑团 Replay 实用导航',
				desc: '实用工具集合，立绘、配音、地图等',
				href: './tools/trpg-navigation/',
				accent: '#FD7E14'
			},
			{
				icon: '🔖',
				title: '跑团 Logs 合并整理',
				desc: '将多个群聊消息按照时间线合并整理',
				href: 'http://www.zzhai.top/trpg/log_merge',
				accent: '#479F76'
			},
			{
				icon: '🗺️',
				title: '在线地图',
				desc: '适用于 DND 战棋类跑团',
				href: 'http://www.zzhai.top/trpg/map',
				accent: '#E0A800'
			}
		]
	},
	{
		icon: '🖼️',
		title: '图片与设计',
		items: [{
				icon: '😀',
				title: '表情包工具箱',
				desc: '用图像和文字制作动态表情包',
				href: './meme/',
				accent: '#F59E0B'
			},
			{
				/* 图片图标示例：取消下面注释并替换 src 即可
				icon: { type: 'image', src: './assets/img/compression.png', alt: '图片压缩' },
				*/
				icon: '🖼️',
				title: '图片裁剪压缩工具',
				desc: '批量裁剪、缩放并压缩图片',
				href: './tools/image-cropping/',
				accent: '#3B82F6'
			},
			{
				icon: '🎨',
				title: '随机配色工具',
				desc: '根据所选颜色生成其他颜色进行搭配',
				href: './tools/random-color-scheme/',
				accent: '#8B5CF6'
			}
		]
	}
];