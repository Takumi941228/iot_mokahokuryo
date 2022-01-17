# micro:bitからのセンサデータの収集し、グラフにする

micro:bitに搭載されている温度センサと照度センサをからのデータをmicro:bit独自の通信規格を用いて、
送信し、受け取ったデータをシリアル通信にて、コンソール画面で出力させます。
なお、データをcsv形式にて、ダウンロード可能なため、Microsoft Excelにて、計測した時間帯のグラフを作成する。

## デバイスのペアリング方法

* 右上の歯車マークから「Connect Device」をクリックする。

<center>
    <img src="./images/image1.png" width="40%">
</center>

* 次へ

<center>
    <img src="./images/image2.png" width="40%">
</center>

* 次へ

<center>
    <img src="./images/image3.png" width="40%">
</center>

* USEBにて接続しているmicro:bitをIDを選択し、「接続」をクリックする。
複数接続している場合は、使用するmicro:bitを選択する。

<center>
    <img src="./images/image4.png" width="40%">
</center>

* 完了

<center>
    <img src="./images/image5.png" width="40%">
</center>

## デバイスにプログラムを書き込む方法

* 左下の「ダウンロード」をクリックする。

<center>
    <img src="./images/image6.png" width="40%">
</center>

## コンソールにて、波形の観測方法

* 左下の「コンソールを表示　デバイス」をクリックする。

<center>
    <img src="./images/image7.png" width="40%">
</center>

正しく、データが取得できれば以下のような波形が出力される。

<center>
    <img src="./images/image8.png" width="40%">
</center>
