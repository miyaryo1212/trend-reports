---
title: "v2.1.143リリース、プラグイン依存関係管理・Project Glasswing"
summary: "Claude Code v2.1.143でプラグイン依存関係の強制やコンテキストコスト表示を追加。Anthropic Project Glasswingが40超組織参加のAIサイバーセキュリティイニシアチブとして注目。コミュニティではhooks活用やマルチAI連携の実践記事が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-17
features:
  - "Project Glasswing: AIサイバーセキュリティイニシアチブ"
  - "Claude Code v2.1.143 プラグイン依存関係の強制"
  - "Claude Code v2.1.143 プロジェクテッドコンテキストコスト表示"
  - "Claude Code v2.1.143 worktree.bgIsolation: none設定"
  - "Claude Code v2.1.143 claude agents新フラグ追加"
  - "Claude Code v2.1.142 Fast mode Opus 4.7デフォルト化"
codex_review: "Claude Codeの更新は派手さより運用の詰めが効いていて、依存管理とコスト可視化は地味だが確実に定着を進める類だと思う。Glasswingは絵としては強いが、現時点では象徴先行でやや過剰評価気味。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.143

5月15日リリース。主な変更点:

- **プラグイン依存関係の強制**: `claude plugin disable`時に依存プラグインがある場合は拒否（disable-chainヒント付き）、`claude plugin enable`時に推移的依存を自動有効化
- **プロジェクテッドコンテキストコスト表示**: `/plugin`マーケットプレイスのブラウズペインにターンごと・呼び出しごとのトークン推定を表示
- **`worktree.bgIsolation: "none"`設定追加**: バックグラウンドセッションが`EnterWorktree`なしでワーキングコピーを直接編集可能に
- **PowerShellツールが`-ExecutionPolicy Bypass`を渡すように**: `CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY=1`でオプトアウト可能
- **バックグラウンドセッションがモデル・effortレベルをアイドル復帰後も保持**
- **`claude agents`に`--add-dir`, `--settings`, `--mcp-config`, `--plugin-dir`, `--permission-mode`, `--model`, `--effort`, `--dangerously-skip-permissions`フラグ追加**: ダッシュボードおよびディスパッチされるバックグラウンドセッションに適用
- **Stop hookの連続ブロック上限**: 8回連続ブロックでターン終了（`CLAUDE_CODE_STOP_HOOK_BLOCK_CAP`で変更可能）
- **ワークツリークリーンアップが`rm -rf`にフォールバックしなくなった**: gitignoredファイルや作業中ファイルの損失を防止
- **macOSバックグラウンドジョブの`~/Documents`等へのアクセス修正**: Full Disk Access付与時の"Operation not permitted"を解消
- **`/bg`がMCP設定・settings・add-dir・plugin-dir・strict-mcp-configを保持**: バックグラウンド化してもMCPサーバーと設定が維持
- その他15件以上のバグ修正（credentials.json破損、Windows Terminal右クリックペースト、/goal評価タイミング等）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)

### Project Glasswing（前回から継続）

AIサイバーセキュリティイニシアチブ。Claude Mythos Previewモデルを用いてゼロデイ脆弱性の発見・修正を行う防衛的AI活用プロジェクト。AWS、Apple、Google、Microsoft等40超の組織が参加、$100Mのクレジット提供。本日の公式新情報なし。

## コミュニティの反応

### Claude Code v2.1.142 Fast mode Opus 4.7

#### ポジティブ

> Fast ModeのデフォルトモデルがOpus 4.7に変わり、同じスピードでより賢くなった上、macOSスリープ後の接続不安定さや長時間自動化の安定性も改善されたので、副業の自動投稿システムで毎日使っている身として素直に嬉しい — @ojisan47_AI [X]

### Claude Code Hooks活用

#### Tips

