var dutils={};dutils.conf={};dutils.urls=function(){function a(b,g,i){var h=i[b]||false;if(!h){throw ("URL not found for view: "+b)}var f=h;var c;for(c in g){if(g.hasOwnProperty(c)){if(!h.match("<"+c+">")){throw (c+" does not exist in "+f)
}h=h.replace("<"+c+">",g[c])}}var d=new RegExp("<[a-zA-Z0-9-_]{1,}>","g");var e=h.match(d);if(e){throw ("Missing arguments ("+e.join(", ")+") for url "+f)}return h}return{resolve:function(b,c,d){if(!d){d=dutils.conf.urls||{}
}return a(b,c,d)}}}();