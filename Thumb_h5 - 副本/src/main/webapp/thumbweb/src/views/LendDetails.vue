<template>
  <div class="thumb-lend-details-wrapper">
    <div class="thumb-lend-details-banner">
      <div class="thumb-lend-details-title">
        <p>{{LendDetailsData.lendNo}}（{{LendDetailsData.productName || '--'}}）</p>
        <p>{{LendDetailsData.investStatusStr || '--'}}</p>
      </div>
      <div class="thumb-lend-details-items">
        <div class="thumb-lend-details-rate">
          <p>历史年化收益率</p>
          <p>{{LendDetailsData.rate || '0.00'}}</p>
        </div>
        <div class="thumb-lend-details-figure">
          <p>出借金额(元)</p>
          <p>{{LendDetailsData.amount || '0.00'}}</p>
        </div>
        <div class="interest" v-show="LendDetailsData.feCustomMade ==='0'">
          <p>待收本息(元)</p>
          <p>{{LendDetailsData.unRecevieAmount || '0.00'}}</p>
        </div>
      </div>
    </div>
    <div class="load-time-limit">

      <p class="time">出借期限</p>

      <div class="progress three" v-show="LendDetailsData.feCustomMade === '1' && LendDetailsData.investStatus === '3'">
        <div class="progress-line">
          <div class="text">
            <div class="first-txt">
              封闭期
            </div>
            <div class="last-txt">
              发起赎回
            </div>
          </div>
          <div class="first-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestStartDate}} 生效</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="second-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestEndDate}}到期</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="last-point">
            <span class="out">
              <span class="innner"></span>
              <span class="date">退出</span>
            </span>
          </div>
        </div>
        <div class="progress-tips">
          <ol class="tips">
            <li>
              赎回说明：封闭期结束后发起赎回,发起赎回期间计息，退出成功当天不计息。
            </li>
          </ol>
        </div>
      </div>
      <div class="progress four" v-show="LendDetailsData.feCustomMade ==='1' && LendDetailsData.investStatus === '4'">
        <div class="progress-line">
          <div class="text">
            <div class="first-txt">
              封闭期
            </div>
          </div>
          <div class="first-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestStartDate}} 生效</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="second-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestEndDate}}到期</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="third-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">
                {{LendDetailsData.redeemDate}}
                赎回
              </span>
            </span>
            <span class="line"></span>
          </div>
          <div class="last-point">
            <span class="out">
              <span class="innner"></span>
              <span class="date">
                退出
              </span>
            </span>
          </div>
        </div>
        <div class="progress-tips">
          <ol class="tips">
            <li>
              赎回说明：封闭期结束后发起赎回,发起赎回期间计息，退出成功当天不计息。
            </li>
          </ol>
        </div>
      </div>
      <div class="progress four already" v-show="LendDetailsData.feCustomMade ==='1' && LendDetailsData.investStatus === '5'">
      <div class="progress-line">
        <div class="text">
          <div class="first-txt">
            封闭期
          </div>
        </div>
        <div class="first-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestStartDate}} 生效</span>
            </span>
          <span class="line"></span>
        </div>
        <div class="second-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestEndDate}}到期</span>
            </span>
          <span class="line"></span>
        </div>
        <div class="third-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">
                {{LendDetailsData.redeemDate}}
                赎回
              </span>
            </span>
          <span class="line"></span>
        </div>
        <div class="last-point">
            <span class="out">
              <span class="innner"></span>
              <span class="date">
                {{LendDetailsData.redemEndDate}}
                退出
              </span>
            </span>
        </div>
      </div>
      <div class="progress-tips">
        <ol class="tips">
          <li>
            赎回说明：封闭期结束后发起赎回,发起赎回期间计息，退出成功当天不计息。
          </li>
        </ol>
      </div>
    </div>
      <div class="progress four already" v-show="LendDetailsData.feCustomMade ==='1' && LendDetailsData.investStatus === '6'">
        <div class="progress-line">
          <div class="text">
            <div class="first-txt">
              封闭期
            </div>
          </div>
          <div class="first-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestStartDate}} 生效</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="second-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestEndDate}}到期</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="third-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">
                {{LendDetailsData.redeemDate}}
                赎回
              </span>
            </span>
            <span class="line"></span>
          </div>
          <div class="last-point">
            <span class="out">
              <span class="innner"></span>
              <span class="date">
                {{LendDetailsData.redemEndDate}}
                退出
              </span>
            </span>
          </div>
        </div>
        <div class="progress-tips">
          <ol class="tips">
            <li>
              赎回说明：封闭期结束后发起赎回,发起赎回期间计息，退出成功当天不计息。
            </li>
          </ol>
        </div>
      </div>
      <div class="progress one" v-show="LendDetailsData.feCustomMade ==='0' || LendDetailsData.productType==='0'" >
        <div class="progress-line">
          <div class="text">
            <div class="first-txt">
              投资期限{{LendDetailsData.termInvestment}}天
            </div>
          </div>
          <div class="first-step">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestStartDate}} 生效</span>
            </span>
            <span class="line"></span>
          </div>
          <div class="last-point">
            <span class="out">
              <span class="innner"></span>
              <span class="date">{{LendDetailsData.interestEndDate || '--'}} 退出</span>
            </span>
          </div>
        </div>
        <div class="progress-tips">
          <ol class="tips">
            <li>
              赎回说明：封闭期结束后发起赎回,发起赎回期间计息，退出成功当天不计息。
            </li>
          </ol>
        </div>
      </div>

      <div class="repayment-mode">
        <p class="pull-left">出借方式</p>
        <p class="pull-right">{{LendDetailsData.repaymentMethod || '--'}}</p>

      </div>
      <div class="order-details">
        <div class="order-details-text">订单详细</div>
        <div class="repayment-time">
          <p class="pull-left">付款时间</p>
          <p class="pull-right">{{LendDetailsData.payTime}}</p>
        </div>
        <div v-show="LendDetailsData.returnMode==='2'">
          <div class="repayment-way">
            <p class="pull-left">回款方式</p>
            <p class="pull-right">
              <span class="pull-right">回款到银行卡</span>
            </p>
          </div>
          <div class="repayment-way-card">
            <p class="pull-right"><span>{{LendDetailsData.bankCardNo}}</span></p>
          </div>
        </div>
        <div v-show="LendDetailsData.returnMode==='1'">
          <div class="repayment-way">
            <p class="pull-left">回款方式</p>
            <p class="pull-right">
              <span class="pull-right">回款到余额</span>
            </p>
          </div>
        </div>
      </div>
      <div class="relative-agreement">
        <van-cell title="相关协议"  is-link :to="'/agreement-menu?memberId=' + memberId + '&lendNo=' + lendNo" />
      </div>
    </div>
    <div class="redemption">
      <van-button v-show="LendDetailsData.operateStatus === '1'" type="primary" size="small" class="pull-right" @click="toPay">去支付</van-button>
      <!--<van-button v-show="LendDetailsData.operateStatus === '2'" type="primary" size="small" class="pull-right" @click="redemption">赎回</van-button>-->
      <!--<van-button v-show="LendDetailsData.operateStatus === '3'" type="primary" size="small" class="pull-right" @click="cancelRedemption">撤销赎回</van-button>-->
      <!-- <van-button v-show="LendDetailsData.operateStatus === ''"  disabled size="small" class="pull-right" >参数不对</van-button> -->
    </div>
  </div>
