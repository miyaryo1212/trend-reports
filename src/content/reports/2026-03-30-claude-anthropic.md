---
title: "v2.1.86-87: 安定性改善とコミュニティの活用深化"
summary: "v2.1.87でCowork Dispatch修正、v2.1.86でセッションIDヘッダー追加やVCS除外リスト拡張など多数の修正。コミュニティではレート制限問題、サプライチェーン攻撃対策、ハーネス設定最適化が話題。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-30
features:
  - "Cowork Dispatchメッセージ配信修正"
---

## 公式アップデート

### v2.1.87 (2026-03-29)

軽微な修正リリース。

- **Cowork Dispatch メッセージ配信修正**: Cowork Dispatch でメッセージが届かない不具合を修正

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.87)

### v2.1.86 (2026-03-28)

安定性・パフォーマンス改善が中心の大型修正リリース。

#### 新機能・改善

- **`X-Claude-Code-Session-Id` ヘッダー追加**: API リクエストにセッション ID ヘッダーを付与。プロキシがボディを解析せずにセッション単位でリクエストを集約可能に
- **VCS ディレクトリ除外リスト拡張**: `.jj`（Jujutsu）と `.sl`（Sapling）を除外リストに追加。Grep やファイル補完がメタデータに入り込まなくなる
- **Read ツールのトークン削減**: コンパクトな行番号フォーマットと再読み込み時の重複排除でトークン使用量を削減
- **`@` メンション時のトークン削減**: ファイル内容の JSON エスケープを廃止し、生の文字列として送信
- **Bedrock / Vertex / Foundry のキャッシュヒット率改善**: ツール説明から動的コンテンツを除去
- **メモリファイル名のクリック対応**: 「Saved N memories」通知内のファイル名がホバーでハイライト、クリックで開けるように
- **`/skills` メニュー改善**: アルファベット順ソート、説明文を250文字に制限してコンテキスト節約
- **Auto モードのプラン制限表示改善**: 「temporarily unavailable」から「unavailable for your plan」に変更

#### バグ修正（主要なもの）

- `--resume` が v2.1.85 以前のセッションで「tool_use ids were found without tool_result blocks」エラーになる問題を修正
- プロジェクトルート外のファイル（例: `~/.claude/CLAUDE.md`）で Write/Edit/Read が失敗する問題を修正
- スキル呼び出しごとに不要な設定ディスク書き込みが発生し、Windows でパフォーマンス低下・設定破損を引き起こす問題を修正
- `/feedback` で非常に長いセッションの大きなトランスクリプトファイルにより OOM クラッシュする問題を修正
- `--bare` モードで MCP ツールがドロップされ、ターン中にキューされたメッセージが無視される問題を修正
- OAuth ログイン URL の `c` ショートカットが約20文字しかコピーしない問題を修正
- マスク入力（OAuth コードペースト）が狭いターミナルで複数行に折り返す際にトークン先頭が漏洩する問題を修正
- v2.1.83 以降の公式マーケットプレイスプラグインスクリプトの Permission denied を修正
- 複数 Claude Code インスタンス実行時にステータスラインが別セッションのモデルを表示する問題を修正
- 長い会話の末尾でホイールスクロールやクリック選択後にスクロールが新メッセージに追従しない問題を修正
- `ultrathink` ヒントがキーワード削除後も残る問題を修正
- 長時間セッションでの Markdown/ハイライトレンダーキャッシュによるメモリ増加を修正
- macOS キーチェーンキャッシュを 5秒→30秒に延長し、多数の claude.ai MCP コネクター設定時の起動イベントループ停止を軽減

#### VS Code 修正

- 長時間操作中に「Not responding」が誤表示される問題を修正
- Max プランユーザーが OAuth トークンリフレッシュ（ログイン8時間後）後にデフォルトで Sonnet にフォールバックする問題を修正

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.86)

## コミュニティの反応

### レート制限・ピーク課金問題

#### ネガティブ

