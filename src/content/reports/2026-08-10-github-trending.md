---
title: "自己改善エージェントと無料枠ゲートウェイが急伸"
summary: "Prime IntellectのRLM型自己改善エージェント prime-agent と、290超プロバイダを束ねる無料AIゲートウェイ OmniRoute が今週のGitHub Trendingを牽引。Theo氏のt3codeも実使用報告が相次ぎ、エージェント制御まわりの層が一気に厚くなった。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-08-10

features:
  - "PrimeIntellect-ai/prime-agent"
  - "vitali87/code-graph-rag"
  - "pingdotgg/t3code"
  - "diegosouzapw/OmniRoute"
  - "google-deepmind/weathernext"
  - "msitarzewski/agency-agents"
  - "ZhuLinsen/daily_stock_analysis"
codex_review: "自己改善エージェントと無料枠ゲートウェイが同時に伸びているのは面白いが、熱狂はやや先行気味です。地味に重要なのは、モデル本体より運用レイヤーの差別化が主戦場になりつつある点でしょう。"
codex_importance: 4
---

## 公式アップデート

### PrimeIntellect-ai/prime-agent

Prime Intellectによるオープンソースのコーディング／リサーチエージェント。長時間稼働タスクを前提に設計され、MITライセンス。

- **Recursive Language Model (RLM)**: コンテキストを変数として扱い（prompt-as-a-variable）、サブエージェントを含むツールを永続IPython REPL内の関数呼び出しとして実行する
- **Continual Harness**: 補助プロンプト・メモリ・スキル記述・再利用可能なサブエージェント仕様を永続状態として保持。`/refine` が現在の軌跡をレビューし、根拠付きの小さな更新を適用する（不変のベースシステムプロンプトは書き換えず、スナップショットでロールバック可能）
- **サブエージェント内蔵**: `rlm(...)` が実際の子エージェントを起動し、並列・バックグラウンド処理の結果をプログラム的に返す
- **スキルは実行可能**: スキルはimport可能なPythonパッケージとして扱われ、内蔵のskill creatorが定型ワークフローをプロジェクト／個人スキル化する
- **長時間稼働機能**: デーモン方式でターミナル切断後もセッション継続・再アタッチ可能。`/heartbeat`・`prime-agent schedule`（定期／指定時刻の再入）、`/goal`（永続ゴール）、`/autonomous`（ターン・トークン・時間の予算内で自律継続し、ユーザー定義の品質ゲートを実行）
- **エージェント間直接通信**: 稼働中のエージェント同士がユーザーを経由せずメッセージ交換・相互制御できる
- **注意点（README明記）**: 生成されたPythonとプロジェクトコマンドをユーザー権限で実行する。worker/kernelプロセスはライフサイクル分離のためのもので**セキュリティサンドボックスではない**
- TUIは `pi` (earendil-works/pi) をベースに構築

