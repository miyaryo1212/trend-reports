---
title: "Codex 0.156.0安定版、GPT-6 Sol/Luna"
summary: "アルファが続いていたCodex CLI 0.156系がついに安定版に到達し、/tui フルスクリーンUI、音声会話のデフォルト有効化、/usage ダッシュボード、/daemon とworktree既定有効化が一挙に入った。同日OpenAIはGPT-6の低コスト版Sol/Lunaとプロンプトキャッシュ改善、第三者評価の原則も公開している。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-23

features:
  - "Codex CLI 0.156.0 正式リリース"
  - "Codex CLI /tui フルスクリーンUI"
  - "Codex CLI 音声会話のデフォルト有効化"
  - "Codex CLI /usage アナリティクスダッシュボード"
  - "Codex CLI /daemon とworktreeデフォルト有効化"
  - "Codex CLI 0.157.0-alpha.3〜alpha.10"
  - "GPT-6 Sol / GPT-6 Luna"
  - "GPT-6 プロンプトキャッシュ改善"
  - "第三者評価に関する優先事項と原則"
---

## 公式アップデート

### Codex CLI 0.156.0 正式リリース

アルファ段階が続いていた 0.156 系が 9/22 に安定版へ到達した。新機能・バグ修正・ドキュメント・依存更新を含む大型リリースで、以下の各項目を内包する。バグ修正側では、ターン失敗・中断・サブエージェント完了時にストリーミング済みの回答とプランを保持する修正、tmux / SSH 環境でのクリップボード転送修正、セッション再開時の Plan モード復元、システムプロキシ経由のログイン復旧と OAuth ディスカバリ 503 時の MCP 認証情報更新が入った。サンドボックス面では Windows の受信接続、Linux/macOS の特権ソケット、macOS の読み取り専用ファイルハンドル経由の書き込みという 3 つの分離ギャップを塞いでいる。Linux musl ビルドの同梱 TLS は OpenSSL 3.6.4 に更新された。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.156.0)

### Codex CLI `/tui` フルスクリーンUI

`/tui` で次回起動からフルスクリーン UI を選択できるようになった。トランスクリプト検索、マウス選択、右クリックコピーに対応する。

