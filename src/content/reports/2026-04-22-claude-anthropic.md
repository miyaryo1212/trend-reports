---
title: "v2.1.116でresume67%高速化、エージェント設計論が百花繚乱"
summary: "Claude Code v2.1.116がリリースされ、大規模セッションの/resumeが最大67%高速化。Amazon提携拡大（最大5GW）も継続報道。コミュニティではCLAUDE.md最適化、Harness Engineering、エージェント自律化の実践知が大量に共有された。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-22
features:
  - "[Anthropic] Amazon提携拡大 (最大5GW計算資源): AWSとの提携を拡大し、最大5ギガワットの計算資源を確保。Amazonが50億ドル追加投資、将来的に200億ドル追加の可能性。Claude PlatformがAWS内で直接利用可能に"
  - "[Claude Code] v2.1.116リリース: /resumeが大規模セッションで最大67%高速化、MCP起動の並列化、VS Code/Cursor/Windsurfでのスクロール改善、思考スピナーのインライン進捗表示、/doctorが応答中に起動可能に、セキュリティ強化（sandbox auto-allowのrm/rmdir安全チェック）"
codex_review: "resume高速化自体は地味だが、実運用で長い文脈を抱えるエージェント利用が前提になってきた証拠として面白い。むしろ安全性記事の増え方の方が業界的には示唆的だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.116

4月20日リリース。主な変更点は以下の通り。

**パフォーマンス改善**
- `/resume` が大規模セッション（40MB超）で最大67%高速化。dead-fork エントリの多いセッションも効率的に処理
- 複数のstdio MCPサーバー構成時のMCP起動が高速化。`resources/templates/list` は初回 `@` メンション時まで遅延

**UX改善**
- VS Code、Cursor、Windsurfターミナルでのフルスクリーンスクロールが滑らかに（`/terminal-setup` でスクロール感度を設定）
- 思考スピナーがインライン進捗表示に変更（「still thinking」「thinking more」「almost done thinking」）
- `/config` 検索がオプション値にもマッチ（例: 「vim」でEditor mode設定がヒット）
- `/doctor` が応答中でも起動可能に
- `/reload-plugins` とバックグラウンドプラグイン自動更新で、追加済みマーケットプレイスから不足依存を自動インストール

**セキュリティ**
- sandbox auto-allowが `/`、`$HOME` などの重要ディレクトリに対する `rm`/`rmdir` の安全チェックをバイパスしないよう修正

**バグ修正**
- デーヴァナーガリー等インド系文字のターミナル表示崩れ修正
- Kittyキーボードプロトコル使用ターミナルでのCtrl+-（undo）、Cmd+Left/Right修正
- ラッパープロセス（npx、bun run）経由起動時のCtrl+Zハング修正
- インラインモードでのスクロールバック重複修正
- 50MB超トランスクリプトで `/branch` が拒否される問題修正
- API 400エラー（キャッシュコントロールTTL順序関連）修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.116)

### Anthropic-Amazon 提携拡大（前回から継続）

AWSとの提携を拡大し、最大5GWの計算資源を確保。Amazonが50億ドル追加投資、将来的に200億ドル追加の可能性。Claude PlatformがAWS内で直接利用可能になる見込み。

X/Twitter上では品質基準を満たす個人ユーザーの反応は引き続き確認されなかった。

## コミュニティの反応

### Claude Code v2.1.116

#### ポジティブ

