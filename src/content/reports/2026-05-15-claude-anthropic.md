---
title: "v2.1.141リリース、Rewindサマリーとhook強化"
summary: "Claude Code v2.1.141がRewind「Summarize up to here」やhooks向けterminalSequence等を追加。Gates Foundation $200Mパートナーシップが発表。コミュニティではhookify公式プラグイン、並列セッション運用、context: forkによるトークン最適化の実践記事が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-15
features:
  - "Claude for Small Business"
  - "Gates Foundation パートナーシップ"
  - "Claude Mythos Preview"
  - "Claude Code v2.1.141"
codex_review: "Rewind要約やhook強化は派手さこそ薄いが、長時間の実運用で効く改善が着実に積まれているのがいい。Gates財団案件は話題先行にも見えるが、現場の熱量はむしろ開発者向け機能進化にある。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.141

5月13日リリース。主な変更点:

- **Rewindメニューに「Summarize up to here」追加**: 以前のコンテキストを圧縮しつつ直近のターンを保持する機能
- **hooks向け`terminalSequence`フィールド**: フックがデスクトップ通知・ウィンドウタイトル・ベル音をターミナルなしで出力可能に
- **`ANTHROPIC_WORKSPACE_ID`環境変数**: ワークロードIDフェデレーションで特定ワークスペースにスコープ指定
- **`claude agents --cwd <path>`**: セッションリストをディレクトリでフィルタ
- **`/feedback`で直近セッション添付**: 過去24時間または7日間のセッションを含めて送信可能に
- **バックグラウンドエージェントが権限モードを維持**: `/bg`や`←←`で起動したエージェントがデフォルトに戻らず現在のモードを引き継ぐ
- **Auto modeの権限ダイアログ改善**: `permissions.ask`ルールがプロンプトを発生させた理由を表示
- **スピナーのフィードバック改善**: 10秒後に琥珀色に変化しClaude動作中を視覚的に通知
- **`CLAUDE_CODE_PLUGIN_PREFER_HTTPS`**: SSH鍵のない環境でGitHubプラグインをHTTPSクローン
- Bedrock/Vertex/Foundry/gatewayでHaikuモデルIDが利用不可の際メインモデルにフォールバック
- `/model`が他の並行セッションのautocompact閾値を変更する問題を修正
- Markdownテーブルのボーダーグリッドレンダリング回帰を修正（v2.1.136）
- MCP関連の複数修正（HTTP/SSE 403表示、Remote Control再認証、セッショントークンローテーション等）
- その他30件以上のバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.141)

### Gates Foundation パートナーシップ

Anthropicがゲイツ財団と$200M・4年間のパートナーシップを締結。グローバルヘルス・教育・経済モビリティ分野でClaude活用を推進する。

### Claude for Small Business（前回から継続）

QuickBooks・PayPal・HubSpot等と連携し、15種の業務自動化ワークフローを提供する中小企業向けパッケージ。本日の公式新情報なし。

### Claude Mythos Preview（前回から継続）

自律的な脆弱性発見能力を持つフロンティアモデルのプレビュー。Policy研究論文「2028: Two Scenarios for Global AI Leadership」内で言及。本日の公式新情報なし。

## コミュニティの反応

### Claude Code v2.1.141

#### ポジティブ

