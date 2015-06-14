class StringUtil {

    public static splitInt(source:string,regExp:string):number[] {
        var temp:string[] = source.split(regExp);
        if(temp!=null&&temp.length>0) {
            var array:number[] = [];
            for(var i=0;i<temp.length;i++) {
                array[i] =parseInt(temp[i]);
            }

            return array;
        }
        return null;
    }

}