> Claude Code hooksを47本実装した話。Windows環境ではstdoutの文字コードが罠、全フックに`sys.stdout.reconfigure(encoding="utf-8")`が必須。async: trueとexit 2は非互換 — @シンクウ [Zenn](https://zenn.dev/thinkyou0714/articles/claude-code-hooks-47)

> Claude Code hookをauto-recapより先に試すべき3パターン。commit漏れ・文脈消失・危険操作を自動検知する実録 — @ミケ [Zenn](https://zenn.dev/joemike/articles/claude-code-hooks-auto-recap-alternative-2026)

> GitHub Copilot Hooks × Claude Code Hooks 互換性分析。両公式ドキュメントに基づく完全一致・類似・非互換の詳細整理 — @taka [Zenn](https://zenn.dev/utsutaka/articles/2f9b6ca3290332)

### Claude Code マルチAI連携

#### Tips

> Claude Codeから Codex / Gemini に作業を委譲する。トークン節約+モデル特性の使い分けで5時間制限を乗り切る方法 — @tech-book.net 編集部 [Zenn](https://zenn.dev/tbnet/articles/claude-code-delegating-to-codex-and-gemini)

> AI 2台クロスレビューで技術記事の盲点を拾う。Claude CodeとCodex CLIを役割固定でクロスレビューさせる運用 — @harness [Zenn](https://zenn.dev/harness/articles/ai-cross-review-handoff-workflow)

> AIエージェント3種で戦略議論したら、OSSロードマップの主軸が根本から変わった話 — @mine_take [Zenn](https://zenn.dev/minewo/articles/multi-ai-discussion-roadmap-rewrite)

### Claude Code 自動学習・Memory

#### Tips

> Claude Codeを「観測」で育てる：操作の癖を自動学習する仕組みの作り方。公式memoryは「覚えておいて」と人間が書くもの、それを超えて操作を見て勝手に覚える仕組み — @タクト [Zenn](https://zenn.dev/syrsan/articles/claude-code-instinct-self-learning)

> Anthropic Memoryで何が変わるか。LLMの記憶アーキテクチャ4種類を整理 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/llm-memory-context-engineering-4-architectures)

### Claude Code AWS連携

#### Tips

> Claude Code × Agent Toolkit for AWS。自然言語でインフラを構築して感動した話。plugin・skills・MCPサーバーの4コンポーネント解説 — @capybara [Zenn](https://zenn.dev/kubo_gene/articles/27ebeeac3d0d17)

> AWS公式のナレッジMCPサーバーをClaudeに繋いでみる — @Takeshi [Zenn](https://zenn.dev/take5553/articles/aws-knowledge-mcp-on-claude)

### Claude Code 失敗談・注意点

#### Tips

> Claude Codeでやらかした話 (1/3) — なぜサボるのか: 目的逆転と検査の悪用。業務利用で踏んだ罠の記録、症状ではなく根本機構で整理 — @kh923 [Zenn](https://zenn.dev/kashi923/articles/418d1e2b3b29a3)

> AIコーディングで陥る「分かったつもり」を防ぐ独自レビュー術と実装パターン。AIに書かせる前に意図を言語化し、生成後に差分を読み直す二段チェックポイント — @こばゆう [Zenn](https://zenn.dev/siromiya/articles/2026-05-16-01-ai-coding-overreliance)

> Claude CodeやCursorに慣れてきて自分でコードが書けなくなってきた件 — @KodoCode [Qiita](https://qiita.com/KodoCode/items/696de40437330f5d4951)

### Claude Code Terraform連携

#### Tips

> Terraform plan `~` の危険度を Claude Code に分類させる。想定外の属性変更をapply前に検知する仕組みをCIに組み込む — @ojt [Zenn](https://zenn.dev/ojt/articles/terraform-plan-update-claude-classification)

### MCP Linux Foundation寄贈

#### Tips

> MCP が Linux Foundation 入り。個人開発のOSレイヤがオープン化した日。月9,700万SDKダウンロードに達した時点で中立化 — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-16-mcp-linux-foundation-indie-saas)

### Claude Code Routines・自律運用

#### Tips

> マイクロSaaS × ソロファウンダー × Claude Code Routines。「機械に任せる範囲」と「人間に残す範囲」の線引き — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-15-claude-code-routines-solo-saas)

> 自律AI秘書をClaude Codeで組む — 5層と7つの境界。間接プロンプトインジェクションがCalendar招待経由で実害化した事例も紹介 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-ai-secretary-design-2026)

### Anthropic プログラム利用クレジット

#### Tips

> AIに同じ質問を3経路で投げたら、入力トークンが約1,200倍違った。6月15日導入の「プログラム利用専用クレジット」と構造化APIの関係 — @EDINET DB [Zenn](https://zenn.dev/edinetdb/articles/ai-cost-input-tokens-structured-db)

### Anthropic社内のClaude Code活用

#### Tips

> Anthropicコードの90%はClaude Codeが書いている。社員80%が毎日使う「antfooding」を全部解剖した — @daisuke-nagata [Qiita](https://qiita.com/daisuke-nagata/items/8bb1e25981f9383cab97)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
