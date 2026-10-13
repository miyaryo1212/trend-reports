---
title: "蒸留攻撃防御の3層化とGit代替「Scion」公開"
summary: "Anthropicが10月12日に蒸留攻撃への3層防御を、10月13日に社内Git代替「Scion」とレビュー基盤「Antique」の設計記事を公開しました。Claude Codeの新リリースはありません。両トピックへのコミュニティの反応はまだ見られません。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-14

features:
  - "[Anthropic Research/Policy] 蒸留攻撃に対する防御強化「Strengthening our defenses against distillation attacks」"
  - "[Anthropic Engineering] 社内バージョン管理システム「Scion」とコードレビュー基盤「Antique」の公開記事「Redesigning source control」"
codex_review: "蒸留対策はモデル競争が「賢さ」だけでなく、学習データの防衛にも移ったことを示す一方、効果や誤検知率は当面、提供側の説明として読むべきだろう。ScionはAI開発の速度が既存の開発基盤まで揺さぶる実例として興味深いが、社内専用なら業界標準を変える話とはまだ距離がある。"
codex_importance: 3
---

## 公式アップデート

### [Anthropic Research/Policy] 蒸留攻撃に対する防御強化「Strengthening our defenses against distillation attacks」

Anthropicは2026年10月12日に、Claudeの出力から推論データを抽出して他モデルを訓練する「蒸留攻撃」への防御強化を公表しました。

- 防御は3層構成。推論トランスクリプトの移動制御、抽出行為を検知する分類器、利用制限とアカウントBANを組み合わせる。
- Claudeからの推論データ抽出量を10分の1から100分の1以下に削減したとしている。
- 検知分類器の誤検知率は0.1%未満と説明している。

[ソース](https://www.anthropic.com/research)

### [Anthropic Engineering] 社内バージョン管理システム「Scion」とコードレビュー基盤「Antique」の公開記事「Redesigning source control」

Anthropicは2026年10月13日に、社内で構築したGit代替のバージョン管理システム「Scion」とコードレビュー基盤「Antique」について解説するエンジニアリング記事を公開しました。

- AIによるコード生成の普及で、社内のマージ数が1日2,500件から30,000件超に急増し、Gitの運用が限界に達したことが開発の動機。
- 7人のチームが5か月でGit代替システムを構築した。
- Git取り込みパイプラインの最適化にはClaude Mythos Previewを使い、メモリ使用量を20分の1、速度を4倍に改善した。

[ソース](https://www.anthropic.com/engineering)

### Claude Code

新しいバージョンは公開されていません。最新版は前回までに取り上げた v2.1.296（2026年10月9日公開）のままです。

## コミュニティの反応

### [Anthropic Research/Policy] 蒸留攻撃に対する防御強化「Strengthening our defenses against distillation attacks」

#### X/Twitter

該当なし（Grok x_search で取得した投稿は発表の事実言及や解説にとどまり、利用体験や評価を語る個人ユーザーの投稿はありませんでした）

#### ポジティブ / ネガティブ / Tips

該当なし（Zenn・Qiitaに本トピックを扱う記事はまだ見られません）

### [Anthropic Engineering] 社内バージョン管理システム「Scion」とコードレビュー基盤「Antique」の公開記事「Redesigning source control」

#### X/Twitter

該当なし（Grok x_search で関連する投稿は見つかりませんでした）

#### ポジティブ / ネガティブ / Tips

該当なし（Zenn・Qiitaに本トピックを扱う記事はまだ見られません）

## ソース

- [Anthropic Research](https://www.anthropic.com/research)
- [Anthropic Engineering](https://www.anthropic.com/engineering)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
