<template>
  <div>
    <a-table :columns="columns"
             :data-source="data"
             rowkey='id'>
      <a slot="name"
         slot-scope="text,record"
         @click="toProjectDetail(record.id)">{{ text }}</a>
      <span slot="customTitle">
        产品名称
      </span>
      <span slot="tags"
            slot-scope="tags">
        <a-tag v-for="tag in tags"
               :key="tag"
               :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action"
            slot-scope="text, record">
        <div>{{record.id}}---{{ record.name }}--{{ record.age }}---{{ record.address}}</div>
      </span>
    </a-table>
  </div>

</template>

<script>
const data = [
  {
    id: '1',
    key: '1',
    name: '产品1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    id: '2',
    name: '产品2',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    id: '3',
    name: '产品3',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];
export default {
  created () {

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

<style>
</style>