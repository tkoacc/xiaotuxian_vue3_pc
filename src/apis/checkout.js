import httpInstance from '@/utils/http'
/**
 * 获取结算信息
 */
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: '/member/order/pre'
  })
}