</template>

<script>
import { goPay } from '../utils/native.js'
import { Cell, CellGroup, Button, Dialog } from 'vant'
export default {
  name: 'lendDetails',
  metaInfo: {
    title: '出借详情'
  },
  data () {
    return {
      LendDetailsData: '',
      lendNo: '',
      memberId: '',
      customerId: '',
      orderNo: ''
    }
  },
  components: {
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Dialog.name]: Dialog,
    [CellGroup.name]: CellGroup
  },
  created () {
    this.initData()
    this.customerId = this.$route.query.customerId
  },
  methods: {
    initData () {
     // alert(process.env.VUE_APP_API_URL)
      this.memberId = this.$route.query.memberId
      this.orderNo = this.$route.query.orderNo
      this.$store.dispatch('actionLendDetails103002', {memberId: this.memberId, orderNo: this.orderNo}).then((res) => {
        this.LendDetailsData = res.msgEx.infos ? res.msgEx.infos : ''
//      this.LendDetailsData.repaymentMethod='2';
//      this.LendDetailsData.investStatus='6';
//      console.log(this.LendDetailsData)
        this.customerNo = this.memberId
        this.lendNo = res.msgEx.infos.lendNo
        // this.LendDetailsData.repaymentMethod = '3'
        // this.LendDetailsData.investStatusStr = '已回款'
        // this.LendDetailsData.redemEndDate = '2018-12-6'
        // console.log(this.LendDetailsData)
      })
    },
    redemption () {
      Dialog.confirm({
        title: '提示',
        message: '确认赎回',
        cancelButtonText: '暂不赎回'
      }).then(() => {

          this.initData()

      }).catch(() => {
        // on cancel
      })
    },
    cancelRedemption () {
      // 调用撤销赎回的接口

        // console.log(res)
        this.initData()

    },
    toPay () {
      // 去支付 跳到收银台
      goPay(this.LendDetailsData.productName, this.LendDetailsData.amount, this.LendDetailsData.lendNo, this.LendDetailsData.unRecevieAmount)
    }
  }
}
</script>
<style>
  /* 第三方的css覆盖 */

