const questions = [
  {
    category: "人类回家现场",
    axis: "expression",
    title: "你刚打开家门，狗勾会怎样迎接你？",
    hint: "请按最近一次普通下班回家时的真实画面作答。",
    choices: [
      {
        text: "整只狗弹起来，围着你高速转圈，尾巴快抡出残影",
        note: "你只是上了八小时班，它表现得像你刚从火星成功返航。",
        trait: "B",
      },
      {
        text: "叼着玩具冲过来，屁股扭到和上半身不同步",
        note: "欢迎仪式必须带礼物，哪怕礼物刚才还在狗窝里啃。",
        trait: "B",
      },
      {
        text: "慢慢走过来闻一闻，再靠着你站好",
        note: "情绪很满，但狗设不能崩，主要是怕显得太想你。",
        trait: "C",
      },
      {
        text: "从窝里伸个懒腰，摇几下尾巴表示已收到",
        note: "欢迎已阅，服务照旧，晚饭请尽快开始。",
        trait: "C",
      },
    ],
  },
  {
    category: "家庭跟随实验",
    axis: "affection",
    title: "你在家里从客厅走到厨房，再从厨房去厕所。狗勾会……",
    hint: "这是一次普通室内移动，不是开门遛弯的大事件。",
    choices: [
      {
        text: "全程跟随，像一块有毛的贴身膏药",
        note: "你换房间不是你的自由，是狗的迁徙通知。",
        trait: "A",
      },
      {
        text: "每次都跟到门口，但保留一点点自己的趴姿",
        note: "我来了，我趴下了，我参与了你的人生。",
        trait: "A",
      },
      {
        text: "待在自己的固定位置，确认你没消失就行",
        note: "共享住宅，不必共享每一次移动轨迹。",
        trait: "I",
      },
      {
        text: "偶尔来查岗，其余时间继续研究自己的玩具",
        note: "狗有自己的事业，主要是咬碎一只会叫的塑料鸡。",
        trait: "I",
      },
    ],
  },
  {
    category: "公园路线选择",
    axis: "exploration",
    title: "到了楼下，你刚松开一点牵引绳，它会……",
    hint: "重点看它对未知气味、路线和空间的态度。",
    choices: [
      {
        text: "马上拉你冲向第一根新电线杆，像去领奖",
        note: "一根杆子的气味信息量，可能超过你全部微信消息。",
        trait: "R",
      },
      {
        text: "到处跑大圈，每个角落都必须亲自盖章",
        note: "公园不是用来走的，是用来扩大到最大地图范围的。",
        trait: "R",
      },
      {
        text: "保持在你附近，走熟悉的路线就最放心",
        note: "风景无所谓，主要确认你在、绳在、零食也在。",
        trait: "H",
      },
      {
        text: "闻两下就想往家的方向拐，外面已经差不多了",
        note: "散步是个流程，流程结束就该回沙发上继续当狗。",
        trait: "H",
      },
    ],
  },
  {
    category: "奖励偏好审讯",
    axis: "motivation",
    title: "你让它坐下，它看着你手里的小零食和发声球。它更想选……",
    hint: "选它平时真的会为之努力的目标，不是偶尔顺手玩一下的东西。",
    choices: [
      {
        text: "零食，先吃进肚子才算真的奖励",
        note: "理想、远方和坐下都先放一边，肉干落袋为安。",
        trait: "K",
      },
      {
        text: "只要能吃，平时的粮和被封神的冻干都值得努力",
        note: "训练没有零食，就像上班没有工资，情绪很难稳定。",
        trait: "K",
      },
      {
        text: "球，哪怕只是看见你摸一下球包，耳朵已经进入备战状态",
        note: "吃饭维持生命，追球才叫生活。",
        trait: "T",
      },
      {
        text: "会叫会咬的玩具，最好还能和你来回拉扯三小时",
        note: "这个玩具不一定好吃，但它的社会价值非常高。",
        trait: "T",
      },
    ],
  },
  {
    category: "门铃突袭",
    axis: "expression",
    title: "门铃突然响起，狗勾的第一反应是……",
    hint: "包括外卖、快递和邻居走错门，所有门铃都算。",
    choices: [
      {
        text: "冲到门口大声报警，仿佛来了一整支拆迁队",
        note: "安保系统启动，虽然访客可能只是送了一袋猫砂。",
        trait: "B",
      },
      {
        text: "兴奋地转圈，并试图把最爱的玩具送给陌生人",
        note: "欢迎新人，先展示一下本家庭的软实力。",
        trait: "B",
      },
      {
        text: "抬头听一下，再从远处观察局势",
        note: "情报不足，暂不启动全身欢迎程序。",
        trait: "C",
      },
      {
        text: "站起来但不出声，等你先决定是不是它熟悉的访客",
        note: "你是门卫，我负责在后方提供沉默的支持。",
        trait: "C",
      },
    ],
  },
  {
    category: "睡前位置分配",
    axis: "affection",
    title: "晚上你躺在床上，狗勾通常会睡在哪里？",
    hint: "请按大多数夜晚的实际情况作答，狗偶尔一次心情特殊不算。",
    choices: [
      {
        text: "紧贴着你，最好半只狗压在你腿上",
        note: "睡觉不是休息，是确认你没有在夜里偷偷消失。",
        trait: "A",
      },
      {
        text: "床边的固定位置，必须能一伸手摸到",
        note: "我不占床，但我必须拥有随时参与你睡眠的权利。",
        trait: "A",
      },
      {
        text: "自己的窝，睡得四平八稳",
        note: "感情归感情，床垫支撑归床垫支撑。",
        trait: "I",
      },
      {
        text: "开始在床边，半夜自己回窝换一种睡姿",
        note: "亲密陪伴有额度，额度用完就回独立套房。",
        trait: "I",
      },
    ],
  },
  {
    category: "散步方向盘",
    axis: "exploration",
    title: "每天出门散步，哪条路更符合它的理想生活？",
    hint: "请以它的选择为准，不用考虑人类是不是已经走累了。",
    choices: [
      {
        text: "每天换一条新路，最好还能闻到没见过的狗",
        note: "固定路线是工作的通勤，陌生气味才是精神旅行。",
        trait: "R",
      },
      {
        text: "熟悉的大公园，但每棵树都要重新检查一遍",
        note: "地点可以固定，但今日新闻必须亲自读完。",
        trait: "R",
      },
      {
        text: "就在家附近，把熟悉的几根柱子闻完就回去",
        note: "散步不是探险，是家庭日程中的安全项目。",
        trait: "H",
      },
      {
        text: "你走哪儿它跟着，路线不重要，你重要",
        note: "方向可以交给你，前提是零食包也由你负责。",
        trait: "H",
      },
    ],
  },
  {
    category: "新包裹开箱",
    axis: "motivation",
    title: "你拆开一个新快递，里面有零食和玩具，狗更关注哪个？",
    hint: "看它先盯住的、最先想办法够到的那个。",
    choices: [
      {
        text: "零食袋，哪怕只是塑料袋响了一下",
        note: "狗的耳朵不是耳朵，是食品包装识别雷达。",
        trait: "K",
      },
      {
        text: "桌上的食物盒，并开始用眼神远程撬盖",
        note: "没有打不开的盒子，只有还不够努力的人类。",
        trait: "K",
      },
      {
        text: "玩具，叼走之后会回来要求你马上配合",
        note: "新玩具需要有观众，最好这个观众还会扔它。",
        trait: "T",
      },
      {
        text: "会响、会滚、会掉毛的玩具包装，比正品还上头",
        note: "买玩具是给狗快乐，包装是给狗更大的快乐。",
        trait: "T",
      },
    ],
  },
  {
    category: "洗澡现场",
    axis: "expression",
    title: "你说出“洗澡”两个字，它最像下面哪种反应？",
    hint: "如果它洗澡时很配合，也可以诚实地选择“认命”。",
    choices: [
      {
        text: "立刻跑遍全屋，洗完后还要高速甩水",
        note: "洗澡一分钟，甩水半小时，人类和墙面一起接受洗礼。",
        trait: "B",
      },
      {
        text: "边躲边叫，最后被抱进浴室，戏演得很足",
        note: "虽然逃不掉，但过程必须被全楼听见。",
        trait: "B",
      },
      {
        text: "叹口气走进浴室，站好等洗完",
        note: "狗生有些事无法协商，比如水、香波和人类的面子。",
        trait: "C",
      },
      {
        text: "不挣扎但脸很臭，洗完立刻要求毛巾服务",
        note: "配合是给流程面子，臭脸是给尊严保留位置。",
        trait: "C",
      },
    ],
  },
  {
    category: "上班日独处",
    axis: "affection",
    title: "你出门上班后，狗勾更可能是哪种状态？",
    hint: "可以看看摄像头或回家后的现场，不用过度浪漫化独处。",
    choices: [
      {
        text: "在门口趴等很久，你一回来就要重新检查全身",
        note: "这一天你去哪儿了？必须从鞋底到裤腿全部闻清楚。",
        trait: "A",
      },
      {
        text: "平时会找你，但听到钥匙声立刻恢复全部活力",
        note: "感情存在，且具有即时唤醒功能。",
        trait: "A",
      },
      {
        text: "睡自己的觉、玩自己的玩具，等你自己开门",
        note: "你上班，我休息，大家都有充实的一天。",
        trait: "I",
      },
      {
        text: "按自己的节奏活动，回来先闻你一下再继续忙",
        note: "欢迎回来。狗界事务很多，不能一直站在门口谈恋爱。",
        trait: "I",
      },
    ],
  },
  {
    category: "新地方新朋友",
    axis: "exploration",
    title: "带它去一个没去过的公园，还遇到几只陌生狗。它通常……",
    hint: "不要只看是否礼貌，要看它是否有探索和接近新伙伴的冲动。",
    choices: [
      {
        text: "先兴奋探索全场，再看哪只狗愿意一起跑",
        note: "新地图、新朋友、新路线，狗生探索三件套已集齐。",
        trait: "R",
      },
      {
        text: "迅速进入交际状态，像在主持大型见面会",
        note: "只要对方不介意，它可以把所有狗都认识一遍。",
        trait: "R",
      },
      {
        text: "先待在你身边，把新环境观察完再行动",
        note: "世界可以先等一下，等我确认人类还在。",
        trait: "H",
      },
      {
        text: "礼貌闻一下就回来，熟悉的人和环境更舒服",
        note: "社交可以有，回家才是正事。",
        trait: "H",
      },
    ],
  },
  {
    category: "训练课现场",
    axis: "motivation",
    title: "教它一个新动作，它最愿意为了什么重复练习？",
    hint: "请诚实面对它愿意反复配合的真实驱动力。",
    choices: [
      {
        text: "吃的，每做对一次就盯住你的口袋",
        note: "动作会忘记，奖励必须当场结清。",
        trait: "K",
      },
      {
        text: "吃的，但也会记住你通常把零食藏在哪里",
        note: "训练之外还顺便完成了仓库定位与供应链审计。",
        trait: "K",
      },
      {
        text: "球，做对一次就把球扔出去，它能练到腿软",
        note: "狗不是在学习，它是在为下一个球建立晋升通道。",
        trait: "T",
      },
      {
        text: "拉扯玩具，动作本身不重要，和你玩才重要",
        note: "训练是工作，玩具是奖金，合作氛围必须拉满。",
        trait: "T",
      },
    ],
  },
];

