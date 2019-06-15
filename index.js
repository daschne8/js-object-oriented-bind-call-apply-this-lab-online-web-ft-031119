function justInvoke(cb){
  return cb()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}