> 3月26日あたりから「使用量の減りが異常に早い」との声が噴出。ピーク時間帯（日本時間21時〜翌3時）は5時間セッションリミットの消費速度が上がる仕様が判明。Max 20x プランでも1プロンプトで使用量が一気に100%に跳ね上がる報告あり — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-daily-2026-03-29) / [Zenn](https://zenn.dev/yokoi_ai/articles/cc-daily-2026-03-27)

### サプライチェーン攻撃防御

#### Tips

> telnyx 4.87.1 事件（PyPI パッケージ侵害）を受け、Claude Code Hooks でサプライチェーン攻撃を防御する実装ガイドを公開。pip install 時のバックドア検知を hooks で自動化 — @Junpei [Zenn](https://zenn.dev/fugithora812/articles/d750698cf6ea52)

> OWASP MCP Top 10 の全リスクを Claude Code hook で防ぐ実装ガイド — @yurukusa [Qiita](https://qiita.com/yurukusa/items/574e0572db4deee35e71)

### ハーネス設定のインデックス化

#### Tips

> rules/ 747行→173行（77%削減）、スキル呼び出し時のロード量を平均160行→44行（73%削減）に縮小。コンテキスト消費を大幅に削減する「インデックス化」手法 — @JapanNomu [Zenn](https://zenn.dev/japannomu/articles/20260329_claude-code-harness-indexing)

### ハーネス設計（Anthropic公式ブログ）

#### 中立

> Anthropic 公式ブログの「Harness design for long-running application development」を受け、「生成と評価の分離」パターンを解説。AI は自分の成果物を甘く評価する傾向が実験的に示された — @たきびラボ [Zenn](https://zenn.dev/takibilab/articles/anthropic-harness-design)

> 論文を読んで Claude Code の開発環境を全部見直した。「生成」はできていたが「評価」の仕組みが欠けていた — @Lovanaut [Zenn](https://zenn.dev/lova_man/articles/99777e473b3c2c)

### API トークン節約・コスト最適化

#### Tips

> helix-agent: Claude Code のタスクをローカル Ollama モデルに自動委譲する MCP サーバーを作成。API トークン消費を削減 — @tsunamayo [Zenn](https://zenn.dev/tsunamayo7/articles/helix-agent-local-benchmark-mcp)

### Claude Max vs Google AI Pro 比較

#### 中立

> Claude Max（$100/月）と Google AI Pro（2,900円/月）を日常利用で比較。会話とCLI（コードエージェント）の2観点から。Claude は応答速度とコード品質で優位、Google AI Pro はコスパで優位 — @Rinrin [Zenn](https://zenn.dev/rin__rin/articles/31ab886e9ed54d)

### AWS Bedrock → Team plan 移行

#### Tips

> Claude Code を AWS Bedrock 経由から Team plan に移行。API直接・Bedrock/Vertex経由・Max/Team planの3経路の使い分けを整理 — @ida. [Zenn](https://zenn.dev/tsukulink/articles/2026-03-claude-code-plan)

### サブエージェントの活用

#### Tips

> Claude Code のサブエージェントの種類・概要とカスタムエージェントの作り方を解説。メインの会話コンテキストを汚さず重い処理を実行 — @よーすけ [Zenn](https://zenn.dev/yosuke_yano/articles/8b3ce550fdd153)

### Claude Cowork とスキルによる業務引き継ぎ

#### Tips

> Claude Cowork の「スキル」機能を活用し、属人化した業務手順を AI が実行可能な形で標準化する方法。スクリーンショット付きで実例紹介 — @こ [Zenn](https://zenn.dev/kobarutosato/articles/54ce4eb416e38a)

### マイクロスキル

#### Tips

> 「○○って必要？」と聞いたら削除された問題への対処。マイクロスキル（`/micro-question`）でエージェントの過剰反応を防止 — @Yuichiroh Arai [Zenn](https://zenn.dev/yuichiroharai/articles/4f0d637ef99184)

### AI エージェントのサンドボックス

#### Tips

> Claude Code に .bashrc を消された体験から、jai（AIエージェント向けサンドボックス）を試用。ファイル消失リスクへの対策 — @にゃん太郎 [Zenn](https://zenn.dev/nh808/articles/20260328_jai_sandbox_for_ai_agents)

### AIエージェント向けターミナル

#### Tips

> cmux: AI コーディングエージェントのマルチタスク管理に特化した macOS ネイティブターミナル。「どのタブのエージェントが入力待ちか」を可視化 — @Sho [Zenn](https://zenn.dev/caron14/articles/introduction-to-cmux-terminal)

### WSL2 環境のツール連携

#### Tips

> WSL2 環境から Windows 通知とクリップボードのスクショ取得ができるツール wsl-relay を作成。Docker コンテナ内の Claude Code からも利用可能 — @khaym [Zenn](https://zenn.dev/yamakh/articles/67b6822260eb55)

### macOS 通知連携

#### Tips

> Claude Code の作業完了・権限要求を macOS ネイティブ通知で受け取る方法。Notification Hook + terminal-notifier で実現 — @daydreamer [Zenn](https://zenn.dev/daydreamer/articles/b7513c44fb70a2)

### Tailscale + Bedrock の DNS 問題

#### Tips

> Tailscale 利用時に Claude Code を AWS Bedrock で使うと DNS 解決が壊れる問題の調査と解決 — @ユウキ [Zenn](https://zenn.dev/nylon66/articles/8e07830952541f)

### J-SIX: SI 開発プロセスの再定義

#### 中立

> Claude Code で日本の SI 開発プロセス（V字モデル）を再定義するシリーズ「J-SIX」を開始。TDD × Claude Code、CLAUDE.md 実践ガイドを含む — @SeckeyJP [Qiita](https://qiita.com/SeckeyJP/items/e4726bbbbf4d7949ab0f)

### AI 自律運用の品質問題（前回から継続）

#### 中立

> Claude Code にテックブログを自律運用させたら、嘘の記事が品質チェックを全部パスした。AI の壊れ方は人間と全然違い、設計した品質チェックが機能しなかった — @ぷらずもん [Zenn](https://zenn.dev/plasmon/articles/20260326-meta-claudecode-8b4de7)

### Anthropic 8万人 AI 調査

#### 中立

> Anthropic が 80,508人・159カ国・70言語で実施した AI に関する調査レポートの紹介。ビジュアルが見やすくサクサク読めると好評 — @9mak [Zenn](https://zenn.dev/ap_com/articles/anthropic-81k-ai-survey-20260327)

### デスクトップペットアプリ

#### ポジティブ

> Claude Code の状態に連動してアニメーションが変わるデスクトップペットアプリ「Claude Pet」を作成。考え中・作業中・待機中でキャラクターの動きが変化 — @musoukun [Zenn](https://zenn.dev/musoukun/articles/f71c3933ff3d68)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
