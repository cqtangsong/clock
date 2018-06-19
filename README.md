# -
canvas时钟实现

CSS-flower
利用纯CSS设置页面布局以及利用CSS3做一些特效


展现出一个开花的动态效果。

主要利用CSS3，包括border-radius,transform,animation等等做出比较动态化的效果。
遇到的问题：
1. 多个盒子同时旋转时，都是相对于自身的中心进行旋转的，导致旋转中心不统一，因此通过transform-origin来设置，其值可以是left,center,right,bottom,top等，也可以是x轴，y轴的坐标值。
2. 当所有的盒子旋转结束时，都会回到最初的状态，这是因为旋转不会改变他们的layout，因此，通过设置animation-fill-mode:fowards即可。
