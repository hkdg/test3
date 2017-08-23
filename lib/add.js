function add(aa,bb) {
  // 实现该函数
    var a = aa;
		var b= bb;
		var c = a.split('').reverse();
		var d= b.split('').reverse();
		var arr=[];
		var num=0;
		var aaa;
		for(var i=0;i<Math.max.apply(null,[a.length,b.length]);i++){
			var tepl = (Number(c[i])?Number(c[i]):0)+(Number(d[i])?Number(d[i]):0)+num;
			num=0;
			if(tepl>9){
				num=1;
				tepl-=10;
			}
			arr.push(tepl);
		}
		if(num===1){
			arr.push(num);
		}
		return arr.reverse().join('');
}

module.exports = add