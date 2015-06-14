/**
 * Created by GIGABYTE on 2015/6/13.
 */
class Card extends egret.Bitmap {

    private _name:string;// 名字
    private id:number;// 唯一标识
    private num:number;//点数
    private score:number;//积分

    public constructor(card:string,source:egret.Texture){
        super(source);
        this.name =card;
        this.split(this.name);
    }

    private split(card:string) {
        var temp:number[] = StringUtil.splitInt(card,"_");
        this.id = temp[0];
        this.num = temp[1];
        this.score = temp[2];
    }

    public get name():string{
        return this._name;
    }

    public set name(value:string) {
        this._name=value;
    }

    /*public get num():number {
        return this._num;
    }

    public set num(value:number) {
        this._num = value;
        this.texture = this.textures.getTexture("number"+this._num);
    }*/
}