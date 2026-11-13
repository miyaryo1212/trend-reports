---
title: "Claude CodeにCode Mode、権限まわりも強化"
summary: "Claude Code v2.1.323で、ClaudeがJavaScriptを書いてツールを呼ぶ実験的なCode Modeが入りました。v2.1.325では、サンドボックス内のBashも既定で権限確認を通るようになり、セキュリティ修正も多数入っています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-14

features:
  - "Code Mode(実験的機能)"
  - "サンドボックス内Bashの権限フロー変更"
  - "スケジュールタスク・/loopでのスキル実行確認"
  - "プラグインの engines[\"claude-code\"] 対応"
  - "利用クレジット不足時のオプションメニュー"
  - "Bash権限とサンドボックスのセキュリティ修正"
  - "VS Code拡張のプロンプト候補とAPIキー不要のConsoleサインイン"
  - "Artifactツールの.docx対応"
  - "Claude for Teachersの無料提供期間延長"
codex_review: "Code Modeは、複数ツールをまとめて扱うエージェント設計の流れに沿った面白い実験だが、まだ評価はこれから。むしろ権限チェックの穴が複数見つかり、既定動作まで引き締めた点に、開発エージェントの安全性が機能追加と同じ速度では成熟しにくい現実が表れている。"
codex_importance: 3
---

## 公式アップデート

### Code Mode(実験的機能) — v2.1.323

- オプトイン式の実験的なモードが追加された。Claude がツールを直接呼ぶのではなく、JavaScript を書いてツールを呼び出す
- 有効にする方法と、組織単位で無効にする方法はドキュメント(https://code.claude.com/docs/en/code-mode)にまとまっている
- v2.1.325 では、Code Mode のバグがいくつか修正された
  - スクリプトが `EnterWorktree` で入ったワークツリーを無視していた
  - 権限ダイアログやプラン承認で「Yes」と一緒に入力した文字が Claude に届いていなかった
  - Code Mode のスクリプト実行中に終わったセッションを再開すると、Claude が指示を待たずに作業を始めていた

[ソース(v2.1.323)](https://github.com/anthropics/claude-code/releases/tag/v2.1.323) / [ソース(v2.1.325)](https://github.com/anthropics/claude-code/releases/tag/v2.1.325)

### サンドボックス内Bashの権限フロー変更 — v2.1.325

- サンドボックス内で動く Bash コマンドも、既定で通常の権限確認を通るようになった。これまでどおり確認なしで動かすには `sandbox.autoAllowBashIfSandboxed: true` を設定する
- 管理設定(managed settings)でサンドボックスを有効にしている組織の場合、確認なしの動作を続けるには、最も優先度の高い管理設定ソースに同じ設定を書く必要がある
- サンドボックスは、追加ディレクトリ内の `.claude` の設定・スキル・エージェント・コマンド・フックへの書き込みも拒否するようになった。起動フォルダと同じ扱いになる
- 読み取り専用の git コマンドでも、プロジェクト外や信頼していないリポジトリでは実行前に確認を求めるようになった。確認なしで実行させたいリポジトリは `--add-dir` で指定する

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.325)

### スケジュールタスク・/loopでのスキル実行確認 — v2.1.325

- スケジュールタスクと `/loop` で、`allowed-tools` やフックを宣言したスキルを実行する前に確認を求めるようになった
- 無人で実行させるには、`permissions.allow` に `Skill(name)` を追加する
- 関連する変更として、Desktop・IDE・SDK ホストの「Always allow」も変わった。保存したルールで同じコマンドが今後も許可される場合に限り、ルール単体の保存が選択肢に出る。そのため、これまでそのルールに頼っていたスケジュールタスクが、確認待ちで止まる場合がある

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.325)

### プラグインの `engines["claude-code"]` 対応 — v2.1.323

- `plugin.json` に `engines["claude-code"]` を書いて、対応する Claude Code のバージョン範囲を宣言できるようになった。範囲外のプラグインはインストール・更新・読み込みのどれも行われない
- インストールや更新のときは、範囲に合う中で最新のバージョンが選ばれる
- `claude plugin validate` が、プラグインの TypeScript フックモジュールを型チェックするようになった。問題は警告として出て、`--strict` を付けると失敗扱いになる

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)

### 利用クレジット不足時のオプションメニュー — v2.1.323

- 利用クレジットが必要なモデルで、クレジットが無効になっているか使い切っている場合に、メニューが出るようになった。選べるのは「停止」「利用クレジットに切り替え」「アップグレード」の3つ

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)

### Bash権限とサンドボックスのセキュリティ修正 — v2.1.323 / v2.1.325

v2.1.325 の主な修正:

- zstd 圧縮されたレスポンスのデコードに関するセキュリティ問題
- 一部の複合コマンドが確認なしで実行されていた権限チェックの穴。今は確認が出る
- Bash の許可ルールが、ルールで指定したものとは別のプログラムを実行できてしまうケース
- サンドボックスが、ワークツリーの設定・フックや、リンクされたワークツリーが共有する git フォルダを十分に保護していなかったケース
- `cd` した後に、相対パスで書いた deny/ask ルール(例: `Read(./.env)`)がプロジェクトに効かなくなっていた問題

