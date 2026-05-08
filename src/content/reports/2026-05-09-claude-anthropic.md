---
title: "Project Glasswing発表・v2.1.136リリース・Teaching Claude Why研究"
summary: "Anthropicが主要テック企業と連携しAIでソフトウェア脆弱性を検出するProject Glasswingを発表。Claude Code v2.1.136でautoMode.hard_deny等の新機能追加。倫理的推論訓練によるミスアラインメント解消研究Teaching Claude Whyを公開。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-09
features:
  - "Project Glasswing"
  - "Claude Security"
  - "Teaching Claude Why"
  - "Petri 3.0オープンソース寄贈"
  - "Claude Code v2.1.136リリース"
  - "Claude Code v2.1.133リリース"
  - "autoMode.hard_deny設定"
  - "OTEL企業向けフィードバックサーベイ"
  - "WSL2画像ペースト"
  - "MCP OAuth修正"
  - "worktree.baseRef設定"
  - "Hooks effort level連携"
  - "parentSettingsBehavior"
  - "sandbox.bwrapPath/socatPath"
codex_review: "Anthropicは安全性研究を看板で終わらせず、GlasswingやClaude Codeの運用改善に落としているのが面白い。派手さは研究より薄いが、実務での信頼獲得という点ではこちらの積み上げの方が効く。"
codex_importance: 4
---

## 公式アップデート

### Project Glasswing

主要テック企業と連携し、AIでクリティカルソフトウェアの脆弱性を検出する新イニシアチブを発表。Claude Mythos Previewモデルを提供。

### Claude Security

AIによるコード脆弱性検出ツール。従来のパターンマッチングではなく、コードの実際の動作を分析しロジック欠陥を特定する手法を採用。

### Teaching Claude Why（5月8日）

憲法的文書と倫理的推論例による訓練で、エージェント型ミスアラインメントをほぼ完全に解消する研究成果を発表。

### Petri 3.0オープンソース寄贈（5月7日、前回から継続）

アラインメントテストツールPetriをMeridian Labsに移管。アーキテクチャ改善とBloom統合。

### Claude Code v2.1.136リリース

5月9日リリース。主な変更点:

- `settings.autoMode.hard_deny`を追加。ユーザー意図や例外に関わらず無条件にブロックする自動モード分類ルールを設定可能に
- `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL`環境変数でOpenTelemetry経由の企業向けセッション品質調査を再有効化
- WSL2でxclip/wl-pasteが画像を読めない場合にPowerShellフォールバックでWindowsクリップボードからの画像ペーストに対応
- MCP OAuth: 複数サーバー同時リフレッシュ時のトークン消失を修正、日次再認証が不要に
- `.mcp.json`設定のMCPサーバー、プラグイン、claude.aiコネクタが`/clear`後に消失する問題を修正
- 並行資格情報書き込みによるOAuthトークン上書きのログインループを修正
- 拡張思考がツールコール後にredacted thinking blockを出力した際のAPIエラー(400)を修正
- `--resume`/`--continue`がアンダースコア含みパスで動作しない問題を修正
- スラッシュコマンドダイアログの視覚的一貫性改善
- Bashコマンド出力とMarkdownコードブロックの色位置修正
- ReasonMLディフの「undefined」テキストアーティファクト修正
- `@`ファイルピッカーの中セッション作成ファイルおよび100エントリ超ディレクトリでの不具合修正
- その他多数のバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.136)

### Claude Code v2.1.133リリース

5月8日リリース。主な変更点:

