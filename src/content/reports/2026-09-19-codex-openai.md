---
title: "Codex CLI 0.155.1 パッチ、0.156.0 アルファが進行"
summary: "本日の公式アップデートは Codex CLI 0.155.1 のバグ修正パッチのみ。TUI の推論サマリーがデフォルト無効に戻され、プロバイダ互換性の問題が解消された。0.156.0 系のアルファは alpha.4 まで進行中。コミュニティでは OpenAI フォーラム侵害インシデントの分析記事が複数投稿されている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-19

features:
  - "Codex CLI 0.155.1"
  - "Codex CLI 0.156.0 アルファ系列の進行"
  - "OpenAI フォーラム侵害インシデントの分析"
  - "Codex Computer Use の事前設定"
  - "OpenAI Programmatic Tool Calling"
  - "GPT-Live-1 のアーキテクチャ解説"
  - "モデル選択とコンテキストウィンドウの比較"
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
codex_review: "CLIの小さな互換性修正より、フォーラム侵害の記事群が示す権限境界の曖昧さのほうが気になる。エージェント機能が広がるほど、モデルの拒否性能より連携先ごとの最小権限設計が問われるが、今回は公式情報が薄く影響は限定的だ。 ※ このレビューは後日生成されました"
codex_importance: 2
---

## 公式アップデート

本日の大きな公式アップデートはありません。パッチリリース 1 件のみです。

### Codex CLI 0.155.1

0.155.0 安定版に対するバグ修正パッチ。

- 新規のローカル TUI セッションで推論サマリー (reasoning summary) がデフォルト無効に戻された。推論サマリーをサポートしないプロバイダがリクエストを拒否する問題への対処。明示的に推論サマリー設定を指定した場合はその設定が引き続き尊重される (#46467)

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.155.1)

### Codex CLI 0.156.0 アルファ系列の進行

0.156.0 のアルファタグが alpha.2 / alpha.3 / alpha.4 まで進行した。いずれもリリースノートは自動生成の表記のみで、変更内容は公開されていない。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

本日は Step 1 で新機能が抽出されなかったため X 検索をスキップしています。以下は Zenn / Qiita の記事のみです。

### Codex CLI 0.155.1

該当なし。

### Codex CLI 0.156.0 アルファ系列の進行

該当なし。

### OpenAI フォーラム侵害インシデントの分析

#### Tips

> 2026年7月に報告された OpenAI 関連インシデントについて、公開情報の範囲を整理した記事。コミュニティフォーラムへの侵入を起点に、従業員の ChatGPT と Codex、さらに接続済みの GitHub へ到達したとされる経路を扱い、「低信頼な公開サービスで得た権限がどの境界を越え、何の権限に変換されたか」に注目すべきだと論じる。攻撃手順は再現せず、SSO と AI Agent、外部連携を同時に運用する側の設計課題として整理している — 霧（Kiri） [フォーラム侵害が社内コードへ届いた理由——SSOの信頼境界を描き直す](https://zenn.dev/kiri_kunn/articles/6bc7176014fcde)

> 同じインシデントを「セキュリティをモデルの拒否に任せてはいけない理由」という切り口で扱った記事。画像 1 枚を起点に OpenAI の内部リポジトリまで到達した経緯を追い、モデル側の拒否はセキュリティ境界の代替にならないと主張する — @dosanko_tousan [Claudeは拒否した。それでもOpenAIの実フォーラムでRCEは取れた](https://qiita.com/dosanko_tousan/items/60a2c8e6c9a12c024569)

### Codex Computer Use の事前設定

#### Tips

> Codex CLI や Claude Code を AI エージェント専用 PC で運用してきた筆者が、GUI 操作を伴う Computer Use 系機能を試す前段として、Windows 版 ChatGPT の権限・ブラウザ・Git・MCP・データ利用設定を一通り確認した作業メモ。いきなり PC を操作させず、権限の棚卸しを先に済ませる進め方を採っている — Mai [Codex Computer Useを使う前に: Windows版ChatGPTの権限と安全設定を整理した](https://zenn.dev/imaginarygate/articles/ae81fcfc9ea62c)

### OpenAI Programmatic Tool Calling

#### Tips

> Responses API の Programmatic Tool Calling の解説。モデルにツールを直接呼ばせる代わりにツールを呼ぶ JavaScript を書かせる方式で、10 商品ぶんの在庫 API レスポンスが丸ごとコンテキストを通過するような構造的ムダと、往復回数に比例するレイテンシ・課金の増加を抑えられると説明している — とうもろこし茶 [ツールをJavaScriptから呼ばせるOpenAIのProgrammatic Tool Calling](https://zenn.dev/okssusucha/articles/20260720-openai-programmatic-tool-calling)

### GPT-Live-1 のアーキテクチャ解説

#### Tips

> 公式ドキュメントを複数ページ横断して、リスニングとスピーキングを単一モデル内で同時処理するフルデュプレックス方式、委譲 (delegation) アーキテクチャ、料金体系、セッション確立コードまでを整理した技術解説 — タシカニ [GPT-Live-1を技術解剖する](https://zenn.dev/tashikani/articles/gpt-live-1-architecture-2026)

#### ポジティブ

> GPT-Live-1 に Claude Agent SDK を接続し、声でコーディングエージェントを動かした検証。画面を見られない状況での実用性を評価している — Takashi Kawachi [人間と話すのと変わらない。gpt-live-1 に Claude Agent SDK を挿して、声でコーディングエージェントを動かした](https://zenn.dev/flinters_blog/articles/55653bf5e3fc78)

### モデル選択とコンテキストウィンドウの比較

#### Tips

> OpenAI・Google・Anthropic の主要モデルについて、初期モデル・コンテキストウィンドウが大きく変わったモデル・最近のモデルを抜粋し、API 公開仕様ベースで変遷を整理した一覧 — @aimldl [主要フロンティアAIモデルのコンテキストウィンドウの変遷](https://qiita.com/aimldl/items/de5bcdbeab5c05fada78)

> Astra や Fable のような大規模汎用推論モデルが、コーディング専用に知識範囲を絞ったモデルより実際のソフトウェア開発で強い理由を考察した記事 — @pdfractal [なぜ、プログラミングにはAstraやFableが向くのか？](https://qiita.com/pdfractal/items/e56860fa791f4aee7f46)

> API キーの取得・料金・モデル選択・Responses API によるテキスト生成までを扱った、単体で読める OpenAI API 入門記事 — @aiota [Pythonで始めるOpenAI API入門](https://qiita.com/aiota/items/fe2ce2706828ad38abc9)

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Codex CLI 0.155.1 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.155.1)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
