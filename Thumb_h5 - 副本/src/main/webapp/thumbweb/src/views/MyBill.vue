<template>
  <div>
    <!--<div class="loading" v-show="loading">-->
      <!--<img src="../assets/img/load.gif" class="load"/>-->
    <!--</div>-->
<div class="billall" v-if="billall"></div>
    <div class="thumb-my-bill van-hairline--top" v-show="bill1">

      <div>
        <div class="my-bill-time van-hairline--bottom">

          <p class="pull-left queryMonth" :class="{active: queryMonth}"  @click="queryMonthDate">
            <span>{{currentMonth || '--'}}</span>
            <van-icon name="arrow-left" class="arrow-icon"/>
          </p>
          <p class="pull-right">
            <span>货币单位:人民币(元)</span>
          </p>
        </div>

        <div v-if="billData" class="my-bill-lend">
          <div class="lend-scroll-wrapper">
            <div class="lend-wrapper" ref='lendWrapper'>
              <div class="lend-level van-hairline--bottom">
                <div class="clearfix">
                  <p class="lend-level-p1 pull-left">账户级别：</p>
                  <p class="lend-level-p2 pull-right">{{allData.levelName}}</p>
                </div>
                <div class="clearfix lend-magtop8">
                  <p class="lend-level-p1 pull-left">报告周期：</p>
                  <p class="lend-level-p2 pull-right">{{allData.statementPeriod}}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div v-if="billData" class="my-bill-return">

          <div class="bl_rt_details  van-hairline--bottom">
            <span class="bl_rt_dl1">出借详情</span>
            <span class="bl_rt_dl2" @click="goDetailsList">明细</span>
          </div>
          <div class="lend-wrapper">
            <div class="lend-level van-hairline--bottom">
              <div class="clearfix">
                <p class="lend-level-p1 pull-left">初始出借总金额：</p>
                <p class="lend-level-p2 pull-right">{{allData.totalInitInvestAmt}}</p>
              </div>
              <div class="clearfix" style="margin-top: 10px;">
                <p class="lend-level-p1 pull-left">本报告日资产总额：</p>
                <p class="lend-level-p2 pull-right">{{allData.totalBillAmt}}</p>
              </div>

            </div>
          </div>

          <div class="lend-wrapper">
            <div class="lend-level2 van-hairline--bottom">
              <div class="clearfix">
                <p class="lend-level-p1 pull-left">报告期内借款人应还金额：</p>
                <p class="lend-level-p2 pull-right">{{allData.totalRecAmt}}</p>
              </div>
              <div class="clearfix lend-magtop8">
                <p class="lend-level-p1 pull-left">延迟支付抵扣金额：</p>
                <p class="lend-level-p2 pull-right">{{allData.totalPayAmt}}</p>
              </div>
              <div class="clearfix lend-magtop8">
                <p class="lend-level-p1 pull-left">报告日您选择受让的债权金额：</p>
                <p class="lend-level-p2 pull-right">{{allData.totalOrderLoanAmt}}</p>
              </div>

              <div class="clearfix lend-magtop8">
                <p class="lend-level-p1 pull-left">当期回收金额：</p>
                <p class="lend-level-p2 pull-right"> {{allData.totalRetuenBackAmt}}</p>
              </div>

              <div class="clearfix lend-magtop8">
                <p class="lend-level-p1 pull-left">账户管理费：</p>
                <p class="lend-level-p2 pull-right"> {{allData.totalManagerAmt}}</p>
              </div>
              <div class="clearfix lend-magtop8">
                <p class="lend-level-p1 pull-left">本报告日实际资产总额：</p>
                <p class="lend-level-p2 pull-right">{{allData.totalBillAmt2}}</p>
              </div>

            </div>
          </div>

        </div>

        <!--暂无账单明细-->
        <div v-if="!billData" class="no-bill">
          <div class="text-center">
            <img src="../assets/img/no-details2.png" class="img1" alt="">
            <img src="../assets/img/no-details.png" class="img2" alt="">
            <p>当前账单日无出借业务，请查看往期账单</p>
          </div>
        </div>

        <!--时间-->
        <div>
          <van-popup v-model="dateShow" position="bottom" :overlay="true" @click-overlay="cancelOverlay">
            <!--<van-datetime-picker-->
            <!--v-model="currentDate"-->
            <!--type="date"-->
            <!--:max-date="minDate"-->
            <!--@confirm="confirmVal"-->
            <!--@cancel="cancel"-->
            <!--:formatter="formatter"-->
            <!--/>-->
            <van-picker show-toolbar :columns="columns" @change="onChange"  @confirm="confirmVal" @cancel="cancel" />
          </van-popup>

        </div>

      </div>

    </div>

    <!--明细列表 -->
    <div class="thumb-my-bill van-hairline--top" v-show="bill2" v-if="billData" >
      <div class="my-b2-cyc van-hairline--bottom">报告周期：{{allData.statementPeriod}}</div>
      <ul class="my-b2-list">

        <li v-for="(item, i) in allData.statement" :key="i"  @click="goDetails(item, i) "  class="van-hairline--top">
          <div class="my-b2-cyc van-hairline--bottom">{{item.lendingNo}}({{item.productName}})</div>
          <div class="my-b2-cyc van-hairline--bottom clearfix">
            <p class="fl">本报告日资产总额：</p>
            <p class="fr">{{item.billAmt}}</p>
          </div>
        </li>

      </ul>
    </div>
    <!--详情-->
    <div class="thumb-my-bill van-hairline--top" v-show="bill3"  v-if="billData">
      <div class="my-b2-cyc van-hairline--bottom" v-if=" detailsNum!=null ">{{allData.statement[detailsNum].lendingNo}}({{allData.statement[detailsNum].productName}})</div>
      <div class="lend-wrapper lend-wrapper3">
        <ul class="lend-level2 van-hairline--bottom" v-if=" detailsNum!=null ">

          <li class="clearfix">
            <p class="lend-level-p1 pull-left">初始出借日期：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].startDate}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">初始出借金额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].initInvestAmt}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">封闭期：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].billDate}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">上一个报告日资产总额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].bBillAmt}}</p>
          </li>
          <li class=" van-hairline--bottom" style="padding-bottom: 12px;">
            <p class="lend-level-p1 pull-left">本报告日资产总额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].billAmt}}</p>
            <div style="clear: both"></div>
          </li>

          <li class="clearfix" style="padding-top: 10px;">
            <p class="lend-level-p1 pull-left">报告期内借款人应还款金额<br>（或还款风险金代偿金额）：</p>
            <p class="lend-level-p2 pull-right"><br>{{allData.statement[detailsNum].recAmt}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">延迟支付抵扣金额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].payAmt}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">报告日您选择受让的债权金额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].orderLoanAmt}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">当日回收金额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].retuenBackAmt}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">账户管理费率（月）：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].accountManageFee}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">账户管理费：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].managerAmt}}</p>
          </li>
          <li class="clearfix">
            <p class="lend-level-p1 pull-left">报告日实际资产总额：</p>
            <p class="lend-level-p2 pull-right">{{allData.statement[detailsNum].billAmt2}}</p>
          </li>
        </ul>
      </div>
    </div>


    <div class="noMybill" v-if="noMybill">
      <div class="noMybill-img"><img src="../assets/img/noMybill.png" height="127" width="127"/></div>
      <p>快来赚取第一桶金吧！</p>
      <div class="noMybill-out" @click="Nowlend">立即出借</div>
    </div>
  </div>