> Rewindの「Summarize up to here」機能が長セッションのコンテキスト圧縮に便利。琥珀スピナーやterminalSequenceなど新機能も好印象 — @lukashanren1 [X](https://x.com/i/status/2054774115031015524)

> v2.1.141の変更点が非常に多く、Rewindのサマリー機能やバックグラウンドエージェントの権限維持が追加され、Anthropicチームの更新ペースが驚異的 — @andersmarksen [X](https://x.com/i/status/2054845950875615640)

> hooks、agents、Rewind、権限プロンプト周りの改善が多く、日常操作が向上した — @haboshiastra [X](https://x.com/i/status/2054731900623933861)

> /modelコマンドのセッション間クロストークが修正され、バックグラウンドエージェントの権限維持やhooksのterminalSequenceが便利 — @ChimeJp16449 [X](https://x.com/i/status/2054715189636075657)

### Claude for Small Business

X/Twitterで品質基準を満たす投稿は確認されなかった。

### Gates Foundation パートナーシップ

X/Twitterで品質基準を満たす投稿は確認されなかった。

### Claude Mythos Preview（前回から継続）

X/Twitterで品質基準を満たす新規投稿は確認されなかった。

### Claude Code hookify公式プラグイン

#### Tips

> Anthropic公式プラグイン「hookify」でClaude Codeのフックを自然言語で作る。settings.jsonの手書き不要で、自然言語でフックを生成し即時有効化 — @しろちゃん [Zenn](https://zenn.dev/shirochan/articles/198a0537a79469)

### Claude Code 並列セッション運用

#### Tips

> Claude Codeを2セッション並列で11 PR出したが、限界は人間側にあった。git worktreeで隔離、MEMORY.md共有、ファイル分離ルールの3点で実時間1時間55分で処理 — @ゆきひろ [Zenn](https://zenn.dev/suna/articles/22ae33b6875cad)

> Git Worktree CLI「vibe」でClaude Codeと並走する開発フローを作る。worktreeの作成・削除をほぼゼロ操作に — @kexi [Zenn](https://zenn.dev/kexi/articles/git-worktree-vibe-claude-code)

### Claude Code コンテキスト・トークン管理

#### Tips

> Claude Codeの「context: fork」1行で副業の作業時間が10分の1になった話。Skillにcontext: forkを追記するだけでコンテキスト整理 — @じゅん [Zenn](https://zenn.dev/jun_eng/articles/8b2bdef9fdfbd5)

> Claude Codeで前回の続きをチケット番号から復元する。設計判断・進捗・PR粒度・引き継ぎメモを毎回同じ場所から復元する仕組み — @ksuzu [Zenn](https://zenn.dev/ksuzu/articles/14bd965827418d)

> RAGだけではAgentは「記憶」できない。Claude Code時代のMemoryアーキテクチャ再考 — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/307f3de95b932a)

### Claude Code 5月アップデート総括

#### Tips

> Claude Code 5月アップデート総括: skills検索と新hooksを個人開発に組み込む。skills検索ボックス、PostToolUse async:trueフラグ、HTTP hookの3点を解説 — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-14-claude-code-may-update-roundup)

> Claude Code 5月アップデート総括。skills検索 / async hooks / HTTP hooksを個人開発パイプラインへ組み込む — @creolab_dev [Qiita](https://qiita.com/creolab_dev/items/5f058d93b1f88c43f339)

### Claude Code セキュリティ・ガバナンス

#### Tips

> Claude Codeの憲法を書いたら、1日で法律になった話。マルチエージェント組織の暴走を防ぐCLAUDE.mdによるガバナンス設計 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/constitution-becomes-law)

> Claudeが見逃した脆弱性をCodexが発見した話。C3 × Codex並列レビューでセキュリティ品質を向上 — @satoh-y-0323 [Zenn](https://zenn.dev/satoh_y_0323/articles/db51bb73a97c19)

### Claude Code 活用事例

#### Tips

> Claude Codeでタスクを並走させているうちに、自分用のタスク管理を作った話 — @poppuko-n [Qiita](https://qiita.com/poppuko-n/items/f9b3db2d72b11819b39e)

> Claude CodeでNotebookLMを使いこなす実践ガイド。トークン節約と効率化 — @James-san [Zenn](https://zenn.dev/james_san/articles/d612d518d370ac)

> 積みデバイスをClaude Codeで成仏させた春。micro:bitと3Dプリンターを組み合わせた電子工作 — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/c9a2e4f7b831d5)

> Claude Codeと対話しながらYouTube全自動投稿システムを作った話。約2,000行のPythonコードが毎日自動稼働 — @SleepScapeDaily [Zenn](https://zenn.dev/sleepscapedaily/articles/0ff6bf3fb3eae1)

> Markdown vs HTML — AI駆動開発5配置場所の使い分け。配置場所×タスクで形式を選び分けるマトリクスを提示 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-driven-dev-markdown-vs-html-2026)

### Claude Code vs 競合

#### Tips

> Claude Code一強だと思っていたCLIに、Devin for Terminalという選択肢。RustベースのローカルCLIでクラウド継続実行が可能 — @Devin太郎 [Zenn](https://zenn.dev/asix/articles/47c28121f0918a)

> Claude Codeではなく、Cursorを選んだ理由。使用感や役割が明確に異なるという比較 — @hanav1ye [Zenn](https://zenn.dev/hanav1ye/articles/note2zenn-vol2)

### Claude Code .env誤課金問題

#### ネガティブ

> .envにANTHROPIC_API_KEYがあるとClaude CodeはMax planを黙って無視してAPI課金に切り替える。187米ドル損失の事例 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/73a89ed58d1e639bcaa3)

### Anthropic研究・人物

#### Tips

> Claudeに魂を吹き込む人 — Amanda Askellという哲学者の眼差し。30,000語のSoul Documentとプロンプト設計のTDD的手法を解説 — @noah [Zenn](https://zenn.dev/noah33/articles/amanda-askell-claude-soul)

> Natural Language Autoencoders — AIの「隠れた思考」を読み解く新技術。LLM内部状態を自然言語に変換する手法 — @ryok [Zenn](https://zenn.dev/ryok/articles/anthropic-natural-language-autoencoders)

> 再帰的自己改善(RSI)の現実化、OpenAIとAnthropicが警告する分岐点の到来 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/7dbfe718b95aa1)

### Claude Opus 4.7

#### ポジティブ

> Claude Opus 4.7がフライト&ホテル8件+5件を自動予約、一発成功の衝撃。Claude Coworkエージェントの飛躍的進化 — @ty [Zenn](https://zenn.dev/ty2/articles/tweet-bcherny-2053994085565014188)

### Claude Agent SDK・MCP

#### Tips

> Claude Code × AgentCore Runtime: ステートフルMCPで要件充足チェックを実現する — @Masuta, Hideki [Zenn](https://zenn.dev/aws_japan/articles/2026-04-21-bedrock-agentcore-compliance-skill)

> あなたのMCP server、実はToolsしか使ってない。5 blocks全実装の実践 — @Michie [Zenn](https://zenn.dev/kanseilink/articles/linksee-memory-mcp-five-blocks-20260507)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
