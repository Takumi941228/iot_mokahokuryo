# センサからの情報収集



## micro:bitについて

micro:bitはイギリスのBBCが主体となって作った、手のひらサイズの教育向けマイコンボードです。
最新バージョンはv2.0となっています

### [micro:bitの主な機能](https://microbit.org/ja/get-started/user-guide/overview)

- 25個のチップLED
- 2個のボタンスイッチ
- スピーカ
- マイク
- 明るさセンサ
- 加速度センサ
- 磁器センサ
- 温度センサ
- 無線通信
- BLEを搭載

### 仕様

- MCU：32 bit ARM Cortex M4ベース Nordic nRF52833
  - 動作周波数：64 MHz
  - RAM：128 KB
  - BLE搭載
- LED × 25
- ボタンスイッチ × 2個
- タッチセンサ
- スピーカ
- マイク
- 加速度センサ
- 磁器センサ
- バッテリーコネクタ（JST製PHコネクタピン）
- サイズ：43 × 52 × 11mm（コネクタ部含む）
- 重さ：9g

### 外観図

外観は下図の通りとなる．

<center>
    <img src="./images/image22" width="80%">
</center>

## オンチップ温度の取得

