---
title: "Codex CLI alpha.10到達、DeployCo設立が話題に"
summary: "Codex CLI Rust版がv0.131.0-alpha.10まで到達し連日の高速リリースが継続。コミュニティではOpenAIのTomoro買収によるDeployCo設立やCodex Chrome拡張機能が注目を集めている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-13
features:
  - "Codex CLI v0.131.0-alpha.10"
  - "Codex Chrome拡張機能"
  - "DeployCo (Tomoro買収)"
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
codex_review: "CLIの高速リリース自体は健全だが、この日の材料としてはやや過剰評価しにくい。むしろDeployCoやChrome拡張の余波のほうが、OpenAIの実装支配力をじわっと示していて気になる。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI v0.131.0-alpha.10

Rust版Codex CLIがv0.131.0-alpha.10に到達（5月12日）。前日のalpha.7から3バージョン進み（alpha.8、alpha.9、alpha.10）、v0.131.0-alpha.1（5月9日）からの連日リリースが計10バージョンに達した。

- [v0.131.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.10)
- [v0.131.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.9)
- [v0.131.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.8)

### その他の公式アップデート

本日新たな公式ブログ記事やプロダクト発表は確認されなかった。GPT-5.5 Instant、Voice API新モデル、Advanced Account Securityは前回から継続して提供中。

## コミュニティの反応

### DeployCo（Tomoro買収）

#### 分析

> OpenAIがAIコンサルティング会社Tomoroを買収し「DeployCo」を設立。初期調達額40億ドル超、評価額140億ドル規模。AIコンサルティング業界の淘汰を予測する分析記事 — こばやし うきょう [Zenn](https://zenn.dev/headwaters/articles/openai-deployco-consulting)

### Codex Chrome拡張機能

#### Tips

> Codex Chrome拡張機能入門 — 署名済みセッションでブラウザを自動化する完全ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/3524e497774c592fc3d2)

> OpenAIがCodex Chrome拡張をリリース、AIエージェントがログイン済みセッションに直接アクセス可能に — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/0dafddb51c0d4284dd18)

### GPT-5.5 Instant（前回から継続）

#### Tips

> GPT-5.5 Instant入門 — ハルシネーション52.5%削減とパーソナライズAPIの活用ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/b833d1d6dce9e9dfe25f)

### Codex CLI・Codex App

#### Tips

> Codex CLI の Vim mode と日本語 IME を共存させるための常駐ツール codex-ime-guard を作成 — nek0 [Zenn](https://zenn.dev/cat_ginuta/articles/5d9cb2c3de9917)

> Windowsアプリ版CodexでDirect3D12やVulkanのプログラムを作成するチュートリアル — masafumi [Zenn](https://zenn.dev/masafumi/articles/c9ab17b8502f51)

> OpenAIがCodexを無料開放した意図を考察 — nhatcaofedev [Qiita](https://qiita.com/nhatcaofedev/items/1b5b5016b5a74fe27fe5)

### OpenAI API・SDK関連

#### Tips

> OpenAI JSONモードの技術的課題と構造化出力のベストプラクティスに関する深掘りレポート — NewAITees [Zenn](https://zenn.dev/newaitees/articles/f47d722b548ff8)

> OpenAI の video API（sora-2モデル）を使った動画生成の実践記事 — ckato [Zenn](https://zenn.dev/ckato/articles/8000e0907a677d)

### 音声API新モデル（前回から継続）

#### Tips

> 週刊AIニュースでGPT-Realtime-2を含むrealtime API 3モデルリリースを紹介 — ほりえ [Zenn](https://zenn.dev/my_vision/articles/d9bea7fec0ae1b)

### その他

#### 分析

> 再帰的自己改善（RSI）の現実化について、OpenAIとAnthropicの研究者の警告を整理。GPT-5.3 Codex以降のAI自己改善能力に言及 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/7dbfe718b95aa1)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
