---
title: "エージェント拡張ツールとAI制作IDEが上位に"
summary: "MCP経由でバイナリやアプリを解析するmorluto/rea、ツール出力を98%削減するmksglu/context-modeなど、エージェントに機能を足すツールが上位に並んだ。ネイティブPPTXを生成するppt-masterと、AI画像・動画制作IDEのartcraftもランクインした。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-10-12

features:
  - "morluto/rea"
  - "mksglu/context-mode"
  - "hugohe3/ppt-master"
  - "storytold/artcraft"
codex_review: "エージェントの能力を盛る道具が揃う一方、スター数や作者ベンチマークほど実利用の裏付けは見えず、熱狂はやや先行している印象。中でも編集可能なPPTXや制作工程を扱うIDEは、生成物を人が仕上げる現場に根づく可能性があり面白い。"
codex_importance: 3
---

## 公式アップデート

### morluto/rea

「Reverse Engineer Anything」を掲げるリバースエンジニアリング用MCPサーバー兼CLI。ソースコードがないアプリでも、エージェントが機能の仕組みを調べ、根拠を示し、自分のプロジェクト向けに似た機能を実装するところまで進められる。MITライセンス。全言語とTypeScriptの両Trendingに入っている。

- **導入**: `npx rea-agents setup` を実行すると、MCPサーバーとワークフロー指示が登録される。既存の設定はバックアップされる。対応エージェントはClaude Code、Codex、Cursor、Gemini CLI、Grok Buildなど。skills.shからスキルとして入れることもできる
- **使い方**: エージェントに「Notesアプリの検索機能がどう動くか調べて根拠を示し、似た機能を作って」と頼む形を想定している。同じワークフローはCLI (`rea`) からも使える
- **解析対象**:
  - ネイティブバイナリ: 疑似コード、アセンブリ、シンボル、参照を返す。Hopper、Ghidra、IDAのいずれかが必要
  - ELFレイアウト、EVMバイトコード、記録されたLinuxクラッシュ
  - JavaScript/Electron: モジュール、IPC、ソースマップ
  - Webサイト: Chrome系ブラウザで解析する。HARキャプチャも読める
  - .NETアセンブリ: 静的解析のみ
  - Android: APK (JADX)、実機・エミュレータ (adb)、Apktoolによるリソース解析、JEBプロジェクト
  - ファームウェア (Binwalk/Unblob)、Appleバンドル、プロセス挙動のキャプチャ
- **ローカル実行**: 解析はローカルで行い、結果には結論ごとの根拠と限界が付く。ただし、ツールの結果はエージェントのモデル提供元に送られる
- **事例**: 次の3件が公開されている
  - DX-Ball: 音のパン計算をCで再構築した。元のx86で3,205ケースを通過し、63バイトの関数をバイト単位で再現
  - Notion: Electronのクリップボードブリッジを追跡
  - TH04: PC-98版の弾幕計算を復元
- **要件**: Node.js 22.19+、24.11+、または26+
- READMEで **60,000スター到達** を告知している。また、REA名義の暗号資産トークンはプロジェクトと無関係だと明記している

