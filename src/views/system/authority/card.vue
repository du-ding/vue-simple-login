<template>
  <a-card :title="title"
          :hoverable='true'
          style="width: 600px">
    <div class="main">
      <div v-for="router in allChildrenRouters"
           :key='router.name'>
        <div class='card'>
          <!-- {{router}} -->
          <div style='margin-right:30px;width:100px;text-align:center;font-size:16px'>{{router.meta.title}}:</div>
          <a-switch checked-children="开启权限"
                    un-checked-children="关闭权限"
                    v-model="router.flag"
                    :disabled="router.meta.authority === 'home'" />
        </div>
      </div>
    </div>
    <a-button @click='changeAuthority'>提交</a-button>
  </a-card>
</template>

<script>
import { getallRouters } from '@/router/index.js'
import { flatRouter } from '@/router/utilRouters.js'
import { authorityRouterApi } from '@/api/router.js'
export default {
  props: ['id', 'title'],
  created () {
    //处理allRoutes
    let allRouters = getallRouters()
    this.allChildrenRouters = flatRouter(allRouters)
    authorityRouterApi({ id: this.id }).then(res => {
      this.userAuthorityArray = res
      for (let j = 0; j < this.allChildrenRouters.length; j++) {
        if (this.userAuthorityArray.indexOf(this.allChildrenRouters[j].meta.authority) >= 0) {
          this.$set(this.allChildrenRouters[j], 'flag', true)
        } else {
          this.$set(this.allChildrenRouters[j], 'flag', false)
        }
      }
    })
  },
  data () {
    return {
      allChildrenRouters: [], //全部路由
      userAuthorityArray: [],//user权限信息
    }
  },
  methods: {
    changeAuthority () {
      console.log(this.allChildrenRouters)
      let userAuthorityArray = []
      this.allChildrenRouters.forEach((item) => {
        if (item.flag) {
          userAuthorityArray.push(item.meta.authority)
        }
      })
      //正式项目应该通过接口存到数据库
      this.id === 2 ? localStorage.setItem('user1Authority', userAuthorityArray) : localStorage.setItem('user2Authority', userAuthorityArray)
      this.$message.success('设置权限成功')
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.main {
  border-bottom: 1px solid #e8e8e8;
  padding: 24px;
}
>>> .ant-card-body {
  padding: 0px;
  zoom: 1;
}
.ant-btn {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.ant-card-bordered {
  border: 1px solid #e8e8e8;
  box-shadow: 2px 2px 10px;
  margin-left: 5%;
  margin-top: 5%;
}
</style>