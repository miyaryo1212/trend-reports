---
title: "Claude Code v2.1.139でAgent View・/goalコマンド等の大型アップデート"
summary: "Claude Code v2.1.139がリリースされ、全セッション一覧表示のAgent View、完了条件付き自律実行の/goalコマンド、Hook機能の強化など多数の新機能を追加。コミュニティではCLAUDE.md運用の試行錯誤やスキル活用の実践記事が活発。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-12
features:
  - "Claude Mythos Preview (Project Glasswing)"
  - "Claude Code v2.1.139 Agent View"
  - "Claude Code v2.1.139 /goalコマンド"
  - "Claude Code v2.1.139 /scroll-speedコマンド"
  - "Claude Code v2.1.139 claude plugin details"
  - "Claude Code v2.1.139 Transcript Viewナビゲーション"
  - "Claude Code v2.1.139 Hook args配列フィールド"
  - "Claude Code v2.1.139 Hook continueOnBlock設定"
  - "Claude Code v2.1.139 MCP CLAUDE_PROJECT_DIR環境変数"
codex_review: "Agent Viewや/goalは、Claude Codeが単なる補助から“運用対象の作業者”へ寄ってきた感じがあり面白い。一方で熱量の中心が周辺運用や節約術に移っているのは、普及の証拠だが少し過剰期待の調整局面にも見える。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.139リリース

5月11日リリース。今回のリリースは新機能が多数含まれる大型アップデート。

**主な新機能:**

- **Agent View (Research Preview)**: 全セッションを一覧表示する新機能。`claude agents`で起動し、実行中・ブロック中・完了済みのセッションを一元管理できる
- **/goalコマンド**: 完了条件を設定すると、条件達成までClaude Codeが自律的にターンを継続する。インタラクティブモード、`-p`モード、Remote Controlで動作。経過時間・ターン数・トークン数をオーバーレイパネルで表示
- **/scroll-speedコマンド**: マウスホイールのスクロール速度をライブプレビュー付きで調整
- **claude plugin details \<name\>**: プラグインのコンポーネント一覧とセッション毎の推定トークンコストを表示
- **Transcript Viewナビゲーション強化**: `?`でキーボードショートカット表示、`{`/`}`でユーザープロンプト間ジャンプ、`v`でショートカットパネル切替
- **Hook args配列フィールド**: exec形式でシェルを介さずコマンドを直接実行可能に。パスプレースホルダーのクォートが不要に
- **Hook continueOnBlock設定**: PostToolUseフックの拒否理由をClaudeにフィードバックしてターン継続が可能に
- **MCP CLAUDE_PROJECT_DIR環境変数**: stdioサーバーの環境変数に`CLAUDE_PROJECT_DIR`を追加。プラグイン設定で`${CLAUDE_PROJECT_DIR}`を参照可能に
- Compactionプロンプトがモデルに重要なユーザー指示の保持を指示するように改善
- `/mcp` Reconnectが`.mcp.json`の編集を再起動なしで検知するように改善
- サブエージェントのAPIリクエストに`x-claude-code-agent-id`/`x-claude-code-parent-agent-id`ヘッダーを追加

**主なバグ修正:**

- 資格情報の期限切れと`forceRemoteSettingsRefresh`ポリシーが`claude auth login`をブロックするデッドロックを修正
- `autoAllowBashIfSandboxed`が`$VAR`や`$(cmd)`を含むコマンドを自動承認しない問題を修正
- HTTP/SSE MCPサーバーからの非プロトコルデータによる無制限メモリ増加を修正（SSEフレームごと16MB上限）
- CJK/絵文字の視覚的セル幅の誤計算によるテキストオーバーフローを修正
- Cursor/VS Code 1.92〜1.104でのマウスホイールスクロール速度の修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.139)

### Claude Mythos Preview / Project Glasswing（前回から継続）

セキュリティ特化のフロンティアモデル。ゼロデイ脆弱性の自律的発見・修正能力を持ち、防御的サイバーセキュリティ向けに$100Mのクレジットを提供。本日の新規情報なし。

## コミュニティの反応

### Claude Code v2.1.139 新機能

X/Twitterでの個別機能に対する反応は、品質基準を満たす投稿が確認されなかった。リリースから間もないため、今後の反応に注目。

### Claude Mythos Preview（前回から継続）

該当なし（新規の品質基準を満たすX投稿なし）

### CLAUDE.md運用・最適化

#### Tips

