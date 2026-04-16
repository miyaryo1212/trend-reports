---
title: "v2.1.91でMCPツール結果500KB保持、プラグイン実行ファイル同梱に対応"
summary: "Claude Code v2.1.91がリリースされ、MCPツール結果の最大500KBトランケーション回避やプラグインbin/ディレクトリ対応が追加。コミュニティではソースコード流出事件の分析、マルチエージェント運用、Hooksセキュリティ対策の記事が活況。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-04
features:
  - "MCP tool result persistence override（最大500KB）"
  - "disableSkillShellExecution設定"
  - "ディープリンクの複数行プロンプト対応"
  - "プラグインbin/ディレクトリ"
  - "Editツール最適化"
codex_review: "500KB保持やプラグイン実行ファイル同梱は派手ではないが、実務の詰まりを直接ほどく改善でかなり重要だ。一方で話題の中心が運用防衛や漏洩分析に寄っているのは、普及の成熟と同時に不安定さも残る証拠に見える。 ※ このレビューは後日生成されました"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.91（2026-04-02）

前日のv2.1.90に続く連続リリース。MCP連携の拡張とプラグインエコシステムの強化が中心。

**新機能:**

- **MCP tool result persistence override**: `_meta["anthropic/maxResultSizeChars"]`アノテーションにより、MCPツールの結果を最大500KBまでトランケーションなしで保持可能に。DBスキーマなど大きな結果の受け渡しに有効
- **`disableSkillShellExecution`設定**: スキル・カスタムスラッシュコマンド・プラグインコマンドでのインラインシェル実行を無効化するオプションを追加
- **ディープリンクの複数行プロンプト対応**: `claude-cli://open?q=`でエンコードされた改行（`%0A`）を含む複数行プロンプトをサポート
- **プラグインbin/ディレクトリ**: プラグインが`bin/`配下に実行ファイルを同梱し、Bashツールからベアコマンドとして呼び出し可能に

**パフォーマンス改善:**

- **Editツール最適化**: `old_string`アンカーを短縮し、出力トークンを削減
- **stripAnsi高速化**: Bun環境で`Bun.stripANSI`を利用するルーティングにより高速化

**バグ修正:**

- `--resume`でトランスクリプトチェーンが切断され、非同期書き込み失敗時に会話履歴が失われる問題を修正
- `cmd+delete`がiTerm2、kitty、WezTerm、Ghostty、Windows Terminalで行頭まで削除されない問題を修正
- リモートセッションのプランモードでコンテナ再起動後にプランファイルを見失う問題を修正
- `permissions.defaultMode: "auto"`のJSONスキーマバリデーションを修正
- Windows版クリーンアップがアクティブバージョンのロールバックコピーを保護しない問題を修正

**その他の変更:**

- `/feedback`が利用不可時にスラッシュメニューから消えるのではなく理由を説明するように変更
- `/claude-api`スキルのエージェント設計パターンガイダンスを改善

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.91)

## コミュニティの反応

### v2.1.91の新機能全般

X/Twitterでの個別機能への反応は、品質基準を満たす投稿が見つからなかった。リリースから間もないためと考えられる。

### Claude Code Hooksによるセキュリティ対策

#### Tips

