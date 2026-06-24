# 小笠原2026 PWA V9 verified

## 内容
- index.html
- app.js
- style.css
- manifest.json
- service-worker.js

## V9 修正内容
- 現在アップロードされた app(3).js / index(3).html / style(2).css を基準に作成
- 鳥図鑑の写真サムネイルをタップで拡大表示
- 拡大表示は object-fit: contain で全体表示
- 閉じるボタン、背景タップ、Escで閉じる
- 既存の鳥追加、写真追加、写真削除、キャラ、レアこうたろう設定を維持
- Service Worker と index のキャッシュバスターを V9 に更新

## 反映方法
GitHub Pages のリポジトリ直下に上書きアップロードしてください。
鳥画像とキャラクター画像はZIPに含めていません。既存どおり以下へ直接配置してください。

- assets/birds/
- assets/characters/
