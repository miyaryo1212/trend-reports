---
title: "科学研究スキル集とコード知識グラフが急伸"
summary: "AIエージェント向け科学研究スキル135種のK-Dense-AI/scientific-agent-skillsが全言語・Python両部門でトレンド入り。Claude Code向けコードナレッジグラフcodegraphもTypeScript部門で急成長し、エージェントの専門特化と効率化が同時進行している。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-05-18
features:
  - "K-Dense-AI/scientific-agent-skills: AIエージェント向け科学研究スキル135種のコレクション、Claude Code/Cursor/Codex対応"
  - "colbymchenry/codegraph: Claude Code向けコードナレッジグラフ、ツールコール94%削減・探索77%高速化、完全ローカル動作"
codex_review: "skills集の伸びは、AIエージェントが“賢い汎用助手”から職能別ツール群へ移る転換点としてかなり面白い。一方でcodegraphのような地味な基盤整備こそ、実務導入の歩留まりを本当に押し上げる本命だと思う。"
codex_importance: 4
---

## 公式アップデート

### K-Dense-AI/scientific-agent-skills

AIエージェント向けの科学研究スキル135種を収録したオープンソースコレクション。生物情報学、創薬、プロテオミクス、臨床研究、機械学習、材料科学、地理空間分析、実験室自動化など17分野をカバーする。オープンな Agent Skills 標準に準拠し、Claude Code、Cursor、Codex、Gemini CLIなど複数エージェントで利用可能。

主な特徴:
- 78の公開データベースへの統一アクセス（PubChem、ChEMBL、UniProt、ClinVar、COSMIC等）
- 70以上のPythonパッケージスキル（RDKit、Scanpy、PyTorch Lightning、scikit-learn等）
- `npx skills add K-Dense-AI/scientific-agent-skills` または `gh skill install` でワンコマンド導入
- K-Dense BYOKとして無料デスクトップ版AI co-scientistも提供（40以上のモデル対応）

MIT License。GitHub Trending全言語・Python両部門にランクイン。

[ソース](https://github.com/K-Dense-AI/scientific-agent-skills)

### colbymchenry/codegraph

Claude Code向けの事前インデックス型コードナレッジグラフ。Tree-sitterでソースコードをASTに解析し、シンボル関係・呼び出しグラフをSQLiteに格納。MCPサーバーとしてClaude Codeに統合し、Exploreエージェントのファイル探索をグラフクエリに置き換える。

ベンチマーク結果（6つの実コードベースで検証）:
- VS Code（4,002ファイル）: ツールコール94%削減、82%高速化
- Swift Compiler（25,874ファイル、272,898ノード）: 84%削減、73%高速化
- 平均: 92%ツールコール削減、71%高速化

19言語対応（TypeScript、Python、Go、Rust、Java、C#、Swift等）。13フレームワークのルーティング認識（Django、FastAPI、Express、Laravel、Rails、Spring等）。ネイティブOSファイルイベントによる自動同期。100%ローカル動作（外部API不要）。MIT License。GitHub Trending TypeScript部門にランクイン。

[ソース](https://github.com/colbymchenry/codegraph)

## コミュニティの反応

### K-Dense-AI/scientific-agent-skills

#### ポジティブ

> 昨年10月オープンソース化から7ヶ月で22,778 stars。135種の即戦力Agent Skillで科研・工学・金融・執筆をカバー、Claude Code/Cursor/OpenAI Agents SDKでそのまま使える — @rwayne [出典](https://x.com/rwayne/status/2055978135007773172)

> 科学・研究特化のスキル集として「研究ワークフロー」「分析・執筆・技術調査」に強く、汎用AIから実務AIへの移行を象徴する存在 — @makodama [出典](https://x.com/makodama/status/2055853815845581107)

> 同日3つのskillsリポジトリが同時爆発（tech-leads-club +923★、K-Dense-AI +764★、anthropics/skills +522★）。Skillsがagentの「npm」化しつつある生態系競争の象徴 — @JamesAI [出典](https://x.com/JamesAI/status/2056142047204237616)

#### Tips

> K-Dense-AI/scientific-agent-skillsを使えば個人開発者でも即研究支援エージェントを構築可能。論文検索・データ分析・仮説生成まで数クリックで完結するLLMエージェントが標準化しつつある — @ShadowPawsDev [出典](https://x.com/ShadowPawsDev/status/2055604366300897563)

### colbymchenry/codegraph

#### ポジティブ

> Claude Code向けにコードベースを事前インデックス化するローカル知識グラフツール。ツールコール94%削減・探索77%高速化、19言語対応・100%ローカル（SQLite/MCPサーバー）を実現 — @AlphaSignalAI [出典](https://x.com/AlphaSignalAI/status/2054894989620949427)

> コード探索時のgrep/glob繰り返しを解消し、シンボル関係・呼び出しチェーンをグラフクエリで一発取得。92-96%ツールコール削減の実測値をスレッドで分析 — @VanPhap22795 [出典](https://x.com/VanPhap22795/status/2056005178382516441)

#### Tips

> Claude Codeの探索効率化を目的にスター。ローカル専用コードナレッジグラフとして「AIのコード理解を深めて作業高速化したい」と実践検討 — @yug1224 [出典](https://x.com/yug1224/status/2054947824735801633)

## ソース

- [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
- [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
