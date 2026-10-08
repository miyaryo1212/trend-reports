---
title: "Cyber Mission始動と利用ポリシー改定"
summary: "Anthropicが防御者支援の「Cyber Mission」でOSS向け無料脆弱性スキャンを発表しました。あわせて2026年版の利用ポリシー改定と、米Genesis Missionへの1.5億ドル拠出も公表しています。Claude Code v2.1.295では、失敗したフックで操作を止めるonFailure: \"block\"とOSC 7501が加わりました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-09

features:
  - "Anthropic Cyber Mission / OSS Scanner"
  - "2026 Usage Policy 改定"
  - "Genesis Mission への1.5億ドル拠出"
  - "Claude Code v2.1.295 フックの onFailure: \"block\""
  - "Claude Code v2.1.295 Program Status Protocol (OSC 7501) 対応"
  - "Claude Code v2.1.295 Claude apps gateway 強化"
  - "Claude Code v2.1.294 prompt/agent フックの判定修正"
  - "Claude Science 全天紫外線マップ作成事例"
codex_review: "Cyber Missionの脆弱性スキャンは、モデルの賢さを競う話より地味だが、OSSの防御力を底上げしうる点で期待したい。一方、話題の多さに比べ個々の施策の実効性はまだ未知数で、フックの失敗時に止める設計の方が足元では堅実に重要だ。"
codex_importance: 4
---

## 公式アップデート

### Anthropic Cyber Mission / OSS Scanner

Anthropic が、防御側を支援する長期施策「Cyber Mission」を始めました。

- **OSS Scanner**: オープンソースプロジェクト向けの脆弱性スキャンです。無料で、参加は任意 (オプトイン) です。検出結果には PoC と修正案が付きます。真陽性率は90%超を見込んでいます。
- **重要インフラ防御プログラム (CIDP)**: CrowdStrike や Palo Alto Networks などが創設パートナーとして加わります。

[ソース](https://www.anthropic.com/news)

### 2026 Usage Policy 改定

Claude の利用ポリシー (Usage Policy) が改定されました。発効日は11月12日です。

- 欺瞞行為を扱うセクションを新設
- 選挙・兵器・監視・高リスク用途の規定を整理
- モデルに対する過度な虐待的行為を禁止

[ソース](https://www.anthropic.com/news)

### Genesis Mission への1.5億ドル拠出

米連邦政府の AI 科学イニシアチブ「Genesis Mission」に、3年間で計1.5億ドルを拠出します。NASA・NIH・NSF など15を超える機関に、Claude、Claude Code、API クレジットを提供します。

[ソース](https://www.anthropic.com/news)

### Claude Code v2.1.295 フックの onFailure: "block"

コマンドフックと HTTP フックに `onFailure: "block"` を指定できるようになりました。フックが起動できない、タイムアウトする、想定外の終了コードで終わる、のいずれかの場合に、操作を通さずブロックします。

同じリリースでは、mod のフックに深くネストしたツール入力がエラーなしで途中で切られて渡り、ガードが中身を確認しないまま通していた問題も修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)

### Claude Code v2.1.295 Program Status Protocol (OSC 7501) 対応

Program Status Protocol (OSC 7501) に対応しました。このプロトコルを実装したターミナルでは、Claude Code が作業中か、入力待ちか、完了したかを表示できます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)

### Claude Code v2.1.295 Claude apps gateway 強化

Claude apps gateway まわりで主に次の変更が入りました。

- 各 upstream に `models` リストを指定できるようになりました。リストにあるモデルだけがその upstream に送られ、フェイルオーバー時も同じです。`*` のワイルドカードを使えます。
- Bedrock・Vertex・Foundry などのクラウド upstream で `timeouts.upstream_ttfb_ms` に対応しました。ストリームが始まるまでの待ち時間を制限し、超えた場合はフェイルオーバーするか 502 を返します。
- 成功した推論レスポンスに `request-id` ヘッダーを付けるようになりました。`inference` 監査イベントには `upstream_request_id` が加わりました。
- Amazon Bedrock 上のトークン数を AWS の CountTokens API で取得するようになりました。利用には `bedrock:CountTokens` 権限が必要です。
- バックグラウンドのリクエストには、セッションのモデルではなく Haiku 4.5 を使うようになりました。gateway が Haiku 4.5 を提供していない場合は、セッションのモデルに戻ります。
- 自分のユーザー設定に `forceLoginMethod: "gateway"` と `forceLoginGatewayUrl` を書けるようになりました。管理設定 (managed settings) がないマシンが対象です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)

