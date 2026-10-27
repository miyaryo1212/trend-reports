---
title: "Claudeで重要ソフトの脆弱性発見、創薬企業も買収"
summary: "Frontier Red Teamが、未公開の内部モデルでChrome・Safari・Android・Windows/Linuxの重大な脆弱性を見つけたと報告しました。創薬の進捗報告とMithril Medicineの買収も発表されています。Claude Codeはv2.1.311とv2.1.312が出て、ultrathinkがxhigh effortで動くようになりました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-28

features:
  - "Claudeで重要ソフトウェアの脆弱性を発見・悪用"
  - "創薬加速の進捗報告とMithril Medicine買収"
  - "ultrathinkのxhigh effort化(v2.1.311)"
  - "AIエージェントが専門家の判断に与える影響"
  - "署名付きモデルカタログ(v2.1.311)"
  - "標準コンテキストの200K超過時に自動compaction(v2.1.311)"
  - "Claude apps gatewayのoidc.user_id_claim(v2.1.312)"
  - "未知のモデル名に短いシステムプロンプトと自動モデル切替を適用(v2.1.312)"
  - "クラウドroutineのeffort指定とBash editor(v2.1.312)"
  - "VS Codeでコードブロックのシンタックスハイライト(v2.1.311)"
  - "Claude Tag Skills分析ビュー(v2.1.311)"
  - "self-hosted-runnerの--hold-idle-file/--max-hold-min(v2.1.311)"
  - "フルスクリーンのクリック送信(v2.1.312)"
  - "利用上限の表記を「5-hour limit」に変更(v2.1.312)"
codex_review: "脆弱性発見は派手だが、攻撃にも転用できる能力の公開は防御側との競争を一段速めそうだ。むしろ専門家が誘導に気づきにくい実験結果のほうが、AI導入時の判断責任を問う地味で重要な論点に感じる。"
codex_importance: 4
---

## 公式アップデート

### Claudeで重要ソフトウェアの脆弱性を発見・悪用(Anthropic Research)

AnthropicのFrontier Red Teamが、まだ公開していない内部モデルを使って、広く使われているソフトウェアの脆弱性を見つけ、実際に悪用できることを確かめたと報告しました。報告に挙がっているのは次のものです。

- Chromeのリモートコード実行(RCE)
- SafariのSame-Origin Policy(SOP)バイパス
- Androidの画面ロック回避
- Windows/Linuxで遠隔から攻撃できる一連の手順(攻撃チェーン)

