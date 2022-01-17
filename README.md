# センサからの情報収集

こちらは、真岡北稜高校にて実施する体験授業に使うテキストになります。

栃木県立県央産業技術専門校 ITエンジニア科

## micro:bitから受信したデータを収集して、グラフにする

micro:bitに搭載されている温度センサと照度センサをからのデータをmicro:bit独自の通信規格を用いて、
送信し、受け取ったデータをシリアル通信にて、コンソール画面で出力させます。
なお、データをcsv形式にて、ダウンロード可能なため、Microsoft Excelにて、計測した時間帯のグラフを作成することができます。

<center>
    <img src="./images/image20.png" width="80%">
</center>

<center>
    <img src="./images/image21.png" width="80%">
</center>

### ・体験授業の構成図

micro:bitを複数台用いて、実習を行います。
一台を送信用デバイスとして、無線通信により、温度センサ及び照度センサからの値を送信します。
各受信用デバイスには、無線通信により、送られてきた温度センサ及び照度センサの値をデータしてcsv形式にてダウンロードし、
Excelにてグラフにすることができる。

<center>
    <img src="./images/image10.png" width="80%">
</center>

### ・ブロックのプレビュー

送信デバイスと受信デバイスの両方のブロックになっています。

<img src="https://github.com/Takumi941228/iot_mokahokuryo/blob/master/.github/makecode/blocks.png" width="60%">
