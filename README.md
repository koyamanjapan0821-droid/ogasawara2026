# 小笠原2026 PWA V14 Firebase同期版

## 変更内容
- Firebase Firestore同期を追加
- localStorageは維持し、表示・編集は従来どおり即時反映
- localStorageに保存される主要データをFirestoreへ同期
- 別端末の変更をリアルタイム受信して画面へ反映
- V13.1のアイコン・電話発信・旅程編集・持ち物編集・鳥写真拡大を維持

## 同期対象
- 旅程
- 持ち物
- スポット追加
- メモ
- 鳥追加
- 鳥写真（Firestore保存で検証）
- 鳥観察済み
- お気に入り
- 訪問済み

## Firebase
- Project ID: ogasawara2026
- Firestore path: ogasawara2026/shared/state/{localStorageKey}

## 注意
現在のFirestoreルールは動作確認優先の開放設定です。
動作確認後に必要に応じて制限してください。
