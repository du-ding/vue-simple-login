<template>
  <div class="main">
    <div class="left">
      <dv-border-box-1 class="scrollBox">
        <dv-scroll-ranking-board :config="scrollConfig"
                                 style="width:350px;height:380px;padding: 20px;color:#2fe7c9" />
      </dv-border-box-1>
      <dv-border-box-1 class="pieBox">
        <div ref="pie"
             class="pie" />
        <div class="number">
          <div style="width:150px">
            <dv-digital-flop :config="numberConfig"
                             style="width:75px;height:25px;" />
            <dv-digital-flop :config="numberConfig"
                             style="width:75px;height:25px;" />
          </div>
          <div style="width:150px">
            <dv-digital-flop :config="numberConfig"
                             style="width:75px;height:25px;" />
            <dv-digital-flop :config="numberConfig"
                             style="width:75px;height:25px;" />
          </div>
        </div>
      </dv-border-box-1>
      <dv-border-box-1 class="percentPond">
        <dv-percent-pond :config="percentPondconfig"
                         style="width:200px;height:50px;margin: 0 auto;margin-bottom:15px" />
        <div>项目进度</div>
      </dv-border-box-1>
    </div>
    <div class="map">
      <dv-flyline-chart-enhanced :config="config"
                                 :dev="true"
                                 style="width:100%;height:100%;" />
      <div style="display:flex;padding-left:5%;margin-top: -50px">
        <dv-active-ring-chart :config="ringConfig"
                              style="width:200px;height:200px" />
        <dv-active-ring-chart :config="ringConfig"
                              style="width:200px;height:200px" />
        <dv-active-ring-chart :config="ringConfig"
                              style="width:200px;height:200px" />
        <dv-active-ring-chart :config="ringConfig"
                              style="width:200px;height:200px" />
      </div>

    </div>
    <div class="right">
      <div class="rightTop">
        <div class="board">111</div>
        <div class="board">111</div>
      </div>
      <div class="rightTop">
        <div class="board">111</div>
        <div class="board">111</div>
      </div>
      <dv-border-box-13 class="radar">
        <div ref="radar"
             class="radarBox"></div>
      </dv-border-box-13>

    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    setInterval(() => {
      this.numberConfig.number[0] = this.numberConfig.number[0] + 35
      this.numberConfig = { ...this.numberConfig }
    }, 3000);
    // 饼图
    var pie = this.$echarts.init(this.$refs.pie);
    pie.setOption({
      series: [
        {
          type: 'pie',
          roseType: 'area',
          data: [
            {
              value: 635,
              name: '太原'
            },
            {
              value: 1234,
              name: '天津'
            },
            {
              value: 1548,
              name: '长春'
            }
          ]
        }
      ]
    });
    //雷达图
    var radar = this.$echarts.init(this.$refs.radar);
    const dataBJ = [
      [55, 9, 56, 0.46, 18, 6, 1],
      [25, 11, 21, 0.65, 34, 9, 2],
      [56, 7, 63, 0.3, 14, 5, 3],
      [33, 7, 29, 0.33, 16, 6, 4],
      [42, 24, 44, 0.76, 40, 16, 5],
      [82, 58, 90, 1.77, 68, 33, 6],
      [74, 49, 77, 1.46, 48, 27, 7],
      [78, 55, 80, 1.29, 59, 29, 8],
      [267, 216, 280, 4.8, 108, 64, 9],
      [185, 127, 216, 2.52, 61, 27, 10],
      [39, 19, 38, 0.57, 31, 15, 11],
      [41, 11, 40, 0.43, 21, 7, 12],
      [64, 38, 74, 1.04, 46, 22, 13],
      [108, 79, 120, 1.7, 75, 41, 14],
      [108, 63, 116, 1.48, 44, 26, 15],
      [33, 6, 29, 0.34, 13, 5, 16],
      [94, 66, 110, 1.54, 62, 31, 17],
      [186, 142, 192, 3.88, 93, 79, 18],
      [57, 31, 54, 0.96, 32, 14, 19],
      [22, 8, 17, 0.48, 23, 10, 20],
      [39, 15, 36, 0.61, 29, 13, 21],
      [94, 69, 114, 2.08, 73, 39, 22],
      [99, 73, 110, 2.43, 76, 48, 23],
      [31, 12, 30, 0.5, 32, 16, 24],
      [42, 27, 43, 1, 53, 22, 25],
      [154, 117, 157, 3.05, 92, 58, 26],
      [234, 185, 230, 4.09, 123, 69, 27],
      [160, 120, 186, 2.77, 91, 50, 28],
      [134, 96, 165, 2.76, 83, 41, 29],
      [52, 24, 60, 1.03, 50, 21, 30],
      [46, 5, 49, 0.28, 10, 6, 31]
    ];
    const dataGZ = [
      [26, 37, 27, 1.163, 27, 13, 1],
      [85, 62, 71, 1.195, 60, 8, 2],
      [78, 38, 74, 1.363, 37, 7, 3],
      [21, 21, 36, 0.634, 40, 9, 4],
      [41, 42, 46, 0.915, 81, 13, 5],
      [56, 52, 69, 1.067, 92, 16, 6],
      [64, 30, 28, 0.924, 51, 2, 7],
      [55, 48, 74, 1.236, 75, 26, 8],
      [76, 85, 113, 1.237, 114, 27, 9],
      [91, 81, 104, 1.041, 56, 40, 10],
      [84, 39, 60, 0.964, 25, 11, 11],
      [64, 51, 101, 0.862, 58, 23, 12],
      [70, 69, 120, 1.198, 65, 36, 13],
      [77, 105, 178, 2.549, 64, 16, 14],
      [109, 68, 87, 0.996, 74, 29, 15],
      [73, 68, 97, 0.905, 51, 34, 16],
      [54, 27, 47, 0.592, 53, 12, 17],
      [51, 61, 97, 0.811, 65, 19, 18],
      [91, 71, 121, 1.374, 43, 18, 19],
      [73, 102, 182, 2.787, 44, 19, 20],
      [73, 50, 76, 0.717, 31, 20, 21],
      [84, 94, 140, 2.238, 68, 18, 22],
      [93, 77, 104, 1.165, 53, 7, 23],
      [99, 130, 227, 3.97, 55, 15, 24],
      [146, 84, 139, 1.094, 40, 17, 25],
      [113, 108, 137, 1.481, 48, 15, 26],
      [81, 48, 62, 1.619, 26, 3, 27],
      [56, 48, 68, 1.336, 37, 9, 28],
      [82, 92, 174, 3.29, 0, 13, 29],
      [106, 116, 188, 3.628, 101, 16, 30],
      [118, 50, 0, 1.383, 76, 11, 31]
    ];
    const dataSH = [
      [91, 45, 125, 0.82, 34, 23, 1],
      [65, 27, 78, 0.86, 45, 29, 2],
      [83, 60, 84, 1.09, 73, 27, 3],
      [109, 81, 121, 1.28, 68, 51, 4],
      [106, 77, 114, 1.07, 55, 51, 5],
      [109, 81, 121, 1.28, 68, 51, 6],
      [106, 77, 114, 1.07, 55, 51, 7],
      [89, 65, 78, 0.86, 51, 26, 8],
      [53, 33, 47, 0.64, 50, 17, 9],
      [80, 55, 80, 1.01, 75, 24, 10],
      [117, 81, 124, 1.03, 45, 24, 11],
      [99, 71, 142, 1.1, 62, 42, 12],
      [95, 69, 130, 1.28, 74, 50, 13],
      [116, 87, 131, 1.47, 84, 40, 14],
      [108, 80, 121, 1.3, 85, 37, 15],
      [134, 83, 167, 1.16, 57, 43, 16],
      [79, 43, 107, 1.05, 59, 37, 17],
      [71, 46, 89, 0.86, 64, 25, 18],
      [97, 71, 113, 1.17, 88, 31, 19],
      [84, 57, 91, 0.85, 55, 31, 20],
      [87, 63, 101, 0.9, 56, 41, 21],
      [104, 77, 119, 1.09, 73, 48, 22],
      [87, 62, 100, 1, 72, 28, 23],
      [168, 128, 172, 1.49, 97, 56, 24],
      [65, 45, 51, 0.74, 39, 17, 25],
      [39, 24, 38, 0.61, 47, 17, 26],
      [39, 24, 39, 0.59, 50, 19, 27],
      [93, 68, 96, 1.05, 79, 29, 28],
      [188, 143, 197, 1.66, 99, 51, 29],
      [174, 131, 174, 1.55, 108, 50, 30],
      [187, 143, 201, 1.39, 89, 53, 31]
    ];
    const lineStyle = {
      width: 1,
      opacity: 0.5
    };
    const option = {
      title: {
        text: 'AQI - Radar',
        left: 'center',
        textStyle: {
          color: '#eee'
        }
      },
      legend: {
        bottom: 5,
        data: ['Beijing', 'Shanghai', 'Guangzhou'],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        selectedMode: 'single'
      },
      radar: {
        indicator: [
          { name: 'AQI', max: 300 },
          { name: 'PM2.5', max: 250 },
          { name: 'PM10', max: 300 },
          { name: 'CO', max: 5 },
          { name: 'NO2', max: 200 },
          { name: 'SO2', max: 100 }
        ],
        shape: 'circle',
        splitNumber: 5,
        axisName: {
          color: 'rgb(238, 197, 102)'
        },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)',
              'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)',
              'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)',
              'rgba(238, 197, 102, 1)'
            ].reverse()
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)'
          }
        }
      },
      series: [
        {
          name: 'Beijing',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,
          symbol: 'none',
          itemStyle: {
            color: '#F9713C'
          },
          areaStyle: {
            opacity: 0.1
          }
        },
        {
          name: 'Shanghai',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataSH,
          symbol: 'none',
          itemStyle: {
            color: '#B3E4A1'
          },
          areaStyle: {
            opacity: 0.05
          }
        },
        {
          name: 'Guangzhou',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataGZ,
          symbol: 'none',
          itemStyle: {
            color: 'rgb(238, 197, 102)'
          },
          areaStyle: {
            opacity: 0.05
          }
        }
      ]
    };
    radar.setOption(option)

  },
  data () {
    return {
      config: {
        points: [
          {
            name: '南京',
            coordinate: [0.68, 0.68],
            halo: {
              show: true,
            },
            icon: {
              src: '/mapCenterPoint.png',
              width: 30,
              height: 30
            },
            text: {
              show: true
            }
          },
          {
            name: '天津',
            coordinate: [0.66, 0.48]
          },
          {
            name: '西安',
            coordinate: [0.46, 0.51]
          },
          {
            name: '太原',
            coordinate: [0.60, 0.55],
            halo: {
              show: true,
              color: '#8378ea'
            }
          },
          {
            name: '拉萨',
            coordinate: [0.37, 0.66],
            halo: {
              show: true,
              color: '#37a2da'
            }
          },
          {
            name: '广州',
            coordinate: [0.63, 0.85]
          },
          {
            name: '新疆',
            coordinate: [0.32, 0.41]
          },
          {
            name: '辽阳',
            coordinate: [0.74, 0.45]
          },
          {
            name: '长春',
            coordinate: [0.79, 0.37]
          },
        ],
        lines: [
          {
            source: '天津',
            target: '南京'
          },
          {
            source: '太原',
            target: '南京',
            color: '#fb7293',
            width: 2
          },
          {
            source: '拉萨',
            target: '南京',
            color: '#fb7293',
            width: 2
          },
          {
            source: '新疆',
            target: '南京'
          },
          {
            source: '辽阳',
            target: '南京'
          },
          {
            source: '长春',
            target: '南京'
          },
          {
            source: '西安',
            target: '南京',
            color: '#37a2da'
          },
          {
            source: '广州',
            target: '南京',
            color: '#8378ea'
          },
        ],
        icon: {
          show: true,
          src: '/mapPoint.png'
        },
        text: {
          show: true,
        },
        k: 0.5,
        bgImgSrc: '/map.png'
      },
      scrollConfig: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 45
          },
          {
            name: '漯河',
            value: 29
          }
        ]
      },
      numberConfig: {
        number: [15],
        toFixed: 1,
        textAlign: 'left',
        content: '{nt}件',
        style: {
          fontSize: 20
        }
      },
      percentPondconfig: {
        value: 66
      },
      ringConfig: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ], digitalFlopStyle: {
          fontSize: 16,
          fill: '#fff'
        }
      }
    }
  }
}
</script>

