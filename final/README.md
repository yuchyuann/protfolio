### 簡介
這是一個跑跑遊戲網站，類似Google離線的小恐龍，
遊戲名稱取為Escape from Reality And Eat Ceiba。

### 如何使用
##### 遊戲規則
點start後，遊戲開始！使用者是主角猴子，遊戲方式就如同遊戲方式一樣，要逃離女朋友（另一隻猴子），並吃掉Ceiba!
點空白鍵可以跳躍，如果不幸碰到女朋友猴子沒有閃開，遊戲就結束。吃掉Ceiba可以加分，但不吃不會怎麼樣。


### 技術部分
##### CSS
* Bootstrap NavBar
* Bootstrap Button

##### p5.js繪圖
* setup: createCanvas
* preload
* windowresize
* draw: 
  1. 背景圖片反覆移動
  2. 敵人出現是以array random產生，每個敵人出現間距不一樣
  3. 主角的移動
  4. 速度隨分數增加，分數越高，速度越快
  5. 分數每0.1秒+1分
* class: 每個角色的功能
  1. move
  2. hit: collide 2D
  3. jump
  4. show
  
##### jquery
* hide element
* score
* keypress function 

##### 背景圖片是我畫的
