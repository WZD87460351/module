//index
var index = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				let aLi = document.getElementsByTagName('li');
				for(let i=0;i<aLi.length;i++){
					aLi[i].index = i;
					aLi[i].onclick = function(){
						alert(this.index)
					}
				}
			})
		})
	},
	tan: function(inp,btn){
		require(['jquery'],function($){
			$(document).ready(function(){
				$(btn).click(function(){
					alert($(inp).val());
				})
				
			})
		})
	}
}
//about
var about = {
	init: function(num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				console.log(num)
			})
		})
	}
}

//news
var news = {
	funk: function(num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				console.log(num);
			})
		})
	}
}

exports.index = index;
exports.about = about;
exports.news = news;