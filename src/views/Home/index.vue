<script lang="ts" setup>
import { useRequest } from 'alova'

import { getPostApi } from '@/apis/modules/api'

const postId = ref(2)
const { data, send } = useRequest((postId: number) => getPostApi(postId), {
  immediate: false,
})
</script>

<template>
  <div>
    <el-input v-model.number="postId" placeholder="请输入postId" />
    <el-button type="danger" @click="send(postId)">
      获取文章详情
    </el-button>
  </div>
  <el-card>
    <div class="text-red-300">
      {{ data }}
    </div>
  </el-card>
</template>

<style lang="scss" scoped>

</style>