const profiles = {
  golden: {
    key: "golden",
    breed: "金毛",
    name: "阳光迎宾官",
    code: "BARK",
    palette: { strong: "#a76510", soft: "#f1d29c", pale: "#fff0d3", accent: "#356fd4", body: "#e7ad4d" },
    sticker: "尾巴已启动\n螺旋桨模式",
    subtitle: "它不认识陌生人，只认识还没来得及认识的朋友。",
    summary:
      "金毛在互联网语境里几乎是“阳光大暖男”的固定角色，你家这位大概率也很符合：见人热情、对食物认真、出门像春游，回家像演唱会。它的快乐很直接，喜欢就摇尾巴，想吃就盯着你，想玩就把玩具放到你脚上。它不一定永远听话，但大概率很愿意和你一起把日子过得热闹。",
    tags: ["人类充电宝", "自来熟", "全地形开心果"],
    moments: [
      "快递员只是路过，它已经准备好邀请对方进门吃饭。",
      "散步路上每见到一个人，都像重逢失散多年的亲戚。",
      "你刚到玄关，它已经把最爱的球、拖鞋和半袋狗粮都运来了。",
    ],
    care: [
      "热情社交要建立在对方也愿意的基础上，牵引和距离管理很重要。",
      "高活动量犬需要稳定的运动与嗅闻时间，不能只靠周末一次大放风。",
      "用玩具和互动奖励训练，不要让它把扑人和抢食误认为欢迎。",
    ],
    humanMatch: "愿意出门、不怕热情、能稳住牵引绳的人",
    warning: "它带着满身泥水向路人飞奔，而对方穿着浅色衣服时",
    quote: "今天也是爱全世界的一天，先摸我。",
  },
  border: {
    key: "border",
    breed: "边境牧羊犬",
    name: "眼神控场王",
    code: "BIRK",
    palette: { strong: "#315b49", soft: "#cbdcd2", pale: "#eaf2ee", accent: "#f1b93b", body: "#f8f5eb" },
    sticker: "不是盯着你\n是在管理你",
    subtitle: "它看球的眼神，像项目经理看一个拖延了三周的节点。",
    summary:
      "边牧常被网络叫作“狗的智商天花板”，你家这位也确实可能特别擅长观察人的动作、找出规律、预判下一步。它不一定时时刻刻黏着人，但很在意任务和秩序：谁该往哪里走、球应该从哪儿扔、这个家里谁最容易被它指挥。它的聪明需要出口，不然会从学习能力变成拆家能力。",
    tags: ["眼神管理", "任务雷达", "学习永动机"],
    moments: [
      "你还没拿起球，它已经根据你抬手的角度移动到落点。",
      "家里有人乱走，它试图把大家重新赶回同一个房间。",
      "训练三遍就学会，然后开始用眼神要求你提高难度。",
    ],
    care: [
      "用嗅闻、益智玩具和技能训练消耗脑力，单纯跑圈未必够。",
      "建立清晰规则，避免它自己发明一套家庭管理条例。",
      "追逐车辆、儿童或家禽等行为需要及早引导，保护它和周围人。",
    ],
    humanMatch: "愿意一起学习、能提供结构、也不会被它看穿的人",
    warning: "你假装扔球，而它已经看穿了你的肩膀假动作时",
    quote: "你不用解释，我已经知道下一步。",
  },
  husky: {
    key: "husky",
    breed: "哈士奇",
    name: "抽象拆家侠",
    code: "BIRT",
    palette: { strong: "#4d6473", soft: "#d2dfe5", pale: "#edf4f6", accent: "#ef6a4f", body: "#e7ebea" },
    sticker: "沙发已解体\n艺术刚刚开始",
    subtitle: "服从不是不会，是它今天想先听完自己的意见。",
    summary:
      "哈士奇在网络宇宙里承担了大量抽象行为艺术：嚎叫、逃跑、拆家、露出“我不理解但我也没错”的表情。你家这位可能精力高、好奇心强、对新鲜玩法兴趣大，而且有自己的逻辑体系。它并非不聪明，只是常常把聪明用在研究沙发内部结构，而不是研究你的指令。",
    tags: ["抽象艺术家", "独立脑回路", "拆家工程师"],
    moments: [
      "你把垃圾袋放门口三十秒，它已经完成了内容物分类。",
      "被训的时候先嚎一声，仿佛受委屈的是它。",
      "出门每一步都有计划，只是没有一步和你的计划相同。",
    ],
    care: [
      "高强度运动与嗅闻任务要一起安排，单靠体力消耗很难让它满足。",
      "破坏行为出现时先检查运动、独处时间和环境刺激，别只怪“二哈”。",
      "安全围栏、门窗锁和牵引不可省，独立探索欲强的狗更需要可靠边界。",
    ],
    humanMatch: "可以接受狗比自己更有想法、还愿意每天遛很久的人",
    warning: "家里很安静，而它嘴里叼着一块来历不明的海绵时",
    quote: "我没有拆家，我在研究家具的可逆性。",
  },
  corgi: {
    key: "corgi",
    breed: "柯基",
    name: "短腿小钢炮",
    code: "BAHK",
    palette: { strong: "#ad5c22", soft: "#f2cdae", pale: "#fff0e5", accent: "#356fd4", body: "#e6a252" },
    sticker: "腿虽短\n气势两米八",
    subtitle: "底盘很低，存在感很高，饭盆前尤其如此。",
    summary:
      "柯基看着像一只装了长耳朵的面包，跑起来却常常像小型推土机。你家这位可能很亲人、很爱吃、在家存在感极强，还经常用短腿完成超出体型预期的高速移动。它爱参与家庭活动，也爱发表意见；你很难忽略它，因为它自带低视角监控和饭点提醒功能。",
    tags: ["短腿冲刺", "饭盆管理员", "家庭跟屁虫"],
    moments: [
      "听到零食袋的声音，短腿跑出超跑声浪。",
      "想跳上沙发，先原地蓄力三秒，仪式感拉满。",
      "你只是从客厅去厨房，它已经完成了全程贴身护送。",
    ],
    care: [
      "控制体重和跳跃高度，保护脊柱与关节，不要被圆润外表骗了。",
      "短腿不代表低运动量，需要在安全范围内保持规律活动。",
      "食物驱动强时要使用称量投喂与分散奖励，避免训练变成全天加餐。",
    ],
    humanMatch: "能抵抗短腿暴击、愿意控制零食并按时遛狗的人",
    warning: "它盯着你的饭，而你已经多给过一次零食时",
    quote: "腿短怎么了？我比你先到饭盆。",
  },
  shiba: {
    key: "shiba",
    breed: "柴犬",
    name: "倔强表情包",
    code: "CIHK",
    palette: { strong: "#995329", soft: "#efceb5", pale: "#fbf0e5", accent: "#d6a638", body: "#c77942" },
    sticker: "牵引绳已绷直\n本柴拒绝转弯",
    subtitle: "不是听不懂坐下，是今天不想按这个版本执行。",
    summary:
      "柴犬的网络人设大概就是“独立、克制、表情丰富但拒绝解释”。你家这位可能平时不吵闹，和你有自己的亲密距离，也有非常明确的主见。散步时它不会把每一步都交给你决定，遇到不想回家、不想被抱或不想社交时，表情通常已经写完一整套声明。",
    tags: ["表情管理", "独立主权", "选择性服从"],
    moments: [
      "你叫它回家，它看你一眼，然后原地坐下。",
      "被摸头时先闭眼享受，三秒后突然想起自己需要独立。",
      "牵引绳拉成一条直线，像它正在对世界行使否决权。",
    ],
    care: [
      "用正向训练和选择空间建立合作，不建议用硬拉或强压解决倔强。",
      "外出时关注脱绳风险，独立探索欲强不代表可以忽略牵引。",
      "尊重它不想被抱或不想社交的时刻，同时用稳定规则保护安全。",
    ],
    humanMatch: "能接受被一只狗审视、并愿意和它谈判的人",
    warning: "你已经走了三公里，而它突然决定这条路不是回家的路时",
    quote: "我有耳朵，也听见了，只是暂时不同意。",
  },
  poodle: {
    key: "poodle",
    breed: "贵宾犬",
    name: "精致戏精",
    code: "BAHT",
    palette: { strong: "#8d5079", soft: "#ecd1e2", pale: "#fbefF7", accent: "#f1b93b", body: "#edd8c9" },
    sticker: "今天这身毛\n不是白做的",
    subtitle: "它知道镜头在哪，也知道谁还没有夸它。",
    summary:
      "贵宾犬（包括常见的泰迪造型）在互联网上很擅长扮演“小戏精”：聪明、反应快、亲人、爱参与，而且往往很清楚怎样让人类把注意力交出来。你家这位可能很喜欢互动和玩具，也很有自己的审美与情绪表达。它不仅是可爱，还知道可爱可以申请更多陪伴、更多玩具和更高规格的出场仪式。",
    tags: ["镜头感应", "聪明戏多", "玩具至上"],
    moments: [
      "你拿起手机，它已经自动调整到最显脸小的角度。",
      "玩具球滚进沙发底，它会坐着看你，明确表示人工客服请处理。",
      "刚做完造型，走路都像在参加宠物时装周。",
    ],
    care: [
      "长卷毛需要规律梳理和修剪，别等打结后才处理。",
      "聪明且爱互动的狗需要学习和游戏，不然容易把注意力用在要东西上。",
      "用玩具、口令和互动奖励训练，保持规则一致，别被表演性撒娇破坏边界。",
    ],
    humanMatch: "愿意陪玩、会梳毛、能忍住不连续买新玩具的人",
    warning: "它正用“我饿了”的眼神看你，而碗里其实还有半碗时",
    quote: "我不是要，我是在提醒你还没主动给。",
  },
  lab: {
    key: "lab",
    breed: "拉布拉多",
    name: "温柔干饭狗",
    code: "CARK",
    palette: { strong: "#6d552e", soft: "#dfd1ba", pale: "#f5ede2", accent: "#6d9f4c", body: "#b98a51" },
    sticker: "饭菜未到\n灵魂已在桌边",
    subtitle: "一只把“情绪稳定”和“随时准备吃饭”写在脸上的狗。",
    summary:
      "拉布拉多在表情包里的常见形象是：温和、亲人、爱水、爱吃，以及永远有一种“我不会抢，但你最好快点给”的耐心。你家这位可能情绪比较稳，也很享受陪你出门、散步和吃东西。它不是没有活力，只是把活力更多用在靠近人和等待食物上；一个饭盆能让它完成从入睡到上岗的瞬间切换。",
    tags: ["稳重陪吃", "温和亲人", "饭点精准"],
    moments: [
      "你拿出碗，它已经坐好，像个等待绩效结算的员工。",
      "别人家的狗抢球，它盯着你手里那颗掉在草地上的饼干。",
      "水边散步后，它用最无辜的脸申请第二个奖励。",
    ],
    care: [
      "拉布拉多食欲通常很好，需要定量喂养并防止偷食。",
      "控制体重与关节负担，保持规律游泳或低冲击运动。",
      "温顺不等于没有需求，给它足够的嗅闻和陪伴，不要只让它等待。",
    ],
    humanMatch: "愿意规律遛狗、会锁好零食柜、能抵挡可怜眼神的人",
    warning: "你把面包放在桌边，转个身它就完成了物理消失时",
    quote: "我不急，但我的眼睛已经吃完这一顿了。",
  },
  samoyed: {
    key: "samoyed",
    breed: "萨摩耶",
    name: "微笑泥坑精",
    code: "BART",
    palette: { strong: "#3f7497", soft: "#cfe3ed", pale: "#eef7fa", accent: "#ef8d70", body: "#fffaf0" },
    sticker: "笑容很白\n爪子很泥",
    subtitle: "雪白只有五分钟，快乐可以维持一整天。",
    summary:
      "萨摩耶的微笑太有欺骗性，很容易让人忘记它是一只精力旺盛、爱出门、爱交朋友、对泥坑有艺术追求的狗。你家这位大概率会用天使般的笑脸把你骗到每一个它想去的地方，再用满身泥巴告诉你：刚刚那不叫犯错，叫快乐。它亲人、活泼、审美独特，对自己的毛和你的耐心都有很高要求。",
    tags: ["微笑诈骗", "泥坑探测", "雪白五分钟"],
    moments: [
      "刚洗完澡十分钟，它已经在泥坑里完成了全身改色。",
      "对每个人都笑，仿佛你只是它人生中一位普通朋友。",
      "玩耍时不累，回家梳毛时突然进入虚弱模式。",
    ],
    care: [
      "双层被毛需要规律梳理，换毛期和高强度户外活动尤其要关注。",
      "出门带水和清洁用品，享受泥坑前要确认场地安全。",
      "高社交和高活动需求需要日常安排，不能让雪白笑容掩盖运动不足。",
    ],
    humanMatch: "热爱户外、不怕掉毛、接受每天至少一次“白洗了”的人",
    warning: "它笑着向你跑来，而远处刚出现一个刚下过雨的泥坑时",
    quote: "你看我笑得这么甜，怎么会是故意的？",
  },
};

