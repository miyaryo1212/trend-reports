---
title: "Claude Code v2.1.108でrecap機能追加、自律アラインメント研究も話題"
summary: "Claude Code v2.1.105/v2.1.108で大型アップデート。recap機能、プロンプトキャッシュTTL制御、PreCompactフック等を追加。Anthropic Researchでは自律アラインメント研究者が人間ベースラインを大幅に上回るスコアを記録。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-15
features:
  - "Claude Code v2.1.108"
  - "Claude Code v2.1.105"
  - "ENABLE_PROMPT_CACHING_1H環境変数"
  - "/recapコマンド"
  - "Skillツールによるスラッシュコマンド自動発見"
  - "PreCompactフック"
  - "プラグインmonitorsマニフェストキー"
  - "Automated Alignment Researchers"
  - "Claude on Mars (NASA JPL)"
  - "81,000人インタビュー調査"
  - "Vas Narasimhan取締役就任"
codex_review: "Claude Codeの更新群は派手さより“運用の詰め”が光っていて、recapやPreCompactは地味だが定着を左右する類いだと思う。一方で自律アラインメント研究は数字が出来すぎており、まだ少し慎重に見たい。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.108

2026-04-14リリース。セッション管理とキャッシュ制御に関する機能が中心の大型アップデート。

**主な新機能:**
- `ENABLE_PROMPT_CACHING_1H` 環境変数: API key/Bedrock/Vertex/Foundryで1時間プロンプトキャッシュTTLをオプトイン可能に。`FORCE_PROMPT_CACHING_5M`で5分TTLも強制可能
- `/recap` コマンド: セッションに戻った際のコンテキスト要約機能。`/config`で設定可能、`CLAUDE_CODE_ENABLE_AWAY_SUMMARY`環境変数で強制有効化
- Skillツールによるスラッシュコマンド自動発見: `/init`、`/review`、`/security-review`などをモデルが自律的に呼び出し可能に
- `/undo` コマンド: `/rewind`のエイリアスとして追加

**改善:**
- `/resume`ピッカーがデフォルトでカレントディレクトリのセッションを表示、`Ctrl+A`で全プロジェクト表示
- エラーメッセージ改善: レート制限とプラン使用制限の区別、5xx/529エラーでstatus.claude.comリンク表示
- 言語グラマーのオンデマンドロードによるメモリフットプリント削減

**バグ修正14件:** `/login`でのペースト不具合、テレメトリ無効時のキャッシュTTLフォールバック、Agent toolの安全分類器コンテキスト超過時の権限プロンプト問題など。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.108)

### Claude Code v2.1.107

2026-04-14リリース。長時間操作時のthinkingヒント表示を早期化する小規模パッチ。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.107)

### Claude Code v2.1.105

2026-04-13リリース。プラグインエコシステムとワークツリー機能を強化する大型アップデート。

**主な新機能:**
- `EnterWorktree`ツールに`path`パラメータ追加: 既存worktreeへの直接切り替えが可能に
- PreCompactフック: コード2または`{"decision":"block"}`でコンパクション阻止可能に
- プラグイン`monitors`マニフェストキー: セッション開始時またはスキル呼び出し時に自動起動するバックグラウンドモニター対応
- `/proactive` コマンド: `/loop`のエイリアスとして追加

**改善:**
- APIストリーム停滞対策: 5分間データなしでアボートしノンストリーミングにフォールバック
- `WebFetch`が`<style>`/`<script>`タグを除去し、CSS重いページのテキスト到達性を向上
- `/doctor`のレイアウト改善（ステータスアイコン追加、`f`キーでClaude修正）
- スキル説明の上限を250→1,536文字に引き上げ

**バグ修正多数:** 画像添付の欠落、画面ブランク問題、MCP関連の複数修正など。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.105)

### Anthropic Research: Automated Alignment Researchers

Claude Opus 4.6の9インスタンスがアラインメント研究を自律的に遂行する実験の成果を発表。人間研究者のベースラインスコア0.23に対し、自律AIチームは0.97という大幅に高いスコアを達成した。

### Claude on Mars

NASAジェット推進研究所（JPL）がPerseveranceローバーのルート計画にClaudeを初使用。経路計画にかかる時間を半減させたと報告。

### 81,000人インタビュー調査

159カ国のClaudeユーザーを対象に、AIへの期待と懸念について大規模調査を実施。

### Vas Narasimhan取締役就任

