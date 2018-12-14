
// 数値変換
function _getNumStr(val) {
  var num = Number(val);
  if (val == null || val == "" || isNaN(num)) {
    throw new Error('数字を入力してください');
  } else {
    return '(' + num + ')';
  }
}

// 数値取得
function getNum1() {
  return _getNumStr(document.getElementById('num1').value);
}
function getNum2() {
  return _getNumStr(document.getElementById('num2').value);
}

// 出力
function showResult(val) {
  document.getElementById('box').innerHTML = val;
}

// イベントハンドラ
var buttonArray = document.querySelectorAll('[id$=button]');
buttonArray.forEach(function(element) {
  element.onclick = function() {
    var result;
    try {
      result = eval(getNum1() + this.innerText + getNum2());
    } catch (e) {
      result = e.name + " : " + e.message;
      console.log(result);
    }
    showResult(result);
  };
});