> CLAUDE.mdを整理したら、めちゃくちゃトークン消費が増えていた話。@インポートで分割した結果、逆にコストが増加した失敗談 — @JIRO SAKAMOTO [Zenn](https://zenn.dev/penguingymlinux/articles/5335e74359b3d9)

> Claude Code運用を数ヶ月で見直してrulesとskillsに分けた話。入れたものと捨てたものの実録 — @harness [Zenn](https://zenn.dev/harness/articles/claude-code-workflow-evolution)

> Claude Codeの精度が変わる、私が削ったCLAUDE.md 5項目。指示を減らすことで精度が上がった実践ログ — @Ngen [Qiita](https://qiita.com/Ngen/items/9eb05e506c500ff5eec7)

### Claude Codeスキル・プラグイン活用

#### Tips

> Claude Code スキルで 3 媒体投稿を 3 リポ構成にした設計録。note・Qiita・Zennへの自動投稿パイプライン — @soma [Zenn](https://zenn.dev/aiandao/articles/three-repo-blog-skill-design-20260506)

> Claude Code スキルを活用した組込みLinuxアプリのAI駆動開発環境を構築した話。クロスコンパイル・デプロイをワンコマンドで自動化 — @まえぷ [Zenn](https://zenn.dev/maepu/articles/a23485ff0caaeb)

> Claude Code を10倍使いやすくするスラッシュコマンド集を作って公開した。11個のコマンドにパッケージ化 — @じゅん [Zenn](https://zenn.dev/jun_eng/articles/71012bb4d0cf51)

### Claude Codeのハーネス・アーキテクチャ

#### Tips

> Claude Code のハーネスとは何か。Skill・Subagentとの差異、構成要素間の連動、/setup-harnessによる自動生成 — @中森健人_SALT2 [Zenn](https://zenn.dev/kent_salt2/articles/571bd944d0cb0d)

> Claude Code ソースコード解説シリーズ ガイド。モデルインターフェースからランタイムシステムへの成長を5パートで解析 — @ケツ [Zenn](https://zenn.dev/lienjack/articles/00-series-guide)

### Claude Codeローカル運用・セキュリティ

#### Tips

> 「このコード、Claudeに見せていいの？」を解決する。Claude Codeローカル運用ガイド。機密データを外に出さずにワークフローを維持する構成 — @ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/c7e7e6b27509cc)

> AIエージェント時代のローカル開発でmacOSキーチェーンで機密情報を安全に運用する。.envの平文保存リスクへの対策 — @mhoshino [Zenn](https://zenn.dev/mhoshdev/articles/f62248903615cf)

### Claude Codeコスト分析

#### Tips

> Claude Code 1日で$874使った日のログをkoji-lensで見たら、subagent経由Bashが68%だった。ツール別コスト内訳の可視化 — @koji_麹 [Zenn](https://zenn.dev/kojihq/articles/2c211edbf84727)

> 全部Opusにしたら5時間枠が詰まった話。skillのモデル配分を3層に分けた判断基準 — @playpark [Zenn](https://zenn.dev/playpark/articles/2026-04-28-claude-code-cost-optimization)

> Claude Code にAWSのコスト調査をさせたら数千万円分の改善ポイントが見つかった — @S. Hamamura [Zenn](https://zenn.dev/geniee/articles/claude-code-aws-cost-optimization)

### Claude Code記憶・MCP連携

#### Tips

> Claude Code が前回のやりとりを忘れる問題を、MCPサーバーで解決した話。kita-memoryプロジェクトの非エンジニア視点での設計 — @キタモ [Zenn](https://zenn.dev/kitamotors/articles/kita-memory-mcp-claude-code-long-term-memory)

> Claude CodeからNotionを操作する2つの連携方法。claude.ai OAuth連携とローカルMCPサーバーの比較 — @ty [Zenn](https://zenn.dev/ty2/articles/notion-mcp-integration)

> Gemini Enterprise から Claude Code を呼ぶ。A2Aプロトコルでマルチサーフェス連携。Vertex AI経由でGoogle Cloud請求一本に集約 — @Yuting Lin [Zenn](https://zenn.dev/google_cloud_jp/articles/2c0cab1ab0d139)

### Claude Code活用事例

#### Tips

> 非エンジニアがAIだけでアプリをリリースするまでに、開発環境を3回変えた話。Cursor→Claude Codeへの変遷と費用 — @takeMiya [Zenn](https://zenn.dev/anpiropac/articles/74553b9c3eafab)

> Claude Code × Supabase Storageで画像アップロード+切り抜きUIを実装する。react-easy-cropで1時間で動くものが完成 — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-image-upload-crop-supabase)

> フットサル個サル管理アプリをClaude Codeで3日で作った。Google OAuth × Sheets連携の全実装 — @ICHI [Zenn](https://zenn.dev/ichi_automation/articles/futsal-app-claude-code)

> 6本の記事を1セッションで品質ゲート通過させた。Claude Codeの並行レビューフロー — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-01-130000)

> Claude Code × Claude Design で AWSサーバーレス設計を次のレベルへ。設計フェーズにフォーカス — @seigen [Zenn](https://zenn.dev/geneg/articles/2026-05-11-introducing-claude-design-by-anth)

### MCP・プロトコル

#### Tips

> 業務で本当に使えるClaude MCPサーバー厳選10選。情シス・DX推進部門向けに30の業務シナリオ — @ノーコードソリューションズ [Zenn](https://zenn.dev/nocodesolutions/articles/6df07230149e08)

> MCPツール完全ガイド2026。AIエージェントのリアル接続を制する「USB-C for AI」 — @agdexai [Qiita](https://qiita.com/agdexai/items/6bc2c91c8e7e61a850ea)

### Claude Code VS Code拡張Windows問題（前回から継続）

#### Tips

> Claude Code拡張v2.1.136がWindowsで起動しなくなった話と、1分で確かめる方法。v2.1.137で修正済み — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/602052fec1ec68)

### claude-code-actionセキュリティ

#### Tips

> claude-codeで見つけたTOCTOUについて自分の理解をまとめる。v1.0.45でのTOCTOU対策を解説 — @nakashin [Zenn](https://zenn.dev/drsprime/articles/b0b5e37489a9b0)

### Anthropicエンタープライズ・研究（前回から継続）

#### Tips

> The Anthropic Institute: AIの現実世界への影響を研究する。新設研究機関TAIの研究アジェンダの解説 — @shunxneuro [Zenn](https://zenn.dev/shunxneuro/articles/fcb5528995b1aa)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