const letterMeanings = {
  expression: {
    B: { word: "Bouncy", label: "活力外放", text: "情绪来得快，身体比口令更早进入现场。" },
    C: { word: "Calm", label: "稳重克制", text: "表达有分寸，先观察再决定是否加入热闹。" },
  },
  affection: {
    A: { word: "Affectionate", label: "黏人依赖", text: "靠近、跟随和身体接触，是它确认关系的方式。" },
    I: { word: "Independent", label: "独立自处", text: "爱你，但不需要与你共享每一次移动轨迹。" },
  },
  exploration: {
    R: { word: "Roamer", label: "探索冒险", text: "新气味和新路线会点燃它，世界值得亲自闻一遍。" },
    H: { word: "Homebody", label: "恋家守门", text: "熟悉路线和身边的人，比未知更能让它安心。" },
  },
  motivation: {
    K: { word: "Kibble", label: "食物驱动", text: "零食与饭盆是训练、合作和幸福的重要货币。" },
    T: { word: "Toy", label: "玩具驱动", text: "玩耍和互动是它最认真对待的工作。" },
  },
};

const state = {
  screen: "welcome",
  current: 0,
  answers: Array(questions.length).fill(undefined),
  ranking: [],
};

const elements = {
  welcome: document.querySelector("#welcome-screen"),
  quiz: document.querySelector("#quiz-screen"),
  calculating: document.querySelector("#calculating-screen"),
  result: document.querySelector("#result-screen"),
  startButton: document.querySelector("#start-button"),
  questionIndex: document.querySelector("#question-index"),
  trailMeterFill: document.querySelector("#trail-meter-fill"),
  trailMeterPin: document.querySelector("#trail-meter-pin"),
  mobileProgressFill: document.querySelector("#mobile-progress-fill"),
  questionCard: document.querySelector("#question-card"),
  questionCategory: document.querySelector("#question-category"),
  questionTitle: document.querySelector("#question-title"),
  questionHint: document.querySelector("#question-hint"),
  answerGrid: document.querySelector("#answer-grid"),
  backButton: document.querySelector("#back-button"),
  nextButton: document.querySelector("#next-button"),
  calculatingTitle: document.querySelector("#calculating-title"),
  calculatingStatus: document.querySelector("#calculating-status"),
  resultHero: document.querySelector("#result-hero"),
  resultBreed: document.querySelector("#result-breed"),
  resultName: document.querySelector("#result-name"),
  resultCode: document.querySelector("#result-code"),
  resultSubtitle: document.querySelector("#result-subtitle"),
  resultSummary: document.querySelector("#result-summary"),
  resultTags: document.querySelector("#result-tags"),
  resultArt: document.querySelector("#result-art"),
  artSticker: document.querySelector("#art-sticker"),
  letterGrid: document.querySelector("#letter-grid"),
  momentsList: document.querySelector("#moments-list"),
  careList: document.querySelector("#care-list"),
  humanMatch: document.querySelector("#human-match"),
  humanWarning: document.querySelector("#human-warning"),
  dogQuote: document.querySelector("#dog-quote"),
  alternateGrid: document.querySelector("#alternate-grid"),
  saveButton: document.querySelector("#save-button"),
  copyButton: document.querySelector("#copy-button"),
  toast: document.querySelector("#toast"),
};

