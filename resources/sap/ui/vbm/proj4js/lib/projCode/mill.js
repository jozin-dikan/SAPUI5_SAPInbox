Proj4js.Proj.mill={init:function(){},forward:function(p){var l=p.x;var a=p.y;var d=Proj4js.common.adjust_lon(l-this.long0);var x=this.x0+this.a*d;var y=this.y0+this.a*Math.log(Math.tan((Proj4js.common.PI/4.0)+(a/2.5)))*1.25;p.x=x;p.y=y;return p},inverse:function(p){p.x-=this.x0;p.y-=this.y0;var l=Proj4js.common.adjust_lon(this.long0+p.x/this.a);var a=2.5*(Math.atan(Math.exp(0.8*p.y/this.a))-Proj4js.common.PI/4.0);p.x=l;p.y=a;return p}};
