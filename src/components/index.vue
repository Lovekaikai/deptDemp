<template>
    <div id="container">
        <el-dialog title="人员选择器" :center="false" :visible.sync="search.show" width="800" >
            <div id="d-search">
                <div class="dept">
                    <el-input v-model="search.keyWord"  placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div id="d-menu">
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="组织架构" name="first">
                        <Dept></Dept>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-dialog>
        <button @click="search.show=true">展现</button>
    </div>
</template>
<script>
import Dept from './dept.vue'
export default {
  data () {
    return {
      search: {
        show: false,
        keyword: '',
        loading: false,
        result: []
      },
      activeName: 'first',
      chosen: {}
    }
  },
  components: {
    Dept
  },
  methods: {

  },
  created () {
    // this.getParentNodes()
  }
}
</script>
<style lang="less" scoped>
    .dept{
        min-height: 30px;
        border:1px solid #e7e4e4;
        border-radius: 5px;
    }
</style>
// 全局
<style lang="less">
.dept{
    .el-input__inner{
        width:30% !important;
        border:none !important;
        outline:none;
        padding:15px 0 !important;
    }
}
</style>
