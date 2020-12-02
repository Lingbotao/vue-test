import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          黄焖鸡: Mock.Random.float(100, 8000, 0, 2),
          大盘鸡: Mock.Random.float(100, 8000, 0, 2),
          炸鸡: Mock.Random.float(100, 8000, 0, 2),
          白切鸡: Mock.Random.float(100, 8000, 0, 2),
          肉蛋葱鸡: Mock.Random.float(100, 8000, 0, 2),
          烧鸡: Mock.Random.float(100, 8000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        dishData: [
          {
            name: '烧鸡',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '黄焖鸡',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '大盘鸡',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '炸鸡',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '白切鸡',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '肉蛋葱鸡',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        orderData: {
          date: ['20200604', '20200605', '20200606', '20200607', '20200608', '20200609', '20200610'],
          data: List
        },
        tableData: [
          {
            name: '炸鸡',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '大盘鸡',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '黄焖鸡',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '烧鸡',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '肉蛋葱鸡',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '白切记',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          }
        ]
      }
    }
  }
}
