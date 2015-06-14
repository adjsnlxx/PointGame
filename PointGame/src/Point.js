var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**  * Created by sam.lu on 2015/6/9.  */
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        _super.call(this);
        this.a = 1;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Point.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("preload");
    };
    Point.prototype.onGroupComplete = function () {
        console.log("prepare....");
        var txtr = RES.getRes("sq");
        var img = new Card(txtr);
        img.touchEnabled = true;
        img.width = 100;
        img.height = 100;
        img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.mine = new egret.Sprite();
        this.mine.x = 10;
        this.mine.y = 10;
        this.mine.width = 200;
        this.mine.height = 100;
        this.mine.addChild(img);
        this.other = new egret.Sprite();
        this.other.x = 10;
        this.other.y = 220;
        this.other.width = 300;
        this.other.height = 100;
        this.addChild(this.other);
        this.addChild(this.mine);
    };
    Point.prototype.onTouch = function (source) {
        //soucre._currentTarget
        console.log(source.target.num);
        if (this.a == 1) {
            var temp = this.mine.removeChild(source.target);
            this.other.addChild(temp);
            this.a = 0;
        }
        else {
            var temp = this.other.removeChild(source.target);
            this.mine.addChild(temp);
            this.a = 1;
        }
        console.log("ok...............");
    };
    return Point;
})(egret.DisplayObjectContainer);
//# sourceMappingURL=Point.js.map