[ソース](https://github.com/openai/codex/pull/46732)

### Codex CLI 音声会話のデフォルト有効化

音声会話が既定で有効になった。F8 トグルで切り替え、`/voice settings` で使用する音声を選択できる。Linux / Windows 向けには音声ランタイムが同梱される。あわせて、再生の一時停止中や音声が集中して届いた際に発話が欠落する不具合が修正された。

[ソース](https://github.com/openai/codex/pull/44921)

### Codex CLI `/usage` アナリティクスダッシュボード

`/usage` でアカウントの利用量、トークン総数、プラグインおよびスキルの利用状況を確認できるようになった。

[ソース](https://github.com/openai/codex/pull/45764)

### Codex CLI `/daemon` とworktreeデフォルト有効化

ローカルのバックグラウンドサーバを `/daemon` で更新できるようになり、`--no-daemon` で迂回もできる。エージェントコマンドセンターではタスクをステータスで絞り込め、worktree セッションの作成に対応した。worktree サポートは既定で有効になっている。

[ソース](https://github.com/openai/codex/pull/45854)

### Codex CLI 0.157.0-alpha.3〜alpha.10

9/22 の 1 日で 0.157 系のアルファが alpha.3 から alpha.10 まで 8 本連続で公開された。いずれもリリースノートは「Release 0.157.0-alpha.N」の自動生成表記のみで、変更内容は公開されていない。alpha.10 のみ個人アカウント (imac-oai) による公開で、それ以外は github-actions[bot] による。

[ソース](https://github.com/openai/codex/releases)

### GPT-6 Sol / GPT-6 Luna

GPT-6 ファミリーの低コスト版として Sol と Luna の 2 モデルが公開された。API 価格は GPT-5.6 比で 50% 削減され、Sol が入力 $2 / 出力 $10、Luna が入力 $0.10 / 出力 $0.50 (いずれも 100 万トークンあたり)。

[ソース](https://openai.com/news/)

### GPT-6 プロンプトキャッシュ改善

既定でのキャッシュヒット率が向上し、共有プレフィックスの有効期間が 30 分になった。加えてキャッシュダッシュボード、診断ツール、明示的なキャッシュブレークポイントの指定が提供される。

[ソース](https://openai.com/news/)

### 第三者評価に関する優先事項と原則

学習・評価・デプロイの全段階で外部評価者に深いアクセスを与える方針が公開された。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex CLI 0.156.0 正式リリース

#### ポジティブ

> Codex CLI で作業していたセッションが ChatGPT のデスクトップアプリにもそのまま表示され、CLI で開発して必要なら GUI に引き継ぐ行き来が自然にできる — @suna_gaku [出典](https://x.com/suna_gaku/status/2101252616038822005)

> Codex CLI でついに入力バーを失わずに上へスクロールできるようになった — @MattHProgrammer [出典](https://x.com/MattHProgrammer/status/2102412817840431336)

#### ネガティブ

> CLI 自体が頻繁に不安定で止まってしまうので、今のところ使う価値がない — @DoctorGester [出典](https://x.com/DoctorGester/status/2100286074496893151)

> ChatGPT Codex に回帰バグや数分でスタックする問題があり、Codex CLI を推奨せざるを得ない — @codeglitch [出典](https://x.com/codeglitch/status/2101250663539704221)

#### Tips

> Codex / ChatGPT デスクトップ版が起動しない場合、まず Codex CLI を入れて CLI に修復を任せるとよい — @realjonshon [出典](https://x.com/realjonshon/status/2102334533337305341)

> Claude CLI / Codex CLI に `setting.sh` を書かせ、動いたサービスを zip + scp でサーバーへ送るワークフローが快適 — @bonjinra [出典](https://x.com/bonjinra/status/2101575883513618814)

関連して Zenn では、Codex への指示を「実行仕様」として設計するという観点の記事が公開されている。

- [Codexへの指示を「実行仕様」として設計する――レベル0から10まで (Zenn)](https://zenn.dev/git_dungeon/articles/codex-instructions-as-execution-spec)

### Codex CLI `/tui` フルスクリーンUI

該当なし。Codex CLI / TUI 関連の投稿は changelog 共有が中心で、個人ユーザーの実体験投稿は確認できなかった。

### Codex CLI 音声会話のデフォルト有効化

該当なし。0.156.0 リリース関連の投稿はあったが、いずれも changelog 系・リリース通知系アカウントで、デフォルト有効化そのものへの個人の実体験投稿は確認できなかった。

### Codex CLI `/usage` アナリティクスダッシュボード

該当なし。

### Codex CLI `/daemon` とworktreeデフォルト有効化

該当なし。更新内容に触れた投稿はリリースノート風のものが中心だった。

### Codex CLI 0.157.0-alpha.3〜alpha.10

#### ポジティブ

> 最新 α 版 (0.157.0-alpha.8) が公開され、詳細なリリースノートがなくても先行して試せるのが良い — @reposapo [出典](https://x.com/reposapo/status/2102503342828401045)

> 0.157.0-alpha.4 に更新され、アルファ版のアップデートをすぐ確認できる — @reposapo [出典](https://x.com/reposapo/status/2102266814109757790)

#### ネガティブ

該当なし。

#### Tips

該当なし。`npm install -g @openai/codex@alpha` での追従が唯一の具体的な言及だった。

### GPT-6 Sol / GPT-6 Luna

X 上では該当なし。発表直後のため実利用報告がまだ出ておらず、公式・企業・分析系の投稿のみだった。日本語圏では速報解説記事が出ている。

- [GPT-6 Sol / Luna とは？OpenAI公式発表を3分で速報解説 (Qiita)](https://qiita.com/kinamocchi_tech/items/d370fdd1dfa5007013c2)

### GPT-6 プロンプトキャッシュ改善

#### ポジティブ

> Sol / Luna では会話途中で reasoning effort を変えても prompt cache が壊れなくなり、prefix 終了位置の明示指定や経過時間ダッシュボードも使える — @iykshani [出典](https://x.com/iykshani/status/2102472256521912490)

> GPT-6 Astra でも reasoning effort を会話途中で変更して prompt cache が無効化されず、コストと速度の恩恵をそのまま受けられる — @daniel_mac8 [出典](https://x.com/daniel_mac8/status/2102390459691577578)

> フォローアッププロンプトの context cache hit rate が 73% から 92〜94% に上がり、継続チャットが大幅に安く速くなった — @peytonspencer [出典](https://x.com/peytonspencer/status/2100884256935248222)

#### ネガティブ

> `prompt_cache_key` を内部 SDK に組み込むメンテナンスだけで時間が溶けるのが面倒 — @stranglehello [出典](https://x.com/stranglehello/status/2101511824948822387)

#### Tips

> AgentControl で Codex セッションを最終ターンの 20 分後に自動コンパクト化し、prompt cache の TTL 30 分に合わせてトークンを節約する — @hboon [出典](https://x.com/hboon/status/2102290592751403420)

- [GPT-6のプロンプトキャッシュ改善とは？公式発表を3分で速報解説 (Qiita)](https://qiita.com/kinamocchi_tech/items/729865b3b36b13352bda)

### 第三者評価に関する優先事項と原則

#### ポジティブ

> 外部評価者がラボの前提を覆し盲点を突ける独立したアクセスが重要で、OpenAI のコミットメントは安全評価の意味を高める — @unit0r [出典](https://x.com/unit0r/status/2102448954885460141)

> 独立したアクセスがなければ安全評価は意味がない。外部評価者が証拠を検査し、会社に左右されない結論を出せる点が良い — @09x88hq [出典](https://x.com/09x88hq/status/2102452371788104150)

> 外部評価者には本物のアクセス・独立性・公開権限が必要で、形だけの監査では不十分 — @praveenjatta [出典](https://x.com/praveenjatta/status/2101356270477557999)

#### ネガティブ

> 第三者アクセスは理想だが、評価対象のシステムに対してソーシャルエンジニアリングで悪用されるリスクがある — @ConnectTecha [出典](https://x.com/ConnectTecha/status/2102453357214654861)

#### Tips

該当なし。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [rust-v0.156.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.156.0)
- [OpenAI News](https://openai.com/news/)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
