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
