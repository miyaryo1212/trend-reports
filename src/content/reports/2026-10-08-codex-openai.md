---
title: "GPT-6とIntelligent UIを全ユーザーへ展開"
summary: "ChatGPT の Chat タブで GPT-6 (有料は Sol、Free/Go は Luna) の全ユーザー展開が始まり、対話型UIで回答する Intelligent UI と「考えながら回答」を導入。Codex CLI 0.161.0 は GPT-6.1 Sol を既定モデル化し、OpenAI は数学成果の Lean 形式化公開や、Teens 向け College Planner も発表した。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-08

features:
  - "GPT-6 と Intelligent UI の全ユーザー展開"
  - "Codex CLI 0.161.0"
  - "GPT-6 Sol / Luna October 2026 update システムカード"
  - "ChatGPT for Teens の新機能"
  - "数学における AI の成果公開"
codex_review: "Intelligent UIの全開放は、チャットを「答える場所」から「その場で使う道具」へ寄せる一歩で、定着すれば影響は大きい。ただ、現時点では数学成果のLean形式化のほうが地味ながら検証可能性を押し上げる点で、業界に長く効きそうだ。"
codex_importance: 4
---

## 公式アップデート

### GPT-6 と Intelligent UI の全ユーザー展開

- 先月から有料ユーザー向けに提供していた GPT-6 を、週 12 億人以上が利用する ChatGPT 全体へ展開する。
- **Intelligent UI**: GPT-6 は質問に応じてテキスト・ビジュアル・インタラクティブ要素を組み合わせて回答する。グラフィック、タップできるボタン、フォーム、チャート、会話内で操作できる体験を含められる。計算機や割り勘ツール、ゲームなど「その場で使うツール」を依頼して作らせることもできる。
- 仕組みとしては、ストリーミング可能なネイティブコンポーネントのライブラリと、生成中のインターフェースを処理するコンパイラを構築。応答の完了を待たずに UI が順次表示される。モデルはコンテンツ・レイアウト・インタラクションの判断を学習しており、テキストだけの方が有用な場合はテキストで答える。
- **考えながら回答**: 思考を続けながら回答を書き始め、複数の部分応答を積み上げて一貫した回答にする。社内評価では、GPT-6 Extra High が GPT-5.6 Medium と同じ時間で回答を始め、総合スコアは GPT-5.6 Extra High を上回った。Web 検索が必要な質問では、GPT-6 Instant は GPT-5.6 Instant より平均 44% 早く回答を始める。
- 提供: 本日から Plus / Pro / Business / Enterprise の Chat タブで世界展開を開始し、翌日から Free / Go にも拡大。Enterprise はワークスペース管理者の設定に依存する。有料プランは GPT-6 Sol、Free / Go は GPT-6 Luna で、いずれも日常会話向けに調整されている。
- 今回の更新は Chat 体験のみが対象で、Work と Codex を動かすモデルは変わらない。

