/* eslint-disable */
//  const userAgent = navigator.userAgent.toLowerCase()
export const Android = () => navigator.userAgent.match(/Android/i)
export const iOS = () => navigator.userAgent.match(/iPhone|iPad|iPod/i)
export const BlackBerry = () => navigator.userAgent.match(/BlackBerry/i)
export const Windows = () => navigator.userAgent.match(/IEMobile/i)
//  判断是否是大拇指App
export const isApp = () => navigator.userAgent.match(/THUMB/i)

// 去支付页面
export const goPay = (productName, amount, lendNo, unRecevieAmount) => {
  if (Android() && isApp()) {
    dmz_android.androidGoPay(productName, amount, lendNo, unRecevieAmount);
  }
  if (iOS() && isApp()) {
    //window.webkit.messageHandlers.applyPay.postMessage({productName: productName, amount: amount, lendNo: lendNo, unRecevieAmount: unRecevieAmount})  ;
    let produ=JSON.stringify({productName: productName, amount: amount, lendNo: lendNo, unRecevieAmount: unRecevieAmount});
    app.applyPay(produ)  ;
  }
}

//富有回调页面去充值
export const goRecharge=()=>{
  if (Android() && isApp()) {
    dmz_android.androidGoRecharge();
  }

  if (iOS() && isApp()) {
    app.continueToRecharge();
  }
}

//富有回调页面 继续出借
export const goChujie=()=>{
  if (Android() && isApp()) {
    dmz_android.androidGoBuy();
  }

  if (iOS() && isApp()) {
    app.continueToLend();
  }
}
//继续出借
export const goNowlend=()=>{
    if (Android() && isApp()) {
        dmz_android.androidNowlend();
    }

    if (iOS() && isApp()) {
        app.NowToLend();
    }
}
//  sign 中‘知道了’按钮跳转
export const goKnow=()=>{
    if (Android() && isApp()) {
        dmz_android.androidGoKnow();
    }

    if (iOS() && isApp()) {
        app.Konw();
    }
}
// 关闭h5页面
export const closeWebView = () => {
  if (Android() && isApp()) {
    dmz_android.androidFinish()
  }

  if (iOS() && isApp()) {
    window.webkit.messageHandlers.signResult.postMessage(null)
  }
}
