<template>
  <div class="app-main">
    <div class="dtitle"
         style="margin-bottom: 50px;">用户管理</div>
    <a-table :columns="columns"
             :data-source="data"
             rowkey='id'>
      <span slot="tags"
            slot-scope="tags">
        <a-tag v-for="tag in tags"
               :key="tag"
               :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </a-table>
  </div>

</template>

<script>
const data = [
  {
    id: '1',
    key: '1',
    userName: 'user1',
    title: '用户1',
    password: 'user1',
    tags: [],
  },
  {
    key: '2',
    id: '2',
    userName: 'user2',
    title: '用户2',
    password: 'user2',
    tags: [],
  },
];
const columns = [
  {
    dataIndex: 'userName',
    title: '用户名',
    key: 'userName',
    width: '400',
    align: 'center'
  },
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title', width: '400',
    align: 'center'
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password', width: '400',
    align: 'center'
  },
  {
    title: '权限',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
    align: 'center'
  },
];
import { authorityRouterApi } from '@/api/router.js'
export default {
  created () {
    authorityRouterApi({ id: Number(2) }).then((res) => {
      this.data[0].tags = res
    })
    authorityRouterApi({ id: Number(3) }).then((res) => {
      this.data[1].tags = res
    })
  },
  data () {
    return {
      data,
      columns,
    };
  },
  methods: {
    toProjectDetail () {
      this.$router.push({
        path: '/productDetail'
      })
    }
  }

}
</script>

<style scoped>
.app-main {
  padding: 20px;
}
</style>