[ソース](https://openai.com/index/gpt-6-for-everyone)

### Codex CLI 0.161.0

**新機能**

- GPT-6.1 Sol が、同梱カタログと Amazon Bedrock カタログの既定モデルになった。
- Amazon Bedrock の対応モデルで multi-agent V2 と Ultra reasoning を利用可能に。Bedrock Mantle は AWS GovCloud リージョンも受け付ける。
- 起動中のターミナルセッションから `/mcp login <name>` で MCP サーバーにサインインできる。
- 音声会話で使うマイク・スピーカー・マイク入力チャンネルを選択でき、設定はローカルに保存される。
- Daybreak がオプトイン制に変更。`--enable cli_daybreak` または `features.cli_daybreak=true` が必要で、`daybreak=true` だけでは有効にならない。既定ではコントロール・インジケーターが非表示、`/daybreak` は使えず、Cyber への自動ルーティングも行われない (保存済みの Daybreak スレッドでも同様)。保存済みの設定は保持される。オプトイン時のルーティングには、条件を満たす ChatGPT サインイン、OpenAI プロバイダー、モデル/プログラム側の対応が必要。
- `codex exec --cyber-access-program` または TypeScript SDK の `cyberAccessProgram` オプションで、ターンごとに Cyber アクセスプログラムを選べる。exec の明示的な上書きは `cli_daybreak` 無効時も使え、保存済みの選択は変更しない。

**バグ修正**

- 承認されたファイルシステム権限の昇格で、読み取り拒否やネットワーク制限を維持したまま、より広い書き込み権限を付与できるようになった。バックグラウンドタスクは元のターンの権限を引き継ぐ。
- 明示的な起動時の権限設定がターミナル再接続や新規セッションでも維持される。暗黙のクライアント設定が、サーバー側や保存済みスレッドの Web 検索設定を上書きしなくなった。
- 管理者権限の Windows ターミナルで組み込みサーバーを使って起動できる。サンドボックス化された PowerShell が、保護されたユーザープロファイル配下の相対パスを保持する。
- ペースト検出の期限切れ後も、Enter でバッファ内の入力が正しく送信される (Vim の挿入モードを含む)。
- スレッド再開時に最新のコミット済み履歴が含まれる。起動時に復旧可能な SQLite 破損をより早く検出し、破損した DB をバックアップとして保存する。
- Responses のリトライと WebSocket → HTTP フォールバックがサーバーのリトライ指示に従い、過負荷時の早期失敗を減らす。

**その他**

- 認証ガイドが、認証情報が常に `auth.json` にあるという前提ではなく、キーリング保存を考慮した記述になった。
- 古い alpha や hotfix を公開しても、npm の alpha タグが巻き戻らなくなった。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.161.0)

### GPT-6 Sol / Luna October 2026 update システムカード

- ChatGPT 向けの新しい GPT-6 モデル (Sol / Luna) のシステムカードを公開。ジェイルブレイク、プロンプトインジェクション、健康、ハルシネーション、Preparedness の評価結果を含む。
- 発表記事によると、GPT-6 は Astra の安全面の改良を一部取り入れ、GPT-5.6 Sol と比べて安全訓練の回避への耐性、セーフガードの遵守、能力の限界についての明確さが向上した。実利用から得た教訓をもとに、サイバー攻撃・生物学的脅威・暴力に関わる高リスクな悪用への対策を強化した。
- 敵対的テストでは、特に複数ターンにわたって手口を変える攻撃に対し、安全訓練を回避されにくくなった。無害なリクエストの不要な拒否を避けつつ、会話履歴や文脈から単一プロンプトでは見えないリスクを認識するよう訓練されている。
- 訓練全体を通じて整合性評価 (正直さ、安全上の制限への対応) を実施。必要な情報やツールが足りない場合を含め、自身の能力の限界を認識して伝える力が向上した。

