//当使用非PC端浏览器时候 监听屏幕高度
export function listenWindowSize(that, isShow, docmHeightInit) {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.onresize = () => {
      let { clientHeight } = document.documentElement;
      clientHeight < docmHeightInit
        ? (that.isShow = false)
        : (that.isShow = true);
    };
  }
}
