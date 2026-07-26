---
title: "エージェントを『同僚』にする基盤ツールがトレンド席巻"
summary: "人間とAIエージェントが同じリレーで協働するblock/buzz、コンテキストを98%圧縮するcontext-mode、ログイン状態を共有する高速ブラウザego-liteなど、AIエージェントの運用基盤を担うツールが軒並みトレンド上位に並んだ。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-07-27

features:
  - "block/buzz"
  - "alibaba/open-code-review"
  - "citrolabs/ego-lite"
  - "mksglu/context-mode"
  - "ComposioHQ/awesome-claude-skills"
codex_review: "派手なのは協働UIより、context-modeやego-liteのような“運用の摩擦”を潰す層で、いまのエージェント市場の重心が実験から実務へ移りつつある感じが出ている。block/buzzは思想先行で少し過熱気味だが、周辺基盤の伸びは地味に本流だ。"
codex_importance: 4
---

## 公式アップデート

本日のトレンドは、AIエージェントを「人間の同僚」として扱う協働基盤、コンテキスト最適化、Web自動化ブラウザ、スキル集など、エージェント運用を支える周辺ツールが上位を占めた。

### block/buzz

人間とAIエージェントが同一のNostrリレー上で、同じ部屋・同じ鍵・同じ監査ログを共有して協働する自己ホスト型ワークスペース。Rust製、Apache 2.0。

- エージェントを「ボット」ではなくメンバーとして扱い、独自のkeypair・チャンネル参加権・監査証跡を人間と同等に付与
- 全メッセージ・リアクション・ワークフロー手順・レビュー承認・gitイベントを、単一ログ上の署名付きイベントとして記録
- 現状は1リレー=1コミュニティ構成。デスクトップアプリ（Tauri + React）、`buzz-cli`（JSON in/out）、YAMLワークフロー、NIP-34によるgitイベントが「Works today」
- モバイルクライアントやワークフロー承認ゲートは開発中