- `worktree.baseRef`設定（`fresh` | `head`）を追加。`--worktree`やEnterWorktreeのブランチ元を`origin/<default>`かローカルHEADか選択可能に
- Hooksが`effort.level`フィールドと`$CLAUDE_EFFORT`環境変数でアクティブなeffortレベルを受信可能に
- `parentSettingsBehavior`管理者tierキー（`'first-wins'` | `'merge'`）を追加。SDK `managedSettings`をポリシーマージにオプトイン可能に
- `sandbox.bwrapPath`/`sandbox.socatPath`管理設定でLinux/WSLのカスタムbubblewrap/socatバイナリパスを指定可能に
- フォーカスモード動作改善
- メモリ圧迫時のウォームスペアバックグラウンドワーカー解放によるメモリ使用量改善
- 並行セッションのリフレッシュトークンレースによる401デッドエンドを修正
- `HTTP(S)_PROXY`/`NO_PROXY`/mTLSがMCP OAuth全フローで尊重されない問題を修正
- Remote Controlのstop/interruptがCLIセッションを完全にキャンセルしない問題を修正
- サブエージェントがSkillツール経由でスキルを発見できない問題を修正
- その他多数のバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.133)

## コミュニティの反応

### autoMode.hard_denyとAuto Mode運用

#### Tips

