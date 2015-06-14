class Point extends egret.DisplayObjectContainer {

    private other:egret.Sprite;
    private mine:egret.Sprite;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");
    }

    private onGroupComplete() {
        var resource:egret.SpriteSheet = RES.getRes("card");
        CardManger.init(resource);

        var cards:Card[] = CardManger.initCards();
        for(var i:number=1;i<cards.length;i++) {
       //  alert(cards[i].name);
         //   break;
        }

       // var txtr:egret.Texture = this.resource.getTexture("start_png");
       // console.log("prepare...."+(txtr==null));
        var img:Card =cards[1];
        img.touchEnabled=true;
        img.width=100;
        img.height=100;
        img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        this.mine = new egret.Sprite();
        this.mine.x=10;
        this.mine.y=10;
        this.mine.width=200;
        this.mine.height=100;
        this.mine.addChild(img);

        this.other = new egret.Sprite();
        this.other.x=10;
        this.other.y=220;
        this.other.width=300;
        this.other.height=100;
        this.addChild(this.other);
        this.addChild(this.mine);
}
    private onTouch(source:egret.TouchEvent) {
    //soucre._currentTarget
    /*console.log(source.target.num);
        if(this.a==1) {
            var temp = this.mine.removeChild(source.target);
            this.other.addChild(temp);
            this.a=0;
        }else {
            var temp = this.other.removeChild(source.target);
            this.mine.addChild(temp);
            this.a=1;
        }
        console.log("ok...............");*/
    }
}