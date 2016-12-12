if (UNIT_TEST) {
    var uexIndexBarCase = {
        "open":function(){
            var x=400;
            var y=600;
            var width=200;
            var height=400;
            var data={
                textColor:"#E6942A",
                indices:["索引1","索引2","索引3"]
            }
            var extras=JSON.stringify(data);
            uexIndexBar.open(x,y,width,height,extras);
            UNIT_TEST.assert(true);
        },
        "onIndexClick":function(){
            UNIT_TEST.log("请点击索引，触发onIndexClick回调事件！");
            uexIndexBar.onIndexClick = function(data){
                UNIT_TEST.log("onIndexClick:" + data);
                UNIT_TEST.assert(true);
            };
        },
        "close":function(){
            uexIndexBar.close();
            UNIT_TEST.assert(true);
        }
    };
    UNIT_TEST.addCase("indexBar", uexIndexBarCase);
}