### Claude Code v2.1.294 prompt/agent フックの判定修正

「〜するコマンドをブロックせよ」のような指示文で書いた `prompt` フックと `agent` フックが、本来ブロックすべき操作を許可していた不具合が修正されました。Stop / SubagentStop に指示文形式で書いた `prompt` フック (例: 「ビルドが壊れていたら続行せよ」) も判定が改善され、Claude が途中で止まりにくくなりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.294)

### Claude Science 全天紫外線マップ作成事例

Claude Science が複数のエージェントを指揮し、全天の紫外線 (UV) マップとしては初めてのものを作りました。複数の望遠鏡の UV データを統合し、欠けている部分を補っています。誤差は約10%です。

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### Anthropic Cyber Mission / OSS Scanner

該当なし

### 2026 Usage Policy 改定

#### ネガティブ

> 新ポリシーは11月12日発効なので、それまでは Claude を「いじめて」も許される、と皮肉った投稿。発効まで1か月以上あることにも首をかしげている (皮肉・批判的)。 — @aleshu_ber [出典](https://x.com/aleshu_ber/status/2108299683856814328)

> 逆に「Claude が人間をいじめないようにする利用者向けポリシーが欲しい」として、Claude を「これほど見下した、決めつけの強い、高圧的なモデルは見たことがない」と評している (批判的)。 — @mariosundar [出典](https://x.com/mariosundar/status/2108296233140064678)

#### Tips

> 改定の公表を受けて、Claude API の利用者が確認すべき点をまとめた記事 (中立)。 — picnic「[Anthropic「2026 Usage Policy update」公表:Claude API利用者が確認すべき点](https://qiita.com/picnic/items/39382bbb3d2077cafa1c)」

### Genesis Mission への1.5億ドル拠出

#### ポジティブ

> Claude Code を NASA の TESS の観測データに使い、7年前のデータから116光年先の未知の地球型惑星候補を見つけた事例を紹介している (好意的)。 — @0x0SojalSec [出典](https://x.com/0x0SojalSec/status/2108298017204060550)

### Claude Code v2.1.295 フックの onFailure: "block"

#### Tips

> Claude Code に副業の事務作業を2か月半任せた記録。AI は「気をつける」だけでは直らないので、ルールを守らなかったときに止まる仕組みを外側に置くしかない、と結論づけ、実際に踏んだ失敗5つと対策をまとめている (中立・実践的)。 — せきもん「[Claude Code に副業を丸投げして2ヶ月半。AI が必ず破るルールと、機械で止めた方法](https://zenn.dev/sekimon/articles/e7f29bb093b14e)」

### Claude Code v2.1.295 Program Status Protocol (OSC 7501) 対応

#### ポジティブ

> v2.1.295 が OSC 7501 に対応したことで、対応ターミナルでは作業中・入力待ち・完了の状態が正確に出せるようになった。AI エージェントまわりの下流ツールが大きく恩恵を受けると高く評価している (好意的)。 — @mitchellh [出典](https://x.com/mitchellh/status/2108296550405619967)

> エージェントのオーケストレーターを開発している立場から、Claude Code の状態を正規表現で推測するもろいコードが最大の弱点だったと振り返る。OSC 7501 でこれを明示的な信号として受け取れるようになり、ハックを消せると歓迎している (好意的)。 — @AruNi_Lu [出典](https://x.com/AruNi_Lu/status/2107788462778921086)

### Claude Code v2.1.295 Claude apps gateway 強化

該当なし

### Claude Code v2.1.294 prompt/agent フックの判定修正

#### Tips

> Stop フックの公式仕様と、作業が残っているのに Claude が応答を終えてしまうのを防ぐために Stop フックを実運用し、5回誤作動した記録をまとめた記事 (中立・実践的)。 — OG WORKS「[Claude Code を止まらせない Stop フックの作り方——公式仕様と、実運用で5回誤作動した話](https://zenn.dev/ogworks/articles/7be32018a6ce80)」

### Claude Science 全天紫外線マップ作成事例

該当なし

## ソース

- [Claude Code v2.1.295 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)
- [Claude Code v2.1.294 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.294)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