[ソース](https://github.com/morluto/rea)

### mksglu/context-mode

AIコーディングエージェントのコンテキストウィンドウを節約するMCPサーバー。ライセンスはElastic License 2.0 (ELv2)。TypeScriptのTrendingに入っている。

- **課題設定**: MCPツールの生出力がコンテキストを圧迫するという問題を扱う。READMEの例では、Playwrightのスナップショットが56KB、GitHub issue 20件が59KBになる。圧縮(compaction)の後に作業状態を忘れる問題も挙げている
- **Context Saving**: サンドボックス化したツールで生データをコンテキストの外に置く。例として315KBが5.4KBになり、98%削減される
- **Session Continuity**: ファイル編集、git操作、タスク、エラー、ユーザーの判断をSQLiteに記録する。圧縮の後は、FTS5とBM25検索で関連する分だけを取り出す。`--continue` を付けずに始めると、前のセッションのデータは即座に削除される
- **Think in Code**: LLMにデータを読ませる代わりに、解析スクリプトを書かせて結果だけを出力させる方針を全クライアントで必須にしている。READMEの例では、Readを47回呼ぶと700KBになる処理が、`ctx_execute` 1回で3.6KBに収まる
- **文体には介入しない**: 最終回答の書き方は指定しない。強い簡潔化プロンプトはベンチマーク性能を下げうるとして、Moonshot AIのkimi-k2.5に関する報告を挙げている
- **対応範囲**: 17プラットフォームとOpenClawゲートウェイ。Claude Codeでは `/plugin marketplace add mksglu/context-mode` で入れると、6種のフックと11のMCPツールが自動登録される。11ツールの内訳は、サンドボックス系6つ (`ctx_execute` など) とメタ系5つ。Gemini CLIは `settings.json` に設定を書けばフック込みで使える
- **ステータスライン**: 任意で設定でき、セッション内と累計の節約額、効率を表示する。`/context-mode:ctx-insight` を使うと、ホスト型のチーム分析ダッシュボードが開く

[ソース](https://github.com/mksglu/context-mode)

### hugohe3/ppt-master

文書やトピックから、PowerPointでそのまま編集できるPPTXを生成するエージェント向けワークフロー (スキル)。MITライセンス。PythonのTrendingで1位。

- **ネイティブ要素**: 平面のテキストボックスではなく、PowerPointの部品として出力する
  - ネイティブの図形とコネクタ。調整ハンドルも使える
  - スライドマスターとレイアウトの継承
  - データ連動のチャートと表 (`--native-charts-and-tables` を指定した場合)
  - OMMLの数式、トランジション、アニメーション、スピーカーノートからの音声ナレーション
  - SmartArtは意図的に対応外としている
- **ほかの使い方**: 新規生成に加えて、次のこともできる
  - 参考資料からブランド、スタイル、レイアウトのテンプレートを抽出する
  - 既存の `.pptx` のデザインを保ったまま内容を差し替える (Edit Native PPTX。変更しないページはバイト単位で保持)
  - 完成済みのデッキにアニメーションやナレーションを足す
- **動作環境**: Python 3.10+と、エージェント機能のあるAIツールがあれば動く。作者はClaude Codeを推奨している。推奨モデルはKimi K3またはClaudeで、約1Mのコンテキストを想定する。画像生成には `gpt-image-2` か `gemini-nano-banana-2.1` を推奨している
- **導入**: git clone、ZIP、`npx skills add hugohe3/ppt-master`、Claude Codeのプラグインマーケットプレイスから選べる
- **方針**: 「harness + model = agent」として、品質の上限はモデルが決めると明言している。1回で完璧なデッキは期待しないよう注意書きがある
- 作者は、MicrosoftのOSS ResearchStudio-Reel (論文から発表動画・ポスター・ブログを生成) にも参加していると記載している

[ソース](https://github.com/hugohe3/ppt-master)

### storytold/artcraft

「アーティストのためのIDE」を掲げる、対話型のAI画像・動画制作アプリ。全言語のTrendingに入っている。

- **方針**: プロンプトを書くだけでなく、2Dで構図を組み、3Dでシーンを配置してから生成する「クラフティング」を打ち出している
- **主な機能**:
  - Image to Location: 一貫した環境の中で複数カットを計画できる
  - 2D/3D画像合成、画像から3Dメッシュへの変換
  - キャラクターのポージング、マネキンを使ったキャラクター同一性の転写
  - キットバッシングによるシーンブロッキング、背景除去
  - キャンバス上の描画とインペイント、Image to Video
- **対応モデル**:
  - ArtCraft経由のカタログは62モデル。画像16、動画25、音楽・音声5、3Dメッシュ11などで構成される
  - 画像: Nano Banana系、GPT Image系、FLUX、Seedream
  - 動画: Seedance、Kling、Veo 3.1、Vidu Q3、MiniMax H3、Flux 3など。一部は無効化または制限中
  - 音楽・音声: Suno、Seed Audio
- **外部プロバイダ**: Grok (Imagine/Video)、Midjourney、Sora、World Labs Marble (ガウシアンスプラットによるワールド生成) と連携する
- 配布はgetartcraft.comのダウンロード版とGitHub Releasesで、ソースからのビルド手順もある

[ソース](https://github.com/storytold/artcraft)

## コミュニティの反応

### hugohe3/ppt-master

#### ポジティブ

> 「PDFやWordから、アニメーション付きで編集できる本物のPPTXを作れる」として、GitHubで急伸しているリポジトリのリストに挙げられ、広く共有されている — @rfeitosa74 [出典](https://x.com/rfeitosa74/status/2109406796938948917)

> 今月のGitHubホットリポジトリ10選に「ppt-master +1.1k⭐ 一言でネイティブPPTを生成」として入っている — @JamesAI [出典](https://x.com/JamesAI/status/2109399471843078469)

> スペイン語圏で拡散した投稿で、「PDF/Wordを本物のPowerPointにする(編集可・アニメ付き)」ツールとして59K⭐とともにトップリストに入っている — @balance0014 [出典](https://x.com/balance0014/status/2109284165841817834)

#### 実際の使用例

> Bitcoinのホワイトペーパーを8枚の編集可能なPPTXに変換し、所要時間は8分40秒だった。LibreOfficeで開くと、一部のテキストが崩れたと報告している (中立的な検証報告) — @WdealAi [出典](https://x.com/WdealAi/status/2109363463231291742)

#### 批評

該当なし

### storytold/artcraft

#### ポジティブ

> AI画像生成の「ディレクター用ワークベンチ」となる2D/3D合成ツールとして紹介されている。MITライセンスであることと、Grok、Midjourney、Soraなどを同じキャンバスで扱える点が話題になっている — @zhengli5503571 [出典](https://x.com/zhengli5503571/status/2109419059171430881)

#### 実際の使用例

> LLMでベースのデザインを作り、Photoshopで仕上げるワークフローで活用していると報告している — @jarusrathore [出典](https://x.com/jarusrathore/status/2109418533725831436)

#### 批評

該当なし

### morluto/rea

該当なし (取得した投稿は作者本人の投稿か、エンゲージメントの低い言及のみで、使用体験や評価に当たるものはなかった)

### mksglu/context-mode

該当なし

## ソース

- [morluto/rea](https://github.com/morluto/rea)
- [mksglu/context-mode](https://github.com/mksglu/context-mode)
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
- [storytold/artcraft](https://github.com/storytold/artcraft)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