[ソース(Anthropic Research)](https://www.anthropic.com/research) ※取得データに個別記事のURLが入っていなかったため、一覧ページを示しています。

### 創薬加速の進捗報告とMithril Medicine買収

Anthropicは、製薬会社6社と進めている協業の成果を公開しました。あわせて次の2点を発表しています。

- 希少な筋ジストロフィーに取り組むMithril Medicineの買収
- Bristol Myers Squibb(BMS)との協業の拡大

[ソース(Anthropic News)](https://www.anthropic.com/news) ※取得データに個別記事のURLが入っていなかったため、一覧ページを示しています。

### AIエージェントが専門家の判断に与える影響(Anthropic Research)

Anthropicは、分析者50人を対象にした実験の結果を公開しました。86%がエージェントに誘導されたとおりの判断を下した一方、判断の出典としてエージェントを挙げたのは15%だけでした。

[ソース(Anthropic Research)](https://www.anthropic.com/research) ※取得データに個別記事のURLが入っていなかったため、一覧ページを示しています。

### Claude Code v2.1.311(2026-10-26)

- **ultrathinkのxhigh effort化**: 対話型ターミナルで`ultrathink`と入力すると、Anthropic APIを使うOpus 5.5・Sonnet 5.5・Haiku 5.5・Fable 5.1のターンがxhigh effortで実行されます。Claudeの作業中に入力すると、そのターンの残りのeffortが上がります。虹色の表示は、effortを上げられる場所でだけ出るようになりました。引用符の中やファイルパスの一部にあるときは出ません。
- **署名付きモデルカタログ**: Bedrock・Mantle・Vertex・Foundryでは、モデル設定をdownloads.claude.aiにある署名付きファイルから読み込むようになりました。`CLAUDE_CODE_MODEL_CATALOG=off`で無効にできます。
- **200K超過時の自動compaction**: 標準コンテキストのセッションで、リクエストが200Kトークンを超えると「Usage credits required for 1M context」で止まっていました。今は会話をcompaction(要約して圧縮)して続けます。
- **VS Codeのシンタックスハイライト**: Claudeの返答に含まれるコードブロックに色が付くようになりました。ライト・ダーク・ハイコントラストのダークの各テーマに対応しています。
- **Claude Tag Skills分析ビュー**: Claude Tagの分析画面にSkillsビューが加わりました。Slackチャンネルで、付けた各スキルが何回実行されたか、どのスキルが使われていないかが分かります。管理設定にはUsageへのリンクがあります。
- **self-hosted-runnerの新オプション**: `--hold-idle-file`と`--max-hold-min`が加わりました。セッションが残したプロセスがまだ動いているとホストが報告している間は、アイドルのセッションを保持します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.311)

### Claude Code v2.1.312(2026-10-27)

- **Claude apps gatewayのoidc.user_id_claim**: `oidc.user_id_claim`が加わりました。`sub`以外のid_tokenクレームでユーザーを識別できます。たとえばMicrosoft Entra IDの`oid`を使えます。
- **未知のモデル名への短いシステムプロンプトと自動モデル切替**: Bedrock・Vertex・Foundry・Mantleで、Claude Codeが認識できないモデル名には短いシステムプロンプトを使うようになりました。カスタムのデプロイ名やinference profileのARNなどが該当し、中身がSonnetやHaikuでも対象になります。フルのプロンプトを使い続けたい場合は`CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT=0`を設定します。メッセージがフラグされたあとの自動モデル切替も、こうした未知のモデル名に適用されるようになりました。無効にするには`CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK=1`を設定します。
- **クラウドroutineのeffort指定とBash editor**: クラウドで動くroutineを作成・編集するとき、モデルピッカーでeffortレベルを選べるようになりました。クラウド環境設定のsetup script欄はBashエディタになり、色分け・行番号・Copyボタンが付きました。
- **フルスクリーンのクリック送信**: フルスクリーンでは、キュー中のメッセージの下に出る「to send now」のヒントをクリックすると、対応するキーを押したときと同じようにすぐ送信されます。
- **利用上限の表記変更**: 利用上限のメッセージで、5時間枠の呼び方が「session limit」から「5-hour limit」に変わりました。VS Codeでは、リセット時刻を「Resets at 3:10 PM」のような時計の時刻で表示します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)

## コミュニティの反応

### Claudeで重要ソフトウェアの脆弱性を発見・悪用

全体として、能力の高さに驚く反応が中心で、好意的です。最小限のプロンプトで成果が出た点を皮肉る声も一部にあります。

#### ポジティブ

> 最小限のプロンプトで、Linuxカーネルの0-click RCEやChrome/SafariのRCEチェーンなどが見つかったという研究成果を共有し、脆弱性を見つける力の強さを実感している — @aegiryy [出典](https://x.com/aegiryy/status/2115145643467669761)

> ほぼプロンプトなしで、Linuxカーネルの0-click RCE、Chrome RCE、Safari RCEなどが完全に動くエクスプロイトとして見つかった点を強調し、AIの脆弱性発見力を高く評価している — @gf_256 [出典](https://x.com/gf_256/status/2115174272188760493)

#### ネガティブ

> 「pls find RCE」という最小限のプロンプトだけでRCEが見つかったことを取り上げ、プロンプトエンジニアリングは本当に必要なのかと皮肉っている — @FurbyPerson [出典](https://x.com/FurbyPerson/status/2115181747629412790)

#### Tips

該当なし

### 創薬加速の進捗報告とMithril Medicine買収

反応は少なめですが、AIで創薬が速くなることへの期待が中心で、好意的です。

#### ポジティブ

> Claudeが64時間で31万件を超えるタンパク質を自律的に設計し、実験で17件が結合の基準を満たした成果を高く評価している。AIで新薬開発が効率化することに期待を寄せている — @yungblud0x [出典](https://x.com/yungblud0x/status/2112843898393637319)

> AnthropicがNovo Nordiskと提携し、Claudeが創薬の分野に進出している点を、AI×製薬の動きが加速している例として前向きに捉えている — @DamonNelson [出典](https://x.com/DamonNelson/status/2114448427333353658)

#### ネガティブ

該当なし

#### Tips

該当なし

### AIエージェントが専門家の判断に与える影響

懸念を示す声が目立ちます。

#### ネガティブ

> 分析者50人の86%がエージェントの誘導に従い、出典として挙げたのは15%だけだった実験を紹介し、「unsettled me」「scares me」と個人的な不安を書いている。対策として、エージェントに聞く前に自分の判断を先に書き出しておく方法を提案している — @harden_369741 [出典](https://x.com/harden_369741/status/2115171544338944116)

#### ポジティブ

該当なし

### 署名付きモデルカタログ(v2.1.311)

運用への影響を心配する声と、その対処法が出ています。トーンは慎重です。

#### ネガティブ

> Bedrock/Mantle/Vertex/Foundryを使う環境で、Anthropicのダウンロードサーバーから署名付きモデルカタログを自動で取得するようになった。外向き通信(egress)を制限しているCI/VDI環境では、通信がブロックされたり、セキュリティレビューが必要になったりするおそれがあると指摘している — @tbs142857 [出典](https://x.com/tbs142857/status/2115064193804374480)

#### Tips

> `CLAUDE_CODE_MODEL_CATALOG=off`をベースイメージに最初から入れておけば、今後のアップデートで思わぬネットワーク依存が増えるのを避けられる — @Fanfulladev [出典](https://x.com/Fanfulladev/status/2115065125673521581)

### 標準コンテキストの200K超過時に自動compaction(v2.1.311)

不便が解消されたとして、好意的に受け止められています。

#### ポジティブ

> 200Kを超えても「1M context requires Usage credits」で止まらず、自動compactionで続くようになった点を、困りごとの修正として好意的に報告している — @8zero7 [出典](https://x.com/8zero7/status/2115178264243134794)

#### Zenn・Qiita

- [Claude Codeの会話が200Kを超えたら何が起きる？ 先に圧縮するか、そのまま送って次で圧縮でした](https://zenn.dev/ojisan_ai_lab/articles/claude-code-prompt-too-long-20261026): v2.1.310の時点で会話をわざと200Kトークン超にし、条件を変えて8回試して圧縮のタイミングを確かめた検証記事(中立・検証) — おじさんAIラボ

### ultrathinkのxhigh effort化ほか、その他のClaude Code更新

ultrathink、oidc.user_id_claim、未知のモデル名の扱い、クラウドroutine、VS Codeのシンタックスハイライト、Claude Tag Skills分析ビュー、self-hosted-runner、クリック送信、「5-hour limit」の表記について、X/Twitter・Zenn・Qiitaで直接の反応は見つかりませんでした。

該当なし

## ソース

- [Claude Code v2.1.312](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)
- [Claude Code v2.1.311](https://github.com/anthropics/claude-code/releases/tag/v2.1.311)
- [Anthropic Research](https://www.anthropic.com/research)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn: Claude Codeの会話が200Kを超えたら何が起きる？](https://zenn.dev/ojisan_ai_lab/articles/claude-code-prompt-too-long-20261026)
