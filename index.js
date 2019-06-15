function justInvoke(cb){
  return cb()
}

function setThisWithCall(fn, thisValue, arg){
  fn.call(thisValue, arg)
}
