---
title: "v2.1.90で/powerupチュートリアル追加、パフォーマンス最適化も"
summary: "Claude Code v2.1.90がリリースされ、アニメーションデモ付きインタラクティブレッスン/powerupコマンドが追加。SSEトランスポートの線形時間処理化やPowerShellセキュリティ強化も実施。コミュニティではハーネスエンジニアリングの実践記事が引き続き活況。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-03
features:
  - "/powerupコマンド（インタラクティブレッスン）"
  - "CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE環境変数"
  - ".husky保護ディレクトリ追加"
  - "SSEトランスポート線形時間処理最適化"
  - "PowerShellツールセキュリティ強化"
  - "SDK長時間セッションのトランスクリプト書き込み最適化"
  - "MCPツールスキーマのキャッシュキー最適化"
  - "/resumeの並列ロード改善"
codex_review: "派手なのは/powerupですが、私にはO(n²)潰しや権限チェック強化のほうがずっと本筋に見えます。CLIエージェント市場は新機能競争が過熱気味で、こういう地味な改善を積める陣営が結局強い。 ※ このレビューは後日生成されました"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.90（2026-04-01）

前日のv2.1.89に続く連続リリース。初心者向けチュートリアル機能とパフォーマンス改善が中心。

**新機能:**

- **`/powerup`コマンド**: Claude Codeの機能をアニメーションデモ付きのインタラクティブレッスンで学べる新機能。@ファイル参照やShift+Tabモード変更など10の機能を体験的に習得可能
- **`CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE`環境変数**: オフライン環境で`git pull`失敗時にマーケットプレイスキャッシュを保持
- **`.husky`を保護ディレクトリに追加**: acceptEditsモードで`.husky`ディレクトリが保護対象に

**パフォーマンス改善:**

- **SSEトランスポートの線形時間処理化**: 大きなストリームフレームの処理がO(n²)からO(n)に改善
- **MCPツールスキーマのキャッシュキー最適化**: ターンごとのJSON.stringifyを排除
- **SDK長時間セッションのトランスクリプト書き込み最適化**: 長い会話での二次的な遅延を解消
- **`/resume`の全プロジェクトビュー並列化**: 多数のプロジェクトを持つユーザーのロード時間を改善

**セキュリティ強化:**

- **PowerShellツール権限チェック強化**: 末尾`&`バックグラウンドジョブバイパス、`-ErrorAction Break`デバッガハング、アーカイブ抽出TOCTOU、パース失敗時のdeny-ruleフォールバック劣化を修正

**バグ修正:**

- レート制限オプションダイアログが使用量上限到達後に繰り返し自動表示され、セッションクラッシュに至る無限ループを修正
- `--resume`がdeferred tools・MCPサーバー・カスタムエージェント使用時にプロンプトキャッシュミスを起こす問題を修正（v2.1.69以降のリグレッション）
- PostToolUseフォーマット・オン・セーブフックがファイルを書き換えた際に連続編集で「File content has changed」エラーになる問題を修正
- JSON出力+exit code 2のPreToolUseフックがツール呼び出しを正しくブロックしない問題を修正
- 自動モードがユーザーの明示的な境界指示（「pushするな」「XをYの前に待て」）を無視する問題を修正
- ライトテーマでクリック展開ホバーテキストがほぼ見えない問題を修正
- `/model`、`/config`等の選択画面でスクロール時にヘッダーが消える問題を修正

**動作変更:**

- `--resume`ピッカーが`claude -p`やSDK呼び出しで作成されたセッションを非表示に
- `Get-DnsClientCache`と`ipconfig /displaydns`を自動許可から除外（DNSキャッシュプライバシー）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.90)

## コミュニティの反応

### /powerupコマンド

#### ポジティブ