<style scoped>
.map {
  width: 50%;
  height: 600px;
}
.main {
  width: 100%;
  display: flex;
  margin-top: 30px;
}
.left {
  padding-left: 50px;
}
.scrollBox {
  height: 400px;
}
.pieBox {
  height: 200px;
}
.pie {
  height: 120px;
}
.number {
  display: flex;
  padding-left: 60px;
}
.board {
  width: 200px;
  height: 100px;
  font-size: 24px;
  text-align: center;
  background-color: #4278c326;
  color: #3de7c9;
  margin-right: 30px;
  padding-top: 20px;
}
.rightTop {
  display: flex;
  margin-bottom: 30px;
}
::v-deep .radar .border-box-content {
  padding-top: 20px;
}
.radarBox {
  height: 400px;
}
.radar {
  height: 420px;
  width: 435px;
}
.percentPond {
  height: 120px;
  text-align: center;
  font-size: 16px;
  color: #2fe7c9;
}
::v-deep .percentPond .border-box-content {
  padding-top: 20px;
}
::v-deep .dv-scroll-ranking-board {
  transition: all 3.3s;
}
::v-deep .dv-scroll-ranking-board .ranking-column .inside-column {
  background-color: #2fe7c9;
}
::v-deep.dv-scroll-ranking-board .ranking-column {
  border-bottom: 2px solid #2fe7c870 !important;
}
::v-deep .dv-scroll-ranking-board .ranking-info .rank {
  width: 40px;
  color: #2fe7c9;
}
::v-deep .radarBox > canvas {
  height: 400px !important;
}
</style>