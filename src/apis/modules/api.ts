import { request } from '../index'

/**
 * 获取文章详情
 * @param postId 文章id
 */
export function getPostApi(postId: number) {
  return request.Get(`/posts/${postId}`)
}