let timers = [];
let toastTimer = null;

function setScreen(name) {
  const screens = {
    welcome: elements.welcome,
    quiz: elements.quiz,
    calculating: elements.calculating,
    result: elements.result,
  };
  Object.entries(screens).forEach(([key, node]) => {
    node.hidden = key !== name;
  });
  state.screen = name;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.current = 0;
  state.answers = Array(questions.length).fill(undefined);
  state.ranking = [];
  renderQuestion();
  setScreen("quiz");
}

function animateQuestion() {
  elements.questionCard.classList.remove("is-changing");
  void elements.questionCard.offsetWidth;
  elements.questionCard.classList.add("is-changing");
}

function renderQuestion() {
  const question = questions[state.current];
  const selected = state.answers[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;

  elements.questionIndex.textContent =
    `${String(state.current + 1).padStart(2, "0")} / ${questions.length}`;
  elements.trailMeterFill.style.width = `${progress}%`;
  elements.trailMeterPin.style.left = `${progress}%`;
  elements.mobileProgressFill.style.width = `${progress}%`;
  elements.questionCategory.textContent = question.category;
  elements.questionTitle.textContent = question.title;
  elements.questionHint.textContent = question.hint;
  elements.answerGrid.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-card";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(index === selected));
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="answer-card__letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
      <span class="answer-card__text"><strong></strong><small></small></span>
      <span class="answer-card__stamp" aria-hidden="true">犬定</span>
    `;
    button.querySelector("strong").textContent = choice.text;
    button.querySelector("small").textContent = choice.note;
    if (index === selected) button.classList.add("is-selected");
    elements.answerGrid.appendChild(button);
  });

  elements.backButton.disabled = state.current === 0;
  elements.nextButton.disabled = selected === undefined;
  elements.nextButton.querySelector("span").textContent =
    state.current === questions.length - 1
      ? "生成犬格档案"
      : selected === undefined
        ? "捡起一条狗勾证据"
        : "继续散步";
  animateQuestion();
}

function selectAnswer(index) {
  state.answers[state.current] = index;
  elements.answerGrid.querySelectorAll(".answer-card").forEach((card) => {
    const active = Number(card.dataset.index) === index;
    card.classList.toggle("is-selected", active);
    card.setAttribute("aria-checked", String(active));
  });
  elements.nextButton.disabled = false;
  elements.nextButton.querySelector("span").textContent =
    state.current === questions.length - 1 ? "生成犬格档案" : "继续散步";
}

function handleAnswerKeys(event) {
  const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
  if (!keys.includes(event.key)) return;
  event.preventDefault();
  const cards = [...elements.answerGrid.querySelectorAll(".answer-card")];
  const current = cards.indexOf(document.activeElement);
  let next = current;
  if (event.key === "Home") next = 0;
  else if (event.key === "End") next = cards.length - 1;
  else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    next = (Math.max(current, 0) + 1) % cards.length;
  } else {
    next = (Math.max(current, 0) - 1 + cards.length) % cards.length;
  }
  cards[next].focus();
  selectAnswer(next);
}

function goBack() {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
}

function goNext() {
  if (state.answers[state.current] === undefined) return;
  if (state.current === questions.length - 1) {
    beginCalculation();
    return;
  }
  state.current += 1;
  renderQuestion();
}

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function beginCalculation() {
  clearTimers();
  setScreen("calculating");
  const statuses = ["先检测看到球时的起跳高度", "再读取饭盆与玩具的优先级", "最后复核拆家与迎接记录"];
  statuses.forEach((status, index) => {
    timers.push(window.setTimeout(() => {
      elements.calculatingStatus.textContent = status;
      if (index === 2) {
        elements.calculatingTitle.innerHTML = "鼻纹比对完成，<br>正在唤醒犬格";
      }
    }, index * 440));
  });
  timers.push(window.setTimeout(() => {
    state.ranking = rankDogProfiles();
    renderResult();
    setScreen("result");
  }, 1500));
}

function getUserCode() {
  const counts = {
    expression: { B: 0, C: 0 },
    affection: { A: 0, I: 0 },
    exploration: { R: 0, H: 0 },
    motivation: { K: 0, T: 0 },
  };
  questions.forEach((question, index) => {
    counts[question.axis][question.choices[state.answers[index]].trait] += 1;
  });
  return [
    counts.expression.B > counts.expression.C ? "B" : "C",
    counts.affection.A > counts.affection.I ? "A" : "I",
    counts.exploration.R > counts.exploration.H ? "R" : "H",
    counts.motivation.K > counts.motivation.T ? "K" : "T",
  ].join("");
}

function rankDogProfiles() {
  const code = getUserCode();
  return Object.values(profiles)
    .map((profile, index) => {
      let matches = 0;
      for (let i = 0; i < 4; i += 1) {
        if (code[i] === profile.code[i]) matches += 1;
      }
      return {
        profile,
        code,
        matches,
        score: Math.round(70 + (matches / 4) * 30),
        index,
      };
    })
    .sort((a, b) => b.matches - a.matches || a.index - b.index);
}

function dogIllustration(type) {
  const p = profiles[type].palette;
  const visuals = {
    golden: `
      <path class="dog-line dog-fill" d="M142 196C102 168 90 91 132 74c37-15 73 31 91 76m116 48c40-28 52-105 10-122-37-15-73 31-91 76"/>
      <path class="dog-line dog-fill" d="M127 199c0-62 47-99 148-99s148 37 148 99v78c0 69-58 111-148 111s-148-42-148-111Z"/>
      <path class="dog-line dog-fill" d="M180 329c-43 21-64 62-67 112h324c-3-50-24-91-67-112-25 25-57 38-95 38s-70-13-95-38Z"/>
      <path class="dog-ink" d="M203 219c17-17 39-16 56 2-16 9-42 9-56-2Zm111 0c17-18 39-17 56-2-14 11-40 11-56 2Z"/>
      <path class="dog-fill dog-tongue" d="M266 277c14 20 15 38 3 54-14-12-18-27-14-46Z"/>
      <ellipse class="dog-ink" cx="275" cy="262" rx="31" ry="23"/>
      <path class="dog-line" d="M275 285v14m0 0c-16 16-36 14-49 4m49-4c16 16 36 14 49 4"/>
      <path class="dog-line" d="M150 259 83 240m70 45-74 25m330-51 67-19m-70 45 74 25"/>
      <path class="dog-line" d="m201 316 23 20 32-20 31 20 23-20"/>
      <path class="dog-fill dog-accent" d="M190 327c58 20 137 20 195 0l10 28c-71 25-151 25-222 0Z"/>
      <path class="dog-line dog-accent" d="M442 294c41-9 62-36 67-71"/>
      <path class="dog-line" d="M216 82c25-21 53-31 83-31m56 4c22 6 39 18 51 35"/>
      <path class="dog-accent" d="M88 119c14-23 43-30 64-14 18 15 20 43 5 61-25 29-69 20-75-15 11 6 22 7 34 3-9-11-9-24-2-35Z"/>
      <circle cx="505" cy="155" r="13" class="dog-accent"/>
    `,
    border: `
      <path class="dog-line dog-fill" d="M156 199c-31-35-35-96-2-106 27-8 54 29 68 70m120 42c32-35 35-98 2-106-26-8-52 28-67 70"/>
      <path class="dog-line dog-fill" d="M142 204c0-54 43-88 142-88s142 34 142 88v80c0 66-54 100-142 100S142 350 142 284Z"/>
      <path class="dog-line dog-fill" d="M185 330c-42 20-64 62-67 112h331c-3-50-24-92-67-112l-28 14h-140Z"/>
      <path class="dog-ink" d="M207 226c20-19 42-18 58 3-15 10-43 9-58-3Zm110 0c20-20 42-18 58-3-15 12-42 13-58 3Z"/>
      <path class="dog-line" d="M274 272v12m0 0c-14 15-31 13-43 4m43-4c14 15 31 13 43 4"/>
      <ellipse class="dog-ink" cx="274" cy="257" rx="28" ry="20"/>
      <path class="dog-line" d="M173 273 103 248m77 46-81 24m351-46 70-25m-77 46 81 24"/>
      <path class="dog-fill dog-accent" d="M183 322c61 19 121 19 182 0l8 26c-65 22-133 22-198 0Z"/>
      <path class="dog-line" d="M225 331c36 18 67 18 98 0"/>
      <path class="dog-accent" d="m111 149 61-45 25 23-42 58Z"/>
      <path class="dog-line" d="m142 140 34-20m-18 34 24-14"/>
      <path class="dog-line dog-accent" d="M458 146c38 18 51 47 38 87"/>
      <circle cx="492" cy="264" r="18" class="dog-line"/>
      <path class="dog-line" d="m476 264 12 12 22-27"/>
    `,
    husky: `
      <path class="dog-line dog-fill" d="M146 201c-33-34-38-98-3-108 29-9 56 30 71 72m127 42c35-36 40-100 5-110-29-9-58 30-73 72"/>
      <path class="dog-line dog-fill" d="M137 207c0-57 45-91 148-91s148 34 148 91v75c0 65-57 103-148 103S137 347 137 282Z"/>
      <path class="dog-ink" d="M173 170c28-26 64-31 97-17l-11 38c-29-12-55-7-80 12Zm183-18c31-13 64-7 91 20-24 18-52 22-82 12Z"/>
      <path class="dog-ink" d="M203 226c16-14 36-14 52 0-10 10-42 10-52 0Zm112 0c16-14 36-14 52 0-10 10-42 10-52 0Z"/>
      <ellipse class="dog-ink" cx="285" cy="267" rx="28" ry="20"/>
      <path class="dog-line" d="M285 288v12m0 0c-16 20-35 19-50 8m50-8c16 20 35 19 50 8"/>
      <path class="dog-line" d="M175 279 101 256m77 48-83 24m377-48 74-23m-77 46 83 24"/>
      <path class="dog-line dog-fill" d="M205 337c-43 21-64 61-67 105h330c-3-44-24-84-67-105-28 21-73 32-98 32s-70-11-98-32Z"/>
      <path class="dog-line dog-accent" d="M440 214c54-27 75-80 49-117-24-34-72-9-68 34"/>
      <text x="388" y="112" class="dog-text">AWOOO</text>
      <path class="dog-soft" d="M72 120c23-27 51-29 75-5 21 21 20 52-3 70-30 23-67 7-75-26 13 5 26 3 37-5-13-9-22-21-34-34Z"/>
      <path class="dog-line" d="m68 92 22 16m-29 17 28 7m410 77 29 10m-34 19 26 17"/>
      <circle cx="101" cy="300" r="13" class="dog-soft"/>
      <circle cx="475" cy="353" r="9" class="dog-soft"/>
    `,
    corgi: `
      <path class="dog-line dog-fill" d="M161 185c-35-44-35-103 4-109 34-6 58 35 68 80m96 29c11-45 34-86 68-80 39 6 39 65 4 109"/>
      <path class="dog-line dog-fill" d="M149 194c0-51 45-82 139-82s139 31 139 82v70c0 60-53 91-139 91S149 324 149 264Z"/>
      <path class="dog-line dog-fill" d="M186 307c-37 18-58 55-62 101h326c-4-46-25-83-62-101l-25 12H211Z"/>
      <path class="dog-ink" d="M212 211c15-14 33-14 49 0-10 9-39 9-49 0Zm88 0c15-14 33-14 49 0-10 9-39 9-49 0Z"/>
      <ellipse class="dog-ink" cx="274" cy="248" rx="26" ry="18"/>
      <path class="dog-line" d="M274 266v11m0 0c-14 13-29 12-40 5m40-5c14 13 29 12 40 5"/>
      <path class="dog-line" d="M179 252 113 238m65 39-68 21m326-44 66-14m-67 39 69 21"/>
      <path class="dog-line" d="m204 304 70 28 70-28"/>
      <path class="dog-fill dog-accent" d="M189 307c53 27 117 27 170 0l8 27c-61 30-125 30-186 0Z"/>
      <path class="dog-line" d="M228 382v29m94-29v29"/>
      <path class="dog-accent" d="M368 315 419 263l31 25-39 66Z"/>
      <path class="dog-line" d="m402 301 26 18m-50 19 25-18"/>
      <path class="dog-line dog-fire" d="M36 370c15-35 39-56 71-62m-80 89c12-22 28-38 49-47m5 69c1-24 8-44 22-60"/>
      <circle cx="430" cy="195" r="11" class="dog-accent"/>
      <text x="399" y="111" class="dog-text">GO!</text>
    `,
    shiba: `
      <path class="dog-line dog-fill" d="M166 201c-34-40-36-101 3-108 32-7 57 33 68 77m90 31c11-44 36-84 68-77 39 7 37 68 3 108"/>
      <path class="dog-line dog-fill" d="M152 205c0-51 44-82 135-82s135 31 135 82v70c0 61-50 93-135 93s-135-32-135-93Z"/>
      <path class="dog-line dog-fill" d="M188 319c-38 18-58 56-61 102h326c-3-46-23-84-61-102l-28 15h-148Z"/>
      <path class="dog-ink" d="M209 220c16-13 33-12 47 1-10 7-37 7-47-1Zm92 0c14-13 31-14 47-1-10 8-37 8-47 1Z"/>
      <path class="dog-ink" d="M275 245c12 0 20 8 20 16s-9 13-21 13-21-6-21-13 10-16 22-16Z"/>
      <path class="dog-line" d="M275 274v10m0 0c-13 10-27 10-38 4m38-4c13 10 27 10 38 4"/>
      <path class="dog-line" d="M180 257 111 245m67 33-70 17m329-36 69-12m-67 33 70 17"/>
      <path class="dog-fill dog-accent" d="M191 316c55 21 113 21 168 0l7 25c-59 23-123 23-182 0Z"/>
      <path class="dog-line" d="M276 339v55"/>
      <circle cx="276" cy="409" r="18" class="dog-line"/>
      <path class="dog-line" d="m260 409 11 11 21-23"/>
      <path class="dog-soft" d="M99 101c31-30 69-31 96-3 24 26 19 65-11 83-41 25-83 5-91-34 14 8 29 8 43 0-18-13-27-30-37-46Z"/>
      <path class="dog-line dog-firm" d="M99 100c31-30 69-31 96-3 24 26 19 65-11 83"/>
      <path class="dog-line" d="M477 311c31-8 51-25 60-51"/>
      <text x="397" y="112" class="dog-text">NO.</text>
    `,
    poodle: `
      <circle cx="212" cy="111" r="62" class="dog-fill"/>
      <circle cx="337" cy="104" r="65" class="dog-fill"/>
      <circle cx="151" cy="186" r="56" class="dog-fill"/>
      <circle cx="398" cy="183" r="55" class="dog-fill"/>
      <path class="dog-line dog-fill" d="M139 219c0-57 60-99 135-99s135 42 135 99v68c0 60-50 91-135 91s-135-31-135-91Z"/>
      <path class="dog-line dog-fill" d="M182 322c-38 17-58 54-61 98h305c-3-44-23-81-61-98l-24 13h-135Z"/>
      <circle cx="215" cy="229" r="9" class="dog-ink"/>
      <circle cx="338" cy="229" r="9" class="dog-ink"/>
      <ellipse class="dog-ink" cx="276" cy="263" rx="24" ry="17"/>
      <path class="dog-line" d="M276 280v12m0 0c-13 11-27 10-37 4m37-4c13 11 27 10 37 4"/>
      <path class="dog-line" d="M182 260 119 244m64 35-66 18m303-37 63-16m-64 35 66 18"/>
      <circle cx="165" cy="149" r="28" class="dog-accent"/>
      <circle cx="386" cy="145" r="28" class="dog-accent"/>
      <circle cx="451" cy="234" r="46" class="dog-fill"/>
      <path class="dog-fill dog-accent" d="M204 319c49 20 94 20 143 0l13 35c-55 24-113 24-168 0Z"/>
      <path class="dog-line" d="M237 389v30m78-30v30"/>
      <path class="dog-line dog-accent" d="M415 292c32-19 47-45 45-79"/>
      <text x="398" y="105" class="dog-text">★</text>
      <path class="dog-line dog-firm" d="M70 110c25-21 51-22 75-2s26 49 4 70"/>
    `,
    lab: `
      <path class="dog-line dog-fill" d="M151 208c-38-35-38-100-4-110 31-10 60 30 75 78m108 32c16-48 44-88 75-78 34 10 34 75-4 110"/>
      <path class="dog-line dog-fill" d="M135 212c0-57 49-91 142-91s142 34 142 91v76c0 66-57 102-142 102S135 354 135 288Z"/>
      <path class="dog-line dog-fill" d="M176 334c-42 21-65 62-68 109h334c-3-47-26-88-68-109l-31 18h-136Z"/>
      <path class="dog-ink" d="M200 226c16-15 35-15 51 0-10 9-40 9-51 0Zm109 0c16-15 35-15 51 0-10 9-40 9-51 0Z"/>
      <ellipse class="dog-ink" cx="277" cy="261" rx="27" ry="19"/>
      <path class="dog-line" d="M277 280v12m0 0c-15 14-31 13-43 5m43-5c15 14 31 13 43 5"/>
      <path class="dog-line" d="M172 265 103 247m74 39-79 21m337-43 68-18m-73 37 79 21"/>
      <path class="dog-line" d="M248 263c-3 36 1 59 16 69 16-10 19-35 14-70"/>
      <path class="dog-line dog-accent" d="M277 334c-41 16-80 16-119 0"/>
      <path class="dog-line dog-accent" d="M277 334c42 16 80 16 119 0"/>
      <path class="dog-line" d="M235 401c2-22 12-37 29-44m22 44c1-22 10-37 27-44"/>
      <ellipse cx="276" cy="434" rx="91" ry="18" class="dog-fill"/>
      <path class="dog-line" d="M201 431c25 18 125 18 150 0m-135 8v18m120-18v18"/>
      <path class="dog-line dog-drool" d="M290 286c10 16 9 33 1 48m45-278c18 8 31 22 39 41"/>
      <text x="421" y="103" class="dog-text">FOOD</text>
    `,
    samoyed: `
      <circle cx="180" cy="121" r="65" class="dog-fill"/>
      <circle cx="369" cy="118" r="66" class="dog-fill"/>
      <path class="dog-line dog-fill" d="M135 203c0-61 50-99 141-99s141 38 141 99v78c0 69-56 106-141 106S135 350 135 281Z"/>
      <circle cx="211" cy="225" r="10" class="dog-ink"/>
      <circle cx="340" cy="225" r="10" class="dog-ink"/>
      <path class="dog-line" d="M276 253c14 0 22 7 22 15s-10 13-22 13-22-6-22-13 9-15 22-15Z"/>
      <path class="dog-line dog-smile" d="M239 292c21 27 53 27 74 0"/>
      <path class="dog-line" d="M176 255 107 240m76 37-82 20m348-37 69-15m-76 37 82 20"/>
      <path class="dog-line dog-fill" d="M174 333c-43 20-65 61-68 108h341c-3-47-26-88-69-108l-26 19h-152Z"/>
      <path class="dog-fill dog-accent" d="M180 343c61 25 129 25 190 0l8 25c-65 29-141 29-206 0Z"/>
      <path class="dog-line" d="M241 409v31m70-31v31"/>
      <path class="dog-line dog-mud" d="M26 419c39-24 88-22 145 7 53 27 112 16 175-8 73-29 141-27 203 4v57H26Z"/>
      <path class="dog-mud-fill" d="m111 435 15 10-7 17-19-4-7-17Zm121 2 19 8-2 20-21 5-14-17Zm133-11 17 11-4 18-21 2-10-17Z"/>
      <circle cx="460" cy="205" r="16" class="dog-accent"/>
      <path class="dog-line dog-accent" d="M451 194c8-9 18-9 27 0"/>
      <text x="417" y="109" class="dog-text">:)</text>
    `,
  };

  const backdrops = {
    golden: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><circle cx="104" cy="102" r="76" class="dog-bg-dot"/><circle cx="489" cy="361" r="112" class="dog-bg-block"/><path class="dog-bg-line" d="M63 154c42-28 81-32 118-10m260 194c40-18 76-17 108 1"/>`,
    border: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><path d="M20 360 119 229l84 69 84-117 102 93 63-56 108 105v127H20Z" class="dog-bg-block"/><circle cx="469" cy="125" r="68" class="dog-bg-dot"/><path class="dog-bg-line" d="M58 120h100m-70 30h88m258 189h86"/>`,
    husky: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><path d="M20 155c109 19 161-55 265-40 92 14 145 89 275 48v287H20Z" class="dog-bg-block"/><circle cx="477" cy="116" r="91" class="dog-bg-dot"/><path class="dog-bg-line" d="m58 354 70-50 50 40m263-197 75-56"/>`,
    corgi: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><circle cx="112" cy="123" r="92" class="dog-bg-dot"/><path d="M20 382c84-63 153-78 207-45 60-74 150-91 270-50 24 9 44 20 63 33v110H20Z" class="dog-bg-block"/><path class="dog-bg-line" d="m74 351 47-36m-9 73 59-44m298-171 45-31"/>`,
    shiba: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><circle cx="457" cy="128" r="98" class="dog-bg-dot"/><circle cx="130" cy="333" r="107" class="dog-bg-block"/><path class="dog-bg-line" d="M65 137c44 10 76 31 97 61m296 193c-38-1-70-12-96-35"/>`,
    poodle: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><circle cx="289" cy="235" r="185" class="dog-bg-block"/><path class="dog-bg-line" d="m60 100 65 42m-82 82 77 14m325-144-58 40m76 85-78 10"/><circle cx="93" cy="352" r="15" class="dog-bg-dot"/><circle cx="497" cy="340" r="12" class="dog-bg-dot"/>`,
    lab: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><circle cx="143" cy="133" r="104" class="dog-bg-block"/><circle cx="478" cy="361" r="113" class="dog-bg-dot"/><path class="dog-bg-line" d="M55 345h94m-68 38h110m225-276 75 18"/>`,
    samoyed: `<rect x="20" y="20" width="540" height="430" rx="32" class="dog-board"/><circle cx="105" cy="112" r="86" class="dog-bg-dot"/><circle cx="507" cy="335" r="133" class="dog-bg-block"/><path class="dog-bg-line" d="M53 235c35 11 60 32 74 62m301-170c34-18 68-21 101-10"/>`,
  };

  return `
    <svg viewBox="0 0 580 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${profiles[type].breed}犬格插画">
      <style>
        .dog-line,.dog-fill,.dog-ink{stroke:${p.strong};stroke-linecap:round;stroke-linejoin:round;}
        .dog-line{fill:none;stroke-width:5}
        .dog-fill{fill:${p.body};stroke-width:5}
        .dog-ink{fill:${p.strong};stroke-width:5}
        .dog-accent{fill:${p.accent};stroke:${p.strong};stroke-width:4}
        .dog-soft{fill:${p.soft};stroke:${p.strong};stroke-width:4}
        .dog-tongue{fill:#ed7b73;stroke-width:4}
        .dog-fire{stroke:#ef6a4f;stroke-width:5}
        .dog-firm{stroke-width:8}
        .dog-smile{fill:none;stroke:${p.strong};stroke-width:5}
        .dog-drool{stroke:#87bfe3;stroke-width:7}
        .dog-mud{fill:${p.strong};opacity:.26}
        .dog-mud-fill{fill:${p.strong};opacity:.55}
        .dog-text{fill:${p.strong};font-family:"Arial Black","PingFang SC",sans-serif;font-size:31px;font-weight:900}
        .dog-board{fill:${p.pale};stroke:${p.strong};stroke-width:2}
        .dog-bg-block{fill:${p.soft};opacity:.72}
        .dog-bg-dot{fill:${p.accent};stroke:${p.strong};stroke-width:3;opacity:.9}
        .dog-bg-line{fill:none;stroke:${p.strong};stroke-width:2;stroke-linecap:round;opacity:.45}
      </style>
      ${backdrops[type]}
      ${visuals[type]}
    </svg>
  `;
}

