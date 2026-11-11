---
title: "Codex CLI 0.167.2と0.170系初アルファ公開"
summary: "Codex CLIの安定版パッチ0.167.2と、次の0.170系で最初のアルファ版0.170.0-alpha.1が公開された。0.169系アルファもalpha.10〜alpha.11.1の3版が出た。どの版もリリースノートに変更内容は書かれていない。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-12

features:
  - "Codex CLI 0.167.2"
  - "Codex CLI 0.170.0-alpha.1"
  - "Codex CLI 0.169.0-alpha.10〜alpha.11.1"
codex_review: "変更内容が見えない連続リリースは、開発の活発さより利用者の判断材料の乏しさが目立つ。承認画面で差分を確認できる改善は地味だが、エージェントへの信頼を支える設計として評価したい。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.167.2

0.167 系の安定版パッチ 0.167.2 が 2026-11-11 20:03 (UTC) に公開された。リリースノートは「Release 0.167.2」の一文だけで、変更内容は書かれていない。公開者は github-actions[bot] ではなく imac-oai だった。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.167.2)

### Codex CLI 0.170.0-alpha.1

次の 0.170 系で最初のアルファ版 0.170.0-alpha.1 が 2026-11-11 20:09 (UTC) に公開された。リリースノートは「Release 0.170.0-alpha.1」の一文だけで、変更内容は書かれていない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.1)

### Codex CLI 0.169.0-alpha.10〜alpha.11.1

0.169.0 系アルファ版が 3 版続けて公開された。どの版もリリースノートは「Release 0.169.0-alpha.N」の一文だけで、変更内容は書かれていない。

| バージョン | 公開日時 (UTC) | 公開者 |
|---|---|---|
| 0.169.0-alpha.10 | 2026-11-11 03:38 | github-actions[bot] |
| 0.169.0-alpha.11 | 2026-11-11 10:17 | github-actions[bot] |
| 0.169.0-alpha.11.1 | 2026-11-11 19:59 | imac-oai |

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11.1)

## コミュニティの反応

### Codex CLI 0.167.2

0.167.2 そのものを取り上げた投稿は見つからなかった。集まったのは、11 月 6 日公開の 0.167.0 で入った変更を含め、0.167 系全体についての投稿である。全体として好意的なトーンだった。

#### ポジティブ

> 0.167 から、モデルプロバイダーを切り替えても保存済みの会話が隠れなくなった。プロバイダーに縛られなくなって便利。 — @figueirego [出典](https://x.com/figueirego/status/2120477640993669595)

> 11 月 6 日の 0.167.0 から、承認画面を開いたままパッチの中身を確認できるようになった。中身を見ずに承認しなくて済む。 — @techresearchlab [出典](https://x.com/techresearchlab/status/2119927687771046382)

#### ネガティブ

該当なし

#### Tips

> 0.167 では、承認プロンプトが出ている間にパッチの詳細を展開し、読んでから承認するとよい。更新は `npm install -g @openai/codex@0.167.0` で行う。 — @wonoh74 [出典](https://x.com/wonoh74/status/2119611173427454278)

### Codex CLI 0.170.0-alpha.1

X を検索したが、該当する投稿は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.169.0-alpha.10〜alpha.11.1

見つかった投稿は、バージョン一覧の更新、別のアルファ版のセキュリティ修正の報告、関係のない内容だけだった。今回の 3 版を使った個人の感想や Tips は見つかっていない。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2)
- [rust-v0.170.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.1)
- [rust-v0.169.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.10)
- [rust-v0.169.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11)
- [rust-v0.169.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11.1)
