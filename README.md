# 小笠原2026 PWA V15 Firebase正式版

## 主な変更
- Firebase Firestore同期を正式実装
- 保存処理を `store.set()` 経由で共通化
- PC → スマホ / スマホ → PC の双方向同期を想定
- `ogasawara2026/shared` ドキュメントに `state` として保存
- 右下に同期ステータス表示を追加
  - Firebase同期済み
  - Firestore保存中
  - 同期失敗
  - ローカル保存中
- localStorageはバックアップとして維持
- Service WorkerキャッシュをV15化
- Firebase CDNはService Workerキャッシュ対象外

## 確認手順
1. GitHub Pagesへアップロード
2. PCでアプリを開く
3. 持ち物を1件追加
4. Firestore `ogasawara2026 > shared` の `state` が更新されることを確認
5. iPhone Safariで同じURLを開く
6. PCの追加内容が反映されることを確認
7. iPhone側で持ち物を1件追加
8. Firestore更新日時が変わること、PC側へ反映されることを確認

## 注意
Firestoreルールは動作確認中は以下のままにすること。

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ogasawara2026/{document=**} {
      allow read, write: if true;
    }
  }
}
```
