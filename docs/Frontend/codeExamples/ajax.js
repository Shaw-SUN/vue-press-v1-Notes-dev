let xhr = new XMLHttpRequest()
xhr.open('post', '/url') //请求类型;路径
xhr.send()
xhr.onreadystatechange = function () {
  // 监听onreadystatechange事件变化
  if (xhr.readyState === 4 && xhr.state == 200) {
    alert(xhr.responseText)
  }
}

// 封装ajax方法
function myAjax1(method, url, next) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url) //请求类型;路径
  xhr.send()
  xhr.onreadystatechange = function () {
    // 监听onreadystatechange事件变化
    if (xhr.readyState === 4 && xhr.state == 200) {
      // 异步获取结果
      next(xhr.responseText) // 回调函数方式，不能大量使用，很难维护，不建议使用
    }
  }
}
// 回调一个promise
function myAjax2(method, url) {
  return new Promise(function (resolve) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url) //请求类型;路径
    xhr.send()
    xhr.onreadystatechange = function () {
      // 监听onreadystatechange事件变化
      if (xhr.readyState === 4 && xhr.state == 200) {
        // 异步获取结果
        resolve(xhr.responseText)
      }
    }
  })
}

myAjax2('get', '/data').then(alert(res))