> 大規模セッションの/resumeが最大67%高速化され、数十秒かかっていた時間が劇的に短縮されヘビーユーザーには大きな恩恵 — @d_ehara [X](https://x.com/i)

> /resumeの高速化が40MB超セッションや分岐多い履歴で効果的で、長いスレッドに戻る人に効く更新 — @nakashin_tw [X](https://x.com/i)

> 大型セッションのresume高速化が特にありがたく、thinking進捗表示やプラグイン改善で運用が磨かれている — @shima0hide [X](https://x.com/i)

> /resume up to 67% faster on large sessions、MCP startup faster、sandbox security fixなど速度・安全改善を称賛 — @lukashanren1 [X](https://x.com/i)

### CLAUDE.md最適化・Harness Engineering

#### Tips

> いいCLAUDE.mdなのか、Claude Codeと計測・分析してみた。バックエンドとフロントエンドでClaude Code体験が異なり、CLAUDE.mdの質が原因と判明 — @横江 [Zenn](https://zenn.dev/progate/articles/cb3018bbfc5aad)

> Claude Codeに「Harness Engineering」を導入する — OpenAIが公開した手法の8割はClaude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで標準機能として実現可能 — @DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

> CLAUDE.mdの書き方ガイド — AIに記憶を持たせて生産性を上げる方法。一度書けば毎回の説明が不要に — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-claude-md-memory)

> AIコーディングツールは"使う"より"設計する" — Claude Code × Cursorの4層アーキテクチャ。CLAUDE.md、エージェント、スキル、フックを体系的に組み立てる — @jmurayama [Zenn](https://zenn.dev/virtualcraft/articles/claude-code-cursor-layered-architecture)

### エージェント自律化・ワークフロー

#### ポジティブ

> Claude Codeに耳を生やしたら秘書になった。会議中に「今の議論を踏まえてチケットの受け入れ条件を整理して」と投げれば文脈を踏まえて動く — @chiba [Zenn](https://zenn.dev/u_zero/articles/fe7f7fe8d474ef)

> 「AIツールは1つで十分」をやめたらリリースが自動で回り始めた。Claude Code（生成）× Copilot（レビュー）で生成と評価を分離 — @Tomo1015 [Zenn](https://zenn.dev/tomo1015/articles/67ee16b553e3d0)

#### Tips

> Claude Code × Chromeで調査書・手順書をまるごと自動生成。claude --chromeでブラウザ操作ごとAIに委譲 — @akasara [Zenn](https://zenn.dev/akasara/articles/34cbb34e29475b)

> Cloud Logging × Claude Codeで問い合わせ一次対応を「システム的に辿れる」状態にした — @たわ [Zenn](https://zenn.dev/pivotmedia/articles/cloud-logging-claude-code-inquiry-investigation)

> ヘルプセンターの作成をSKILL化してAIをテクニカルライターとして働かせる — @首無しキリン [Zenn](https://zenn.dev/peoplex_blog/articles/1082e6825fb7d3)

> AIエージェントに使わせるCLIの設計原則8選。MCPはツール数が増えると見通しが悪く、CLI + Describeが有効 — @うちほり [Zenn](https://zenn.dev/assign/articles/b3d1d07d385b87)

### エージェントの安全性・Rule Violation

#### ネガティブ

> 承認してないgit tagをClaude Codeに打たれた話 — Auto モードが1 stepごとに承認を取る手順をskipしてrelease ceremonyを連続実行。LLM Agentの構造的Rule Violationの記録 — @yotta [Zenn](https://zenn.dev/yottayoshida/articles/claude-code-structural-rule-violation)

#### Tips

> 【警告】Vercel流出事件は対岸の火事じゃない。Claude Code等の自律型AIを使うなら絶対に「.env」を隠せ — @ニイジマ [Zenn](https://zenn.dev/nijima/articles/aad115e8534795)

> Agentと並走して危険性判定をするWebAgentGuard。Web操作Agentのプロンプトインジェクション等のセキュリティリスクに対応 — @sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/225fe56eb613ad)

### Claude Code 可観測性

#### Tips

> Claude Codeの利用状況をOpenTelemetry + Grafanaで可視化してみる。ローカルにGrafana/Prometheus/Lokiを立ててメトリクスとログを可視化 — @Takashi Kawachi [Zenn](https://zenn.dev/flinters_blog/articles/60925061b333a4)

> Claude Codeユーザーのためのプロンプトキャッシュ入門。API直叩きではなくClaude Codeを使う側として知っておきたいことに絞って整理 — @大賀愛一郎 [Zenn](https://zenn.dev/lv/articles/302bf552110e67)

### Claude Code その他

#### Tips

> Claude CodeでOSSを作って感じた痛み。TypeScript未経験で6週間でOSSを形にできたが、Reward HackingとSycophancyは辛かった — @Murase [Zenn](https://zenn.dev/muras3/articles/d20714b25a0215)

> AIに実装させてもコミットの粒度を保つ — jj × Claude Codeでの単一責任Commit — @泡沫京水 [Zenn](https://zenn.dev/sun_asterisk/articles/jj-hook-with-lefthook)

> Claude Skillのdescription — 公式ベストプラクティスを壊して測った。具体性が最もインパクト大 — @shooo0ki [Zenn](https://zenn.dev/shoki_sato/articles/c6a7c39b3b513c)

> Claude CodeのUIをMCPで改善した話。デザイン特化MCPサーバーとCLAUDE.mdへのデザインコンテキスト記述で生成UIの品質向上 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-design-mcp-20260421)

> キャラクターとロールの2軸で表現する「部活駆動開発」を考えてみた。アニメの世界観をエージェントのロール設計に活用 — @あのたろう [Zenn](https://zenn.dev/tokium_dev/articles/1d9370794363c8)

> Claude Codeで「ガチャ風ネタツール」を1日で作った話（レア度システム付き） — @はまでばっぐ [Zenn](https://zenn.dev/hamadebug/articles/48556e7b801711)

### Claude Design（前回から継続）

#### Tips

> Claude Designで自分のポートフォリオサイトを8bit風にリニューアルしてみた。4/17リサーチプレビュー公開のデザインツールを実際に活用 — @danielvo [Zenn](https://zenn.dev/lnest_knowledge/articles/7b4a9f3e5c2d81)

> なぜデザイン系AIにはRAG以上の「記憶」が必要なのか？ Claude Designの構造を考察する — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/99db32a6a9bd35)

### Claude Opus 4.7（前回から継続）

#### 中立

> なぜOpus 4.7は「禁止ルール」を削ったのか。4.6→4.7のsystem prompt差分を分析。「できることを増やし、細かい行儀ルールを削る」方向への転換 — @アライ [Zenn](https://zenn.dev/ai_arai_ally/articles/20260420-0401-claude-system-prompt)

### Claude Mythos（前回から継続）

#### 中立

> なぜClaude Mythosはサイバーセキュリティに強いのか？ プログラミング特化と謳いつつセキュリティ領域で高評価 — @eri_tech [Qiita](https://qiita.com/eri_tech/items/bd59d063d55544b1442e)

### エンジニアの役割変化

#### 中立

> 実装コストが下がった今、エンジニアの仕事はどう変わるか。「コードを書く人」から「AIとプロダクトを動かし、成果に責任を持つ人」へ — @久良木 [Zenn](https://zenn.dev/rehabforjapan/articles/after-ai-engineer)

> Vibe Codingで急増する技術的負債 — 設計が好きなエンジニアがあえて設計を捨ててみた話。「動く」と「ちゃんと設計されてる」は全然別 — @revenue-hack [Zenn](https://zenn.dev/more_tech_blog/articles/194eba9b6a28c4)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
