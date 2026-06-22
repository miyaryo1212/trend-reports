---
title: "Codex CLI 0.142.0-alphaの連続リリースが継続、alpha.10まで到達"
summary: "Codex CLI 0.142.0-alphaが前回のalpha.6からさらに進み、6/20〜6/21にalpha.7〜alpha.10を連続公開。本日の公式の大型発表はなく、コミュニティではhooks運用やデスクトップ版のトラブル報告が中心。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-22

features:
  - "Codex CLI 0.142.0-alpha.7〜alpha.10: 6/20〜6/21に4つのalphaリリースを追加で連続公開（リリースノートは最小限、個別変更点は未公開）"
codex_review: "連続alphaは勢いの演出としては面白いが、変更点を伏せたまま本数だけ積む運びは、スタートアップ界隈の“速さアピール”に少し似ていて過剰評価されやすい。むしろhooks運用の知見やWSL不具合の共有のほうが、現場にはじわじわ効く重要情報に見える。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.142.0-alpha.7〜alpha.10

前回報告した0.142.0-alpha.6に続き、6/20〜6/21にかけてさらに4つのalphaリリースが連続公開された。リリースノートはいずれも「Release 0.142.0-alpha.x」のみで、個別の変更点は未公開のまま。0.142.0系のalphaは前回分と合わせて10本に達しており、開発ペースの速さが続いている。

- **0.142.0-alpha.7** — 2026-06-20T00:43 UTC
- **0.142.0-alpha.8** — 2026-06-21T03:55 UTC
- **0.142.0-alpha.9** — 2026-06-21T06:51 UTC
- **0.142.0-alpha.10** — 2026-06-21T20:59 UTC

[0.142.0-alpha.10リリース](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10)

その他、本日新規の公式アップデートはありません。

## コミュニティの反応

> 今回のalpha連続リリースに直接言及するX/Twitter上の反応は確認できませんでした（該当なし）。以下はCodex/OpenAI周辺の本日固有のコミュニティ記事です。

### Codex hooks・自動化

#### Tips

> Anthropicが提案する「Dreaming」（エージェントが空き時間に過去の記憶・履歴を読み直し、重みは更新せず記憶ストアだけを整理・統合する仕組み）をOpenAI Codexのhooksで再現する実験ログ。コンテキストを増やさずに精度を上げる構成を検証 — kani@新人SIer勤務 [Zenn](https://zenn.dev/kakecake/articles/20260618-codex-hooks-dreaming)

#### ネガティブ（ハマりどころ）

> Codexのhooksを自動化に使う際の落とし穴6つをまとめた実験ログ。`additionalContext`がモデルに届かない、`approval_policy="never"`でゲート系hookが無効になる、trustの単位が直感と異なり「再trust地獄」に陥る等を報告。版による挙動差が大きい点に注意喚起 — kani@新人SIer勤務 [Zenn](https://zenn.dev/kakecake/articles/20260618-codex-hooks-pitfalls)

### Codex環境トラブル

#### ネガティブ

> Windows版Codexデスクトップ（Microsoft Store / MSIX版）が、WSLモード（runCodexInWindowsSubsystemForLinux）有効時に「Unable to locate the Codex CLI binary」で接続失敗する問題を報告。同梱されるべきLinuxバイナリ（bin/codex）が欠落していることが原因 — wharfe [Zenn](https://zenn.dev/wharfe/articles/codex-desktop-wsl-binary-missing)

### Codex運用設計

#### Tips

> 複数リポジトリでCodexを使う際のドキュメント分割構成を紹介。PC全体の`~/.codex/AGENTS.md`とリポジトリの`AGENTS.md`を分け、後者からSOP（標準作業手順）とDESIGN.md（フロント設計）をシンボリックリンクで参照する3層レイアウト — Ryo Minegishi [Zenn](https://zenn.dev/zapabob/articles/agents-md-sop-design-symlink)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