function renderResult() {
  const top = state.ranking[0];
  const profile = top.profile;
  const palette = profile.palette;

  document.body.classList.add("has-result");
  document.body.style.setProperty("--dog-strong", palette.strong);
  document.body.style.setProperty("--dog-soft", palette.soft);
  document.body.style.setProperty("--dog-pale", palette.pale);
  document.body.style.setProperty("--dog-accent", palette.accent);
  elements.resultHero.style.setProperty("--dog-strong", palette.strong);
  elements.resultHero.style.setProperty("--dog-soft", palette.soft);
  elements.resultHero.style.setProperty("--dog-pale", palette.pale);
  elements.resultHero.style.setProperty("--dog-accent", palette.accent);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", palette.pale);

  elements.resultBreed.textContent = profile.breed;
  elements.resultName.textContent = profile.name;
  elements.resultCode.textContent = profile.code;
  elements.resultSubtitle.textContent = profile.subtitle;
  elements.resultSummary.textContent = profile.summary;
  elements.artSticker.innerHTML = profile.sticker.replace("\n", "<br>");
  elements.resultArt.innerHTML = dogIllustration(profile.key);
  elements.humanMatch.textContent = profile.humanMatch;
  elements.humanWarning.textContent = profile.warning;
  elements.dogQuote.textContent = `“${profile.quote}”`;

  elements.resultTags.innerHTML = "";
  [profile.breed, ...profile.tags].forEach((tag) => {
    const node = document.createElement("span");
    node.textContent = tag;
    elements.resultTags.appendChild(node);
  });

  elements.letterGrid.innerHTML = "";
  const axisKeys = ["expression", "affection", "exploration", "motivation"];
  profile.code.split("").forEach((letter, index) => {
    const meaning = letterMeanings[axisKeys[index]][letter];
    const item = document.createElement("article");
    item.className = "letter-card";
    item.innerHTML = `<strong>${letter}</strong><span></span><p></p>`;
    item.querySelector("span").textContent = `${meaning.word} · ${meaning.label}`;
    item.querySelector("p").textContent = meaning.text;
    elements.letterGrid.appendChild(item);
  });

  elements.momentsList.innerHTML = "";
  profile.moments.forEach((moment, index) => {
    const item = document.createElement("article");
    item.className = "moment-item";
    item.innerHTML = `<span>0${index + 1}</span><p></p>`;
    item.querySelector("p").textContent = moment;
    elements.momentsList.appendChild(item);
  });

  elements.careList.innerHTML = "";
  profile.care.forEach((care, index) => {
    const item = document.createElement("article");
    item.className = "care-item";
    item.innerHTML = `<span>${index + 1}</span><p></p>`;
    item.querySelector("p").textContent = care;
    elements.careList.appendChild(item);
  });

  elements.alternateGrid.innerHTML = "";
  state.ranking.slice(1, 3).forEach((match) => {
    const item = document.createElement("article");
    item.className = "alternate-card";
    item.style.setProperty("--alt-color", match.profile.palette.strong);
    item.innerHTML = `
      <span class="alternate-card__mark"></span>
      <div><strong></strong><p></p></div>
      <span class="alternate-card__score"><b></b><small>犬格相似度</small></span>
    `;
    item.querySelector(".alternate-card__mark").textContent = match.profile.name.slice(0, 1);
    item.querySelector("strong").textContent = match.profile.name;
    item.querySelector("p").textContent = `${match.profile.breed} · ${match.profile.code}`;
    item.querySelector(".alternate-card__score b").textContent = String(match.score);
    elements.alternateGrid.appendChild(item);
  });
}

