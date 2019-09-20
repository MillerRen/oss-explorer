export default function (path) {
  var arr = path.split('/')
  return arr.pop() || arr.pop() || '/'
}
