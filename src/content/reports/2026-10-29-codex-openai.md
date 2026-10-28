---
title: "OpenAI、ServiceNow・Oracleと提携拡大"
summary: "OpenAI が ServiceNow、Oracle との提携をそれぞれ拡大した。ServiceNow のワークフローを ChatGPT と Codex から使えるようにし、Oracle の業務アプリは ChatGPT に組み込む。Codex CLI では 0.166.0 のアルファ版が 3 本追加された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-29

features:
  - "OpenAI × ServiceNow 提携拡大"
  - "OpenAI × Oracle 提携拡大"
  - "Codex CLI 0.166.0-alpha.4〜alpha.5.1"
codex_review: "ServiceNowやOracleとの連携は、AIを業務システムの外付けチャットから実務の入口へ移す動きとして筋がいい。権限を既存ルールに委ねる設計は地味だが重要で、実際の価値は連携数より現場で安全に定着するかで決まるだろう。"
codex_importance: 3
---

## 公式アップデート

### OpenAI × ServiceNow 提携拡大

OpenAI と ServiceNow が提携を拡大しました。1 月に発表した提携の続きで、OpenAI のモデルとエージェントを ServiceNow の製品に組み込み、ServiceNow のワークフローを ChatGPT と Codex から使えるようにします。発表の主な内容は次のとおりです。

- **ChatGPT 向けの ServiceNow 連携**: 業務のコンテキストとワークフロー操作を ChatGPT から直接使えます。例として、IT 担当者が ChatGPT を離れずに、似たインシデントを探す、変更のリスクを評価する、ServiceNow のレコードを更新する、といった作業を挙げています。
- **Codex 連携**: ServiceNow の AI Workflow Factory に Codex を組み込みます。
- **セキュリティ・リスク分野**: OpenAI のサイバーセキュリティ向けモデルを使った Security and Risk ソリューションを開発します。ServiceNow の Super Intelligence Control Tower には、音声で操作するガバナンス機能とリスク評価機能を加えます。
- **権限の扱い**: ServiceNow の Action Fabric が組織の既存の業務ルールと権限を適用します。そのため、ユーザーが実行できる操作は組織の設定とアクセス権の範囲に限られます。

[ソース](https://openai.com/index/openai-servicenow-partnership-expansion/)

### OpenAI × Oracle 提携拡大

OpenAI と Oracle が提携を拡大しました。Oracle の業務アプリと AI エージェントを ChatGPT で使えるようにします。また、Oracle の新しいサービスも OpenAI のモデルで動かします。

[ソース](https://openai.com/index/oracle-apps-in-chatgpt/)

### Codex CLI 0.166.0-alpha.4〜alpha.5.1

次期版 0.166.0 のプレリリースが新たに 3 本公開されました。どのリリースノートも本文は「Release 0.166.0-alpha.x」だけで、変更内容は書かれていません。

- **0.166.0-alpha.4**: 2026-10-28 01:28 (UTC) 公開
- **0.166.0-alpha.5**: 2026-10-28 04:49 (UTC) 公開
- **0.166.0-alpha.5.1**: 2026-10-28 19:25 (UTC) 公開

[ソース (alpha.4)](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.4) / [ソース (alpha.5)](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5) / [ソース (alpha.5.1)](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1)

## コミュニティの反応

### OpenAI × ServiceNow 提携拡大

該当なし (見つかった投稿は公式発表やニュースの共有、企業寄りのアカウントによる拡散だけで、個人ユーザーの体験や感想はありませんでした)

### OpenAI × Oracle 提携拡大

該当なし (見つかった投稿は公式発表やニュースの共有、企業寄りのアカウントによる拡散だけで、個人ユーザーの体験や感想はありませんでした)

### Codex CLI 0.166.0-alpha.4〜alpha.5.1

該当なし

## ソース

- [OpenAI: OpenAI and ServiceNow expand partnership across enterprise workflows](https://openai.com/index/openai-servicenow-partnership-expansion/)
- [OpenAI: OpenAI expands partnership with Oracle to bring its apps to ChatGPT](https://openai.com/index/oracle-apps-in-chatgpt/)
- [GitHub: openai/codex rust-v0.166.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.4)
- [GitHub: openai/codex rust-v0.166.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5)
- [GitHub: openai/codex rust-v0.166.0-alpha.5.1](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1)