ノバルティスCEOのVas Narasimhan氏がAnthropicの取締役に就任。Long-Term Benefit Trustにより任命された。

## コミュニティの反応

### Claude Code v2.1.108 / v2.1.105

#### 中立

X/Twitterでは、v2.1.108およびv2.1.105の各新機能について、過去7日間で個人ユーザーによるエンゲージメントの高い投稿は確認されなかった。リリース直後のため、今後の反応に注目。

#### Tips

> Claude Code v2.1.108のChangelog最速翻訳・解説。recap機能追加やセッション管理改善に注目 — @moha0918_ [Qiita](https://qiita.com/moha0918_/items/2733a8fbd2c7c3861b47)

> Claude Code最新機能ガイド — PreCompact Hook・Worktree強化・チームオンボーディングを公式ドキュメントに基づき解説 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/4bd5e556f331f94f7c18)

### Claude Code Skills・プラグイン活用

#### Tips

> Claude Codeの Skills 機能をAWS開発で使い倒す。CDK生成からデプロイまでのワークフロー構築記録 — @seigen [Zenn](https://zenn.dev/geneg/articles/claude-code-skills-aws)

> Agent Plugins for AWSの「deploy-on-aws」を試す。自然言語指示からCDKコード生成・デプロイまで一気通貫 — @muranakaaa [Zenn](https://zenn.dev/gemcook/articles/3b8d088ac56afd)

> Claude スキルで Notion PRD → Figma デザイン → UI 生成の自動化を構築 — @Mun [Zenn](https://zenn.dev/superstudio/articles/8a5822110fbeb7)（前回から継続）

> MCPサーバーを自作してClaude Codeを拡張した。Pythonでカスタムツールを追加する実践記録 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-mcp-custom-server-20260414)

### Claude Code 開発手法・ワークフロー

#### Tips

> AIエージェント安全設計4選 — SREが本番運用で使うガードレールパターン。壊れる前提の設計をAIエージェントに適用 — @ojt [Zenn](https://zenn.dev/ojt/articles/sre-ai-agent-safety-design)

> Claude Code でペルソナを定義して、設計をAI同士で壁打ちするワークフローを作った — @s_hamabata [Zenn](https://zenn.dev/dely_jp/articles/53b7d64144a210)

> Claude Codeで開発の『ゴミ』を溜めない — ファイルと機能の整合性を自動検証する仕組み — @ojt [Zenn](https://zenn.dev/ojt/articles/claude-code-v3-global-optimization)

> CLAUDE.mdは「AIの脳」になった【Claude Code開発の失敗録 #4】。空だったCLAUDE.mdを育てて開発を立て直した記録 — @JIRO SAKAMOTO [Zenn](https://zenn.dev/penguingymlinux/articles/3d1523ee6ad416)

> Claude Codeの設定が面倒臭くなった全ユーザーが読むべき教科書。curlワンライナーでテンプレート導入 — @Sugata [Zenn](https://zenn.dev/sanpi34/articles/claude-code-config-template)

> AI駆動開発の実践（3）テストのないコードに安全網を張る — AI駆動TDD実践 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-driven-dev-testing-tdd)

> レガシーコード × Claude Code — 特性化テストで安全に改修する — @SeckeyJP [Zenn](https://zenn.dev/seckeyjp/articles/j-six-legacy-code)

> 「AIが既存コードぶっ壊す問題、本気で解消したい」— DesignDocとClaude Subagentで解決 — @koh789 [Zenn](https://zenn.dev/mgdx_blog/articles/2ccfd55e2ac785)

> バグフィックスと機能開発をClaude codeでGitHub Actions自動化 — @RyoAriyama [Zenn](https://zenn.dev/rariyama/articles/e36f38ad0e7d52)

> 【visual-explainer】Claude Codeの見づらい出力を「見てわかる形」に変えるカスタムスキル — @isa [Zenn](https://zenn.dev/aiforall/articles/81ca1629bbb9bd)

> 【CLAUDE.md ベストプラクティス完全版】652件のナレッジから抽出した実践パターン — @unravel [Zenn](https://zenn.dev/unravel/articles/b2b62918c08d01)

> Claude Codeのノウハウ検索エンジンを5時間で作った。7ソース横断×AIスコアリング — @unravel [Zenn](https://zenn.dev/unravel/articles/e2b3066c51a70e)

### トークン消費・コスト最適化（前回から継続）

#### Tips

> Claude Codeのトークン消費を半分にする — 800時間の運用データから見つけた実践テクニック。設定テンプレート収録 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/books/token-savings-guide)

> 「Sonnetで十分」が罠だった — Claude Codeで本当にコストを抑えて開発する方法 — @今井政和 [Zenn](https://zenn.dev/orectic/articles/claude-code-opus-sonnet-cost-optimization)（前回から継続）

> 【個人開発】Claude Codeのトークン使用量をWindowsトレイで常時確認できるアプリを作った — @jeongwookie [Zenn](https://zenn.dev/jeongwookie/articles/where-my-tokens-intro)

### Claude Code vs 他ツール比較（前回から継続）

#### Tips

> トークン節約が流行る中、コーディングエージェントに「寄り道」という余白を求めている。GPT-5.4との比較でOpusの「ついで」の価値を再評価 — @tyabu12 [Zenn](https://zenn.dev/tyabu12/articles/0008-coding-agent-detour)

> 個人最強はClaude Code。組織最強はGemini CLI。境界線を実務で引き直した記録 — @佐藤賢治 [Zenn](https://zenn.dev/horizon_it00/articles/118d6780ca072a)（前回から継続）

> ClaudeとCopilot Codexを組み合わせたAIコードレビューワークフロー（takt） — @Ryo Tsukuda [Zenn](https://zenn.dev/acntechjp/articles/ca8a99ee0530f0)（前回から継続）

### Claude Code Remote Control / Dispatch

#### Tips

> Claude Code Remote ControlとDispatchの違いと使い分け — スマホからの開発ワークフロー完全ガイド — @JOINCLASS [Zenn](https://zenn.dev/joinclass/articles/claude-code-remote-dispatch-guide)

> iPhoneからClaude Codeを操作するDiscord Supervisorシステム「claude-hub」導入編 — @貼り絵職人 [Zenn](https://zenn.dev/harieshokunin/articles/c6ba085ed070e3)（前回から継続）

### Managed Agents（前回から継続）

#### Tips

> Claude Managed Agentsで変わった個人開発のインフラ戦略【2026年版】。API数回の呼び出しでインフラ構築が済む時代に — @ミケ [Zenn](https://zenn.dev/joemike/articles/claude-managed-agents-indie-dev-20260414)

> Claude Managed Agents入門 — セルフホスト不要でAIエージェントを動かすAPIガイド — @kai_kou [Qiita](https://qiita.com/kai_kou/items/9aa2ca4787306e4dc162)

### Claude Code ソースコード流出関連（前回から継続）

#### 中立

> Claude Code流出から見えた、賢いモデルより失敗と自律性を運用できる組織。51万2千行流出の技術的分析 — @demerzel [Zenn](https://zenn.dev/demerzel/articles/5cb698a6b28b81)

> Claude Codeのソースコード流出で判明した「KAIROS」— セッションを跨いだ記憶の仕組み — @uni_stranded [Qiita](https://qiita.com/uni_stranded/items/c3c33338958b42b01834)

### LLM活用・知識管理

#### Tips

> 【LLM Wiki】Obsidian × Claude Codeで学んだ知識を構造化し記憶媒体を脳からAIに移行する。Karpathy氏のLLM Wikiを実践 — @たろう眼鏡 [Zenn](https://zenn.dev/dely_jp/articles/8b55114cc0b958)

> LLMを使って開発するなら、可観測性を最初から考えておくべきだった — @toshipon [Zenn](https://zenn.dev/toshipon/articles/llm-observability-for-indie-dev)

> Claude Message Batches API入門 — 300kトークン出力ベータで大規模テキスト生成を最適化する — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/192-claude-message-batches-300k-output-guide)

### Claude Mythos Preview / Project Glasswing（前回から継続）

#### Tips

> Claude Mythos Preview System Card の RSP評価セクション日本語訳を公開 — @sol-sun [Zenn](https://zenn.dev/sol_sun/articles/claude-mythos-02-rsp_01)（前回から継続）

> Claude Mythos提供で唯一選ばれた銀行JPMorgan Chaseとそこに映るAI格差の加速 — @KNKR [Zenn](https://zenn.dev/knkr/articles/9746a95714d1fc)（前回から継続）

### Anthropicマルチエージェント設計

#### Tips

> 【徹底解説】Anthropic最新マルチエージェント協調パターン記事を全文解説。5つの型の使い分け — @shunxneuro [Zenn](https://zenn.dev/shunxneuro/articles/f705f644103df3)（前回から継続）

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
