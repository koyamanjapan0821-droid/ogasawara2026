# 小笠原2026 PWA V5

GitHub Pages公開用の旅のしおりアプリです。

## V5変更点

- 鳥図鑑の画像参照を外部URLから `assets/birds/*.jpg` に変更
- 各鳥3枚、合計36枚のローカル画像を参照
- Service Workerのキャッシュ名を更新
- V4.1のスポット追加キャンセル修正を維持
- キャラクターのドラッグ移動・ランダム移動を維持

## 画像配置

画像本体はZIPに含めていません。GitHub上で以下へ個別アップロードしてください。

- `assets/characters/`
- `assets/birds/`

## 更新方法

1. ZIPを解凍
2. 中身をリポジトリ直下へアップロード
3. 画像は既存の `assets/characters/` と `assets/birds/` に維持または追加
4. GitHub Pages反映後、ブラウザを強制更新

PWAキャッシュが残る場合は、iPhoneのホーム画面アイコンを削除して再追加してください。


## V5.1
- `assets/characters/rare_kohtaro.png` を低確率レアキャラとして追加。
- 12秒ごとに低確率判定、出現時間は5秒。
- 画像本体はZIPに含めず、GitHub上の同パス配置を前提。
