# 小笠原2026 V13 icon + telephone

## 変更内容
- `icon-512.png` をPWAアイコンとして登録
- iPhone用 `apple-touch-icon` を追加
- 予約情報に電話番号と `tel:` 発信リンクを追加
- cache versionをV13へ更新

## アップロード対象
GitHub Pages のリポジトリ直下へ、このZIP内の全ファイルを上書きアップロードしてください。


## V13.1
- 南島ツアーを「マリンガイド小笠原」に更新
- TEL 04998-2-3707 の電話ボタンを追加


## V14 Rebuild Firebase同期版
- Firestore: `ogasawara2026/shared/sections/*` に保存
- localStorageはバックアップとして維持
- 旅程・持ち物・スポット・メモ・鳥・写真データを同期対象化
- `syncStatus`で同期状況を表示
- Storageは未使用（Spark無料枠維持）