[ソース](https://deploymentsafety.openai.com/gpt-6-october)

### ChatGPT for Teens の新機能

- **College Planner (近日・米国)**: 志望校リストの出願要件、締切、タスク、奨学金・学費援助の手続きを1つのプランにまとめる。初期は4年制大学を目指す10〜12年生 (高校2〜4年生相当) が対象。今後は他国や2年制大学・専門学校などにも拡大予定。
- **ノートの複数ページ撮影 (iOS)**: ノートを連続で撮影して1つの PDF にまとめ、ChatGPT にアップロードできる。Android にも対応予定。
- **フラッシュカード / クイズ**: アップロードしたノートやトピックからフラッシュカードを作成でき、デッキは Library に保存される。ノートからインタラクティブなクイズも作れる。
- 利用状況も公表: 1週間で約120万人の10代が Learning Visualizations を、18万人以上が Study Mode を使用。1日の平均利用時間は15分未満。
- このほか、College Advising Corps への支援と、Boston Children's Hospital の Digital Wellness Lab で10代の意見を取り入れる学生諮問会議 (2026〜27年度、約22名) への支援を発表した。

[ソース](https://openai.com/index/teens-learn-and-plan)

### 数学における AI の成果公開

- 社内のフロンティアモデルが得た、未解決問題に関する多数の数学的結果を GitHub リポジトリで公開。論文の改訂・引用のルールも設けた。
- 公開方法は、高等研究所 (IAS) の独立組織「Advisory Group on Mathematics and Artificial Intelligence」と協議し、その公開提言を参考に決めた。
- 多くの証明について Lean による形式化を同梱しており、形式化が進み次第追加していく。
- 透明性のため、モデルの推論の要約10件、ChatGPT Pro 利用量に換算した計算量の推定値、試行した問題数の統計も公開。1件あたりの平均は ChatGPT Pro の思考約3時間に相当する。
- AI が生み出した主要な成果を理解するためのワークショップや会議に資金を提供する予定。成果を出したモデル自体の責任ある公開も検討している。

[ソース](https://openai.com/index/sharing-ai-progress-in-mathematics)

## コミュニティの反応

### GPT-6 と Intelligent UI の全ユーザー展開

全体のトーン: 実際に使ってみた好意的な報告が中心。ただし、Intelligent UI そのものへの言及はまだ少ない。

#### ポジティブ

> GPT-6 Luna で OpenAI の Decisions API を試し、コードの比較を Claude Code でまとめて活用した — @7shi [出典](https://x.com/7shi/status/2107947175594610710)

> Codex (6.1 Sol) に動画編集を指示したところ、テニス動画に派手な演出を自動で付けてくれて便利だった — @Naonekozamurai [出典](https://x.com/Naonekozamurai/status/2107946569446154374)

- Zenn: [Jev「見せてもらおうか、OpenAIのDecisions APIの性能とやらを」](https://zenn.dev/canly/articles/c1c03518949c54) — GPT-6 Luna を使い、7タスク・3,800件で Jev と比較。主要指標は7タスクとも Jev が上回ったが、幻覚検出で実際に止めた件数では Decisions API にも良い結果が出たとする、中立的な検証記事。

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.161.0

#### 該当なし

X 上では、0.161.0 の新機能 (GPT-6.1 Sol の既定化、Bedrock 対応、`/mcp login`、Daybreak のオプトイン化など) について、個人の使用体験に基づく反応は見つからなかった。

### GPT-6 Sol / Luna October 2026 update システムカード

全体のトーン: 批判的。安全ルーターによる過剰な検閲への不満が目立つ。

#### ネガティブ

> GPT-6 の Chat は前世代よりさらに安全側に振り切っていてひどい。大人向けモードを優先すべきで、このままでは使い物にならない — @Marcelo6622417 [出典](https://x.com/Marcelo6622417/status/2107942641396765097)

> Sol 6 を試したところ、賢くて面白いが、オーストラリア流のユーモアを使ったら安全ルーターに検閲された。この問題に対処してほしい — @KelrosAnd [出典](https://x.com/KelrosAnd/status/2107937399431209053)

> 共同で書いているコメディ作品のシーン執筆中に、Sol 6.0 で創作フィクションが安全ルーターに引っかかった — @KelrosAnd [出典](https://x.com/KelrosAnd/status/2107936621396209870)

### ChatGPT for Teens の新機能

#### 該当なし

X 上では公式発表の要約やニュースの共有が中心で、個人の使用体験に基づく反応は見つからなかった。

### 数学における AI の成果公開

全体のトーン: 好意的・関心が高い。

#### ポジティブ

> OpenAI の数学成果 (no-5-color 定理) について、Opus 5.5 に視覚的な説明を頼んだら理解の助けになった — @nathan84686947 [出典](https://x.com/nathan84686947/status/2107946802330890360)

#### Tips

> 未発表モデル由来の722件の数学論文が GitHub で公開されたニュースを共有しつつ、AI 活用のコツとして「仮定・反例・検証ステップを尋ねる」方法を提案 — @TechTimeRadio [出典](https://x.com/TechTimeRadio/status/2107946966286024926)

## ソース

- [OpenAI: GPT-6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone)
- [OpenAI Deployment Safety: GPT-6 system card (October)](https://deploymentsafety.openai.com/gpt-6-october)
- [GitHub: openai/codex rust-v0.161.0](https://github.com/openai/codex/releases/tag/rust-v0.161.0)
- [OpenAI: Helping teens learn, plan, and shape the future of AI](https://openai.com/index/teens-learn-and-plan)
- [OpenAI: Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics)
- [Zenn: Jev「見せてもらおうか、OpenAIのDecisions APIの性能とやらを」](https://zenn.dev/canly/articles/c1c03518949c54)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
