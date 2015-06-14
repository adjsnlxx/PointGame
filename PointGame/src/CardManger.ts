class CardManger {

    private static resource:egret.SpriteSheet;

    public static init(resource:egret.SpriteSheet) {
        this.resource = resource;
    }

    public static initCards():Card[] {
        var cards:Card[] = [];
        var num:number = 0;
        var count:number = 3;
        var index:number =1;
        var realNum:number = 0;

        for(var i:number=1;i<=14;i++) {
            num = i;

            if (i >= 10) {
                num = 10;
            }else if(i==1 || i==9){
                num = 20;
            }

            if(i==14) {
                count = 1;
            }

            for(var j=0;j<=count;j++) {
                realNum = num;
                if(j%2!=0) {
                    realNum=0;
                }

                var card:string = index+"_"+i+"_"+realNum;
                var name:string = card+"_jpg";
                var texture:egret.Texture = this.getTexture(name);
                cards[index] = new Card(card,texture);
                index = index +1;
            }
        }

        return cards;
    }

    public static createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap =new egret.Bitmap();
        var texture:egret.Texture = this.resource.getTexture(name);
        result.texture = texture;
        return result;
    }

    public static getTexture(name:string):egret.Texture {
        return this.resource.getTexture(name);
    }
}
