---
title: "v2.1.132リリース・TAI設立・NLAs解釈可能性研究"
summary: "Claude Code v2.1.132でSIGINT graceful shutdown等の多数修正。Anthropic Institute (TAI)設立でAI社会影響研究を本格化。Natural Language Autoencoders (NLAs)による新しい解釈可能性手法を発表。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-08
features:
  - "Claude Code v2.1.132リリース"
  - "Claude Code v2.1.131リリース"
  - "Claude Code v2.1.129リリース"
  - "The Anthropic Institute (TAI) 設立"
  - "Petri 3.0オープンソース化"
  - "Natural Language Autoencoders (NLAs)"
codex_review: "派手なのはTAIとNLAだが、実務的にはClaude Codeの細かな不具合修正の厚みがいちばん効いている。研究と運用改善を同日に積むあたり、Anthropicはやや堅いが足腰は強い。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.132リリース

5月7日リリース。主な変更点:

- `CLAUDE_CODE_SESSION_ID` 環境変数をBashツールのサブプロセス環境に追加。hooksに渡される`session_id`と一致
- `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` 環境変数でフルスクリーン代替画面レンダラーを無効化し、ターミナルのネイティブスクロールバックに保持可能に
- Ctrl+V画像ペースト読み込み中に「Pasting…」フッターヒントを表示
- 外部SIGINT（IDE停止ボタン、`kill -INT`）でgraceful shutdownが実行されない問題を修正。ターミナルモードが復元され`--resume`ヒントが表示されるように
- `--resume`で`no low surrogate in string`エラーが発生する問題を修正（emoji切り詰め時の破損セッションをロード時にサニタイズ）
- `--permission-mode`フラグが`-p --continue`/`--resume`でのplan-modeセッション再開時に無視される問題を修正
- フルスクリーンモードでラップトップのsleep/wake後やCtrl+Z/`fg`後にブランク画面になる問題を修正
- Indic結合子やZWJ絵文字が行を跨ぐ際のCtrl+E/A/K/U/矢印キーのカーソル位置修正
- vim操作子がNFD分解アクセント文字を破損する問題を修正
- `/`で始まるテキストのペーストが入力を消失させる問題を修正
- マウスホイールスクロールがCursorとVS Code 1.92–1.104で高速すぎる問題を修正
- JetBrains IDE 2025.2ターミナルでのスクロールホイール処理を修正
- MCPサーバーの非プロトコルデータによる無制限メモリ増加（10GB+ RSS）を修正
- MCP `tools/list`失敗時のリトライとステータス表示改善
- Bedrock/Vertex 400エラー（`ENABLE_PROMPT_CACHING_1H`設定時）を修正
- その他多数のバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.132)

### Claude Code v2.1.131リリース（前回から継続）

5月6日リリース。VS Code拡張のWindows起動失敗とMantleエンドポイント認証の修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.131)

### Claude Code v2.1.129リリース（前回から継続）

5月6日リリース。`--plugin-url`フラグ、`skillOverrides`設定、自動更新環境変数など。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.129)

### The Anthropic Institute (TAI) 設立

AIの社会影響を調査する研究機関「The Anthropic Institute」を新設。経済拡散・脅威とレジリエンス・AI駆動型R&D等4領域の研究アジェンダを公開。

### Petri 3.0オープンソース化

AIアラインメント評価ツールPetriをv3.0に更新し、非営利団体Meridian Labsに寄付。Dishアドオンによる現実的テスト環境を実現。

### Natural Language Autoencoders (NLAs)

Claudeの内部活性化を人間が読める自然言語に変換する新しい解釈可能性手法を発表。論文・コード・デモを公開。

## コミュニティの反応

### Claude Code v2.1.132

該当なし（リリース直後のため品質基準を満たす投稿なし）

### Claude Code v2.1.131

#### ポジティブ