> /powerupコマンドで10の機能をアニメーション付きで体験しながら学べる。初心者に親切で完成度が高い — @hiro44_pino [X](https://x.com/i/status/2039644508871397852)

> アニメーション付きの10機能を体感的に叩き込め、読むだけではなく実践的に使いこなすのに最適 — @oda_nobunaga10 [X](https://x.com/i/status/2039567616042537307)

> ターミナル内でアニメーション付きインタラクティブレッスンが可能、機能を使いながら学べるv2.1.90の目玉機能 — @kawai_design [X](https://x.com/i/status/2039629409431544009)

> 初心者向けに便利機能10個を体験しながら学べるチュートリアルがターミナル内で始まる — @09pauai [X](https://x.com/i/status/2039636525294706903)

### SSEトランスポート線形時間処理最適化

#### ポジティブ

> O(n²)からO(n)に改善され、長い会話での重さが解消。実務ユーザーとして快適になると高評価 — @shima0hide [X](https://x.com/i/status/2039499285788844364)

### CLAUDE_CODE_NO_FLICKER=1環境変数（前回から継続）

#### ポジティブ

> NO_FLICKERモードで画面ちらつきがなくなり、マウスクリック対応で長いセッションでも安定。長時間ユーザーにとって革命的 — @0x__tom [X](https://x.com/i/status/2039463315190186197)

> 入力欄が下部固定、最新箇所ジャンプ、コピペしやすく非常に便利 — @makaneko_AI [X](https://x.com/i/status/2039512841057939634)

#### Tips

> `CLAUDE_CODE_NO_FLICKER=1 claude`で起動。画面ちらつきやジャンプを防ぎ、マウスで入力欄移動可能だが一部デメリットあり — @nukonuko [X](https://x.com/i/status/2039443783872544846)

### PermissionDeniedフック（前回から継続）

#### Tips

> Claude Code辞典に詳細を反映。auto modeの拒否後に発火し、{retry: true}でリトライ指示が可能 — @kawai_design [X](https://x.com/i/status/2039483299098452228)

> defer/PermissionDeniedフックがAIを安全に止める仕組みとして紹介。日本語履歴バグ修正なども併記 — @tanaami_123 [X](https://x.com/i/status/2039272798779044037)

### /buddy（エイプリルフール機能、前回から継続）

#### ポジティブ

> ソースコードリークで事前に存在が判明していた/buddyが正式登場。アヒル、カピバラ、ドラゴンなどのASCIIクリーチャーにstats・レア度・帽子のバリエーションがある — @sahilypatel [X](https://x.com/i/status/2039018248654762250)

> エイプリルフール限定のスラッシュコマンド。遊び心があって良い — @koic [X](https://x.com/i/status/2039151819042295947)

### ハーネスエンジニアリングの実践（前回から継続）

#### Tips

> VSDD × CoDDで「実装品質」と「変更時の整合性」を両立するプラグインを開発。ハーネスエンジニアリングの進化形 — @kaito [Zenn](https://zenn.dev/sc30gsw/articles/bbb8b3c2fff1f6)

> Railsプロジェクトでハーネスエンジニアリングを実践し、Claude Codeのルールファイル群を設計。セッション間の一貫性を確保 — @kiyokuro [Zenn](https://zenn.dev/dely_jp/articles/ccdf9b4cf2183f)

> CLAUDE.mdのルールはコンテキスト圧縮で消える可能性があるため、hookでプロセスレベルで強制する方法を解説 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/4d7ea98a4cb110)

> ralph loop（while trueループでAIエージェントにプロンプトを反復入力させる手法）をシンプルな導入として紹介 — @_mkazutaka [Zenn](https://zenn.dev/explaza/articles/100d753df57fa7)

> Agent Teamsは不要。カスタムスキル1本で品質ゲート付きパイプラインを再現できると実証 — @yuto[SEEDA] [Zenn](https://zenn.dev/seeda_yuto/articles/claude-code-multi-agent-pipeline)

> AIコードレビューのハーネス設計をOpenAI・Anthropicの実践に基づいて整理 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/harness-engineering-ai-code-review)

### AI生成コードの品質担保

#### Tips

> テスト・自動レビュー・E2Eエビデンス・本番データのマスク参照の4つの仕組みで品質を担保。8時間で8リポジトリ・PR10本以上の実績 — @あたに [Zenn](https://zenn.dev/pepabo/articles/claude-code-one-day-workflow)

> Claude Codeに「役職」を与えることで10日間で2万行・158ファイルを生成。ただしAIに投げるだけではうまくいかなかった体験を共有 — @yurelu [Zenn](https://zenn.dev/yurelu/articles/a921e5592dacd2)

### Claude Code × Maestroでネイティブアプリ検証

#### Tips

> React Native + KMPプロジェクトでMaestroを使い、Claude Codeによる実装の自動検証を実現 — @31o3 [Zenn](https://zenn.dev/aldagram_tech/articles/b6268a6aa4d26d)

### Claude Codeソースコード流出事件（前回から継続）

#### 中立

> 流出は単なるAnthropicの失点ではなく、AIエージェント系ツールの競争軸をずらす出来事。Codex・Gemini CLI・OpenClawまで含めた競争の論点を分析 — @tuzumi minami [Zenn](https://zenn.dev/tuzuminami/articles/02f4dc0aa25889)

> .npmignoreの1行（*.map）の記入漏れが51万2千行の流出を引き起こした。安全構造は最初から設計すべきという教訓 — @m_tookuni [Qiita](https://qiita.com/m_tookuni/items/547035b233e7e1fdabe2)

### Claude Mythosリーク（前回から継続）

#### 中立

> リーク文書から判明したClaude Mythosの正体に迫る分析記事。Opus 4.6を「劇的に」上回る性能とされ、「Capybara」という新ティアとして分類 — @kanase [Zenn](https://zenn.dev/kanase/articles/claude-mythos-agi)

### Claude Code活用事例

#### Tips

> Claude CodeでAI RSSリーダー「Feed Curator」を構築。既読・スキップ履歴から嗜好を自動学習し、パーソナライズされた技術ブリーフィングを生成 — @rizumita [Zenn](https://zenn.dev/caphtech/articles/feed-curator-ai-rss-with-claude-code)

> claude -pが大袈裟すぎるため、非対話エージェント専用の軽量ハーネスを探索した記録 — @コキエ [Zenn](https://zenn.dev/kok1eeeee/articles/claude-code-headless-agent-harness)

> Claude CodeでぱんだツールズをPR86本・41ツール開発。トークン消費の多さが課題 — @サクッとぱんだ [Zenn](https://zenn.dev/sktt_panda/articles/panda-tools-claude-code-dev)

> Claude CodeとSnowflake MCPを組み合わせ、dbtモデルのパフォーマンスチューニングを自動化 — @KOH [Zenn](https://zenn.dev/dely_jp/articles/9962b33ad86bc3)

> Stitch × Figma Make × Claude Codeで個人サイトを完成。デザインから実装までの一気通貫フロー — @スナガク [Zenn](https://zenn.dev/sunagaku/articles/stitch-figmamake-design-flow)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
