---
title: "本日公式更新なし、コミュニティはJalapeño発表に注目"
summary: "本日の公式アップデートはなく、Codex CLIは0.143.0-alpha系の採番が進むのみ。コミュニティではOpenAI×Broadcomの推論チップ「Jalapeño」発表、CodexのRecord & ReplayやDeployment Simulationの解説、hooks・WSL起動不良などの運用知見が話題を集めた。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-25

features:
  - "OpenAI×Broadcom 推論チップ Jalapeño"
  - "Codex Record & Replay"
  - "OpenAI Deployment Simulation"
  - "OpenAI Patch the Planet"
  - "Codex Auto-review"
  - "Codex hooks 運用知見"
  - "Codex デスクトップ WSL起動不良"
codex_review: "公式更新ゼロの日でも、Jalapeñoのような基盤投資とhooksやWSL不具合の泥臭い運用知見が同じ熱量で語られるのは健全だ。チップ発表はやや期待先行だが、短期的には後者の地味な知見のほうが現場への効き目は大きい。"
codex_importance: 3
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLI のリリースフィードでは `0.143.0-alpha.6`〜`0.143.0-alpha.15`（2026-06-24 時点）まで開発版の採番が進んでいるのみで、新機能を明記した正式版のリリースノートは確認できませんでした。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### OpenAI×Broadcom 推論チップ Jalapeño

#### ポジティブ

> 2026年6月24日、OpenAIとBroadcomが共同開発したLLM推論専用カスタムチップ「Jalapeño」が正式発表。OpenAIが自社インフラに独自シリコンを投入する戦略上きわめて大きな一手だと評価。 — @picnic [Qiita](https://qiita.com/picnic/items/13bb0b93d013a0277922)

### Codex Record & Replay

#### Tips

> 作業を一度Macで実演するとCodexがそれを見て再利用可能な「スキル」に書き起こすRecord & Replay（アプリ版 26.616）を紹介。成果物がブラックボックスな録画ではなく人間が読めるテキストのSKILL.mdである点を評価。 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260623-codex-record-and-replay-skill-generation)

### OpenAI Deployment Simulation

#### ポジティブ

> 6月16日公開のDeployment Simulationを解説。合成テストをやめ本番の会話ログ（130万会話）をそのまま新モデルに食わせることで「評価されていると気づかれる」問題に対処する手法を素朴かつ的確と評価。 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260617-openai-deployment-simulation)

### OpenAI Patch the Planet

#### Tips

> 6月22日始動のOpenAIとTrail of BitsのPatch the Planet（19のOSSを1週間監査し64PRを生成）を取り上げ、脆弱性を「見つけたあと」の仕分けを運用でどう解くかに着目した点が面白いと紹介。 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260624-openai-patch-the-planet-daybreak-oss-secu)

### Codex Auto-review

#### Tips

> Claude Codeの自動承認に相当するCodexの「Auto-review」を設定する手順をメモ。Codexの権限は approval_policy と sandbox_mode の2軸で構成される点を整理。 — @kdm [Zenn](https://zenn.dev/ytkdm/articles/codex-auto-review)

### Codex hooks 運用知見

#### ネガティブ

> Codex hooks を自動化に使う際のハマりどころ6つを共有。additionalContext がモデルに届かない、approval_policy="never" でゲート系 hook が無効になるなど、版による挙動差が大きいと報告（CLI 0.139.0 / app 26.609 / Windows 11）。 — @kani@新人SIer勤務 [Zenn](https://zenn.dev/kakecake/articles/20260618-codex-hooks-pitfalls)

#### Tips

> AnthropicのDreaming（オフラインに記憶ストアを整理・統合する仕組み）をCodexのhooksで再現し、コンテキストを増やさず精度を上げる実験ログを公開。 — @kani@新人SIer勤務 [Zenn](https://zenn.dev/kakecake/articles/20260618-codex-hooks-dreaming)

### Codex デスクトップ WSL起動不良

#### ネガティブ

> Windows の Codex デスクトップ（MSIX版）が「Run agent in WSL」有効時に "Unable to locate the Codex CLI binary." で接続失敗。同梱 Linux バイナリの欠落が原因と報告（26.609系）。 — @wharfe [Zenn](https://zenn.dev/wharfe/articles/codex-desktop-wsl-binary-missing)

#### Tips

> FreeBSD jail 上で Codex CLI の device-auth が失敗する問題を調査。IPv6到達性の有無と症状に相関があり、Node.js の DNS 解決順序を変更することで回避できたと記録。 — @彦坂 [Zenn](https://zenn.dev/hikosakasohtaro/articles/20260619_codex_freebsd_jail)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
