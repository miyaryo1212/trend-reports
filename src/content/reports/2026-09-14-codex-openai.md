---
title: "Pets直接チャットとAppshotsのWindows対応"
summary: "ChatGPT デスクトップ 26.908 で Pets から直接チャットを送れるクイックチャットが追加され、Appshots (両 Alt キーで最前面アプリを共有) が Windows でも利用可能になった。Codex Micro にはテキスト挿入キー割り当て、API 側ではプロジェクト API キーの有効期限設定が加わっている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-14

features:
  - "Pets クイックチャット (ChatGPT デスクトップ 26.908)"
  - "Appshots の Windows 対応"
  - "Codex Micro キーへの「テキスト挿入」割り当て"
  - "プロジェクト API キーの有効期限設定"
codex_review: "Petsは少し派手だが本質は常駐導線の改善で、AppshotsのWindows対応の方が地味に効く。APIキー期限は運用成熟のサインで、企業利用にはこちらが一番重要に見える。"
codex_importance: 3
---

## 公式アップデート

### Pets クイックチャット (ChatGPT デスクトップ 26.908)

macOS / Windows のフローティング Pets の操作から、直接チャットを送信できるようになった。入力時に `@` でコンテキストを、`$` でスキルを指定できる。

[ソース](https://help.openai.com/en/articles/9982051-chatgpt-desktop-app-release-notes)

### Appshots の Windows 対応

両方の Alt キー押下で最前面アプリのスクリーンショットとテキストを ChatGPT に共有する Appshots が、Windows デスクトップ版でも利用可能になった。

[ソース](https://help.openai.com/en/articles/9982051-chatgpt-desktop-app-release-notes)

### Codex Micro キーへの「テキスト挿入」割り当て

Codex Micro のキーに「テキスト挿入」を割り当てられるようになった。送信はせず、定型テキストを現在のプロンプトへ挿入する動作となる。

[ソース](https://help.openai.com/en/articles/9982051-chatgpt-desktop-app-release-notes)

### プロジェクト API キーの有効期限設定

プロジェクト API キーの作成時に有効期限を指定できるようになった。あわせて、組織およびプロジェクト単位で最大有効期間 (cap) を強制できる。

[ソース](https://platform.openai.com/docs/changelog)

なお Codex CLI の GitHub Releases は 0.155.0-alpha.3.10 (2026-09-11) が最新で、本日時点で新規の更新はない。

## コミュニティの反応

### Pets クイックチャット (ChatGPT デスクトップ 26.908)

「常駐ランチャー」として評価する声が日本語圏を中心に目立つ。一方でクリックできないという不具合報告もある。

#### ポジティブ

> ChatGPT ペットが「ただの置物」から仕事を覚え、チャット状況を見てくれて新チャットも Pet から直接始められるようになった。思いついたら即 Pet に話しかけるだけで済むのが楽 — @hiro44_pino [出典](https://x.com/hiro44_pino/status/2098720217480187952)

> デスクトップアプリを閉じてもペットがチャット履歴を見張っていて、Mini 版なら邪魔にならず常駐ランチャーとして最高 — @h_a_t_a_r_a_k_e [出典](https://x.com/h_a_t_a_r_a_k_e/status/2098799186653405190)

> pets は待ち時間 (dead time) への気の利いた対処。長時間タスクは画面に何も動きがないと倍の長さに感じる — @iamvishal16_ios [出典](https://x.com/iamvishal16_ios/status/2098641096691884376)

#### ネガティブ

> pets が壊れていてクリックできない — @scarfbarf6 [出典](https://x.com/scarfbarf6/status/2098576165195993198)

#### Tips

該当なし。

### Appshots の Windows 対応

手動でのスクリーンショット貼り付け作業が減った点への好評が中心。Codex をフルスクリーン表示している場合のキャプチャ不具合が報告されている。

#### ポジティブ

> 両 Alt キー押下だけで最前面ウィンドウのスクショ＋テキストを即共有でき、手動貼り付けの手間が激減した — @alymoursy [出典](https://x.com/alymoursy/status/2097803814493643204)

> Appshots が Windows 版 ChatGPT デスクトップに追加され、スクショ貼り付け作業が大幅に楽になったので更新推奨 — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2098603490339643403)

> 今日 Appshots が Windows で使えるようになったのを発見。Codex / ChatGPT のワークデスクトップアプリで便利そう — @Mohsine_Mahzi [出典](https://x.com/Mohsine_Mahzi/status/2098780814213300445)

#### ネガティブ

> Appshots (Alt+Alt) を試したが、Codex をフルスクリーンにしていると前景アプリが正しくキャプチャされず、背景の Chrome だけが写る — @TheDevSerdarius [出典](https://x.com/TheDevSerdarius/status/2098686834993684796)

#### Tips

> 両 Alt キー押下で最前面ウィンドウをそのまま添付できる新機能として Appshots を紹介。Computer Use など関連機能とあわせて整理 — @Rakhsh_Tech [出典](https://x.com/Rakhsh_Tech/status/2098909480117579848)

### Codex Micro キーへの「テキスト挿入」割り当て

該当なし。直近1週間の X 投稿を検索したが、この機能に関する個人ユーザーの実体験・感想は確認できなかった。

### プロジェクト API キーの有効期限設定

運用面で歓迎する声と、「期限はタイマーに過ぎずローテーション作業自体は自動化されない」という指摘が並んだ。

#### ポジティブ

> キーのローテーション前に org cap を設定しておけば、次回作成時に自動で期限が制御できて便利 — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2098804404522528976)

#### ネガティブ

> 有効期限は単なるタイマーで、ローテーション自体は手動での重複作成・全デプロイ更新・検証が必要。忘れた場合のリスクとコストは残る — @omidsaffari [出典](https://x.com/omidsaffari/status/2099071156959469855)

#### Tips

> org cap を先に決めてから project cap を設定する (project は org を超えられない)。既存キーには遡及適用されないため、新旧キーの重複期間を設けて検証しながら切り替えるのが実践的 — @omidsaffari [出典](https://x.com/omidsaffari/status/2099071156959469855)

## ソース

- [ChatGPT Desktop App Release Notes](https://help.openai.com/en/articles/9982051-chatgpt-desktop-app-release-notes)
- [OpenAI Platform Changelog](https://platform.openai.com/docs/changelog)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
