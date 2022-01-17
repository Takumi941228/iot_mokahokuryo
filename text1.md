# makecodeにて、プログラムを作成する

ブロックをくっつけてプログラムを作成します。

完成図
<center>
    <img src="./images/image11.png" width="60%">
</center>

「無線」カテゴリの中からから「無線のグループを設定」ブロック
「無線-その他」カテゴリの中から「無線の送信強度を設定」ブロックを
ドラッグ＆ドロップして、「最初に」ブロックにつなげる。

<center>
    <img src="./images/image12.png" width="60%">
</center>

<center>
    <img src="./images/image13.png" width="60%">
</center>

「無線」カテゴリの中から「無線で受信したとき」ブロックを
ドロップ＆ドロップする。

<center>
    <img src="./images/image14.png" width="60%">
</center>

「シリアル通信」カテゴリの中から「シリアル通信-名前と数値を書き出す」ブロックを
ドラッグ＆ドロップして、「無線で受信したとき」ブロックにつなげる。
「name」と「value」をコピーして、貼り付ける。

<center>
    <img src="./images/image15.png" width="60%">
</center>

<center>
    <img src="./images/image16.png" width="60%">
</center>

「基本」カテゴリの中から「一時停止（ミリ秒）」ブロックを
ドラッグ＆ドロップして、「無線で受信したとき」ブロックにつなげて、数値を「1000」にする。


<center>
    <img src="./images/image17.png" width="60%">
</center>

<center>
    <img src="./images/image18.png" width="60%">
</center>
