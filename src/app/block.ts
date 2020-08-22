export class Block {
    public rowNext : Block ;
    public rowPrev : Block ;
    public colNext : Block ;
    public colPrev : Block ;
    public color   : String;
    
    constructor(color : String)
    {
        this.color = color
    }
}
