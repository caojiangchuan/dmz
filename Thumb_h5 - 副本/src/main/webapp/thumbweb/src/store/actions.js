/* eslint-disable no-undef */
import {
  NEWSDETAIL_800012
} from './mutation-types'
import 'babel-polyfill'
import axios from '../plugins/axios'
import qs from 'qs'

export default {
  // 我的账单
  actionBill103007 ({ dispatch, commit }, {memberId, queryDate}) {
    return new Promise((resolve, reject) => {
      axios.post(urlTest, qs.stringify({method: '103007', dataJson:JSON.stringify( {memberId: memberId, queryDate: queryDate})}))
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          alert(error)
          console.info(error)
        })
    })
  },

    // actionBill103007 ({ dispatch, commit }, {sn,platform,reqUrl,reqTimestamp,reqParam}) {
    //     return new Promise((resolve, reject) => {
    //         axios.post(urlTest, qs.stringify({arg0: '103007', arg1:JSON.stringify( {sn:sn,platform:'THUMBAPP',reqUrl:'http',reqTimestamp:'2102548542',reqParam:reqParam}),arg2:'123456'}))
    //             .then(res => {
    //                 resolve(res.data)
    //             })
    //             .catch(error => {
    //                 alert(error)
    //                 console.info(error)
    //             })
    //     })
    // },
  // 债权转让
  rightsAgreement102017 ({ dispatch, commit }, {memberId, lendNo}) {
    return new Promise((resolve, reject) => {
      axios.post(urlTest, qs.stringify({method: '102017', dataJson:JSON.stringify( {memberId: memberId, lendNo: lendNo,requestId:'1'})}))
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        console.info(error)
      })
    })
  },
    // 个人出借咨询服务协议之补充协议
    personalAgreement102018 ({ dispatch, commit }, {memberId, lendNo}) {

        return new Promise((resolve, reject) => {
            axios.post(urlTest, qs.stringify({method: '103018', dataJson:JSON.stringify( {memberId: memberId, lendNo: lendNo})}))
                .then(res => {
                    resolve(res.data)
                })
                .catch(error => {
                    console.info(error)
                })
        })
    },
  // 相关协议
  actionArguementList1001240450 ({ dispatch, commit }, {memberId, lendNo}) {
    return new Promise((resolve, reject) => {
      // axios.post(`${process.env.VUE_APP_BASE_NAME}/thumbService`, qs.stringify({method: '202006', dataJson: {data: {memberId: memberId, lendNo: lendNo}}}))
      axios.post(urlTest, qs.stringify({method: '103005', dataJson:JSON.stringify( {memberId: memberId, lendNo: lendNo} ) }))
        .then(res => {
          if (res.data.msgEx.status === '0') {
            commit(NEWSDETAIL_800012, res.data.msgEx.infos)
          }
          resolve(res.data)
        })
        .catch(error => {
          console.info(error)
        })
    })
  },
  // 出借详情
  actionLendDetails103002 ({ dispatch, commit }, {memberId, orderNo}) {
    return new Promise((resolve, reject) => {
      axios.post(urlTest, qs.stringify({method: '103002', dataJson:JSON.stringify( {memberId: memberId, orderNo: orderNo})}))
        .then(res => {
          if (res.data.msgEx.status === '0') {
            commit(NEWSDETAIL_800012, res.data.msgEx.infos)
          }
          resolve(res.data)
        })
        .catch(error => {
          console.info(error)
        })
    })
  },
  // 赎回
  actionLendDetails103003 ({ dispatch, commit }, {memberId, lendNo}) {
    return new Promise((resolve, reject) => {
      axios.post(urlTest, qs.stringify({method: '103003', dataJson: JSON.stringify( {memberId: memberId, lendNo: lendNo})}))
        .then(res => {
          if (res.data.msgEx.status === '0') {
            commit(NEWSDETAIL_800012, res.data.msgEx.infos)
          }
          resolve(res.data)
        })
        .catch(error => {
          console.info(error)
        })
    })
  },
  // 撤销赎回
  actionLendDetails103004 ({ dispatch, commit }, {memberId, lendNo}) {
    return new Promise((resolve, reject) => {
      axios.post(urlTest, qs.stringify({method: '103004', dataJson:JSON.stringify(  {memberId: memberId, lendNo: lendNo})}))
        .then(res => {
          if (res.data.msgEx.status === '0') {
            commit(NEWSDETAIL_800012, res.data.msgEx.infos)
          }
          resolve(res.data)
        })
        .catch(error => {
          console.info(error)
        })
    })
  },
  // 获取详情协议
  actionAgreementDetails202006 ({ dispatch, commit }, {customerNo, lendNo, contractType}) {
    return new Promise((resolve, reject) => {
      axios.post(urlTest, qs.stringify({method: '202006', dataJson:JSON.stringify( {data: {customerNo: customerNo, lendNo: lendNo, contractType: contractType}}) }))
        .then(res => {
          if (res.data.msgEx.status === '0') {
            commit(NEWSDETAIL_800012, res.data.msgEx.infos)
          }
          resolve(res.data)
        })
        .catch(error => {
          console.info(error)
        })
    })
  }
}