> Claude Codeのオートモードは外部からの不正命令を自動判断し、安全なら実行、危険ならブロックする機能。auto mode設定で利用可能 — @saeroyi_ican [X](https://x.com/i/status/2052273834833965130)

> Claude Codeのpermissions.denyに記述した.envファイルが警告なく読み込まれていた。denyだけでは不十分なため.claudeignoreを追加推奨 — @choknita_ai [X](https://x.com/i/status/2050908233704083472)

> Claude Codeのauto modeはpermissionsを安全にスキップする仕組み。エージェントの入力方法やprompt cacheの活用が洗練されている — @cipepser [X](https://x.com/i/status/2052400575728271600)

> Claude Codeのpermissions設定でallow/denyを操作種別ごとにまとめ、AIによる意図せぬファイル変更を防ぐTips — @k38ryohei [X](https://x.com/i/status/2050748988610203689)

### Project Glasswing / Claude Security

該当なし（品質基準を満たす投稿なし）

### Teaching Claude Why / Petri 3.0

該当なし（品質基準を満たす投稿なし）

### Claude Codeセキュリティ・安全性

#### Tips

> Claude DesktopのSSH機能にMITM脆弱性を発見（CVE-2026-44467）。ホスト鍵検証バイパスの詳細と原因を解説 — @masa42 [Zenn](https://zenn.dev/aeyesec/articles/0aa59f113a702b)

> Claude Codeの三層ゲート設計。Hooks × Permission Modes × Auto ModeでPocketOS本番DB消失事故を踏まえた安全性確保 — @井ノ実 [Zenn](https://zenn.dev/ino_h/articles/2026-05-07-claude-code-gate-mechanisms)

### Claude Codeレート制限倍増（前回から継続）

#### ポジティブ

> Claude Codeの制限が2倍に。Proでも長時間エージェント運用が現実になった — @こてち [Zenn](https://zenn.dev/kewa8579/articles/283e8d3dab4e21)

> Higher Limitsの発表で起きること、起きないこと。SpaceX Colossus 1 DCの300MW追加が背景 — @koji_麹 [Zenn](https://zenn.dev/kojihq/articles/95a2a8b827671b)

### Code with Claude 2026（前回から継続）

#### Tips

> Code with Claude 2026を観終わって。Anthropicが示した「3つの層」と開発者の役割 — @noah [Zenn](https://zenn.dev/noah33/articles/code-with-claude-2026-sf-keynote)

> Code with Claude 2026基調講演。新モデルなし、全製品一気に強化（Dreaming・Routines他） — @AI Heartland [Zenn](https://zenn.dev/ai_heatland/articles/f342838e3d5132)

### Claude Codeエージェント設計・マルチエージェント

#### Tips

> Anthropicの5パターンでClaude Codeエージェント設計を分類。Generator-Verifier / Orchestrator-Subagent / Agent Teams / Message Bus / Shared Stateの解説 — @タカシ [Zenn](https://zenn.dev/motowo/articles/anthropic-multi-agent-coordination-patterns-guide)

> Claude Code Agent Teams完全ガイド。並列エージェントでレビュー・デバッグを高速化 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/e47e94b1b05cc67f219b)

> Claude Code で Agentic Quality Gate Pluginを実装。Karpathyの言うAgentic Engineeringを「品質バーを下げない」運用に落とし込む — @KiwiiOsaru [Zenn](https://zenn.dev/kiwiiosaru2024/articles/agentic-quality-gate-karpathy)

### Claude Codeの記憶・コンテキスト管理

#### Tips

> あなたのClaude Code、実は前回のセッションを完全に忘れている。5分で永続記憶を入れる方法 — @Michie [Zenn](https://zenn.dev/kanseilink/articles/linksee-memory-claude-code-recall-20260508)

> Claude Codeの「auto memory」で、毎回の会話を捨てずに育てる方法 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-auto-memory-20260508)

> AIに「リポジトリの地図」を渡す。マルチレポを束ねるセントラルリポジトリ設計 — @Satoshi Kobayashi [Zenn](https://zenn.dev/loglass/articles/17e1df6be6aeba)

### Claude Code活用事例・比較

#### Tips

> Cursorを6ヶ月使ってた俺が、Claude Codeに全乗り換えた理由を全部書く — @ミント [Zenn](https://zenn.dev/mintototo1/articles/compare-claude-code-vs-cursor-vs-aider)

> Claude Code・Cursor・Codex CLI——3つ全部使って気づいたこと。設計思想のレイヤーから違う — @みお [Zenn](https://zenn.dev/kenworkflow/articles/dfffcc275ad49f)

> Claude Code × build123dで3Dプリント用モデルを作る — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/ef65833d6630ab)

> Claude Code × arduino-cliで爆速電子工作 — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/b358f464414cf9)

> LightdashのBIデータをClaude Codeから触りたい。エージェント前提の薄いCLI — @Coji Mizoguchi [Zenn](https://zenn.dev/coji/articles/ldash-lightdash-cli-for-coding-agents)

> AIに要約させずにWeb情報の原典を読むCLIを作った。WebFetchはHaikuが要約した結果しか渡さない問題の解決 — @thkt [Zenn](https://zenn.dev/thkt/articles/eae521ee3f4016)

### Claude Code Skills・開発手法

#### Tips

> Claude Code Skills実装で踏んだ地雷15選。失敗パターンと対策を体系化 — @ヨコタナオヤ [Zenn](https://zenn.dev/correlate_dev/articles/claude-code-skills-15)

> shadcn/ui Skills活用ガイド。Claude Codeで爆速UI開発 — @yamitake [Zenn](https://zenn.dev/yamitake/articles/shadcn-ui-skills-claude-code)

> Claude Codeの/btwで開発を止めない。コンテキスト共有と/rewind・subagentとの使い分け基準 — @shin [Zenn](https://zenn.dev/dearone/articles/672ef7b7e9f407)

> Claude Code全コマンド完全版。スラッシュ・CLI・設定など — @AI Heartland [Zenn](https://zenn.dev/ai_heatland/articles/3b7186c20c69f0)

### Claude Opus 4.7

#### Tips

> Claude Opus 4.7はAWS経由だと出力速度が速い。Artificial Analysisのベンチマーク比較 — @yoheikikuta [Zenn](https://zenn.dev/aws_japan/articles/2026-05-08-opus4-7-speed)

### Claude Cowork

#### Tips

> Claude CoworkをAmazon Bedrock経由で使ってみた。非エンジニアでも扱いやすいデスクトップアプリの設定手順 — @xthixsl_ml [Zenn](https://zenn.dev/fusic/articles/7ac5229f4d65f0)

> Claude Coworkでできること。Claude Desktop上で動くAIエージェント機能の紹介 — @j4nzeri [Qiita](https://qiita.com/j4nzeri/items/d2f7ab10ae051b6283ba)

### AIエージェントの検証・信頼性

#### Tips

> 「user 12345を削除しました」と言うのにDBが変わってない。AIエージェントの後付け検証APIを作った話 — @ardev [Zenn](https://zenn.dev/ardev/articles/aecfab260f9432)

> AI自動化を9ヶ月運用して気づいた、Validator設計の3つの落とし穴 — @ピクト [Zenn](https://zenn.dev/pikuto/articles/ai-validator-3-pitfalls)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
