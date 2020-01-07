class girlfriend {
    constructor() {
        //起始位置
        this.r = 130; //物體的邊長
        this.x = width;
        this.y = height - this.r;
        this.speed = 8;

    }
    move() {
        // move會在sketch裡面不斷執行類似for迴圈
        //這裡要一直更新他的y軸速度，包含重力以及速度
        this.x -= this.speed; //給向上速度
        this.y = constrain(this.y, 0, height - this.r);

    }
    show() {
        image(gImg, this.x, this.y, this.r, this.r); //圖片/起始x/起始y/大小

    }
}