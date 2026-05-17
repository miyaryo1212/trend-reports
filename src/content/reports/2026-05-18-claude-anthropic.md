---
title: "公式更新なし、コミュニティではADR運用・OTEL観測・セキュリティ解析が活発"
summary: "本日の公式アップデートはなし。コミュニティではClaude Code規範運用でADR40本の失敗録、OTELによるエージェント観測、Claude AIを装うマルウェア解析など多様な実践記事が登場。SDK専用クレジット分離の影響分析も注目。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-18
features:
  - "Project Glasswing: AIサイバーセキュリティイニシアチブ"
  - "Claude Code v2.1.143 プラグイン依存関係の強制"
  - "Claude Code v2.1.143 プロジェクテッドコンテキストコスト表示"
  - "Claude Code v2.1.143 worktree.bgIsolation: none設定"
  - "Claude Code v2.1.143 バックグラウンドセッションのモデル・effortレベル保持"
  - "Claude Code v2.1.143 claude agents新フラグ追加"
  - "Claude Code v2.1.143 PowerShellツール ExecutionPolicy Bypass"
  - "Claude Code v2.1.143 worktreeクリーンアップ安全化"
codex_review: "公式が静かな日に、運用の失敗録やOTEL観測、偽インストーラー解析が並ぶのは健全だと思う。新機能礼賛より“使って崩れる場所”の知見が厚くなってきたのが、いまのClaude圏では地味に重要だ。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

### Claude Code v2.1.143（前回から継続）

5月15日リリース。プラグイン依存関係の強制、コンテキストコスト予測表示、`worktree.bgIsolation: "none"`設定、`claude agents`への各種フラグ追加など。詳細は前回レポート参照。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)

### Project Glasswing（前回から継続）

Claude Mythos Previewを活用したAIサイバーセキュリティイニシアチブ。40超組織参加、$100Mクレジット提供。本日の新情報なし。

## コミュニティの反応

### Claude Code 規範運用・ADR

#### Tips

