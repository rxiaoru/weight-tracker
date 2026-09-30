// 体重追踪数据
// 每天给我发吃的和体重，我会帮你更新这里
const TRACKER_DATA = {
  baseline: {
    weight: 70.0,
    label: "旅行前基线"
  },
  target: 70.0,
  days: [
    {
      date: "2026-09-29",
      weekday: "周二",
      weight: {
        morning: 72.0,
        evening: null,
        change: 2.0,
        changeJin: 4.0,
        note: "比昨天早上下降1.4kg，水分回落中 💪"
      },
      diet: [
        { meal: "早餐", time: "早上", items: [
          { name: "美式咖啡+纯牛奶", portion: "自制拿铁", kcal: 70 },
          { name: "全麦面包", portion: "1片(昨天剩的)", kcal: 75 }
        ]},
        { meal: "午餐", time: "中午", items: [
          { name: "煎蛋", portion: "1个", kcal: 90 },
          { name: "煎牛肉", portion: "~100g", kcal: 200 },
          { name: "虾仁", portion: "7-8个", kcal: 60 },
          { name: "烤肠", portion: "1根", kcal: 180 },
          { name: "鸡米花", portion: "5-6块", kcal: 220 },
          { name: "菠菜", portion: "1份", kcal: 40 },
          { name: "米饭", portion: "半碗", kcal: 100 }
        ]}
      ],
      summary: {
        totalKcal: 1035,
        protein: "~55g",
        carbs: "~95g",
        fat: "~45g",
        veggieServings: 1,
        water: "待记录"
      },
      advice: {
        good: ["体重回落(↓1.4kg)", "午餐蛋白质非常充足(蛋+牛肉+虾)", "菠菜补充了纤维"],
        tips: ["鸡米花和烤肠是炸物，热量较高(400kcal)", "午餐总热量偏高(~980kcal)", "晚餐建议清淡：蔬菜+少量蛋白", "今天总热量已接近1100，晚餐控制在300-400", "多喝水帮助代谢"],
        overall: "午餐蛋白质很棒，但炸物偏多，晚餐吃清淡点就好"
      }
    },
    {
      date: "2026-09-28",
      weekday: "周一",
      weight: {
        morning: 73.4,
        evening: null,
        change: 3.4,
        changeJin: 6.8,
        note: "景德镇回来第一天，正在恢复"
      },
      diet: [
        { meal: "早餐", time: "早上", items: [{ name: "自制美式咖啡", portion: "1杯", kcal: 5 }] },
        { meal: "午餐", time: "中午", items: [
          { name: "蒜苗芦笋炒肉", portion: "~100g", kcal: 80 },
          { name: "芹菜黄瓜凉拌", portion: "~80g", kcal: 25 },
          { name: "小白菜香菇", portion: "~100g", kcal: 60 },
          { name: "青椒香菇肉片", portion: "~80g", kcal: 110 },
          { name: "豌豆虾仁蛋", portion: "~80g", kcal: 100 },
          { name: "凉拌豆芽", portion: "~80g", kcal: 20 },
          { name: "蒸玉米", portion: "~1/2根", kcal: 60 },
          { name: "米饭", portion: "半拳头", kcal: 75 }
        ]},
        { meal: "加餐", time: "下午", items: [
          { name: "全麦面包", portion: "1片", kcal: 75 },
          { name: "菱角", portion: "2个", kcal: 40 },
          { name: "西红柿", portion: "1个", kcal: 25 }
        ]}
      ],
      summary: {
        totalKcal: 675,
        protein: "~35g",
        carbs: "~70g",
        fat: "~18g",
        veggieServings: 6,
        water: "待记录"
      },
      advice: {
        good: ["蔬菜摄入很棒，6份种类丰富", "碳水控制合理", "美式咖啡是好的选择"],
        tips: ["蛋白质偏少，晚餐建议补足", "菱角属淀粉类需计入碳水", "全天热量偏低，晚餐正常吃", "继续避免含糖饮料", "多喝水 2000ml+"],
        overall: "适合减重期，注意补足蛋白质和水分"
      }
    }
  ]
};
