# 小笠原2026 PWA V8

## 内容
- index.html
- app.js
- style.css
- manifest.json
- service-worker.js

## 反映方法
GitHub Pages のリポジトリ直下に上書きアップロードしてください。
鳥画像とキャラクター画像はZIPに含めていません。既存どおり以下へ直接配置してください。

- assets/birds/
- assets/characters/

## V8 修正内容
- レアこうたろう出現判定を再整理
- レアこうたろう表示時の hidden 解除、表示タイマー、タップ時のタイマー競合を修正
- 通常キャラのタップ後3秒切替を安定化
- Service Worker のキャッシュ名を V8 に更新
- index.html の app.js / style.css にキャッシュバスターを付与

## 注意
iPhone のホーム画面PWAは古いキャッシュが残る場合があります。更新後にSafariで一度URLを開いてリロードしてからホーム画面版を確認してください。
