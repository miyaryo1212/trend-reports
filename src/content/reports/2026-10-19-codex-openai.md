---
title: "公式更新なし、サンドボックス検証記事が国内で複数"
summary: "10月19日時点でCodex CLIの新リリースはなく、安定版0.164.0も未公開。国内コミュニティでは、Codex CLI 0.163.0のサンドボックス(workspace-write / permission profile / Windows MXC)を実機検証した記事と、OpenAIの大規模障害まとめ、28日間企画のDay 13リセット解説が公開された。"
importance: 1
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-19

features: []
codex_review: "公式の更新が止まった日に、権限設定の抜けやWindowsサンドボックスの不具合が複数人の手で掘り起こされたのは実務的に面白い。新機能の熱狂より、エージェントを安心して動かす足場の不安定さが普及のボトルネックになりそうだ。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

GitHub Releases の最新は 10月17日公開の 0.164.0-alpha.3(前回レポートで報告済み)で、それ以降の新規リリースはなく、安定版 0.164.0 も未公開です。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

本日の新機能・トピックはないため X 検索はスキップしました。以下は Zenn / Qiita で本日確認できた Codex・OpenAI 関連の記事です。いずれも既存バージョン(0.163.0)の挙動検証や周辺動向の整理で、トーンは全体として中立〜実務寄りです。

### Codex CLI サンドボックス・権限設定の実機検証

0.163.0 のサンドボックス挙動を手元で確認した記事が3本出ており、「公式ドキュメントの説明と実際の挙動のギャップ」を埋める内容が中心です。

#### Tips

> workspace-write を `codex sandbox` で1つずつ検証。/tmp には書けるが、ホーム配下と .git への書き込みと通信は止まるため、サンドボックス内では git commit もできない(Codex CLI 0.163.0 / Linux 6.12 / bubblewrap で確認) — エージェント規約工房 [出典](https://zenn.dev/agentkiyaku/articles/9a93fbb6076fa8)

> Codex CLI に .env を読ませないには permission profile(Beta)の deny を使う。未設定や `:workspace` 指定のみでは .env はそのまま読め、公式例の `"**/*.env"` だけでは .env.local と深い階層のファイルが読めた(0.163.0 で確認) — supportapp3 [出典](https://qiita.com/supportapp3/items/949794973a65fa5aac11)

> Windows 版 Codex で従来方式(elevated)のサンドボックスが動くかをテストし、新機能 MXC を無効化する手順。「MXC でファイルにアクセスできない」記事の続編 — Dejipot [出典](https://qiita.com/Dejipot/items/4aa486a704dcf96dc5f1)

#### ネガティブ

> Windows の新サンドボックス MXC でファイルにアクセスできない問題が発生し、従来方式へ戻す手順を公開(前掲記事の動機) — Dejipot [出典](https://qiita.com/Dejipot/items/4aa486a704dcf96dc5f1)

### OpenAI 大規模障害まとめ

#### 中立

> OpenAI ステータスページの新着インシデント20件を整理。ChatGPT・Codex・API(Agents API 含む)のほぼ全体に影響した大規模エラーで、すべて解決済み(Resolved) — picnic [出典](https://qiita.com/picnic/items/8eccced1489d39aec547)

### Codex 28日間企画 Day 13 の全体リセット

#### 中立

> 10月17日(米国時間)の Day 13 は再び全体リセット。6:12 の Done 投稿、日本時間での期限、対象となる利用枠を解説 — sponge841841 [出典](https://qiita.com/sponge841841/items/284d541decd0eee714b4)

### その他の OpenAI 関連記事

#### Tips

> ChatGPT Pro のサブスクだけで AI ペンテストツール Shannon を Daybreak Blue で動かし脆弱性監査。1回目は221分動いたが2回目は開始せず、追記で gpt-6-sol に替えて完走 — Coji Mizoguchi [出典](https://zenn.dev/coji/articles/chatgpt-pro-shannon-vulnerability-audit)

> Bedrock の GPT-6.1 Sol Ultrafast を実測し、完了時間と指定できる API の範囲を整理 — Yutaka Kashiwabara [出典](https://zenn.dev/kashiwabaray/articles/ccd54ccf730a8b)

#### 中立

> 2026年秋の AI アップデートを「安く・速く・小さく・旧モデル退場」の4点で業務視点から整理 — kosuke [出典](https://zenn.dev/kosukeozawa/articles/ai-updates-autumn-2026-business)

> GPT-4o・GPT-4.1 系の特定 API モデル5つが 2027-01-14 に終了。対象モデル ID と推奨移行先を公式廃止一覧ベースで整理 — とげ [出典](https://zenn.dev/toge_ai/articles/7b6f58443af317)

> Anthropic(Scion)・Cursor・OpenAI のバージョン管理まわりの動きと AI コードレビュー市場の現状を整理 — ShintaroAmaike [出典](https://zenn.dev/shintaroamaike/articles/1c2eb4a6ef2d84)

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [Zenn: Codex CLI の workspace-write を codex sandbox で検証](https://zenn.dev/agentkiyaku/articles/9a93fbb6076fa8)
- [Qiita: Codex CLIに.envを読ませない設定](https://qiita.com/supportapp3/items/949794973a65fa5aac11)
- [Qiita: Codex(Windows版)で従来方式のサンドボックスが動くか確認し、MXCを無効化する手順](https://qiita.com/Dejipot/items/4aa486a704dcf96dc5f1)
- [Qiita: OpenAI障害まとめ](https://qiita.com/picnic/items/8eccced1489d39aec547)
- [Qiita: Codex Day 13は再び全体リセット](https://qiita.com/sponge841841/items/284d541decd0eee714b4)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
