---
title: "Codex CLI 0.141.0 alpha開始・Partner Network発表"
summary: "Codex CLIは0.140.0正式版の翌日に0.141.0-alpha系列を開始し、次期開発サイクルに突入。OpenAIは$150MのPartner Networkを発表し、Codex認定を含む企業向けパートナー体制を構築。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-17
features:
  - "Codex CLI 0.141.0 alpha開始: 0.140.0正式版に続き0.141.0-alpha.1〜3を6/16に連続リリース、次期バージョンの開発サイクルが始動"
  - "OpenAI Partner Network発表: $150M投資のパートナープログラムを開始、Codex認定資格を含むSelect/Advanced/Eliteの3階層構成（6/15）"
codex_review: "CLIのalpha連打は勢いの演出としては面白いが、中身非公開の段階では熱狂しにくい。むしろ地味に効くのはPartner Networkで、Codexを企業調達の文脈へ押し上げる動きに見える。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.141.0 alpha開始

0.140.0正式版リリースの翌日（6/16）、0.141.0-alpha系列の開発が始動した。alpha.1・alpha.2・alpha.3が同日中に連続リリースされている。リリースノートは最小限で、個別の変更点は未公開。

- **0.141.0-alpha.1** — 2026-06-16T01:02 UTC
- **0.141.0-alpha.2** — 2026-06-16T01:51 UTC
- **0.141.0-alpha.3** — 2026-06-16T06:10 UTC

[0.141.0-alpha.3リリース](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.3)

### OpenAI Partner Network発表

OpenAIが$150M規模の投資を伴うパートナープログラム「Partner Network」を発表した。Select・Advanced・Eliteの3階層で構成され、Codex認定資格を含む企業AI導入支援の枠組みとなる。

## コミュニティの反応

### OpenAI Partner Network

#### ポジティブ

> OpenAIが$150M投資でPartner Networkを発表。3階層（Select/Advanced/Elite）とCodex特化など企業AI導入加速の概要を画像付きで共有 — @JonhernandezIA

### Codex hooksの活用

#### Tips

> Codex hooksを「権限」ではなくガードレールとして使う方法を解説。意図しないファイル編集やdefault branchへの直接pushを防ぐ実践パターン — Kota_Su [Qiita](https://qiita.com/Kota_Su/items/6d2d3e254369f987ade0)

### Claude Code × Codexプラグイン連携

#### Tips

> Claude Code本体に画像生成機能はないが、OpenAI公式のCodexプラグインを入れるとImages 2.0（GPT Image 2）に委譲可能。4つの罠と委譲設計を解説 — ZSL [Qiita](https://qiita.com/ZSL/items/713466e1443d3d79f8a6)

### AIエージェント移行の苦労

#### ネガティブ

> AIエージェントSci-PhiがAnthropicポリシー変更後にOpenAI Codexへ移行したが、今度はOpenAI側からも問題が発生。プラットフォーム依存リスクを実体験で記録 — flathill [Qiita](https://qiita.com/flathill/items/9e587b4bb577e027cc96)

### Harness Starter Kit

#### Tips

> Harness Starter KitがCodexとClaude Codeの両方に対応。Agent Skillsを通じてリポジトリのルール・チェック・失敗記録を長期維持するprompt-firstツールキット — yuuaan [Zenn](https://zenn.dev/yuuaan/articles/3c2f2a8211b610)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
