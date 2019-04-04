<template>
  <div style="font-family:&#39;宋体&#39;;padding: 0 6px;">
    <p style="font-family:&#39;宋体&#39;;height:30px;line-height:30px;font-size: 20px;font-weight:bold;color:#000;text-align:center;">债权转让与受让协议</p>

    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 16px; font-weight:bold; text-align:right;">出借编号：{{allData.lendingNo}}</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px; ">尊敬的 {{allData.customerName}}（先生/女士），您好！</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px; ">&nbsp;&nbsp;&nbsp;&nbsp;通过证大公司的评估与筛选，推荐您通过受让他人既有的个人间借贷合同的方式，根据您的资金出借方式将借款人所还款
      项再次出借给如下借款人，详见《债权列表》</p>

    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px; ">-----------------------</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px; "> 在您接受该批债权转让并按时支付对价的情况下，预期您的出借获益情况如下：</p>

    <p style="font-family:&#39;宋体&#39;;height:30px;line-height:30px;font-size: 16px;font-weight:bold;color:#000;text-align:center;">债权列表</p>

    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">转让人（原债权人）：*卫新<span style="opacity:0;color:#fff;display:none;">TRANSFER</span></p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">身份证号：3****************4   </p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">受让人（新债权人）：{{allData.customerName}}</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">身份证号码：{{allData.customerIdNo}}</p>

    <p style="font-family:&#39;宋体&#39;;height:30px;line-height:30px;font-size: 14px;color:#000;text-align:right; ">货币单位：人民币（元）</p>
    <!--<tboby>-->
    <!--</tboby>-->
    <div style="width: 100%; overflow: auto; -webkit-overflow-scrolling:touch;">
      <table style="font-family:&#39;宋体&#39;;width: 260%;   text-align: center; color:#222; border-collapse: collapse;">
        <thead>
        <tr>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:14%">
            出借编号</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:14%">
            资金出借及回收方式</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            初始出借日期</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            初始出借金额（元）</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            下一个报告日</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            下一个报告期借款人应还款额</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            账户管理费（元）</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            预计下一个报告日您的资产总额（元）</th>
        </tr>
        </thead>

        <tbody><tr>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.lendingNo}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.productName}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.startDate}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.amt}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.nextIvestDate}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.bBillAmt}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.managerAmt}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{allData.nextPvAmt}}
          </td>
        </tr>

        </tbody></table>
    </div>

    <p style="font-family:&#39;宋体&#39;;height:30px;line-height:30px;font-size: 14px;color:#000;">转让债权明细：</p>

    <!--<tboby>-->

    <!--</tboby>-->
    <div style="width: 100%; overflow: auto; -webkit-overflow-scrolling:touch;">
        <table style="font-family:&#39;宋体&#39;; width: 300%; text-align: center; color:#222; border-collapse: collapse;">
        <thead>
        <tr>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:10%">
            借款人名称</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:12%">
            借款人身份证</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:8%">
            转让债权价值（元）</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:10%">
            需支付对价（元）</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:10%">
            借款人职业情况</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:10%">
            借款人借款用途</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:14%">
            还款起始日期</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:8%">
            还款期限(月)</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:8%">
            剩余还款月数</th>
          <th style="font-family:&#39;宋体&#39;;color: #fff; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ff6239;font-size: 14px;width:10%">
            预计债权收益率(年)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in allData.loaninfos" :key="i" >
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.name | name }}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.cardId | accNo }}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.startAmt}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.amt}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.profession}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.purpose}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.nextExpiry}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.totalNum}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.remainingNum}}
          </td>
          <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{item.yearIrr}}
          </td>
        </tr>
        <!--<tr>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">*人甲383576-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">*********6666-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">30342.22-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">30342.22-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">工薪-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">教育支出-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">2018/10/16-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">36-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">20-->
          <!--</td>-->
          <!--<td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">12.13%-->
          <!--</td>-->
        <!--</tr>-->
        </tbody><tfoot>
      <tr>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;" colspan="2">合计</td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{money1}}</td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;">{{money2}}</td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;"></td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;"></td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;"></td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;"></td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;"></td>
        <td style="font-family:&#39;宋体&#39;; border-width: 1px; padding: 3px; border-style: solid; border-color: #d7d7d7; background-color: #ffffff;font-size: 14px;"></td>
      </tr>
      </tfoot>
      </table>
    </div>

    <p style="font-family:&#39;宋体&#39;;height:30px;line-height:30px;font-size: 16px;font-weight:bold;color:#000;text-align:center;">转让人声明</p>

    <p>本人自愿将上述债权转让给受让人。如果受让人对上述债权转让没有任何异议，须于{{allData.appointPaymentDate}}前将上述对价共计：人民币（大写）{{convertCurrency( allData.amt)}}（人民币小写￥ {{allData.amt}}）支付到如下指定账户。</p>

    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;font-weight:bold;">开户行：工行上海市联洋第二支行</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;font-weight:bold;">账户名称：戴卫新</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;font-weight:bold;">账号：6222081001014470342</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">自款项到账之日起，上述债权转让即生效；债权转让生效后，署有本人签章的本文件即代表受让人对上述债权的所有权。
      本人特此签章证明。</p>
    <br>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">见证人：上海证大投资咨询有限公司 </p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">签章：&nbsp;</p>
    <p style="font-family:&#39;宋体&#39;;line-height:1.2;font-size: 14px;">日期：{{allData.createDate}}&nbsp;</p>
  </div>

</template>

<script>
export default {
  name: 'SignUpAgreement',
  metaInfo: {
    title: '债权转让与受让协议'
  },
  data () {
    return {
      allData: [],
      money1:0,
      money2:0

    }
  },
  components: {

  },
  created () {

    this.initData();

  },
  mounted(){

  },
  methods: {

    initData () {
      let memberId = this.$route.query.memberId
      let lendNo = this.$route.query.lendNo
      // let memberId = '1001255400'
      this.$store.dispatch('rightsAgreement102017', {memberId: memberId, lendNo: lendNo,requestId : '1'}).then( (res) => {
        // this.$store.dispatch('actionBill103007', {memberId: '1001231450', queryDate: '201805'}).then((res) => {

        if(res.msgEx.status==0){
          this.allData = res.msgEx.infos ? res.msgEx.infos : [];
          this.allData.loaninfos.forEach((n,i)=>{
              this.money1=(parseFloat(this.money1) +parseFloat (n.startAmt )).toFixed(2);
              this.money2=(parseFloat(this.money2 )+parseFloat( n.amt  )).toFixed(2);
          })
        }else{
          alert(res.msgEx.respDesc)
      }
      console.log(this.allData)
    })
    },
     convertCurrency(money) {
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money == '') { return ''; }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

  },
  filters: {
    accNo: function (value) {
      if (!value) return ''
      return "**** **** **** " + value.substr(value.length-4);
    },
    name:function (value) {
      if (!value) return ''
      return "*" + value.substr(1,value.length);
    }
  }
}
</script>
<style>
  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
</style>