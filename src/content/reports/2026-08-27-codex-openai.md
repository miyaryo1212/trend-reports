---
title: "Codex Security公開、CLI 0.150.0安定版"
summary: "旧AardvarkがCodex Securityとして改称・リサーチプレビュー公開され、脅威モデル生成とサンドボックス検証で修正パッチまで提示する。OSSメンテナ支援プログラム Codex for OSS も始動。Codex CLI は 0.150.0 が正式リリースされ、@メンションでのタスク参照や Interrupt フックが入った。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-27

features:
  - "Codex Security リサーチプレビュー公開"
  - "Codex Security の脅威モデル生成とサンドボックス検証"
  - "Codex for OSS"
  - "Why Codex Security Doesn't Include a SAST Report"
  - "OpenAI Privacy Filter"
  - "Advanced Account Security"
  - "Codex CLI 0.150.0 正式リリース"
  - "Codex の @メンションによるタスク参照"
  - "Codex の Interrupt フック"
  - "Codex `/copy` のピッカー"
  - "Codex の権限モード切り替えショートカット"
  - "Codex CLI 0.151.0-alpha.1 / alpha.2"
  - "The Hugging Face incident and the road ahead"
  - "ChatGPT for Teachers の米国学区への拡大"
codex_review: "Codexを単なるコーディング補助から、実運用のセキュリティ基盤へ押し上げたい意図が見えて面白い。一方で機能追加の勢いに対し現場の安定性はまだ粗く、過渡期らしい熱気と危うさが同居している。"
codex_importance: 4
---

## 公式アップデート

### Codex Security リサーチプレビュー公開

旧 Aardvark を改称したアプリケーションセキュリティエージェント **Codex Security** が、リサーチプレビューとして Codex web 上で提供開始された。対象は ChatGPT Pro / Enterprise / Business / Edu で、初月は無料。