function resetQuiz() {
  clearTimers();
  state.current = 0;
  state.answers = Array(questions.length).fill(undefined);
  state.ranking = [];
  document.body.classList.remove("has-result");
  ["strong", "soft", "pale", "accent"].forEach((key) => {
    document.body.style.removeProperty(`--dog-${key}`);
  });
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f2eee3");
  setScreen("welcome");
}

function handleBrandClick(event) {
  event.preventDefault();
  if (state.screen === "welcome") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (state.screen === "quiz") {
    const leave = window.confirm("要放弃这次犬格调查吗？当前选择会被清空。");
    if (!leave) return;
  }
  resetQuiz();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2200);
}

async function copyResult() {
  if (!state.ranking.length) return;
  const top = state.ranking[0];
  const text =
    `我家狗的犬格是「${top.profile.name}」${top.profile.code}（${top.profile.breed}）。\n` +
    `${top.profile.subtitle}\n${top.profile.summary}\n汪语：${top.profile.quote}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("犬格结果已复制");
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    showToast(copied ? "犬格结果已复制" : "复制失败，请手动选择文字");
  }
}

function roundedRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const chars = [...text];
  let line = "";
  let lines = 0;
  chars.forEach((char) => {
    if (lines >= maxLines) return;
    const candidate = line + char;
    if (context.measureText(candidate).width > maxWidth && line) {
      context.fillText(line, x, y + lines * lineHeight);
      line = char;
      lines += 1;
    } else {
      line = candidate;
    }
  });
  if (line && lines < maxLines) context.fillText(line, x, y + lines * lineHeight);
}

async function saveDogCard() {
  if (!state.ranking.length) return;
  const top = state.ranking[0];
  const profile = top.profile;
  const palette = profile.palette;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const context = canvas.getContext("2d");
    context.fillStyle = palette.pale;
    context.fillRect(0, 0, 1080, 1350);
    context.strokeStyle = "rgba(29,38,35,.055)";
    for (let x = 0; x < 1080; x += 42) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, 1350);
      context.stroke();
    }
    for (let y = 0; y < 1350; y += 42) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(1080, y);
      context.stroke();
    }

    context.fillStyle = "#1d2623";
    context.beginPath();
    context.arc(98, 89, 29, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = palette.accent;
    context.beginPath();
    context.moveTo(79, 77);
    context.lineTo(84, 57);
    context.lineTo(98, 70);
    context.lineTo(116, 70);
    context.lineTo(130, 57);
    context.lineTo(135, 77);
    context.fill();
    context.fillStyle = "#1d2623";
    context.font = '900 28px "Songti SC", "STSong", serif';
    context.fillText("犬格档案", 145, 82);
    context.fillStyle = "#5d6760";
    context.font = '500 14px "PingFang SC", sans-serif';
    context.fillText("BARK 8 · 狗狗行为观察所", 145, 106);
    context.textAlign = "right";
    context.font = '900 18px "Arial Black", "PingFang SC", sans-serif';
    context.fillText(profile.code, 991, 87);
    context.textAlign = "left";

    roundedRect(context, 64, 139, 952, 524, 30);
    context.fillStyle = palette.soft;
    context.fill();
    context.strokeStyle = "#1d2623";
    context.lineWidth = 2;
    context.stroke();

    const svgBlob = new Blob([dogIllustration(profile.key)], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const image = new Image();
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
      image.src = svgUrl;
    });
    context.drawImage(image, 556, 165, 424, 344);
    URL.revokeObjectURL(svgUrl);

    context.fillStyle = palette.strong;
    context.font = '700 17px "PingFang SC", sans-serif';
    context.fillText(profile.breed, 100, 202);
    context.fillStyle = "#1d2623";
    context.font = '900 76px "Songti SC", "STSong", serif';
    context.fillText(profile.name, 95, 299);
    context.fillStyle = palette.strong;
    context.font = '700 20px "PingFang SC", sans-serif';
    context.fillText(profile.subtitle, 99, 340);
    context.fillStyle = "#424b47";
    context.font = '400 20px "PingFang SC", sans-serif';
    wrapCanvasText(context, profile.summary, 99, 397, 470, 31, 7);

    context.fillStyle = "#1d2623";
    context.font = '900 30px "Songti SC", "STSong", serif';
    context.fillText("狗生名场面", 76, 730);
    profile.moments.forEach((moment, index) => {
      const y = 798 + index * 112;
      context.fillStyle = palette.strong;
      context.beginPath();
      context.arc(99, y - 10, 24, 0, Math.PI * 2);
      context.fill();
      context.textAlign = "center";
      context.fillStyle = "#fffaf0";
      context.font = '900 14px "Arial Black", "PingFang SC", sans-serif';
      context.fillText(`0${index + 1}`, 99, y - 4);
      context.textAlign = "left";
      context.fillStyle = "#424b47";
      context.font = '500 18px "PingFang SC", sans-serif';
      wrapCanvasText(context, moment, 139, y, 835, 28, 2);
    });

    roundedRect(context, 64, 1132, 952, 93, 16);
    context.fillStyle = palette.accent;
    context.fill();
    context.strokeStyle = "rgba(29,38,35,.2)";
    context.stroke();
    context.fillStyle = "#1d2623";
    context.font = '700 14px "PingFang SC", sans-serif';
    context.fillText("今日汪语", 88, 1168);
    context.font = '900 23px "Songti SC", "STSong", serif';
    context.fillText(`“${profile.quote}”`, 88, 1203);

    context.fillStyle = "#5d6760";
    context.font = '500 14px "PingFang SC", sans-serif';
    context.fillText(profile.tags.join(" · "), 82, 1302);
    context.textAlign = "right";
    context.fillText("犬格仅供娱乐 · 不代表品种或健康诊断", 998, 1302);
    context.textAlign = "left";

    canvas.toBlob((blob) => {
      if (!blob) {
        showToast("犬格档案生成失败，请重试");
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `犬格-${profile.name}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1500);
      showToast("犬格档案已保存");
    }, "image/png");
  } catch (error) {
    showToast("当前浏览器无法生成图片");
  }
}

elements.startButton.addEventListener("click", startQuiz);
elements.answerGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".answer-card");
  if (!card) return;
  selectAnswer(Number(card.dataset.index));
});
elements.answerGrid.addEventListener("keydown", handleAnswerKeys);
elements.backButton.addEventListener("click", goBack);
elements.nextButton.addEventListener("click", goNext);
document.querySelector("#brand-home").addEventListener("click", handleBrandClick);
document.querySelector("#restart-top").addEventListener("click", resetQuiz);
document.querySelector("#restart-button").addEventListener("click", resetQuiz);
elements.saveButton.addEventListener("click", saveDogCard);
elements.copyButton.addEventListener("click", copyResult);