</template>

<script>
    import BScroll from 'better-scroll'
    import { Icon, Popup, DatetimePicker, Picker } from 'vant'
    import { goNowlend } from '../utils/native.js'

    const myDate = new Date();
    const  year= myDate.getFullYear();
    const timeDate= {};
    const timeMonth= myDate.getMonth()+1;
    const timeDay= myDate.getDate();
    for( let i=0; i<10; i++  ){
        let tearT= (year-i).toString();
        if(i==0){
            const nowMonth={};
            for(let  i=1;i<=timeMonth;i++){
                nowMonth[i]=[1,16]
                if(i==timeMonth&&timeDay<16){
                    nowMonth[i]=[1]
                }else
                    nowMonth[i]=[1,16]
            }
            timeDate[tearT]=nowMonth;
        }else
            timeDate[tearT]={
                1:[1,16],
                2:[1,16],
                3:[1,16],
                4:[1,16],
                5:[1,16],
                6:[1,16],
                7:[1,16],
                8:[1,16],
                9:[1,16],
                10:[1,16],
                11:[1,16],
                12:[1,16]//过去的月份
            }
    }

    export default {
        name: 'myBill',
        metaInfo: {
            title: '我的账单'
        },
        data () {
            return {
                loading:true,
                noMybill:false,
                columns: [
                    {
                        values: Object.keys(timeDate),
                        className: 'column1',
                        defaultIndex: 10
                    },
                    {
                        values:Object.keys( timeDate[year] ) ,
                        className: 'column2',
                        defaultIndex: 11
                    },
                    {
                        values: timeDate[year][timeMonth],
                        className: 'column3',
                        defaultIndex: new Date().getDate() < 16?0:1
                    }
                ],//默认显示年月日
                queryMonth: false,
                dateShow: false,
                billData: false,
                allData: [],
                currentDate: new Date(), // 绑定到时间选择插件上的时间，插件最后选择的时间也是这个字段
                minDate: new Date(),
                currentMonth:'',
                // currentMonth: ''+ new Date().getFullYear()+( new Date().getMonth()+1  < 10  ?  ('0' +  new Date().getMonth()+1) : (new Date().getMonth()+1)  )+(new Date().getDate() < 16 ? '01' : 16),
                currentMonthFormateNumber:'',
                hash:'',
                bill1:false,
                bill2:false,
                bill3:false,
                detailsNum:null,   //详情编号
                billall:true
            }
        },
        components: {
            [Icon.name]: Icon,
            [Popup.name]: Popup,
            [DatetimePicker.name]: DatetimePicker,
            [Picker.name]:Picker
        },
        created () {
            // var date=new Date;
            // var year=date.getFullYear();
            // var month=date.getMonth()+1;
            // var day=date.getDate()+1<16?'1':16;
            // month =(month<10 ? "0"+month:month);
            // day=(day<10 ? "0"+day:day);
            // var mydate = (year.toString()+month.toString()+day.toString());
            //
            // this.currentMonth = mydate
            /* eslint-disable */
            //   this.currentMonthFormateNumber =  new Date().getFullYear() + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1): ('' + (new Date().getMonth() + 1)))
            this.currentMonthFormateNumber =''+ new Date().getFullYear()+( new Date().getMonth()+1  < 10  ?  ('0' +  new Date().getMonth()+1) : (new Date().getMonth()+1)  )+(new Date().getDate() < 16 ? '01': 16)
//            + (
//            new Date().getMonth()+1  < 10 ?  '0' + ( new Date().getMonth()
//            ): ('' + ( new Date().getMonth() + 1 )
//    )
            //   +new Date().getDate() < 10 ? ('0' + 1): 16;


            // this.currentMonthFormateNumber='20180816';
            this._initScroll()
            this.initData()
            // console.log(this.currentMonthFormateNumber)
        },
        mounted(){
            const  _this=this;
            _this.hash=location.hash.split('#');
            console.log(_this.hash[2]);

            if(_this.hash[2]==1||!_this.hash[2]){
                _this.bill1=true ;
            }
            if(_this.hash[2]==2){
                _this.bill2=true;
            }
            if(_this.hash[2]==3){
                _this.bill3=true;
            }
            window.onhashchange=function(){
                _this.hash=location.hash.split('#');
//      location.hash=location.hash.split('#')[0]+location.hash.split('#')[1]+'#3'
                if(_this.hash[2]==1||!_this.hash[2]){
                    _this.bill1=true;
                    _this.bill2=false;
                    _this.bill3=false;
                }
                if(_this.hash[2]==2){
                    _this.bill2=true;
                    _this.bill1=false;
                    _this.bill3=false;
                }
                if(_this.hash[2]==3){
                    _this.bill3=true;
                    _this.bill1=false;
                    _this.bill2=false;
                }
            }
        },
        methods: {
            //继续出借
            Nowlend(){
                goNowlend()
            },
          onChange(picker, values) {
            if(values[0]){
              let getColumnIndex=picker.getColumnIndex(1);//月份索引
              console.log(values[1])//月份的值
              if(values[0]==year){
                if (values[1]==timeMonth ) {
                  if(timeDay<16){
                    picker.setColumnValues(2, [1]);
                  } else {
                    picker.setColumnValues(2, [1,16]);
                  }
                } else if (values[1] > timeMonth) {
                  picker.setColumnValues(2, [1]);
                } else {
                  picker.setColumnValues(2, [1,16]);
                }
                picker.setColumnValues(1, Object.keys( timeDate[year] ) );
                picker.setColumnIndex(1,getColumnIndex)
              }else{
                picker.setColumnValues(2, [1,16]);
                picker.setColumnValues(1, Object.keys( timeDate[(year-1)] ) );
                picker.setColumnIndex(1,getColumnIndex)
              }
            }
          },
            //明细
            goDetailsList(){
                const  _this=this;
                _this.hash=location.hash.split('#');
                location.hash=_this.hash[0]+_this.hash[1]+'#2'
            },
            goDetails(item, $index){
                const  _this=this;
                _this.detailsNum=$index;
                _this.hash=location.hash.split('#');
                location.hash=_this.hash[0]+_this.hash[1]+'#3'
            },
            formatter(type, value) {

                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }else if(type === 'day'){
                    if(value==1||value==16){
                        console.log(value)
                        return `${value}号`;
                    }else{
                        return `不可选${value}`;
                    }
                }
                return value;
            },
            _initScroll () {
                setTimeout(() => {
                    if (!this.lendScroll) {
                        this.lendScroll = new BScroll(this.$refs.lendWrapper, {
                            startX: 0,
                            click: true,
                            scrollX: true,
                            scrollY: false,
                            eventPassthrough: 'vertical'
                        })
                    } else {
                        this.lendScroll.refresh()
                    }
                    if (!this.returnScroll) {
                        this.returnScroll = new BScroll(this.$refs.returnWrapper, {
                            startX: 0,
                            click: true,
                            scrollX: true,
                            scrollY: false,
                            eventPassthrough: 'vertical'
                        })
                    } else {
                        this.returnScroll.refresh()
                    }
                }, 500)
            },
            queryMonthDate () {
                this.dateShow = true
                this.queryMonth = true
            },
            confirmVal (value, index) {
                this.dateShow = false
                this.queryMonth = false
                if(value[0]){
                    this.currentDate=new Date(value[0],value[1],value[2])
                    console.log('aaa:'+this.currentDate)
                    this.currentMonth = this.currentDate
                    this.formateTime()
                    this.initData2()

                }
            },
            cancel () {
                this.dateShow = false
                this.queryMonth = false
            },
            cancelOverlay () {
                this.queryMonth = false
            },
            formateTime () {
                let month = this.currentDate.getMonth() == 0 ? 12 : this.currentDate.getMonth()

                // this.currentMonthFormateNumber = this.currentDate.getFullYear() + (this.currentDate.getMonth()  < 10 ? '0' + (this.currentDate.getMonth() ): ('' + (this.currentDate.getMonth() )))+ (this.currentDate.getDate()  < 16 ? '01' : 16);
                this.currentMonthFormateNumber = (this.currentDate.getMonth() == 0 ? this.currentDate.getFullYear() -1 : this.currentDate.getFullYear()) + (month  < 10 ? '0' + month: ('' + month ))+ (this.currentDate.getDate()  < 16 ? '01' : '16');
                this.currentMonth =this.currentMonthFormateNumber;
                // // this.currentDate.getFullYear() + '年' + (this.currentDate.getMonth() ) + '月'

            },
            initData () {
                this.loading=true;
                let memberId = this.$route.query.memberId
                let sn = this.$route.query.sn
                // let memberId = '1001255400'
                // this.$store.dispatch('actionBill103007', {reqParam:{memberId: memberId},sn:sn}).then( (res) => {
                // this.$store.dispatch('actionBill103007', {reqParam:{memberId: memberId},sn:sn}).then( (res) => {

                        this.$store.dispatch('actionBill103007', {memberId: memberId}).then((res) => {
                    if(res.msgEx.status==0){
                        this.billall=false
                        this.loading=false;
                        this.billData=true;
                        this.billAll=true
                        this.currentMonth=res.msgEx.infos.statementPeriod.substr(11,4)+res.msgEx.infos.statementPeriod.substr(16,2)+res.msgEx.infos.statementPeriod.substr(19,2);
                        this.allData = res.msgEx.infos ? res.msgEx.infos : [];
                    }
                    else{
                        this.billall=false
                        this.loading=false;
                        this.billData=false;
                        this.noMybill=true;
                        this.billAll=false
                    }
                    console.log(this.allData)
                })
            },
            initData2 () {
                this.loading=true;
                let memberId = this.$route.query.memberId
                let sn = this.$route.query.sn
                // let memberId = '1001255400'
                // this.$store.dispatch('actionBill103007', {reqParam:{memberId: memberId,queryDate: this.currentMonthFormateNumber},sn:'aw4848eaa66'}).then( (res) => {
                    this.$store.dispatch('actionBill103007', {memberId: memberId, queryDate: this.currentMonthFormateNumber}).then((res) => {
                    if(res.msgEx.status==0){
                        this.billall=false
                        this.loading=false;
                        this.billData=true;
                        this.billAll=true
                        this.allData = res.msgEx.infos ? res.msgEx.infos : [];
                    }else{
                        this.billall=false
                        this.loading=false;
                        this.billData=false;
                        this.billAll=true
                    }
                    console.log(this.allData)
                })
            }
        }

    }