[ソース](https://openai.com/news/)

### Codex Security の脅威モデル生成とサンドボックス検証

Codex Security の動作フローが示された。リポジトリを解析して編集可能な脅威モデルを生成し、検出した問題をサンドボックス上で実証してから修正パッチを提示する。検出結果をそのまま並べるのではなく、再現を経てから修正案に落とす構成になっている。

[ソース](https://openai.com/news/)

### Why Codex Security Doesn't Include a SAST Report

Codex Security が SAST レポートを起点にしない設計判断の理由を解説したエンジニアリング記事が公開された。

[ソース](https://openai.com/news/)

### Codex for OSS

OSS メンテナ向け支援プログラムが開始された。ChatGPT Pro / Plus を無償提供し、コードレビューおよび Codex Security を開放する。初期コホートからのスタート。

[ソース](https://openai.com/news/)

### OpenAI Privacy Filter

テキスト中の PII を検出・秘匿するオープンウェイトの小型モデルが公開された。ローカル実行が可能で、PII-Masking-300k で SOTA を主張している。

[ソース](https://openai.com/news/)

### Advanced Account Security

ChatGPT / Codex 共通のオプトイン強化設定。パスキーおよびセキュリティキーを必須化し、メール・SMS による復旧を無効化する項目を束ねている。

[ソース](https://openai.com/news/)

### The Hugging Face incident and the road ahead

Hugging Face のセキュリティインシデントに関する調査結果と、モデルセキュリティ強化策が公表された。

[ソース](https://openai.com/news/)

### ChatGPT for Teachers の米国学区への拡大

教員向け ChatGPT の提供対象が、より多くの米国学区に拡大された。

[ソース](https://openai.com/news/)

### Codex CLI 0.150.0 正式リリース

アルファ系列を経て 0.150.0 の安定版が公開された (0.149.0 からの差分)。主な新機能は以下。

- **@メンションによるタスク参照**: 他の Codex タスクを `@` で参照でき、ターミナルからタスクの読み取り・作成・メッセージ送信が可能になった ([#40308](https://github.com/openai/codex/pull/40308), [#40315](https://github.com/openai/codex/pull/40315))
- **Interrupt フック**: アクティブなトップレベルのターンが中断された際に、コマンドまたは MCP ハンドラを実行できる新フック ([#40511](https://github.com/openai/codex/pull/40511))
- **`/copy` のピッカー**: 応答全体・個別のコードブロック・引用ブロックを選んでコピーできるようになった ([#39997](https://github.com/openai/codex/pull/39997))
- **権限モード切り替えショートカット**: 権限モードを巡回するキーバインドを設定可能に。あわせて Vim モードで `.` による直前編集の繰り返しに対応 ([#39873](https://github.com/openai/codex/pull/39873), [#40521](https://github.com/openai/codex/pull/40521))

主なバグ修正は、信頼されていないプロジェクトがプロジェクト階層の `AGENTS.md` を供給しなくなった点 ([#39837](https://github.com/openai/codex/pull/39837))、リモート MCP のベアラートークン参照と必須サーバ起動の修正 ([#39926](https://github.com/openai/codex/pull/39926))、Unicode を含むユーザーパス配下での Windows サンドボックス設定の修正 ([#39971](https://github.com/openai/codex/pull/39971))、Amazon Bedrock モデルでの会話コンパクションとマルチエージェント互換性の修正 ([#39804](https://github.com/openai/codex/pull/39804)) など。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.150.0)

### Codex CLI 0.151.0-alpha.1 / alpha.2

0.150.0 公開の直後に、次期系列のアルファが 2 本連続で公開された。いずれもリリースノート本文は「Release 0.151.0-alpha.x」のみで、変更点の記載はない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.2)

## コミュニティの反応

### Codex Security リサーチプレビュー公開

#### ポジティブ

> Codex security scan を実際に使ったところ、8件の検出のうち7件が確認済みの問題だった。アプリケーションレベルのスキャンとしては非常によく機能している。 — @KamStaszewski [出典](https://x.com/KamStaszewski/status/2092677355709812743)

#### ネガティブ

> Codex Security は完全に詐欺だ。2分で5時間の使用枠を100%消費した。 — @dsllwn [出典](https://x.com/dsllwn/status/2092713696439247159)

#### Tips

該当なし

### Codex Security の脅威モデル生成とサンドボックス検証

#### ポジティブ・ネガティブ・Tips

該当なし。直近1週間の X 投稿に、脅威モデル生成からサンドボックス検証・修正パッチ提示までの流れに関する個人ユーザーの実体験投稿は確認できなかった。

### Why Codex Security Doesn't Include a SAST Report

#### ポジティブ・ネガティブ・Tips

該当なし。Codex Security の脅威モデル活用に触れた投稿は数件あったが、SAST レポートを起点にしない設計判断そのものに言及したものは確認できなかった。

### Codex for OSS

#### ポジティブ

> Claude がダウンしていた間も Codex は安定して動作した。OSS プログラム経由で無償取得したサブスクを活かし、長時間タスクに活用している。 — @bytaesu [出典](https://x.com/bytaesu/status/2091757049868964343)

> Codex CLI / Desktop に1ヶ月切り替えたところ、Pro プランで大量の作業が捗った。"just works" という感覚。 — @Rames_Jusso [出典](https://x.com/Rames_Jusso/status/2092343576126730711)

#### ネガティブ

> Windows で非システムドライブに Codex CLI をインストールすると、アップデート後にパス解決に失敗する。手動での `CODEX_CLI_PATH` 設定か standalone 版への切り替えが必要だった。 — @JinSignals [出典](https://x.com/JinSignals/status/2092540535659737508)

#### Tips

> Codex for OSS プログラムの申請 (GitHub リポジトリURL・メンテナ説明など) は5分以内で済ませられる。 — @nex_ify [出典](https://x.com/nex_ify/status/2092124216958005752)

> Codex のトークン節約のために外部記憶 (GitHub + Obsidian) を自作していたが、OSS の Hindsight に置き換えた。 — @yu_sh02084 [出典](https://x.com/yu_sh02084/status/2092380737404285398)

### OpenAI Privacy Filter

#### ポジティブ

> Privacy Filter は 1.5B パラメータでローカル実行可能、PII/クレデンシャルを8カテゴリでスパン検出する。データ最小化ツールとして実用的。 — @Big14teru [出典](https://x.com/Big14teru/status/2090343202209300964)

> PrivAITe ゲートウェイ経由で Privacy Filter を使い、Claude Code エージェントのツールコール引数からの PII/シークレット漏洩を 24/24 件から 0 件に低減できた。 — @stretchcloud [出典](https://x.com/stretchcloud/status/2091822824868700295)

#### ネガティブ・Tips

該当なし

### Advanced Account Security

#### ポジティブ

> Advanced Account Security で YubiKey を導入した。物理キー運用の実感としてセキュリティ強化の利点を体感している。 — @nomizooone [出典](https://x.com/nomizooone/status/2091682674842939695)

> YubiKey バンドルが便利。USB A→C 移行のタイミングで役立った。 — @rwpeterson [出典](https://x.com/rwpeterson/status/2090648132119871503)

> Codex を使い続けるために物理セキュリティキーを導入。最初は過剰だと思ったが、厳重なセキュリティの必要性を実感した。 — @UNIBRACITY [出典](https://x.com/UNIBRACITY/status/2091385791943717333)

#### ネガティブ

> 有効化直後に ChatGPT Desktop の UI がサインイン画面に置き換わる不具合が発生。セッションは有効なのにアプリが使えない。 — @BenKnill [出典](https://x.com/BenKnill/status/2091306931226910845)

> 登録後、Codex アプリでチャットを開くと即座に再ログインを求められるループに遭遇した。 — @StErMi [出典](https://x.com/StErMi/status/2090448347861537260)

> 有効にすると "Improve the model for everyone" が強制的に無効化され、元に戻せない。 — @awesomepatel [出典](https://x.com/awesomepatel/status/2090895292790919555)

#### Tips

該当なし

### Codex CLI 0.150.0 正式リリース

0.150.0 そのものに直接言及した個人投稿は期間内に確認できなかったため、以下は直近の Codex CLI 利用体験に関する投稿。

#### ポジティブ

> Codex CLI と ChatGPT Desktop で起動した Codex セッションが共有されるようになった。CLI で始めたセッションを Desktop アプリで確認できる。 — @suna_gaku [出典](https://x.com/suna_gaku/status/2092397236412100884)

> Codex CLI を開発の主力ツールとして活用中。Claude Code と併用しつつ大規模ビルドを進めている。 — @TechKidi12 [出典](https://x.com/TechKidi12/status/2092320648563474824)

#### ネガティブ

> 携帯から Codex CLI に指示して作業していたが、リセットチケット使用後も5時間制限が復活して進行が止まった。 — @333mic999 [出典](https://x.com/333mic999/status/2092374570632438163)

> 最近のアップデートでセッションが無言で停止し、アーカイブもできない。生産性が落ちている。 — @64bitmodeling [出典](https://x.com/64bitmodeling/status/2090610268384751741)

#### Tips

> Tailscale + SSH で複数マシン間の Codex CLI セッションを共有し、Desktop アプリのバックグラウンドサーバーと連携させる設定。 — @0xBOYD [出典](https://x.com/0xBOYD/status/2092346379746046139)

> Codex CLI で Ed25519 鍵生成 → Keychain 保存 → DID プロファイル作成までを macOS 上で1コマンドずつ実行する手順。 — @i_liu25 [出典](https://x.com/i_liu25/status/2092262770838474915)

### Codex の Interrupt フック

#### ポジティブ

> Interrupt フックのおかげで急な割り込みが入っても topic-stack の状態を失わずに継続できる。 — @YanqingCheng [出典](https://x.com/YanqingCheng/status/2092659980243439659)

#### ネガティブ・Tips

該当なし

### Codex の権限モード切り替えショートカット

#### ポジティブ

> Codex の fork で権限モードを ALT+P のキーバインドで切り替えられるようになったのが便利。isolated credentials など他の改善と合わせて実用性が上がった。 — @alleneubank [出典](https://x.com/alleneubank/status/2091234971415683406)

#### ネガティブ・Tips

該当なし

### Codex の @メンションによるタスク参照

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex `/copy` のピッカー

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex CLI 0.151.0-alpha.1 / alpha.2

#### ポジティブ・ネガティブ・Tips

該当なし。0.150.0 関連の告知や旧バージョンへの言及は見られたが、本アルファ2本に触れた個人投稿は確認できなかった。

### The Hugging Face incident and the road ahead

#### ポジティブ・ネガティブ・Tips

該当なし。報道共有や技術解説が中心で、個人ユーザーの実体験投稿は確認できなかった。

### ChatGPT for Teachers の米国学区への拡大

#### ポジティブ・ネガティブ・Tips

該当なし。教育現場での ChatGPT 活用談は散見されたが、学区拡大に関連する個人の体験談は確認できなかった。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.150.0](https://github.com/openai/codex/releases/tag/rust-v0.150.0)
- [rust-v0.151.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.1)
- [rust-v0.151.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.2)
- [OpenAI News](https://openai.com/news/)
- [@KamStaszewski の投稿 (X)](https://x.com/KamStaszewski/status/2092677355709812743)
- [@dsllwn の投稿 (X)](https://x.com/dsllwn/status/2092713696439247159)
- [@bytaesu の投稿 (X)](https://x.com/bytaesu/status/2091757049868964343)
- [@Rames_Jusso の投稿 (X)](https://x.com/Rames_Jusso/status/2092343576126730711)
- [@JinSignals の投稿 (X)](https://x.com/JinSignals/status/2092540535659737508)
- [@nex_ify の投稿 (X)](https://x.com/nex_ify/status/2092124216958005752)
- [@yu_sh02084 の投稿 (X)](https://x.com/yu_sh02084/status/2092380737404285398)
- [@Big14teru の投稿 (X)](https://x.com/Big14teru/status/2090343202209300964)
- [@stretchcloud の投稿 (X)](https://x.com/stretchcloud/status/2091822824868700295)
- [@nomizooone の投稿 (X)](https://x.com/nomizooone/status/2091682674842939695)
- [@rwpeterson の投稿 (X)](https://x.com/rwpeterson/status/2090648132119871503)
- [@UNIBRACITY の投稿 (X)](https://x.com/UNIBRACITY/status/2091385791943717333)
- [@BenKnill の投稿 (X)](https://x.com/BenKnill/status/2091306931226910845)
- [@StErMi の投稿 (X)](https://x.com/StErMi/status/2090448347861537260)
- [@awesomepatel の投稿 (X)](https://x.com/awesomepatel/status/2090895292790919555)
- [@suna_gaku の投稿 (X)](https://x.com/suna_gaku/status/2092397236412100884)
- [@TechKidi12 の投稿 (X)](https://x.com/TechKidi12/status/2092320648563474824)
- [@333mic999 の投稿 (X)](https://x.com/333mic999/status/2092374570632438163)
- [@64bitmodeling の投稿 (X)](https://x.com/64bitmodeling/status/2090610268384751741)
- [@0xBOYD の投稿 (X)](https://x.com/0xBOYD/status/2092346379746046139)
- [@i_liu25 の投稿 (X)](https://x.com/i_liu25/status/2092262770838474915)
- [@YanqingCheng の投稿 (X)](https://x.com/YanqingCheng/status/2092659980243439659)
- [@alleneubank の投稿 (X)](https://x.com/alleneubank/status/2091234971415683406)