v2.1.323 の主な修正:

- 一部の `lsof` コマンドが確認なしで実行されていた
- `rm` を誤ったフォルダ基準で判定し、危険な削除の確認を飛ばしていた
- `Bash(ls*)` のようにワイルドカードを付けた許可ルールで、確認が飛ばされることがあった
- `sudo` や `env` などのラッパー経由のコマンドに deny ルールが効かないケースがあった
- Write・Edit ツールが、`Read` の deny ルールで守られたパスに書き込めた
- セッション中にサンドボックスが無効になることがあった

v2.1.325 では、このほかにも、サンドボックスが自分の用途で起動するプログラム(ネットワークブリッジなど)の環境変数から、サインイントークンと API キーを外した。

[ソース(v2.1.325)](https://github.com/anthropics/claude-code/releases/tag/v2.1.325) / [ソース(v2.1.323)](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)

### VS Code拡張のプロンプト候補とAPIキー不要のConsoleサインイン — v2.1.325

- ターミナル版で候補が出る場面では、VS Code 拡張でも次のプロンプトの候補が出るようになった。Tab で採用できる。オフにするには、Claude Code の settings.json に `promptSuggestionEnabled: false` を書く
- API キーを作らずに Console へサインインする方法が追加された
- SSH・WSL・コンテナのウィンドウでパネルから MCP サーバーにサインインするときに、リダイレクト URL を貼り付ける欄が追加された

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.325)

### Artifactツールの.docx対応 — v2.1.323

- Artifact ツールでアップロードできるアセットに `.docx` が加わった

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)

### Claude for Teachersの無料提供期間延長

- 米国の K-12 教員向けに無料で提供しているプレミアム版 Claude の期間が、2028年7月30日まで延びた(11-13 にページが更新された)

※ 入力データには公式ページのURLが含まれていなかったため、ソースリンクは載せていません。

## コミュニティの反応

### Code Mode(実験的機能)

該当なし(X 検索で出てきた投稿は、Claude Code 全般の使い方についてのもので、Code Mode には触れていませんでした)

### サンドボックス内Bashの権限フロー変更

該当なし

### スケジュールタスク・/loopでのスキル実行確認

該当なし

### プラグインの `engines["claude-code"]` 対応

該当なし

### 利用クレジット不足時のオプションメニュー

新しいメニューそのものへの言及はありませんでした。代わりに、クレジットの減り方への不満が多く投稿されています。全体に批判的なトーンです。

#### ポジティブ

該当なし

#### ネガティブ

> クレジット不足を理由に、タスクが途中で終わってしまったことに強く不満を述べている — @CymbolicO [出典](https://x.com/CymbolicO/status/2119304134520402041)

> コンテキストの扱いや指示への従い方が悪くなったうえ、先月は1週間の中でクレジットが4回尽きたと報告している — @ScottyNuggets [出典](https://x.com/ScottyNuggets/status/2119380199636701604)

> 週の制限が90%以上残っているのに、Claude がサブのトークンを使い切ってクレジットを消費しようとする挙動に戸惑っている — @MartinMachava1 [出典](https://x.com/MartinMachava1/status/2120137389347573828)

> 新しいチャットを始めないと、コンテキストがたまってクレジットが極端に速く減ると指摘している — @nukeyr [出典](https://x.com/nukeyr/status/2121304857910890706)

#### Tips

> クレジットが切れると従量課金で自動的に請求されるが、Settings > Usage の「Adjust limit」で月の上限を決めておけば使いすぎを防げる。ただし API 料金なので高くつきやすい点に注意、という助言 — @KanikaBK [出典](https://x.com/KanikaBK/status/2120127753500635195)

### Bash権限とサンドボックスのセキュリティ修正

X 上の反応は見つかりませんでした。Zenn には、直前のバージョンでの関連する検証記事が出ています。

#### Tips

> settings で deny した `.env` に `cp` で書き込めるかを試した検証記事。v2.1.319 では書き方によっては書き込めたが、v2.1.321 では止まったと報告している。Claude Code のファイル系ツールと Bash は別の経路なので、それぞれで制限を確かめるべきだ、という中立的で実践寄りの内容 — おじさんAIラボ「Claude Codeで deny した .env に cp で書ける？ 2.1.319は書き方次第で通り、2.1.321で止まりました」 [出典](https://zenn.dev/ojisan_ai_lab/articles/claude-code-cp-mv-deny-20261112)

### VS Code拡張のプロンプト候補とAPIキー不要のConsoleサインイン

該当なし

### Artifactツールの.docx対応

該当なし

### Claude for Teachersの無料提供期間延長

該当なし

## ソース

- [Claude Code v2.1.325 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.325)
- [Claude Code v2.1.323 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)
- [Claude Code Docs: Code Mode](https://code.claude.com/docs/en/code-mode)
- [Zenn: Claude Codeで deny した .env に cp で書ける？ 2.1.319は書き方次第で通り、2.1.321で止まりました](https://zenn.dev/ojisan_ai_lab/articles/claude-code-cp-mv-deny-20261112)
