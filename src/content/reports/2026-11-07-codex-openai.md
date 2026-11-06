---
title: "Codex CLI 0.167.0正式版とHacktron提携"
summary: "Codex CLI 0.167.0 が正式リリースされ、エージェントコマンドセンター、バックエンド切り替え、Vertex AI セットアップなどが加わった。OpenAI は Hacktron との脆弱性探索での提携や、ウェットラボ向けベンチマーク BioBasicsBench も発表した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-07

features:
  - "Codex CLI 0.167.0"
  - "OpenAI × Hacktron 提携"
  - "BioBasicsBench"
  - "Codex CLI 0.169.0-alpha.1 / alpha.2"
  - "Cult.fit の Codex 活用事例"
  - "Merge の OpenAI 活用事例"
codex_review: "派手なモデル発表より、バックエンド切替や承認フローの改善に現場の成熟が表れていて好感。ただ、Hacktron提携やBioBasicsBenchは詳細と成果が見えず、見出しの重さに比べて評価する材料はまだ少ない。"
codex_importance: 3
---

## 公式アップデート

※ Codex CLI 以外の項目は、今回の収集データに公式発表の URL が含まれていません。

### Codex CLI 0.167.0

正式版です (2026-11-06 公開)。

**新機能**

- `codex agents --no-daemon` でエージェントコマンドセンターを開けるようになりました。コマンドセンターとセッションピッカーで未読の結果に印が付きます。
- ターミナルのセッションピッカーから、接続中のバックエンドを切り替えられるようになりました。切り替えても下書きは残ります。
- 対応ターミナルでは、入力中にローカル画像の添付をプレビューできます。トランスクリプト内のパスをクリックすると、表示済みのローカル画像を開けます。
- API キーとクラウドプロバイダーの選択肢を「Sign in another way」にまとめました。`gcp_setup_wizard` を有効にすると、Application Default Credentials または認証情報ファイルで Google Cloud Vertex AI をセットアップできます。
- `/experimental` から、macOS / Windows のシステムプロキシ設定を使うよう選べます。
- 承認プロンプトを開いたまま、トランスクリプト上でパッチの詳細を展開できます。

**バグ修正**

- モデルプロバイダーを切り替えても、保存済みチャットが表示され続けます。再開できないチャットは、トランスクリプトを読み、続きを新しいチャットで始めるための編集可能なプロンプトを作れます。
- `Ctrl+L` で画面をクリアしても、それまでのメッセージは `Ctrl+T` で見られます。
- 文字を削除して先頭の `!` だけが残っても、通常のチャットの下書きとして扱われます。
- ネットワーク承認プロンプトは、リクエストが終わると閉じます。同じ接続先への同時リクエストは、1 件ずつ確認を求めます。
- 長い realtime V3 会話では、会話が進むごとに完了した発話をチャット履歴へ保存します。
- 自動コンテキスト圧縮で、失敗したレスポンスやトークン使用量データのないレスポンスの出力も計算に含めます。

**その他**

- app-server README に、`[permissions.network]` による管理されたネットワーク制約と、毎回人の承認を求める `prompt-user` コマンドルールの説明を追加しました。
- Linux musl ビルドでアロケーターのアリーナ数を減らし、会話を閉じたあとの待機時のメモリを減らしました。
- 変更履歴には、Guardian レビュー (実行記録の直接レビュー、外部から注入されたスレッドコマンドの実験的レビューなど) と、Code Mode の出力上限・サーバー側切り詰めに関する変更も多数含まれています。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.167.0)

### Codex CLI 0.169.0-alpha.1 / alpha.2

次期版のプレリリースです。リリースノートは「Release x.x.x」の一文だけで、変更点の詳しい説明はありません。

- 0.169.0-alpha.1 (2026-11-06) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.1)
- 0.169.0-alpha.2 (2026-11-06) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2)

### OpenAI × Hacktron 提携

OpenAI が Hacktron と組み、最先端の AI で自社システムと外部サービス連携の脆弱性を探し、防御を強化する取り組みです。

### BioBasicsBench

AI エージェントが実験の生データを読み解き、日常的なウェットラボ作業をこなせるかを測る、100 タスクのベンチマークです。

### Cult.fit の Codex 活用事例

Cult.fit で、部門をまたいだチームが Codex で社内ツールを作り、業務を速めた事例です。

### Merge の OpenAI 活用事例

Merge が GPT-6 Astra・ChatGPT・Codex を、製品コードのレビューやマーケティング支援に使っている事例です。

## コミュニティの反応

### Codex CLI 0.167.0

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.169.0-alpha.1 / alpha.2

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### OpenAI × Hacktron 提携

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### BioBasicsBench

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Cult.fit の Codex 活用事例

※ Cult.fit に直接触れた投稿は @krimuthu の 1 件だけです。他の 2 件は、Codex を社内向けツールやエージェント連携に使った個人の体験談です。

#### ポジティブ

> Codex (と Claude、Cursor) でクライアント向けのプロジェクト管理ダッシュボードを作った体験談。PM や開発者が、自動更新される進捗・質問・決定事項を確認できるようにした (好意的) — @rotudam [出典](https://x.com/rotudam/status/2117895974773272635)

> Claude と Codex のエージェントを連携させ、バックエンドの変更をフロントエンド・デプロイ・QA の各エージェントへ自動で通知する仕組みを作った。手作業の調整がなくなり、生産性が 5〜10 倍になったと実感している (好意的) — @AlaaEddineKad [出典](https://x.com/AlaaEddineKad/status/2116623339544613110)

#### ネガティブ

> Cult.fit の Codex 事例を挙げつつ、小さな会社ではツールごとのサポート負担 (変更の承認や障害対応) を事前に試しておくべきだと指摘 (慎重) — @krimuthu [出典](https://x.com/krimuthu/status/2118744042825793705)

#### Tips

> Codex / Claude のエージェント同士を安全に P2P で通信させる自作プラグイン「Denden」を紹介。`/denden:im create` などのコマンドで複数のセッションをつなぐ例を共有している (中立) — @AlaaEddineKad [出典](https://x.com/AlaaEddineKad/status/2116623339544613110)

### Merge の OpenAI 活用事例

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Codex Releases: 0.169.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2)
- [Codex Releases: 0.169.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.1)
- [Codex Releases: 0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0)
- [Codex 0.166.0...0.167.0 の差分](https://github.com/openai/codex/compare/rust-v0.166.0...rust-v0.167.0)
- [X: @rotudam](https://x.com/rotudam/status/2117895974773272635)
- [X: @AlaaEddineKad](https://x.com/AlaaEddineKad/status/2116623339544613110)
- [X: @krimuthu](https://x.com/krimuthu/status/2118744042825793705)