</style>

<style lang="less">
  .thumb-lend-details-wrapper {
    background:rgba(245,245,245,1);
    .thumb-lend-details-banner {
      box-sizing: border-box;
      height: 170px;
      background: url(./../assets/img/lenddetails@2x.png) center center no-repeat;
      background-size: cover;
      padding: 26px 13px;
      color: #fff;
      .thumb-lend-details-title {
        overflow: hidden;
        p:nth-child(1) {
          float: left;
        }
        p:nth-child(2) {
          float: right;
        }
      }
      .thumb-lend-details-items {
        margin-top: 30px;
        display: flex;
        >div {
          flex: 1;
          text-align: center;
          font-size: 14px;
          >p:last-child {
            font-weight: bold;
            line-height: 35px;
          }
        }
      }
    }
    .load-time-limit {
      >p.time {
        font-size: 16px;
        line-height: 52px;
        border-bottom: 1px solid #ddd;
        padding-left: 14px;
        background-color: #fff;
      }
      .progress {
        background-color: #fff;
        height: 150px;
        padding-top: 15px;
        font-size: 12px;
        >div {
          padding-left: 14px;
          padding-right: 14px;
        }
        .progress-line {
          >div {
            display: inline-block;
          }
          .text {
            display: block;
            >div {
              display: inline-block;
              padding-left: 10px;
            }
            .first-txt {
              width: 50%;
              text-align: center;
            }
            .last-txt {
              width: 40%;
              text-align: center;
            }
          }
          .first-step {
            width: 50%;
            .out {
              display: inline-block;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background-color: #e6ceb3;
              position: relative;
              .innner {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #957856;
              }
              .date {
                position: absolute;
                top: 20px;
                color: #999;
                width: 100px;
              }
            }
            .line {
              display: inline-block;
              width: 85%;
              border-top: 3px solid #957856;
              position: relative;
              top: -6px;
              left: 5px;
            }
          }
          .second-step {
            width: 40%;
            .out {
              display: inline-block;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background-color: #e6ceb3;
              position: relative;
              .innner {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #957856;
              }
              .date {
                position: absolute;
                top: 20px;
                left: -30px;
                color: #999999;
                width: 100px;
              }
            }
            .line {
              display: inline-block;
              width: 85%;
              border-top: 3px solid #957856;
              position: relative;
              top: -6px;
              left: 7px;
            }
          }
          .last-point {
            width: 10%;
            text-align: center;
            .out {
              display: inline-block;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background-color: #e6ceb3;
              position: relative;
              .innner {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #957856;
              }
              .date {
                position: absolute;
                top: 20px;
                left: -20px;
                color: #999999;
                width: 50px;
              }
            }
          }
          .date {
            font-size: 12px;
          }
        }
        .progress-tips {
          background:rgba(241,247,255,1);
          margin-left: 14px;
          margin-right: 14px;
          padding-left: 14px;
          padding-right: 0;
          .tips {
            padding: 6px;
            margin-top: 30px;
            color: #30435D;
            li {
              list-style-type: disc;
              list-style-position: outside;
              font-size: 12px;
            }
          }
        }
        &.four {
          .progress-line {
            >div {
              display: inline-block;
            }
            .text {
              display: block;
              >div {
                display: inline-block;
                padding-left: 10px;
              }
              .first-txt {
                width: 35%;
                text-align: left;
                margin-left:15px;
              }
              .last-txt {
                width: 47%;
                text-align: center;
              }
            }
            .first-step {
              width: 48%;
              .out {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #e6ceb3;
                position: relative;
                .innner {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: #957856;
                }
                .date {
                  position: absolute;
                  top: 20px;
                  color: #999;
                  width: 100px;
                }
              }
              .line {
                display: inline-block;
                width: 88%;
                border-top: 3px solid #957856;
                position: relative;
                top: -6px;
                left: 5px;
              }
            }
            .second-step {
              width: 22%;
              .out {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #e6ceb3;
                position: relative;
                left: 5px;
                .innner {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: #957856;
                }
                .date {
                  position: absolute;
                  top: 20px;
                  left: -30px;
                  color: #999999;
                  width: 100px;
                }
              }
              .line {
                display: inline-block;
                width: 75%;
                border-top: 3px solid #957856;
                position: relative;
                top: -6px;
                left: 7px;
              }
            }
            .third-step {
              width: 25%;
              .out {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #e6ceb3;
                position: relative;
                left: 8px;
                .innner {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: #957856;
                }
                .date {
                  position: absolute;
                  top: -20px;
                  left: -35px;
                  color: #999999;
                  width: 100px;
                }
              }
              .line {
                display: inline-block;
                width: 68%;
                border-top: 3px solid #957856;
                position: relative;
                top: -6px;
                left: 10px;
              }
            }
            .last-point {
              width: 5%;
              text-align: center;
              .out {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #e6ceb3;
                position: relative;
                .innner {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: #957856;
                }
                .date {
                  position: absolute;
                  top: 20px;
                  color: #999999;
                  width: 112px;
                  left: -82px;
                }
              }
            }
          }
        }
        &.already.four {
          .last-point .out .date {
            width: 112px !important;
            left: -82px !important;
          }
        }
        &.one {
          .text {
            display: block;
              >div {
                display: inline-block;
                padding-left: 0px;
              }
            }
          .first-step {
            width: 90%;
            .line {
              width: 92%;
              left: 6px;
            }
          }
          .text .first-txt {
            width: 100%;
          }
          .last-point .out .date {
            width: 100px;
            left:-64px;
          }
        }
      }
      .repayment-mode {
        background-color: #fff;
        margin-top: 10px;
        height: 50px;
        line-height: 50px;
        padding: 0 14px;
      }
      .order-details {
        margin-top: 10px;
        background-color: #fff;
        overflow: hidden;
        padding: 0 14px;
        .order-details-text {
          line-height: 50px;
          margin-left: -14px;
          margin-right: -14px;
          padding-left: 14px;
          padding-right: 14px;
          border-bottom: 1px solid #ddd;
        }
        .repayment-time {
          overflow: hidden;
          line-height: 50px;
          height: 50px;
        }
        .repayment-way {
          height: 20px;
          line-height: 20px;
          padding-bottom: 15px;
        }
        .repayment-way-card {
          overflow: hidden;
          position: relative;
          top: -15px;
        }
      }
      .relative-agreement {
        margin-top: 10px;
        height: 50px;
        line-height: 50px;
      }
      .pull-right {
        color: #666;
      }
    }
    .redemption {
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      margin-top: 20px;
      padding: 7px 14px;
      box-sizing: border-box;
      >button {
        display: inline-block;
        width: 85px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        text-align: center;
        border: 1px solid #957856;
        border-radius: 8px;
        background-color: #957856;
      }
    }
  }
  .van-dialog__confirm{
    color: #957856 !important;
  }
</style>