[ソース](https://github.com/PrimeIntellect-ai/prime-agent)

### vitali87/code-graph-rag

Tree-sitterで多言語コードベースをパースし、Memgraph上に構造の知識グラフを構築。自然言語でクエリ・編集・最適化できるモノレポ向けRAG。PyPIに `cgr` として公開、MIT。

- **Ruby対応**: 新設のpluggable ast-grep層により、YAMLパターンファイル1つで言語を追加。手書きパーサなしで `Module` / `Function` / `Class` ノードとimportエッジを生成
- **構造的検索・置換**: ast-grepによるASTパターンでのマッチと書き換えをエージェントツールとして公開。テキストや正規表現に頼らずコードベース全体を構造で変換できる
- **データフロー追跡**: `FLOWS_TO` taintエッジが代入・関数呼び出し・I/Oシンクを通じて値を追跡。C#・Java・C・Goをカバー
- 完全対応言語はPython, TypeScript, TSX, JavaScript, Rust, Go, Java, C, C++, C#, PHP, Lua, Dart。Scalaは開発中
- MCPサーバとして動作し、Claude Code等のMCPクライアントから直接クエリ・編集が可能

[ソース](https://github.com/vitali87/code-graph-rag)

### pingdotgg/t3code

「エージェントハーネスのコントロールサーフェス」を掲げるツール。ローカルマシン上のエージェントをモバイルアプリ（iOS/Android）、Webアプリ、Electronデスクトップアプリから操作する。

- Claude Code、Codex、Cursor、Grok Build、OpenCode のサブスクリプションに対応。マシン上でセットアップ済みならt3codeから制御できる
- `npx t3@latest` でバックエンドとローカルWebアプリを起動（Node.js 22.16+ / 23.11+ / 24.10+）。デスクトップ版は winget / Homebrew / AUR から導入可能
- 「何も売っていない」と明言し、方向性が誤ればフォークできるだけの一式を提供する方針を掲げる
- プロジェクトは非常に初期段階で、コントリビューションは原則受け付けていない（小さな修正のみ検討）

[ソース](https://github.com/pingdotgg/t3code)

### diegosouzapw/OmniRoute

単一エンドポイントで290超のプロバイダ・500超のモデルにアクセスするMITライセンスのAIゲートウェイ。Claude Code、Codex、Cursor、OpenCode、Cline、Copilotから利用できる。

- **無料枠の集約**: 43プロバイダプール／516モデルの「文書化された」無料枠を集計し、月あたり約1.53Bトークン（初月はサインアップクレジット込みで最大約2.15B）としてダッシュボード `/dashboard/free-tiers` に表示
- **集計方法の明示**: 共有プールは1回だけカウントする方式を採用し、「全レート制限を24時間換算すれば約10Bと読めるが公開しない」と明記。数値は2週間ごとに再監査され、増減の両方向に動く
- **クォータ対応の自動フォールバック**: 19のルーティング戦略を備え、無料枠が尽きたら自動で切り替える
- **トークン圧縮**: RTK + Caveman のスタック圧縮で15〜95%（平均約89%）を削減
- MCP / A2A対応、デスクトップ・PWA提供。npm、Docker Hub、Electronバイナリで配布
- **ToS上の注意**: 15プロバイダをToSフラグ付きとしてリポジトリ側が明示している

[ソース](https://github.com/diegosouzapw/OmniRoute)

### google-deepmind/weathernext

Google DeepMind / Google Researchによる全球・中期の大気および熱帯低気圧予測モデル WeatherNext 2 (WN2) のコードと学習済み重みを公開。旧世代のGraphCast・GenCastのコードも同居する。

- **公開モデル**: WeatherNext2_<2025（運用モデル、0.25°≒30km、ECMWF HRESでファインチューニング、2024年までのデータで学習）、WeatherNextCyclones_<2025/<2024/<2023（論文再現用）、WeatherNextCyclones_Mini（1°、単一TPU/GPUや低メモリ環境向け）
- WN2とWN Cyclonesの差は100m風の予測有無のみで、サイクロン予測は同一アルゴリズム。重みは独立した学習実行によるもの
- Colabノートブックで重みの自動ロード、HRES初期値の読み込み、自己回帰ロールアウト、サイクロントラッカー実行、勾配ステップまで一通り試せる。Mini版は無料の `v5e-1` ランタイムで動作、非Mini版はTPU v5pまたはH100が必要
- 関連論文: Nature「Operational tropical cyclone forecasting with AI」、arXiv:2506.10772（FGN/WN2技術レポート）
- 研究コードとしての提供でAPI安定性の保証はなく、特定リリースへのピン留めを推奨。公式サポート製品ではなく、気象機関の公式警報を置き換えるものではないと明記

[ソース](https://github.com/google-deepmind/weathernext)

### msitarzewski/agency-agents

専門特化させたAIエージェント人格のコレクション。フロントエンド開発者からSRE、Solidityエンジニア、テクニカルライターまで、各エージェントが固有の人格・ワークフロー・成果物定義を持つ。MIT。

- **ネイティブアプリを新提供**: macOS / Linux / Windows対応の「Agency Agents」アプリが登場。ロスター全体を閲覧し、Claude Code、Cursor、Codex、Gemini、Osaurusなどへワンクリックでインストール、自動更新にも対応（`brew install --cask msitarzewski/agency-agents/agency-agents`）
- スクリプト導入も継続。`./scripts/convert.sh` で各ツール向け統合ファイルを生成し、`./scripts/install.sh` が導入済みツールを自動検出。GitHub Copilot、Antigravity、Gemini CLI、OpenCode、OpenClaw、Cursor、Aider、Windsurf、Kimi Code、Codex、Osaurus、Hermes、Mistral Vibeに対応
- `--division` / `--agent` で必要なチーム・エージェントのみ選択導入できる。OpenCodeはランタイムが約119エージェントしか登録せず残りを無言で捨てる上流バグがあるため、インストーラが上限超過を警告する

[ソース](https://github.com/msitarzewski/agency-agents)

### ZhuLinsen/daily_stock_analysis

LLM駆動の多市場株式分析システム。A株・香港株・米国株・日本株・韓国株・台湾株とETFをカバーし、毎日自動で分析して「決策ダッシュボード」を各種チャットに配信する。MIT、Python 3.10+。

- 出力は結論・スコア・トレンド・売買ポイント・リスク警報・カタリスト・操作チェックリストで構成
- Web／デスクトップワークスペース、15種の内蔵戦略（均線・纏論・波動・トレンド・イベント・成長など）によるAgent戦略問答、画像・CSV/Excel・クリップボードからの銘柄インポートに対応
- 通知先は企業微信、飛書、Telegram、Discord、Slack、メール
- GitHub Actions・Docker・ローカルcron・FastAPIサービスで運用でき、AkShare / Baostock / YFinance など無料データ源を内蔵してゼロ設定・ゼロコストで動作。ただし無料源は上流のレート制限や仕様変更に左右されるため、定期実行にはTickFlow / Tushare / Longbridge等のtoken型データ源を推奨

[ソース](https://github.com/ZhuLinsen/daily_stock_analysis)

## コミュニティの反応

本日のトレンドはエージェント制御・ゲートウェイ系に実使用報告が集中した。一方 code-graph-rag、weathernext、daily_stock_analysis はトレンド通知や宣伝系の投稿が大半で、実使用に基づく反応は確認できなかった。

### PrimeIntellect-ai/prime-agent

#### ポジティブ

> 6時間回してワンショットで100%機能するプロダクトを出せた。フロントエンドは並程度だが、オーケストレーションは極めて自律的だった。 — @Clem_Descours [出典](https://x.com/Clem_Descours/status/2086574652961193997)

> prime-agentもいい感じに使えている。 — @amphetamarina [出典](https://x.com/amphetamarina/status/2086586241701564650)

> DeepSeek V4 Flashをprime agentとして使うのは非常に良く、性能はGPT-5.6に近い。大半のエージェント作業に超深層思考は不要で、適切なツール・クリーンなフロー・堅実な意思決定があれば十分。 — @Joelc_eth [出典](https://x.com/Joelc_eth/status/2086578113039712691)

> オートリサーチ用途でprime agentは次元が違う。大きな改善が続いている。 — @gajesh [出典](https://x.com/gajesh/status/2086577414747111831)

#### ネガティブ

> 初回はエージェントループが暴走して1Mトークン近くを消費した。目標定義が極めて重要。 — @Clem_Descours [出典](https://x.com/Clem_Descours/status/2086574652961193997)

### pingdotgg/t3code

#### ポジティブ

> T3 Codeは非常に良い状態で、今日は一度もCodexに触っていない。唯一動かないのは外出先でエージェントが撮ったスクリーンショットを見る機能（Codex経由の同じフローは動く）。 — @moonsteroid [出典](https://x.com/moonsteroid/status/2086554504636387824)

> Android版を試した第一印象はとても良い。デザインがクリーンでミニマル。サブエージェントの表示は欲しい（普段はorca_buildを愛用中）。 — @TwanLuttik [出典](https://x.com/TwanLuttik/status/2086572036147867895)

> T3 Codeの更新がGitHubフィードを埋め尽くしている。 — @leodev [出典](https://x.com/leodev/status/2086527438427914640)

#### ネガティブ

> Windowsでnightlyのインストールが毎回数分かかる。インストーラが14,687ファイルを書き込んでいる。バックエンドのコールドスタートを9.6秒→3.7秒に短縮するPRを出した。 — @btsouth [出典](https://x.com/btsouth/status/2086559971815088338)

> 電波の悪いモバイル回線で1週間ロードトリップ中に使ったが、モバイルアプリがサイドバーに読み込む前にスレッド全体を再ダウンロードしていた。そこが直れば良いものになると思う。 — @mteamisloading [出典](https://x.com/mteamisloading/status/2085191272159990257)

### diegosouzapw/OmniRoute

#### ポジティブ

> Claude Codeの制限リセット待ちを回避できる。290プロバイダへの自動切替と15〜95%の圧縮を実現するOSSゲートウェイ。 — @alex_verem [出典](https://x.com/alex_verem/status/2085374296910917844)

#### 実際の使用例

> 9Routerの代わりにOmniRouteを使い始めた。290+プロバイダ・90+無料枠の自動フォールバックでゼロドル運用ができている。 — @ToPassTheTimee [出典](https://x.com/ToPassTheTimee/status/2084699835932746149)

> 自作エディタ「ada」にOmniRouteをネイティブ統合。ローカルゲートウェイ経由で340+モデル・237+プロバイダをゼロコンフィグで利用可能にした。 — @adi10040 [出典](https://x.com/adi10040/status/2084694171651355130)

#### Tips

> OmniRouteにOllamaを追加しようとして名前の重複でエラーになった。数時間かけて原因を特定し修正できた。 — @Done_With_Love_ [出典](https://x.com/Done_With_Love_/status/2085695676692996314)

#### ネガティブ

> 無料枠の自動フォールバックは便利だが、サブスク型ツールをゲートウェイ経由で使うのは一部プロバイダのToS上グレー。リポジトリ側が15社を明記している点は評価できる。 — @alex_verem [出典](https://x.com/alex_verem/status/2085374296910917844)

### msitarzewski/agency-agents

#### ポジティブ

> GitHub Trendingで急上昇（14万超スター）。専門特化AIエージェントをClaude Code/Cursor/Codexなどに一括導入できる点と、140以上の役割が即戦力になる点が評価されている。 — @github_trendjp [出典](https://x.com/github_trendjp/status/2086427523798401249)

> 200以上の「職業」エージェントをまとめたプロジェクトとしてバズり、スター数の伸びがClash Verge Revを上回る勢い。 — @zerothknight1 [出典](https://x.com/zerothknight1/status/2086464069431923020)

#### 実際の使用例

> CEO・弁護士・PMなど複数の役割を実際に試したが、商業系エージェントのフレームワーク品質が高い。複数エージェントを同時起動してチーム議論もできる。 — @XAMTO_AI [出典](https://x.com/XAMTO_AI/status/2085944591698493831)

#### Tips

> 実務タスクで1役割ずつ試し、出力がどれだけ即戦力かを確認していくのがおすすめ。 — @Mileson07 [出典](https://x.com/Mileson07/status/2086467479417893088)

> 大学生向けに「仮想会社」として全役割を使い、専門AIを即戦力化する使い方。 — @Gas1688 [出典](https://x.com/Gas1688/status/2086327615523344397)

### vitali87/code-graph-rag

該当なし（直近1週間で、実使用に基づく感想・評価は確認されず）。

### google-deepmind/weathernext

該当なし（直近1週間で、実使用に基づく感想・評価は確認されず）。

### ZhuLinsen/daily_stock_analysis

該当なし（作者本人の投稿と紹介系アカウントの宣伝が中心で、実使用に基づく感想・評価は確認されず）。

## ソース

- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)
- [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code)
- [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)
- [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext)
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
