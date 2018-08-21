<template>
    <div id="dept">
        <el-tree ref="tree" :props="defaultProps" :load="loadNode" lazy node-key="id" :check-strictly="true"  :default-expand-all="false" empty-text="加载中...">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ data.name }}</span>
          </span>
        </el-tree>
    </div>
</template>
<script>
export default {
  data () {
    return {
      defaultProps: {
        label: 'name',
        children: 'children',
        isLeaf: 'leaf'
      },
      initTreeData: []
    }
  },
  methods: {
    loadNode (node, resolve) {
      if (node.level === 0) {
        this.getTree(data => {
          console.log(data)
          this.initTreeData = data
          return resolve(data)
        })
      }
      console.log(node)
      if (node.level === 1) {
        let child = this.initTreeData[0]['children']
        // this.basepaName = this.initTreeData[0]['name']
        console.log(child)
        return resolve(this.setLeaf(child))
      }
    },
    getTree (cb) {
      this.$http.post(
        '/index.php?model=member&m=ajax&cmd=125&target=main-tree').then(res => {
        cb(res.data.rec)
      })
    },
    setLeaf (data) {
      let arr = data.map((val) => {
        if (val.isParent) {

        }
      })
    }
  },
  created () {
    // this.getTree()
  }
}
</script>
<style lang="less" scoped>
</style>
