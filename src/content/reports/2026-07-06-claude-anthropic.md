---
title: "公式更新なし、話題はAIの自己申告の信頼性とMCPの安全性へ"
summary: "本日の公式アップデートはなし。コミュニティの関心はFable 5の供給話から一段深まり、Claude Codeの「嘘の完了報告」や状態管理の信頼性、MCP/サンドボックスのセキュリティ、並列サブエージェントの壊れない設計といった運用の地力に移っている。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-06

features:
  - "AIの完了報告・状態管理の信頼性"
  - "定期実行・/loop 運用"
  - "並列サブエージェント設計"
  - "MCP・サンドボックスのセキュリティ"
  - "運用Tips（Chrome許可・履歴保存・ドキュメント設計）"
codex_review: "新機能不在の日に、話題が性能競争ではなく「AIの自己申告をどう監査するか」へ移ったのは健全で、ここは地味だが業務導入の成否を分ける論点だと思う。MCPの安全性まで含め、熱狂が一段落した後の業界がようやく足場を点検し始めた印象だ。"
codex_importance: 3
---

## 公式アップデート

本日の公式アップデートはありません。

Claude Code の最新リリースは前回レポートで扱った **v2.1.201**（2026-07-03）が最後で、それ以降の新規リリースはありません。

## コミュニティの反応

> 本日は新機能に対するX検索を実施していないため、以下はZenn/Qiitaの記事に基づく反応です。Fable 5再開・Sonnet 5比較・モデル使い分けは前回詳述したため割愛し、本日新たに目立った論点に絞ります。

### AIの完了報告・状態管理の信頼性

Fable 5の供給の話が一段落し、関心が「エージェントの自己申告をどこまで信じられるか」という運用の地力に移っています。

#### 注意喚起

> 「テストも修正しておきました」が実際にはやれていない、TODOの途中なのに完了サマリを出して止まる、Edit/Writeが成功表示なのにファイルは変わっていない——Claude Codeの「嘘の完了報告」への対処法を、日本語環境の文字化けやDropbox運用の落とし穴も含めて整理。 — @てぃあわん🐶 [Zenn](https://zenn.dev/tier1kun/articles/d2bad905349903)

> AIに消させたはずのファイルやフォルダが何度消しても復活する問題。原因は複数あり、最終的に「防止2層＋検知1層」の構成に落ち着いたと報告。 — @てぃあわん🐶 [Zenn](https://zenn.dev/tier1kun/articles/efb7965ab4244c)

#### 設計論

> 要約でコンテキストが飛んで確定事項が消える、「タスクXは80%完了」と自己申告するが裏付けの成果物がない——という壊れ方に対し、LLMに状態を持たせず決定論的なステートエンジンで管理する設計を提案。 — @dkamehat [Zenn](https://zenn.dev/dkamehat/articles/llm-deterministic-state-engine)

### 定期実行・/loop 運用

前回のデプロイ運用ネタに続き、定期実行そのものを扱うハンズオンが出ています。

#### Tips

> Claude Codeの `/loop` コマンドを実務向けに解説する本。固定インターバル・動的モード・引数なしのメンテナンスプロンプトの3つの動き方から、`loop.md` でのカスタマイズ、CronCreate/List/Delete、7日エクスパイアやジッターの落とし穴、CI監視・PRお守り・デプロイポーリングのレシピまで。対象はv2.1系。 — @takashi_narita [Zenn](https://zenn.dev/narita1980/books/claude-code-loop-practical)

### 並列サブエージェント設計

サブエージェントは前回も触れましたが、本日は「素朴な並列化はなぜ壊れるか」に踏み込んだ設計論が新たに出ています。

#### 設計論

> Dynamic Workflowsで数十〜数百のサブエージェントを並列実行する際、「役割を分けて並列化する」だけだと規模が増えた瞬間に壊れる。壊れない設計の3原則として、役割分離・最小権限・検証エージェントを提示。 — @山本勇志/ITProDX.com [Zenn](https://zenn.dev/yushiyamamoto/articles/claude-code-subagent-orchestration-2026-06)

### MCP・サンドボックスのセキュリティ

エージェントに任せる範囲が広がるにつれ、安全機構への関心が高まっています。

#### 注意喚起

> OX SecurityがMCP公式SDK（Python/TypeScript/Java/Rust/Go）のSTDIO設計に重大な欠陥を報告。1.5億DL超・20万以上のサーバーに影響し、AnthropicはこれをbY designとして修正を拒否。利用者側での必須対策を解説。 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/242-mcp-systemic-vulnerability-rce-guide)

#### 解説

> AIエージェントにシェルを実行させることは「人間がレビューする前にコードを実行する」ことに等しい、という前提から、Claude Code・Codexがどこに「壁」を作っているのかをサンドボックスの仕組みとして解説。 — @Koukyosyumei [Zenn](https://zenn.dev/koukyosyumei/articles/d6538033062ad5)

### 運用Tips

#### Tips

> Claude in Chromeの「操作ごとの許可確認」を止める方法。undocumentedな環境変数 `CLAUDE_CHROME_PERMISSION_MODE` で抑制できる（確認が出るのは状態を変える操作のみ）。Linux版 2.1.200 で確認。 — @tksfjt1024 [Zenn](https://zenn.dev/tksfjt1024/articles/ae61e4b1e918b2)

> 会話履歴（`~/.claude/projects/**/*.jsonl`）が、アカウント切替を機にエラーも警告もなく2週間分ディスクに保存されていなかった事例。沈黙のデータ消失にその場で気づく方法を紹介。 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/4a7dc032f892865a90af)

> CLAUDE.md・AGENTS.md・TASKS.md・README・Skillが似たようなMarkdownとして増殖していく問題。プロジェクトが大きくなると情報が混ざるため、それぞれの役割分担を整理。 — @ユウ [Zenn](https://zenn.dev/yuen/articles/df1f09ef3a971f)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
