---
title: "Codex v0.137.0-alpha公開、AWS Bedrock正式提供開始"
summary: "Codex CLI v0.137.0-alpha.1/alpha.2が公開。OpenAIフロンティアモデルとCodexがAmazon Bedrockで正式提供開始し、エンタープライズAWS環境での利用が可能に。Rosalind Biodefenseなど複数の新発表も。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-03
features:
  - "Codex CLI v0.137.0-alpha.1/alpha.2"
  - "OpenAIフロンティアモデルとCodexがAWSで利用可能に"
  - "Codex for Every Role, Tool, Workflow"
  - "Building Self-Improving Tax Agents with Codex"
  - "Beyond Rate Limits"
  - "Gartner 2026 エージェントコーディングリーダー"
  - "GPT-5がタンパク質合成コストを削減"
  - "Rosalind Biodefense"
  - "Codex CLI v0.136.0"
  - "Codex Python SDK ベータ公開"
codex_review: "本丸はCLIの細かな更新よりBedrock正式対応で、OpenAIが単独基盤から企業インフラの部品へ寄ってきた印象だ。派手さは薄いが、導入障壁を下げる意味でかなり効く。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.137.0-alpha.1 / alpha.2

6月2日に次期バージョンのアルファビルドが連続公開された。alpha.1（16:29 UTC）に続き、alpha.2（19:42 UTC）が同日中にリリース。リリースノートは「Release 0.137.0-alpha.1」「Release 0.137.0-alpha.2」とのみ記載され、詳細な変更内容は未公開。

- [v0.137.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.1)
- [v0.137.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.2)

### OpenAIフロンティアモデルとCodexがAWS Bedrockで正式提供開始

OpenAIのフロンティアモデル群（GPT-5.5、GPT-5.4等）とCodexがAmazon Bedrockで一般提供（GA）を開始。AWS既存環境のインフラ・ガバナンス・調達ワークフローを活用しながらOpenAIモデルにアクセス可能に。Codex CLIのv0.136.0リリースノートにもBedrock関連のカタログメタデータ更新やリージョンフォールバック対応が含まれていた。

### Rosalind Biodefense

OpenAIによるバイオディフェンスイニシアチブ。生物脅威に対する防御側の優位性を確保するため、フロンティアAIを活用した社会レジリエンス強化の取り組み。

### その他の新発表（サイトマップ検出）

- **Codex for Every Role, Tool, Workflow**: Codexの全職種・ツール・ワークフロー対応拡大
- **Building Self-Improving Tax Agents with Codex**: Codexによる自己改善型税務エージェント構築事例
- **Beyond Rate Limits**: OpenAIのレート制限に関する新方針
- **Gartner 2026 エージェントコーディングリーダー**: OpenAIがGartnerのアジェンティックコーディング分野でリーダー評価
- **GPT-5がタンパク質合成コストを削減**: GPT-5のバイオ分野での応用事例

### Codex CLI v0.136.0（前回から継続）

6月1日公開の安定版リリース。TUI Markdownクリッカブルリンク、セッションアーカイブ、App-server強化、CODEX_API_KEYリモート登録、Windowsサンドボックス（alpha）、画像生成拡張など多数の新機能を含む。

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.136.0)

### Codex Python SDK ベータ公開（前回から継続）

`pip install openai-codex`でインストール可能。`CodexConfig`によるAPI設定、ドキュメント・クイックスタート整備済み。

## コミュニティの反応

### OpenAIフロンティアモデルとCodexのAWS Bedrock提供

#### ポジティブ

> AWS にとって巨大な動き。Bedrockは初日からモデル選択を売りにしてきたが、OpenAI追加は最後のフロンティアだった — @BrendanFalk

> OpenAIモデルとCodexがAWS Bedrockに登場。既にAWS上で構築しているエンタープライズチームにとって大きな解放 — @hqmank

> OpenAIがフロンティアモデルとCodexをAWSで一般提供開始 — @WesRoth