</script>

<style>
  .billall{width: 100%; height: 100%; background: white; position: fixed; top: 0; z-index: 1000}
  .noMybill{width: 100%; height: 100%; background: white; position: fixed; top: 0; }
  .noMybill-img{width: 127px; height: 127px; margin: 0 auto; margin-top: 83px; }
  .noMybill p{ text-align: center;  font-size: 14px;color:rgba(187,187,187,1); margin-top: 20px;}
  .noMybill-out{width:280px;    height:45px;    background:rgba(255,255,255,1);    border:1px solid rgba(149,120,86,1);    border-radius:5px;
  margin: 58px auto; text-align: center; color: #957856; font-size: 15px; line-height: 45px;}

  .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  /* 第三方的css覆盖 */
  .van-icon-arrow-left {
    transform: rotate(-90deg);
    position: relative;
    top: 3px;
    left: 3px;
  }
  .active .van-icon-arrow-left {
    transform: rotate(90deg);
  }
  *{ box-sizing: border-box;}
</style>

<style lang="less">
  .loading{ position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.8); z-index: 9;}
  .load{ position: absolute; top: 0; left: 0; bottom: 0; right: 0 ; margin: auto; width: 45px;}
  .thumb-my-bill {
    box-sizing: border-box;
    min-height: 100vh;
    min-width: 100%;
    background:rgba(245,245,245,1);
  .queryMonth{ font-size: 15px;}
  .my-b2-cyc{width: 100%; height: 52px; line-height: 52px; background: #fff; color: #333; font-size: 15px; padding:0 15px;
  .fl{ color: #666;}
  }
  .lend-level2 li{ margin-top: 10px;}
  .lend-wrapper3{ background: #fff;}

  .my-b2-list li{ margin-top: 7px;}
  .fl{ float: left;}
  .fr{ float: right}
  .my-bill-time {
    overflow: hidden;
    height: 42px;
    line-height: 42px;
    background: #fff; padding: 0 15px 0 15px;;
  }
  div{box-sizing:border-box}
  /**/
  .lend-level{ height:92px; ; width: 100%; padding: 20px 0 0 0; background: #fff; }
  .lend-level-p1{ font-size: 15px; color: #666;}
  .lend-level-p2{ font-size: 15px; color: #333;}
  .bl_rt_details{ padding-left: 15px; height: 50px; line-height: 50px;}
  .bl_rt_dl1{ font-size: 15px; color: #333; font-weight: 600; margin-right: 15px; }
  .bl_rt_dl2{ font-size: 15px; color: #957856; margin-top: 15px;}
  .lend-wrapper{ padding:0 15px 0 15px; }
  .lend-magtop8{ margin-top: 10px;}
  .lend-level2{  width: 100%; padding: 20px 0; }
  .my-bill-return{ margin-top: 10px;}
  .my-bill-lend, .my-bill-return {

    background: #fff;
  h2 {
    padding-left: 15px;
  }
  .return-scroll-wrapper, .lend-scroll-wrapper {
    background-color: #fff;
  .lend-wrapper, .return-wrapper {
  /*margin-left: 15px;*/
  /*margin-right: 15px;*/
  .lend-wrapper-content, .return-wrapper-content {
    border-collapse: collapse;
  thead {
    border-bottom: 1px solid #ddd;
  tr {
    text-align: left;
    height: 50px;
  th {
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
    white-space: nowrap;
  }
  }
  }
  tbody {
  tr {
    height: 50px;
    border-bottom: 1px solid #ddd;
  td {
    padding-left: 10px;
    width: auto;
    white-space: nowrap;
  }
  }
  }
  }
  }
  }
  }

  .no-bill {
    position: absolute; width: 100%;
    left:0;
    top: 67px;

    color: #bbb;
  .img1 { position: absolute; top: 0;
    width: 60px; left: 45px;
  }
  .img2 {
    position: absolute;     top: 60px;
    width: 126px;
    left: 129px;
  }
  p{ width: 100%; text-align: center; position: absolute; top: 180px}
  }
  }
</style>
