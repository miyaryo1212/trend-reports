---
title: "Codex CLI 0.143.0 安定版、GPT-5.6一般公開とGPT-Live発表"
summary: "静穏続きだったCodex CLIが0.143.0安定版に到達し、リモートプラグイン既定有効化・システムプロキシ対応・remote-control pair・MCPツール検索既定化などまとめて公開。OpenAI本体もGPT-5.6 Sol/Terra/Lunaを本日一般公開し、フルデュプレックス音声のGPT-Liveを発表した動きの大きい一日。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-09

features:
  - "GPT-5.6 Sol / Terra / Luna 一般公開"
  - "GPT-Live"
  - "Codex CLI 0.143.0 安定版リリース"
  - "Codex リモートプラグイン既定有効化"
  - "Codex システムプロキシ対応"
  - "codex remote-control pair"
  - "Codex Bedrock GPT-5.6モデル追加"
  - "Codex MCPツールのツール検索既定化"
codex_review: "派手なのはGPT-5.6とGPT-Liveだが、私にはCodexのプロキシ対応とMCP検索既定化のほうが業務導入の現実を一段進める地味に重要な更新に見える。音声新機能は注目を集めそうだが、やや話題先行気味でもある。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.143.0 安定版リリース

前回まで続いていた alpha 群 (0.143.0-alpha 系) から正式版 rust-v0.143.0 が公開されました。以下の新機能・変更を含みます。

- **リモートプラグイン既定有効化**: リッチなカタログ表示、npm マーケットプレイスソース、リモート/ローカル版の可視化を伴い、リモートプラグインがデフォルト ON に。(#30297 ほか)
- **システムプロキシ対応**: 認証および Responses API 通信を、PAC/WPAD 構成を含む macOS/Windows のシステムプロキシ経由でルーティング可能に。(#26708, #26709 ほか)
- **`codex remote-control pair`**: 稼働中のデーモンから手動ペアリングコードを生成する新コマンドを追加。(#29913)
- **Bedrock GPT-5.6 モデル追加**: Amazon Bedrock 経由で GPT-5.6 Sol / Terra / Luna を、`max` 推論エフォートのファーストクラスサポート付きで利用可能に。(#30285, #30467)
- **MCP ツールのツール検索既定化**: MCP ツールがデフォルトで tool search を使用。ChatGPT ホスト型 MCP サーバーはセッション認証を明示指定可能に。(#29486, #29733)
- App-server クライアントが環境の検査、子スレッドの一覧取得、特定ターンでの履歴フォークが可能に。(#30291 ほか)

このほか Windows ConPTY 入力処理や TUI の安全プロンプト、exec サーバー再接続などのバグ修正、OpenSSL/Hono/fast-uri 等のセキュリティ更新を含みます。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.143.0)

### GPT-5.6 Sol / Terra / Luna 一般公開

限定プレビュー中だった新世代3モデルが本日 7/9 に一般公開。Sol は新たな `max` 推論・ultra モードを搭載し、Terminal-Bench 2.1 で SOTA を記録。サイズと価格で三段に分かれ用途別に選び分ける構成です。

[ソース](https://openai.com)

### GPT-Live

フルデュプレックス音声モデル GPT-Live-1 / GPT-Live-1 mini を 7/8 発表。ChatGPT の音声で同時聞き取り・発話に対応し、全ユーザーへ展開されます。

[ソース](https://openai.com)

## コミュニティの反応

### Codex システムプロキシ対応

#### ポジティブ

> 企業 proxy 環境でログインは通るのに Responses API 本体が止まる分断を解消してくれる更新。PAC/WPAD 含むシステムプロキシ経由で認証・推論両方をルーティングできるのは大きい。 — @ebisuke20260503 [出典](https://x.com/ebisuke20260503/status/2074687949426536640)

> Windows の企業 PAC/WPAD 環境で proxy サポートがようやく追いついた。これだけでデバッグ時間を何時間も節約できそう。 — @Lolli_love_y0u [出典](https://x.com/Lolli_love_y0u/status/2074705255623762303)

#### ネガティブ

> max reasoning を指定しても、アップデート後に proxy が毎回壊れる原因を特定できない。 — @SlopToSignal [出典](https://x.com/SlopToSignal/status/2074715359018430896)

### codex remote-control pair

#### ポジティブ

> `codex remote-control pair` で running daemon から手動ペアリングコードを生成し、ChatGPT モバイルアプリと簡単にペアリングできた。 — @da4004ad [出典](https://x.com/da4004ad/status/2074893071045509582)

> remote-control pair 追加で「どんどん良くなってる」と好評。daemon からの手動ペアリングコード生成が便利。 — @sound4movement [出典](https://x.com/sound4movement/status/2074681343632691440)

#### Tips

> daemon から短命の手動ペアリングコードを生成できる点が、日々の摩擦を減らす小さいけど効く修正として紹介されている。 — @ebisuke20260503 [出典](https://x.com/ebisuke20260503/status/2074687959954243770)

### Codex MCPツールのツール検索既定化

#### ネガティブ

> Codex の MCP 接続が同一セッション内で突然切断され、再起動しても直らず、MCP ツールはほぼ期待できない状態。 — @cifilter [出典](https://x.com/cifilter/status/2074545090425459182)

> MCP ツールの発見・認証が不安定で、Atlassian MCP サーバーとの連携が非常に苦痛。Pro ユーザーとして優先修正を要請。 — @newq [出典](https://x.com/newq/status/2073023466249257260)

### GPT-Live

#### ポジティブ

> GPT-Live-1 を早期アクセスで試用。フルデュプレックスで自然な会話が可能になり、顧客対応エージェントとして完全に使えるレベル。 — @mweinbach [出典](https://x.com/mweinbach/status/2074908751459488124)

> 数週間テスト済み。従来の Advanced Voice Mode より賢く自然で、楽しく実用性が高いと実感。 — @btibor91 [出典](https://x.com/btibor91/status/2074938581383319916)

### GPT-5.6 Sol / Terra / Luna 一般公開

本日一般公開のため、個人ユーザーによる実利用の反応はまだ確認できません。公開前 (Zenn) では、強さそのものより出力トークンが前世代の約1/3に減った点をコスト面の進歩として評価する声がありました ([GPT-5.6のSol・Terra・Luna、強さより出力トークンの少なさで効く](https://zenn.dev/okssusucha/articles/20260630-gpt-5-6-sol-terra-luna))。

### Codex リモートプラグイン既定有効化 / Codex CLI 0.143.0 / Codex Bedrock GPT-5.6モデル追加

該当なし (個人ユーザーの実体験投稿は確認できず)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
