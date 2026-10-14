---
title: "Codex CLI 0.163.0 alpha.10.1〜13が連続公開"
summary: "Codex CLIの0.163.0-alpha.10.1、alpha.11、alpha.12、alpha.13が10月14日に連続公開された。リリースノートは版番号のみで詳細はない。コミュニティではChatGPTアプリとの連携を評価する声がある一方、常駐デーモンやモデル性能への不満も出ている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-15

features:
  - "Codex CLI 0.163.0-alpha.10.1〜alpha.13"
codex_review: "変更内容すら明かされない連続α公開は、開発速度の演出には見えても業界を動かす材料としては弱い。アプリ連携は魅力だが、常駐挙動やモデル性能への不満の方が、日常利用の信頼を左右する論点として気になる。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.163.0-alpha.10.1〜alpha.13

10月14日に 0.163.0-alpha.10.1、alpha.11、alpha.12、alpha.13 が連続で公開された。GitHub Releases 上のリリースノートはいずれも「Release 0.163.0-alpha.N」のみで、変更内容の詳細は記載されていない。

[ソース (alpha.13)](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.13)

## コミュニティの反応

### Codex CLI 0.163.0-alpha.10.1〜alpha.13

トーンは賛否混在。連携の使い勝手を評価する声がある一方、デフォルトで常駐するデーモンやモデル性能への不満も見られる。なお、投稿内容は alpha 版そのものへの言及ではなく、Codex CLI 全般への反応である。

#### ポジティブ

> Codex CLI から ChatGPT アプリへの同期が滑らかで便利 — @jmilinovich [出典](https://x.com/jmilinovich/status/2110477150025617693)

> Claude で議論・判断を行い、コード書きは手元の Codex CLI に任せるワークフローを実際に運用している — @zheyongli [出典](https://x.com/zheyongli/status/2110474861755985972)

#### ネガティブ

> OpenAI モデルは Codex CLI だとネイティブのハーネスより明らかに性能が劣り、「night and day difference」だと指摘 — @NateHelmig [出典](https://x.com/NateHelmig/status/2110480169555136999)

> Codex CLI が既定で永続的・自己更新型のバックグラウンドデーモンを起動し、リソース消費や Git リポジトリ関連の不具合が報告されていると警告 — @MalwareBibleJP [出典](https://x.com/MalwareBibleJP/status/2110478759602315766)

#### Tips

> Blender MCP Server 経由で Codex CLI を Blender に接続するセットアップ手順を紹介 — @akin_omo_oba [出典](https://x.com/akin_omo_oba/status/2110473534787006874)

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [Codex CLI 0.163.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.13)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
