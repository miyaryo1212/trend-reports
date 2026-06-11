---
title: "Claude Corps発表＋DXC提携＋v2.1.173リリース"
summary: "Anthropicが$150MのAIフェローシッププログラム「Claude Corps」を発表。DXC Technologyとの規制産業向け複数年パートナーシップも締結。Claude Code v2.1.173はFable 5モデル名正規化の修正。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-12
features:
  - "Claude Code v2.1.173"
  - "Claude Corps"
  - "DXC Technology提携"
codex_review: "Claude CorpsはPR映えするが、本当に効くのはDXC提携のほうだと見る。人材供給の物語は面白い一方、収益化と規制産業の実装が着実に進んでいる点が地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.173（6月11日）

マイナーリリース。変更点は2件:
- **Fable 5モデル名の `[1m]` サフィックス正規化** — Fable 5は1Mコンテキストがデフォルトのため、モデル名末尾の `[1m]` サフィックスが自動的に除去されるように修正
- **Windows sandbox警告の修正** — サンドボックスが設定で有効化されている場合に表示されていた「sandbox dependencies missing」の起動時スプリアス警告を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.173)

### Claude Corps

Anthropicが発表した大規模AIフェローシッププログラム。1,000人の若手人材をNPOに派遣し、AI活用を支援する。

- **投資規模**: $150M（約225億円）
- **初期コホート**: 2026年10月開始予定
- **目的**: 非営利セクターへのAI人材供給と実務経験の提供

### DXC Technology提携

DXC Technologyとの複数年パートナーシップを締結。規制産業（保険・レガシーコード近代化・サイバーセキュリティ等）へのClaude導入を推進する。

## コミュニティの反応

### Claude Fable 5（継続）

前日の一般公開を受け、比較検証やコスト分析の記事が引き続き大量に公開。

#### ポジティブ

> Fable 5 vs Opus 4.8を同一プロンプトでWebアプリ作成比較。成果物の完成度で差を検証 — @yukurash [Zenn](https://zenn.dev/yukurash/articles/16c378dbbb4c95)

> Claude Code のFable 5で自作アプリの改善が一瞬で終わった — @もつ [Zenn](https://zenn.dev/motsu131/articles/88c76776b0d9f2)

> Fable 5 vs Opus 4.8コーディングタスク比較。価格はOpusの2倍だが実務での差を検証 — @hat（ムクイル）[Zenn](https://zenn.dev/mukuil_blog/articles/6c76b8199c2fde)

#### ネガティブ

> Fable 5を節約するつもりが3倍消費した。トークン消費がOpus 4.8の2倍、6/23以降はサブスク枠外で従量課金に — @jomatsu [Zenn](https://zenn.dev/nasubikun/articles/fable-delegation-experiment)

> Opus 4.8で出力に court / count が混入してツール呼び出しが壊れる。長時間セッションや日本語多用で発生しやすい — @wharfe [Zenn](https://zenn.dev/wharfe/articles/fa79b46e3fd72d)

#### Tips

> Fable 5をAPI視点で読み解く。Opus 4.8との違い、refusal/fallbackの仕組み、移行の実装ポイント — @だー＠AIDEN [Zenn](https://zenn.dev/aiden_ai/articles/00fd9f3839b548)

> Claude Fable 5 GA — refusalが正常応答になる新API設計と1Mコンテキストの解説 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260611-claude-fable-5-mythos-5-release)

> Bedrock経由のFable 5で400/403エラー。原因はdata retention設定の有効化が必要なこと — @たるたるちきん [Zenn](https://zenn.dev/freeren/articles/20e0b1af3a34e2)

> 6月15日、Claudeのプログラム利用が別枠に。対話的利用中心の個人開発者は大半影響なし、自動呼び出しユーザーは確認を — @Rapls [Zenn](https://zenn.dev/rapls/articles/fcd55f947cc692)

### Code with Claude Tokyo（継続）

#### ポジティブ

> Code with Claude Extended Tokyo参加レポート。Goal と Eval でエージェントを動かすワークショップ体験 — @ttsubasa（GAOGAO）[Zenn](https://zenn.dev/gaogaoasia/articles/65db07864e31b8)

> 「Fable 5は自分以上に信頼している」Claude Code開発者に聞く — Code w/ Claude Tokyo現地参加レポート — @akira0g（SOMPO Digital Lab）[Zenn](https://zenn.dev/sompojapan_dx/articles/811ac0999e297b)

### Claude Code v2.1.172（継続）

#### Tips

> v2.1.172のサブエージェント5階層化と重要バグ修正まとめ — @picnic [Qiita](https://qiita.com/picnic/items/b6293c70e5e6a5453a36)

> ネストされたサブエージェント機能の詳細とOpusを長時間稼働させる5つのコツ — @ty [Zenn](https://zenn.dev/ty2/articles/tweet-bcherny-2064327225504403752)

### Claude Code 活用事例

#### Tips

> Claude Codeのアドバイザーが「プロジェクトの本質」を毎回思い出させてくれる。公式仕様を踏まえたCLAUDE.mdの書き方 — @Ryo Tsukuda（Accenture）[Zenn](https://zenn.dev/acntechjp/articles/83f9d7bb898010)

> Claude Codeと91本のPDFで知識グラフを作って卒論を書いた（そして何が壊れたか）— @keipi [Zenn](https://zenn.dev/keipi/articles/lbd-knowledge-graph-91pdfs)

> Claude CodeでOSS更新を監視し、自社実装と照合してNotionにR&Dチケットを自動起票するAIエージェント — @hiroyuki.matsuda（Nishika）[Zenn](https://zenn.dev/team_nishika/articles/ce4bedfa021726)

> Claude CodeをRAG的に使えるチャットボットWebUI「Open CCUI」を公開 — @バンドウイ茶 [Zenn](https://zenn.dev/bondicha/articles/4941e7750c0b4d)

> Claude CodeとRemotion × Google生成AIモデルで動画を作るスキルを公開 — @danishi（KDDIアイレット）[Zenn](https://zenn.dev/iret/articles/claude-code-video-composer)

> セーフィー入社5ヶ月、Claude Codeを中心とした開発が当たり前になった話 — @m-murao（セーフィー）[Zenn](https://zenn.dev/safie_inc/articles/86b05198a012e3)

> SKILL.mdのdescriptionを書き間違えるとスキルは永遠に呼ばれない。descriptionは「検索クエリ」 — @playpark [Zenn](https://zenn.dev/playpark/articles/skill-md-guide)

> worktreeで「信頼しますか？」ダイアログを無視する方法 — @Aitaro Chaya（UZU）[Zenn](https://zenn.dev/uzu_tech/articles/claude-code-worktree-trust-dialog)

> 同じMCPなのにClaude Codeでは動いてCodexでは動かない理由。トランスポート・認証・実行環境の差異 — @サボさん [Zenn](https://zenn.dev/engineer__117/articles/claude-code-codex-mcp-compatibility)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
