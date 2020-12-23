const debounce = (fn, wait) => {
    let timer = null
    let timeStamp = 0
    let context = null
    let args = null
    let run = () => {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
    
    let clean = () => {
      clearTimeout(timer)
    }
  
    return function() {
      context = this
      args = arguments
      let now = (new Date()).getTime()
      if (now - timeStamp < wait) {
        clean()
        run()
      } else {
        run()
      }
      timeStamp = now
    }
}
  
export default debounce