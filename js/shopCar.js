window.onload = function () {
	if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {
                if (els[i].className === cls
                    || els[i].className.indexOf(cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var carUl = document.getElementsByTagName('ul');//获取每个商品盒子元素
    var checkInputs = document.getElementsByClassName('check');//单选元素
    var checkAllInputs = document.getElementsByClassName('checkAll');//全选元素
    var selectedTotal = document.getElementById('selectedTotal');//已选数量
    var priceTotal = document.getElementById('priceTotal');//已选金额

    //计算
    function getTotal() {
        var seleted = 0;
        var price = 0;
        for (var i = 1; i < carUl.length; i++) {
            if (carUl[i].getElementsByTagName('input')[0].checked) {
                seleted += parseInt(carUl[i].getElementsByTagName('input')[2].value);
                price += parseFloat(carUl[i].getElementsByTagName('li')[5].innerHTML);
            }
        }
        selectedTotal.innerHTML = seleted;
        priceTotal.innerHTML = price.toFixed(2);
    }
    
    //小计
    function getSubTotal(carUl) {
        var lis = carUl.getElementsByTagName('li');
        var price = parseFloat(lis[3].innerHTML);
        var count = parseInt(carUl.getElementsByTagName('input')[2].value);
        var SubTotal = parseFloat(price * count);
        lis[5].innerHTML = SubTotal.toFixed(2);
    }
    //全选
    for (var i = 0 , len = checkInputs.length; i < len; i++) {
        checkInputs[i].onclick = function () {
            if (this.className === 'checkAll check') {
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            }
            if (this.checked == false) {
                for (var k = 0; k < checkAllInputs.length; k++) {
                    checkAllInputs[k].checked = false;
                }
            }
            getTotal();
        }
    }

    //数量加减、商品删除
    
	for (var i = 0; i < carUl.length; i++) {
	    carUl[i].onclick = function (e) {
	        e = e || window.event;
	        var el = e.srcElement;
	        var cls = el.className;
	        var input = this.getElementsByTagName('input')[2];
	        var val = parseInt(input.value);
	        var reduce = this.getElementsByTagName('input')[1];
	        switch (cls) {
	            case 'c':
	                input.value = val + 1;
	                getSubTotal(this);
	                break;
	            case 'a':
	                if (val > 1) {
	                    input.value = val - 1;
	                }
	                if (input.value <=1) {
	                	alert('该宝贝不能再减少了哟~');
	                }
	                getSubTotal(this);
	                break;
	            case 'w-7':
	                var conf = confirm('确定要删除吗？');
	                if (conf) {
	                    this.parentNode.remove(this);
	                }
	                break
	            default :
	                break;
	        }
	        getTotal();
	    }
     }   
    checkAllInputs[0].checked = true;
    checkAllInputs[0].onclick();
}