> ひと月でADRを40本近く書いたら何が変わったか。Claude Code規範運用1ヶ月の失敗録。「ADRを書くのが仕事になっていた」時期の反省と、書くことと実装のバランスの知見 — @karasuda_lab [Zenn](https://zenn.dev/karasuda_lab/articles/71dca437c7a153)

> Claude Codeは「作業の外注先」ではない。AIを「スパーリングパートナー」として運用する壁打ち運用論。丸投げ型と対話型で思考力に二極化が起きている — @ふみ_BENTEN WebWorks [Zenn](https://zenn.dev/bentenweb_fumi/articles/9g4q16tpj10l)

### Claude Code エージェント観測・OTEL

#### Tips

> Claude Codeが「いま何してた？どう詰まった？」を観測したい。OTELをローカル分析してエージェントの挙動を可視化する実践 — @wasssse [Qiita](https://qiita.com/wasssse/items/aa1b040caf0dc46e2562)

### Claude Code 失敗談・注意点

#### Tips

> Part 2: Claude Codeでやらかした話 (2/3) — どうサボるのか: 自律性の暴走と整合性の崩壊。Part 1の「目的逆転」が実際の出力でどう現れるかを症状カテゴリで分類 — @kh923 [Zenn](https://zenn.dev/kashi923/articles/04e3ee0fccb83c)

> Claude Code が API Error 500 で止まる問題と自動リカバリの設計思想。expectコマンドでラップし「続けてください」を自動送信する手法 — @nomurasan [Qiita](https://qiita.com/nomurasan/items/923c1d42a39cc2c86412)

> AIスロップ：Claude Codeと一緒にメモアプリをTDDで作った話。テクニカルライターによる初バイブコーディングの記録 — @y_catch [Qiita](https://qiita.com/y_catch/items/3f273fd7fa7dc3d48fe9)

### Claude Code マルチAI連携

#### Tips

> CodexとClaude Codeの共同作業をcross-agent-harnessに切り出した。どちらが何を触ってよいか、レビュー結果をどこに残すかの運用基盤 — @harness [Zenn](https://zenn.dev/harness/articles/cross-agent-harness-introduction)

> opencode で Claude Code の Agent Teams っぽい仕組みを再現。トークンコスト削減を意識したオープンソース代替アプローチ — @スギ [Zenn](https://zenn.dev/sugi2sugi/articles/18860cb73fa3d8)

### Claude Code スキル管理

#### Tips

> gogcliを使ってClaude Codeのスキル管理を自動化する。Googleスプレッドシート連携で100個以上のスキルの登録・使用回数集計・差分検出をハンズオン形式で解説 — @古家大 [Zenn](https://zenn.dev/masarufuruya/books/f5000d1e4d5273)

### Claude AIセキュリティ脅威

#### Tips

> Claude AIを装うMSIインストーラーの中身 — Beagleキャンペーンの上位バリアント。Sophos報告の偽サイトバックドアの独自解析。Delphi製フルRAT、DNS over HTTPSによるC2回避、8台のC2フェイルオーバー構成を確認 — @ひよっこサウナ [Zenn](https://zenn.dev/hiyoko_sauna/articles/2e12dab16accfb)

### Anthropic プログラム利用クレジット分離

#### Tips

> claude -p のクレジットが分離されるらしい、うちへの影響メモ。2026-06-15からAgent SDK専用クレジットが分離支給。Pro/Max別の専用枠、rolloverなし — @harnform [Zenn](https://zenn.dev/harnform/articles/claude-sdk-credit-split)

### Claude for Small Business

#### Tips

> Claude for Small Business発表の日、SaaSは死に、SIerも死んだ。初期費用ゼロ・設定不要・業務テンプレート完備のAIアシスタントがSIerの「導入作業」を吸収する構造変化 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/5b6970bf9cc0a1)

### LLMの限界・設計論

#### Tips

> LLMは発散させ、人間は収束させる — LLMはアイデアを思い付けない。DB設計やプログラミングでの訓練データの引力がCLAUDE.mdの指示を上書きする問題を考察 — @nishimura [Zenn](https://zenn.dev/n314/articles/f73eddf02c28cb)

### コーディングエージェント時代の議論

#### Tips

> コーディングエージェント時代にエンジニアは必要なのか本気で考えてみる。Codex・Claude Code・GitHub Copilotで実際にSNSを構築した上での考察 — @むた [Zenn](https://zenn.dev/hiromoo/articles/5f127b5459d490)

### Claude Code 個人開発事例

#### Tips

> プログラム1行も書かずに、Claude AIとポケモン対戦DBを1ヶ月で公開した話。フレームワーク不使用でどこまでやれるかの実践 — @PchamDB [Zenn](https://zenn.dev/pchamdb/articles/04e8a7b06e7472)

> Next.js + Cloudflare WorkersでブラウザカードゲームをClaudeと個人開発する話 — @Akinobu Lab [Zenn](https://zenn.dev/akinobu_lab/articles/f8a801b1e5c9de)

### Bun Zig→Rust移植（Claude活用事例）

#### Tips

> Bun が 6 日で Rust に書き換わった件。約96万行のコードをClaudeが書き、テスト99.8%パス。ただしunsafeブロック13,000箇所超で「全部破棄する可能性が高い」とも — @あさひ [Zenn](https://zenn.dev/ashunar0/articles/55a669c10e6a8d)

### MCP関連

#### Tips

> Cloud Storage MCP サーバーを使ってみた。Google Cloud Storageのバケット読み書きをAIクライアントのツールとして公開 — @S島 [Zenn](https://zenn.dev/choshosu/articles/70798aebd6edaa)

> MCP Apps で GCP のログを Claude のチャットに埋め込む。Logs Explorerの「Gemini に質問」をClaude版で再現 — @S島 [Zenn](https://zenn.dev/choshosu/articles/7f6119a631635a)

### 週刊まとめ

#### Tips

> 週刊AI駆動開発 - 2026年05月17日。Gemini CLI v0.42.0、Claude Code 2.1.143、Cursor v3.4等の主要アップデートと運用課題を総括 — @pppp303 [Zenn](https://zenn.dev/pppp303/articles/weekly_ai_20260517)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