> Claude Code Hooksでプロンプトインジェクション対策を実装。.envの外部送信やrm -rfの実行を防ぐ実践的な防御手法を解説 — @ハレキ [Zenn](https://zenn.dev/hareki_aoi/articles/claude-code-hooks-security)

> Git/GitHub操作の安全性を高める3層防御の仕組み。permissions・hooks・git server-side hooksの組み合わせで破壊的コマンドを防止 — @t.kobayashi [Zenn](https://zenn.dev/dely_jp/articles/claude-code-3-layer-defense-git-github)

### マルチエージェント開発

#### Tips

> tmuxベースで11人編成のマルチエージェント開発チームを構築。TL・BL・Engineerの役割分担で3プロジェクト並行開発 — @うんや [Zenn](https://zenn.dev/three_dots_inc/articles/claude-code-multi-agent-team)

> 上記のマルチエージェント環境にリアルタイム監視ダッシュボードを追加。許可待ちで30分停止していた問題の可視化に対応 — @うんや [Zenn](https://zenn.dev/three_dots_inc/articles/claude-code-agent-dashboard)

### ハーネスエンジニアリングの実践（前回から継続）

#### Tips

> CLAUDE.md・マルチエージェントCI/CD・LLM計測の3層設計でハーネスエンジニアリングを体系化。LangChainの実験でハーネスだけでSWE-benchスコアが52.8%→66.5%に向上した事例を紹介 — @yosh1 [Zenn](https://zenn.dev/preferred/articles/harness-engineering-three-pillars-2026)

> TDD agentからbackend開発パイプラインを構築。3コマンドで開発が完結する体制を実現 — @choclucy [Zenn](https://zenn.dev/techtrain_blog/articles/b75e5f9d0e840c)

### AI生成コードのレビュー・品質

#### Tips

> 「AIが書いたコードをレビューするな」——レビューすべきはコードではなく前提。実装前の暗黙の期待を言語化して合意するフローを提案 — @Eiichiro Iriguchi [Zenn](https://zenn.dev/a_1ro/articles/4b0333e9d7b8f9)

> バグを再現させてから調査するRulesを書いたところ、Claude Codeのバグ調査プランの暴走が解消。コード読みからの推測ではなく再現手順ベースのアプローチ — @たっくん [Zenn](https://zenn.dev/appbrew/articles/5ac96305944caa)

> TDD × AIの10のアンチパターンを整理。Claude Codeで陥りやすい罠と対策をまとめた実践ガイド — @SeckeyJP [Qiita](https://qiita.com/SeckeyJP/items/245988ce4fca5b2ba74a)

### Claude Codeのトークン消費・コスト

#### Tips

> Claude Codeにバグ修正を頼んだらファイルを30個読みに行き、トークンの25%が読み込みだけで消えていた事例を分析 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/a3efd1c3b1e54c5a886a)

> トークン破産を防ぐためのコスト最適化とコンテキスト防衛術。ステートレス設計による再送信コストの抑制策を解説 — @heki1224 [Zenn](https://zenn.dev/heki1224/articles/b849cc85a330aa)

### Claude Codeの長期記憶・メモリ

#### Tips

> 弁護士がClaude Code用の長期記憶MCPサーバーを作成。セッション間でのコンテキスト消失問題に対処 — @関 智之 [Zenn](https://zenn.dev/yutoribengoshi/articles/25fa068470369f)

> Claude CodeのMemory機構をアーキテクチャ視点で分析し、Agent Memoryの限界を考察 — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/ebe42a75b80ae5)

### AGENTS.mdによるマルチツール統一管理

#### Tips

> AGENTS.md完全ガイド。Claude Code・Gemini CLI・Cursorを1ファイルで統一管理するフォーマットとして紹介 — @devken [Zenn](https://zenn.dev/devken/articles/agents-md-ai-cli-guide)

### Claude Codeソースコード流出事件（前回から継続）

#### 中立

> 「モデルが丸ごとリーク」という誤解を正す記事。流出したのはクライアント側TypeScriptコードであり、AIモデル本体は含まれていない — @rikiza1989 [Qiita](https://qiita.com/rikiza1989/items/2bf1d00110972ddaf6d5)

> リークされたソースマップからAnthropicの隠しプロジェクト「Conway」（常時稼働AIエージェント）の全貌を分析・実装ガイド化 — @kenji_harada [Qiita](https://qiita.com/kenji_harada/items/76e1ccd0a1cd14ea1a7f)

> .npmignoreの`*.map`1行の記入漏れが51万2千行の流出を引き起こした教訓。安全構造は最初から設計すべき — @M-Tokuni [Zenn](https://zenn.dev/tokuni/articles/06b137f714f964)

### Claude Mythos / Capybaraリーク（前回から継続）

#### 中立

> 週間まとめでClaude Mythosリーク・Computer Use・ソース流出の3大ニュースを整理。Mythosは既存のOpusティアの上に「Capybara」という新ティアとして分類 — @ミケ [Zenn](https://zenn.dev/joemike/articles/weekly-ai-2026-0401)

### Claude Code市場動向

#### 中立

> 2026年3月のデータでCodexがClaude Codeを抜きシェアNo.1に。AI Codingツールの競争激化を示す分析 — @kotauchisunsun [Qiita](https://qiita.com/kotauchisunsun/items/ab78bb338500b4c71103)

### Claude Code活用事例

#### Tips

> Claude Codeにハートビート自動起動で仕様駆動開発。双極症による興味関心リセットに対し、AIに複数ゲームの開発を継続させる試み — @yoshiakist [Zenn](https://zenn.dev/yoshiakist/articles/d26f69195f25ac)

> リモートサーバーのClaude Codeからずんだもんを喋らせる構成。SSHリバーストンネル+VOICEVOXでリモートでもローカルでも同一設定で動作 — @shksk [Zenn](https://zenn.dev/firstloop_tech/articles/e119f67b4f2762)

> Claude Code × Obsidianでインフラ管理。VSCode統合ターミナルとObsidianのCanvas・手順書を組み合わせた運用 — @刑部 [Zenn](https://zenn.dev/sprix_it/articles/2470286c5ca1e9)

> サーバー管理をAIに丸ごと任せる試み。問題発生時にAIに調査→修正→デプロイまで実行させる運用 — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/ai-server-management)

> Claude Codeのアーキテクチャ（519K行）を分析し、「やるな」指示が最も効くパターンを発見。開発品質を上げるプラグインをOSS公開 — @岡田 樹瑠 [Zenn](https://zenn.dev/tokada_ww/articles/15d137ec40fb8c)

> Claude Codeの見落としをCodexでレビューさせ、指摘を蓄積して恒久チェックに変えるOSS「Lysis」を開発 — @sho-ikeda-ai [Qiita](https://qiita.com/sho-ikeda-ai/items/2f3788ecf4f0755cf6e9)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