[ソース](https://github.com/block/buzz)

### alibaba/open-code-review

決定論的パイプラインとLLMエージェントを組み合わせたハイブリッド型のAIコードレビューCLI。Alibaba社内の公式AIレビューアシスタントとして2年間・数万人の開発者に使われた実績を持つOSS。Apache 2.0。

- `npm install -g @alibaba-group/open-code-review` で `ocr` コマンドが利用可能。OpenAI/Anthropic互換
- ファイル選択・関連ファイルのバンドル・ルールマッチングを決定論的エンジンが担い、動的判断のみをエージェントに委ねる設計
- 50リポジトリ・200PR・10言語・1,505件の正解データで構築したベンチマークにて、汎用エージェント（Claude Code）比で高いPrecision/F1を達成しつつ、トークン消費は約1/9と主張（Recallは意図的に犠牲）
- 差分レビューの `ocr review` に加え、ファイル全体を監査する `ocr scan`、エージェント自身にレビューさせる委譲モードを提供

[ソース](https://github.com/alibaba/open-code-review)

### citrolabs/ego-lite

Codex/Claude Code等のAIエージェントに、ユーザーのログイン状態を共有したままWeb自動化を実行させる高速ブラウザ。APIキー不要・設定不要。macOS対応（Windows/Linuxはロードマップ）。MIT。

- 各エージェントに完全隔離の「Space」を割り当て、ユーザーのタブと衝突せず並列にタスクを実行
- capabilityをJavaScript関数として直接呼び出す「code base」設計で、CLI方式比で複雑タスクを最大2.5倍高速・少トークンで完了と主張
- カーネルレベルのカスタマイズにより、深くネストしたiframeにも対応する高品質なページSnapshotを生成
- 初回起動時にChromeデータ（ログイン・Cookie・拡張・ブックマーク）の移行を選択可能

[ソース](https://github.com/citrolabs/ego-lite)

### mksglu/context-mode

AIコーディングエージェント向けのコンテキスト窓最適化MCPサーバ。ツール出力のサンドボックス化でコンテキスト消費を大幅削減し、セッション記憶を永続化する。17プラットフォーム対応、ELv2。Hacker Newsで#1（570点超）を獲得。

- ツール出力をサンドボックスに隔離してコンテキスト窓外に保持（315KB→5.4KBの98%削減を掲げる）
- ファイル編集・git操作・タスク・エラー・ユーザー判断をSQLiteに記録し、FTS5+BM25検索で会話圧縮後も必要分だけ復元
- 「Think in Code」— データ処理ではなくコード生成としてLLMを使い、スクリプト1本で複数ツール呼び出しを置換する方針を全クライアントで標準化
- Claude Codeはプラグインマーケットプレイスから導入でき、6フック・11 MCPツール（6サンドボックス＋5メタ）を自動登録

[ソース](https://github.com/mksglu/context-mode)

### ComposioHQ/awesome-claude-skills

1000超のClaude Skills/プラグインを用途別に分類キュレーションしたawesomeリスト。Apache 2.0。

- Claude.ai / Claude Code だけでなく、Codex・Cursor・Gemini CLI・Antigravity・Windsurf など複数エージェントに対応するオープン標準として整理
- Document Processing、Development & Code Tools、Data & Analysis、Business & Marketing など多カテゴリで収録
- Composioの78 SaaS向けApp Automationスキル（CRM/PM/コミュニケーション/DevOps等）も併載

[ソース](https://github.com/ComposioHQ/awesome-claude-skills)

## コミュニティの反応

本日のリポジトリは多くがトレンド入り直後で、Xの反応は紹介・解説が中心。実使用に基づく報告が厚く確認できたのは context-mode と awesome-claude-skills、批評まで拾えたのは block/buzz に限られた。

### block/buzz

#### ポジティブ

> 人間とAIエージェントが同一Nostrリレー上で同じ部屋・同じ鍵で協働するhive-mind型ワークスペース。Slack+GitHub+agent harnessを1つに置き換える可能性がある。 — @g999_000 [出典](https://x.com/g999_000/status/2080375939783884939)

> AIエージェントを「ボット」ではなくチームメンバーとして扱い、keypair・チャンネル参加・監査ログを人間と同等に与える点が「agents as coworkers」の初の本格試みとして評価できる。 — @askadityapandey [出典](https://x.com/askadityapandey/status/2081042416929509605)

#### ネガティブ

> buzzはNostr keypairでエージェントに「IDENTITY」を与えるが、UCANトークンによる時間制限・revocable なscoped AUTHORITY には及ばない、との技術比較上の指摘。 — @Amrit_Mirch [出典](https://x.com/Amrit_Mirch/status/2080787523450941939)

### alibaba/open-code-review

該当なし（直近1週間で、Trending紹介・説明の投稿は複数あったが、実使用に基づく感想・評価は確認されず）。

### citrolabs/ego-lite

#### ポジティブ

> AIエージェントが人間のブラウザと競合せず独立Spaceで動作する仕組みで、ログイン共有・並列タスクの利点が大きい。 — @0xQiYan [出典](https://x.com/0xQiYan/status/2081364438570205634)

> GitHub Trending #1を獲得した背景として、エージェント向けブラウザの需要の高まりを指摘。 — @AIPandaX [出典](https://x.com/AIPandaX/status/2081388233901097030)

#### 実際の使用例

> 「curtindo bastante esse browser agent first（このbrowser agent firstをかなり楽しんでいる）」とGitHubリンク付きで実使用の好感を表明。 — @jeffecom [出典](https://x.com/jeffecom/status/2080073620882096302)

### mksglu/context-mode

#### ポジティブ

> MCPツール出力の98%圧縮とFTS5永続記憶でトークン節約の定番。複数エージェント同時運用でトークン上限を大幅に伸ばせる。 — @shijianzhongg [出典](https://x.com/shijianzhongg/status/2079371393368813576)

> 導入するとツール出力が即座に圧縮され、Opusでも長時間セッションが回せる。 — @frankgracy [出典](https://x.com/frankgracy/status/2080246557748687090)

#### 実際の使用例

> pi agent設定時に導入し「98%コンテキスト節約＋FTS5知識庫でvectorより正確」と実感。pi-mcp-adapterと併用で外部MCPも快適。 — @lzhgus [出典](https://x.com/lzhgus/status/2080905759060279490)

> Fable5/Opus5で初手から稼働させ、400K未満でセッション引き継ぎ。ProMax 5xプランでも4セッション同時運用が余裕で回る。 — @shii418ha [出典](https://x.com/shii418ha/status/2080835427154723080)

#### Tips

> AntigravityCLIの不具合時に、context-modeを有効化したまま最新MCP群と併用したところ正常稼働に戻った。 — @shobu_umemura [出典](https://x.com/shobu_umemura/status/2079958241874989410)

### ComposioHQ/awesome-claude-skills

#### ポジティブ

> GitHubトレンド上位常連で68k〜69k stars到達。Claude Codeだけでなく複数ツールで使えるオープン標準のSkills集として、プロンプトを再利用可能なSkillに変換するエコシステム形成が話題。 — @undefinedKi [出典](https://x.com/undefinedKi/status/2080415980316959121)

#### 実際の使用例

> overkill（やりすぎ解法提案）、claude-code-terminal-title（複数窓のタイトル自動変更）、twitter-algorithm-optimizer（投稿前最適化）の3つをピックアップして保存。全部無料で即入れられる実用例として共有。 — @yossy_indie [出典](https://x.com/yossy_indie/status/2080912936885797036)

> install一度でClaudeが自動マッチしてワークフローを実行。Codex/Cursor/Gemini CLI対応で「毎回同じセットアップを再入力しなくて済む」。 — @unicodef1wn [出典](https://x.com/unicodef1wn/status/2079181991711485974)

#### Tips

> 1000+ Skillsを「普段の課題解決時の手引書」として、必要なときに参照する使い方が便利。 — @xianlezheng [出典](https://x.com/xianlezheng/status/2080682958810497390)

## ソース

- [block/buzz](https://github.com/block/buzz)
- [alibaba/open-code-review](https://github.com/alibaba/open-code-review)
- [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)
- [mksglu/context-mode](https://github.com/mksglu/context-mode)
- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