> v2.1.131で並行実行中の全エージェントのサマリーがボトムに表示されるようになり便利 — @PaulRBerg [X](https://x.com/i/status/2052008142234435857)

> v2.1.131のリリースにより不具合が解消されより安定して使えるようになった印象 — @horizon_IT00 [X](https://x.com/i/status/2051950718706446757)

#### Tips

> WindowsのVS Code拡張起動失敗とMantleエンドポイントのx-api-key欠落を修正。地味だがWindowsユーザーには重要 — @kenta_akagi [X](https://x.com/i/status/2052101512055378194)

> v2.1.131で修正されたほか、Claude Code for VS Code側にも更新あり。ビルドパスハードコードは心配 — @NyardYonder [X](https://x.com/i/status/2051936000310730967)

### Claude Code v2.1.129

#### Tips

> v2.1.129のskillOverridesがagent運用に有用。プラグイン/スキルの露出をmodel、人間、隠すに分けられる — @hikariraina [X](https://x.com/i/status/2051892860057014533)

> v2.1.129の新機能として--plugin-url追加、skillOverrides動作、Gateway model discovery、Ctrl+R履歴戻りなどを紹介 — @LLMpsycho [X](https://x.com/i/status/2051890536076734738)

### The Anthropic Institute (TAI) 設立

該当なし（品質基準を満たす投稿なし）

### Petri 3.0オープンソース化

該当なし（品質基準を満たす投稿なし）

### Natural Language Autoencoders (NLAs)

該当なし（品質基準を満たす投稿なし）

### Claude Codeレート制限倍増（前回から継続）

#### ポジティブ

> Claude Codeの5時間制限が2倍化。Proでも長時間エージェント運用が現実になった。リファクタの途中で制限に当たる問題が緩和 — @こてち [Zenn](https://zenn.dev/kewa8579/articles/283e8d3dab4e21)

> Higher Limitsの発表で起きること、起きないこと。SpaceX Colossus 1 DCの300MW追加が背景。価格据え置き、即日有効 — @koji_麹 [Zenn](https://zenn.dev/kojihq/articles/95a2a8b827671b)

> Claude Code 5時間制限が2倍化、SpaceX 300MW提携で全プラン緩和。Pro剥奪騒動と品質低下ポストモを経ての改善 — @サクッとぱんだ [Zenn](https://zenn.dev/sktt_panda/articles/claude-code-rate-limit-relax-2026-05)

#### Tips

> Claude Codeの5時間制限をAPI料金換算すると約62ドルだった（Team PremiumSeat、制限引き上げ前の計測） — @がじぇ [Zenn](https://zenn.dev/sato_shogidemo/articles/claude-code-usage-limit-token-estimate)

> Claude Codeの料金が公式の推奨に従うほど早く尽きる構造を見つけた話。中位・上位モデル枠の分離に注意 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/8a33fde89a6203)

### Code with Claude 2026（前回から継続）

#### Tips

> Code with Claude 2026基調講演まとめ。「新モデルは発表しない」と宣言し、Dreaming・Routines等の全製品強化を発表 — @AI Heartland [Zenn](https://zenn.dev/ai_heatland/articles/f342838e3d5132)

> Code with Claude 2026完全解説。SpaceX提携とClaude Codeレート制限2倍の詳細 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/ba88f403caf78fe5242b)

### Claude Managed Agents Dreaming機能

#### Tips

> Claude Managed AgentsのDreaming機能解説。エージェントがセッション間で自律的に過去の会話を振り返り、パターンを抽出してメモリに書き込む仕組み — @xiji2646 [Qiita](https://qiita.com/xiji2646/items/17395d355f0fbfe28860)

### Claude Codeハーネスエンジニアリング

#### Tips

> Claude Codeの失敗をチームルールに昇格させる仕組み。Evaluatorが拾った失敗を個人ローカルに蓄積し、3件以上でチームルールに昇格 — @kiyokuro [Zenn](https://zenn.dev/dely_jp/articles/5bc3e9cf62d776)

> Flutter + Firebase アプリ × Claude Code ハーネスエンジニアリング検証レポート。Agents / Skills / Hooks / MCP の4層ハーネスで「仕組みで縛る」実験 — @shohei [Zenn](https://zenn.dev/never_inc_dev/articles/7909da3ac54885)

> Claude Codeの三層ゲート設計。Hooks × Permission Modes × Auto Modeでの安全性確保。PocketOS本番DB消失事故を踏まえた教訓 — @井ノ実 [Zenn](https://zenn.dev/ino_h/articles/2026-05-07-claude-code-gate-mechanisms)

> 実践Claude Code入門を読んでわかった、指示追従性を上げる3つの仕組み。スラッシュコマンド・スキル・フックの役割と使い分け — @ohny [Zenn](https://zenn.dev/shotaonishi/articles/2026-05-07-claude-code-slash-skill-hook)

> 『Claude Code によるAI駆動開発入門』読書メモ。仕様書から並列実装・レビューまでの全工程 — @ohny [Zenn](https://zenn.dev/shotaonishi/articles/2026-05-07-claude-code-ai-driven-dev-process)

### Claude Codeの記憶とコンテキスト管理

#### Tips

> Claude Codeを使っていて"記憶"が足りないと感じる瞬間について。セッション跨ぎの断絶感の分析 — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/71271ea03f3521)

> Claude Code のトークン消費を抑えるcodebase-memory-mcp。グラフDB問い合わせで99.2%トークン削減 — @まる [Zenn](https://zenn.dev/omeroid/articles/fb40dd4136bc78)

> Claude Code / Codexでは、repoそのものが"記憶"になるのではないか。普段使いAIと検証用AIの分離の考察 — @愚者のグノスター [Zenn](https://zenn.dev/aimar/articles/891cc53a1cf80a)

> Opti Brain 1週間の進化と、Anthropic本家 Auto Dreamの登場。自作長期記憶基盤の運用日記 — @こかげ [Zenn](https://zenn.dev/kokagex/articles/6f5390bf60912b)

### Claude Codeの並列実行

#### Tips

> AIタスクは並列で回せ。Git Worktree × Agent Teamsで独立タスクを同時処理 — @Marius Haugen [Zenn](https://zenn.dev/porters_tech/articles/123ec6605ae4d2)

> Claude Codeの並列エージェント活用術。SEO+セキュリティ監査を同時に回す実例 — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-claude-code-parallel-agents)

### Claude Codeコマンド・Tips

#### Tips

> Claude Codeの地味に便利な公式コマンドまとめ。/helpと/compact以外の知らないと損する系コマンド — @ハレキ [Zenn](https://zenn.dev/hareki_aoi/articles/claude-code-useful-commands)

> Claude Code ProプランでOpusを使う。PlanモードはOpus、EditモードはSonnetでトークン節約 — @teraco [Zenn](https://zenn.dev/teraco/articles/e0b3edb215c2e2)

> Vibe Codingが3回目で破綻する理由。6つの定義書と3つの記憶ファイルで「いい感じ」をやめる — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/vibe-coding-fails-document-first-6-mds)

### Claude Cowork / MCP連携

#### Tips

> Claude CoworkをAmazon Bedrock経由で使ってみた。非エンジニアでも扱いやすいデスクトップアプリの設定手順 — @xthixsl_ml [Zenn](https://zenn.dev/fusic/articles/7ac5229f4d65f0)

> 個人のローカルMCPサーバーをclaude.aiから呼ぶための、Cloudflare Tunnel + 自前OAuth 2.1実装 — @玉井秀明 [Zenn](https://zenn.dev/hideakitamai/articles/6747c9bd56bd4f)

### Claude Codeセキュリティ

#### Tips

> Claude CodeやCopilotが生成するコードは安全か？AI生成コードに潜む脆弱性パターンを解説 — @mapellion [Zenn](https://zenn.dev/mapellion/articles/44499b324995f4)

> Vercel deepsec入門。Claude×Codexで大規模コードベースの脆弱性を自動スキャンする — @kai_kou [Qiita](https://qiita.com/kai_kou/items/c9a7092902afdca3571f)

### AI駆動開発・育休中のAI活用

#### Tips

> 1年間の育休に備えて「勝手に賢くなる」AI情報収集基盤を作った。放っておいても最新情報がキャッチアップされる仕組み — @sk [Zenn](https://zenn.dev/tokium_dev/articles/20260427_ai_tech_researcher)

> 育てているAIが朝、勝手にブリーフィングと手紙を書いていた話。embodied-claudeインスタンスの自律行動 — @kmizu [Zenn](https://zenn.dev/nextbeat/articles/2026-04-kokone-morning-letter)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
