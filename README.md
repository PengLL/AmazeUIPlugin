# AmazeUIPlugin
###演示地址：[模态框](http://121.43.106.56:91/)

##说明
- 一个amazeui模态框插件，效果可看演示
- 模态框是针对图片的弹出开发的。可通过参数控制图片过大弹出时相对屏幕的缩小比例。

##使用方法
1. ####添加html代码

    	<div class="am-modal">
			<div class="am-modal-mask"></div>
			<div class="am-modal-bd">
		   	 	<button class="am-modal-close">X</button>
				<div><canvas id="am-modal-cvs"></canvas></div>
				<div class="am-modal-text"></div>
			</div>
		</div>
PS: 如果不需要图片下面的文字部分。可以删除class为am-modal-text的div


2. #### 引入项目中src文件夹中的Css和Js文件

	PS:项目的Js基于jQuery，所以引入Js之前请先引入jQuery

3. ####通过jQuery选择需要添加效果的元素，添加addModal方法he方法参数
	- src: 弹出图片的路径(必需)
	- text: 图片底部的文字 (非必需)
	- scale: 如果图片过大，会根据此参数相对屏幕进行缩小 (非必需)
	
####例如：$(element).addModal({src:"images/beauty.jpg",text:"图片描述文字"});