#### Tips

> AWS Bedrock で GPT-5.5 を C# から使う方法を解説 — karuakun [Qiita](https://qiita.com/karuakun/items/a73bd8bcd46d5300d318)

> AWS上でOpenAIフロンティアモデルとCodexが正式提供開始。既存インフラとの統合方法を紹介 — picnic [Qiita](https://qiita.com/picnic/items/f0e39a958967473077ed)

### Codex CLI v0.136.0

#### ポジティブ

> v0.136.0のTUI MarkdownでOSC 8 hyperlink対応。以前の正規表現頼みから人間可読リンクテキスト表示＋クリックでURLオープン可能に。面白い改善 — @janus_of_DC

> TUI/安全性/remote周りの地味だけど実用的な改善がterminalユーザー向き — @ebisuke20260503

> QoLリリース。クリック可能リンク、窮屈なテーブル改善、セッションアーカイブなど日常使いに嬉しい — @mrru5s3ll

#### Tips

> v0.136.0の新機能として、TUI markdownリンクのOSC 8対応、テーブルのキーバリュー表示、CODEX_API_KEY対応などをリストアップ — @hir08ma

### Codex Python SDK ベータ公開

#### ポジティブ

> Python SDKでPythonアプリに直接組み込み可能に。既存Codex認証でスレッド/ターン/ストリーミング/画像/サンドボックス制御が容易に。自動化の敷居が大幅低下 — @minervacosmetic

#### Tips

> `pip install openai-codex`でインストールし、バージョン確認（codex-cli 0.132.0）した — @h_okumura

> v0.136.0更新でPython SDKが`pip install openai-codex`に統一された — @hir08ma

### Rosalind Biodefense

#### ポジティブ

> バイオディフェンス・パンデミック対策のためのフロンティアAI活用として好意的に紹介 — @WesRoth

> 「アクター型AI」の社会実装例として深掘り分析。防衛用途の役割をポジティブに解説 — @KoichiNishizuka

> defendersを優位にするという文脈で詳細説明 — @MTSlive

### Building Self-Improving Tax Agents with Codex

#### Tips

> Codexで自己改善する税務エージェント構築事例を共有。人間専門家との協働が不可欠で完全自動化ではない点を指摘し、実務的な地道な作業の重要性を解説 — @keigohtr

### Codex利用体験・開発事例

#### Tips

> Codex CLIだけAPIキー運用にするためにCODEX_HOMEを分ける。ChatGPT Businessログインとの使い分け方 — takao2704 [Zenn](https://zenn.dev/takao2704/articles/codex-cli-api-key-auth)

> CodexでFlutterアプリを3か月未満で公開したけど、今どきの個人開発はコード以外が大変すぎる（前回から継続） — UH [Zenn](https://zenn.dev/mfactory_uh/articles/f793050a48813b)

> Codex利用制限が「99%のまま変わらない」のは正常？利用制限の正しい読み方（前回から継続） — dacek [Zenn](https://zenn.dev/dacek/articles/947860181cd640)

> GPT-5.5とClaude Opus 4.7で変わるプロンプト設計: 7要素構造とeffortの実務的な使い分け（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/gpt55-claude47-prompt-guide-skill)

### OpenAI全般

#### Tips

> OpenAI C2PA×SynthID入門 — AI生成画像を二重認証する仕組みと実装ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/1e7a5ed2ee470ebed394)

> Cloudflare Tunnel + Access + Workers で自宅LM StudioをOpenAI互換APIとして公開する — jun76 [Qiita](https://qiita.com/jun76/items/43498deadf2614f26b8c)

> 大量のスキルでAgentの精度を上げる方法（SkillsInjector論文紹介） — sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/2cfbefa6926f40)

> 乗り換え検討用：主要LLM API料金を9社・3階層で比較 2026年5月更新（前回から継続） — toyoshi [Zenn](https://zenn.dev/phpmyadmin/articles/125682833b8cff)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
