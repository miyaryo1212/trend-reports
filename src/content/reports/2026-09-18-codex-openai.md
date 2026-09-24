---
title: "Codex CLI 0.155.0 安定版、/voice が到来"
summary: "Codex CLI 0.155.0 が安定版としてリリースされ、実験的な /voice 音声会話、TUI のライブ推論サマリー、agents オーバービューの整理機能、MCP の Touch ID 検証などがまとめて入った。OpenAI 側では ChatGPT Images 2.5 と API 向け GPT-Image-2.5 Flare / Sunburst、GPT-6 Astra の業務向け展開が並び、画像モデルへの反応が最も活発。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-18

features:
  - "Codex CLI 0.155.0 正式リリース"
  - "Codex CLI の実験的 /voice 会話"
  - "Codex CLI の TUI 改善"
  - "Codex agents オーバービューの整理機能"
  - "Codex MCP の Touch ID 検証"
  - "codex app-server daemon update"
  - "ChatGPT Images 2.5"
  - "ChatGPT の Sketch 機能"
  - "GPT-Image-2.5 Flare / Sunburst"
  - "GPT-6 Astra の業務向け展開"
  - "Astra 向けエンタープライズ管理機能と ChatGPT Desktop プラグイン"
  - "Astra for Law"
  - "ChatGPT 広告の刷新 (Sponsored Agents)"
  - "モデル不整合(misalignment)報告フレームワーク"
  - "ChatGPT Admin Console の Analytics"
codex_review: "画像生成の精密編集とラフからの指示は、モデル性能を制作の手戻り削減へ結びつける点で面白い。一方、話題の幅に比べてCLIの音声や管理機能はまだ実験・限定提供が多く、業界全体を動かす転換点という評価は少し先だろう。 ※ このレビューは後日生成されました"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.155.0 (安定版)

アルファ段階を経て 0.155.0 が安定版としてリリースされた。新機能は以下。

- **実験的 `/voice` 会話**: WebRTC ベースのライブ音声会話。リアルタイム文字起こしとマイクミュート操作を伴い、`/experimental` から有効化する。対応ビルドのみ (#43581, #43651, #44331)
- **TUI 改善**: ステータス行にライブ推論サマリーを表示し、ターン成功後に完了タイムスタンプを表示 (#43558, #43921)
- **agents オーバービューの整理機能**: タスクの非表示・アーカイブ・削除、worktree の所有者情報表示、クリーンな管理 worktree の削除確認 (#43942, #44424, #44433)
- **MCP の Touch ID 検証**: 対応 Mac のローカル TUI セッションで、MCP リクエストを Secure Enclave 署名付きで本人確認 (#43624, #43712, #43715)
- **`codex app-server daemon update`**: デーモンの自動更新スケジュールを設定可能にし、明示的な更新コマンドを追加。デーモン再起動後も保存スレッドとアクティブゴールを復元できる (#43542, #43562, #44314)
- **Amazon Bedrock の認証情報取得**: 設定したコマンドから AWS 認証情報を取得。キャッシュ、期限切れによる再取得、認証回復に対応 (#44028)

バグ修正では、compaction がターン開始前に失敗しても受理済みプロンプトを保存するようになり、tmux のリサイズ取りこぼし・トランスクリプト表示位置の復元・スレッド切替後の古い履歴表示が修正された。セキュリティ面では、制限付き WSL サンドボックスからの Windows プロセス脱出をブロックし、ブローカー経由のシェルスナップショットの資格情報露出を防いでいる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.155.0)

なお安定版リリース後、0.155.0-alpha.9.2 / 0.156.0-alpha.1 / 0.156.0-alpha.2 のアルファタグが続いている。

[ソース](https://github.com/openai/codex/releases)

### ChatGPT Images 2.5

新しい画像モデル。細部の描写と編集精度が向上し、生成レイテンシを最大 50% 削減した。ChatGPT / ChatGPT Work / Codex の全ティアに提供される。

[ソース](https://openai.com/news/)

### ChatGPT の Sketch 機能

ChatGPT 内に直接描いたラフを下絵として最終画像を生成する機能。ポスターなどのテンプレート、画像への直接コメント、プロンプト共有も併せて追加された。

[ソース](https://openai.com/news/)

### GPT-Image-2.5 Flare / Sunburst

API 向けの新画像モデル 2 種。Flare は GPT-Image-2 比で 50% 低レイテンシ、Sunburst は時間をかけて高精度な編集を行う用途向け。

[ソース](https://openai.com/news/)

### GPT-6 Astra の業務向け展開

GPT-6 Astra が ChatGPT Work / Codex / API で提供開始。Terminal-Bench 4.0 で 57.9%、価格は入力 $10 / 出力 $50 per 1M トークン。

[ソース](https://openai.com/news/)

### Astra 向けエンタープライズ管理機能と ChatGPT Desktop プラグイン

許可サイト / 許可アプリの制限と承認ポリシーによる管理機能に加え、Oracle Analytics・Power BI・Navan・Avalara の ChatGPT Desktop プラグインが追加された。

[ソース](https://openai.com/news/)

### Astra for Law

GPT-6 Astra に法務用の検索インデックス (2.3 億 URL 超の米国判例・法令) と専用設定を組み合わせた法律業務向け基盤。Harvey・Legora が利用している。現時点では選定された法律事務所向けの Trusted Access 限定。

[ソース](https://openai.com/news/)

### ChatGPT 広告の刷新 (Sponsored Agents)

広告クリック後に、企業がスポンサーするエージェントと会話できる機能を米国でテスト中。HubSpot・Shopify 連携と、Ads Manager の AI 制作ツールも追加された。

[ソース](https://openai.com/news/)

### モデル不整合 (misalignment) 報告フレームワーク

観測された不整合の事例を、原因が特定できていない段階でも迅速に公開する枠組みを公表。併せて直近 6 か月分の 6 件の報告が公開された。

[ソース](https://openai.com/news/)

### ChatGPT Admin Console の Analytics

ChatGPT Work と Codex の利用状況・コスト・タスク内容・成果指標を横断で可視化する Analytics 機能を Admin Console に追加。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex CLI 0.155.0 正式リリース

#### ポジティブ

> 0.155.0 の `/voice` (ライブ文字起こし＋マイク制御) や TUI 改善に触れ、操作感が会話寄りになって便利そうだと実感。まず試してみたい — @enjoy_fan [出典](https://x.com/enjoy_fan/status/2100787897712488845)

> 他ツールのバグが多発する中、Codex CLI をメインに切り替えたら安定して使いやすくなった — @Ogawan [出典](https://x.com/Ogawan/status/2100787897712488845)

> タスクを Agent に委ねて複数並行処理や自動修正ができるようになり、開発体験が大きく進化した — @ScarletKc [出典](https://x.com/ScarletKc/status/2100788139711504836)

#### ネガティブ

> Codex CLI の ImageGen が 404 エラーで使えない (Web 版は正常) — @ichibnkamishiro [出典](https://x.com/ichibnkamishiro/status/2100803254057865356)

> 最近の Codex CLI が遅く、autocompact を繰り返して自己修正ループに陥るなどパフォーマンスが悪い — @iziski [出典](https://x.com/iziski/status/2099469586831647174)

#### Tips

> Codex デスクトップではコンテキスト使用率が見えず管理しづらいという問題から、`/compact` を手動で使ってコンテキストを整理する運用を解説 — @inoyu-qiita [出典](https://qiita.com/inoyu-qiita/items/12d579dc822ffb1b3297)

### Codex CLI の実験的 `/voice` 会話

#### ポジティブ

> 実際に voice モードで話しかけて返答を確認。マイクとオーディオメーターがライブで動く点が気に入った — @DevAdventur3s [出典](https://x.com/DevAdventur3s/status/2100203799117750783)

#### ネガティブ

> 音声会話がチャットを混在させたり新規チャットを勝手に作ったりするため、境界が曖昧で信頼しにくい — @CobAltEgo [出典](https://x.com/CobAltEgo/status/2099885988747051397)

> ライブ文字起こし付きの `/voice` は出たが、自動補完の方が話すよりずっと速い — @delx369 [出典](https://x.com/delx369/status/2100754250234044534)

### Codex CLI の TUI 改善

#### ポジティブ

> ステータス行のライブ推論サマリーと完了タイムスタンプを引用し「操作感が少しずつ“会話寄り”になってきた」と評価 — @enjoy_fan [出典](https://x.com/enjoy_fan/status/2100787897712488845)

### Codex agents オーバービューの整理機能

該当なし (公式リリースノートの引用は見られるが、個人ユーザーの実体験投稿は確認できず)。

### Codex MCP の Touch ID 検証

該当なし (「セキュリティ的に良さそう」程度の反応のみで、実際に Mac ローカル TUI で検証した体験談は確認できず)。

### codex app-server daemon update

該当なし。

### ChatGPT Images 2.5

#### ポジティブ

> 「生成→微妙→作り直し」の無限ガチャをしなくて済むようになった。生成待ちは最大 50% 短縮、人物の顔・光・質感がより自然に。重要なのは画質より「生成→修正→仕上げ」の制作フローが進化したこと — @nekosuke_note [出典](https://x.com/nekosuke_note/status/2100702351724368143)

#### Tips

> 同じプロンプトでも小物を一つ足すだけでポーズが崩れることがある。コツは「服→背景→小物」の順で足していくこと。一気に盛ると崩れる — @Donkun_aiwanko [出典](https://x.com/Donkun_aiwanko/status/2100723117668897139)

> 空間的な詳細をすべて文章で説明しなくても編集を指定できるようになった。ラフな構図を描く、画像に直接コメントする、テンプレートから始めて既に正しい部分を保ちながら反復編集する、といった手段が増えた — @pranaysuyash [出典](https://x.com/pranaysuyash/status/2099572153607950796)

### ChatGPT の Sketch 機能

#### ポジティブ

> 適当に描いたハートと「猫」という単語から可愛い猫が生成され、こんな面白い使い方ができると実感 — @kenkenpa_5u [出典](https://x.com/kenkenpa_5u/status/2100587176061030415)

> iPad + Apple Pencil で使ってみたらメチャクチャ使えて面白い。絵描きには物足りないかもしれないが個人で楽しむには最高 — @Taro0s9t [出典](https://x.com/Taro0s9t/status/2100000767361032433)

#### ネガティブ

> 自然言語や手書きで指示できる点は強いが、全体の絵柄に独自のクセが抜けず、好みを出すなら Stable Diffusion の方がやりやすい — @secretary0625 [出典](https://x.com/secretary0625/status/2100442259187785893)

#### Tips

> 「そこじゃない」「もう少し右」といった位置関係を言葉で伝える難しさに対し、ラフを描いて画風・Before/After の位置・余白まで指定したら文章より正確に再現できた — @iris_ai_make [出典](https://x.com/iris_ai_make/status/2100420729351086466)

### GPT-Image-2.5 Flare / Sunburst

#### ポジティブ

> Sunburst で複数回の画像編集をテストしたところ 5 ラウンド目でも崩れにくく、精密編集に強い。Flare の速さと Sunburst の精度の両方が良い — @alecwilcock [出典](https://x.com/alecwilcock/status/2100673304134668565)

> Sunburst は着せ替え用途で最もコスパが良く、1024 文字制限内でも高精度 — @ku_nel_notekute [出典](https://x.com/ku_nel_notekute/status/2100549784604164552)

> Sunburst を初めて使ったら高画質なのに従来よりクレジット消費が少なく、精度も良かった — @magarigi_chan [出典](https://x.com/magarigi_chan/status/2100224148803064292)

> Flare は nano banana より速く指示追従性が高く、クオリティも上回った — @xz3dev [出典](https://x.com/xz3dev/status/2098855868288643281)

### GPT-6 Astra の業務向け展開

#### Tips

> Astra 世代を前提に Codex への指示を再設計する話。長く使うほど溜まる「モデル補償負債」(旧モデルの弱点を埋めるための指示の積み増し) を捨てることでクレジットを節約する — @comty [出典](https://qiita.com/comty/items/b1df0f63688d3232c590)

### Astra 向けエンタープライズ管理機能と ChatGPT Desktop プラグイン

該当なし。

### Astra for Law

該当なし (Trusted Access 限定のため、個人レベルの実使用報告はまだ存在しない)。

### ChatGPT 広告の刷新 (Sponsored Agents)

該当なし (米国限定テストのため、実際に使った個人の投稿は確認できず)。

### モデル不整合 (misalignment) 報告フレームワーク

該当なし。

### ChatGPT Admin Console の Analytics

#### ポジティブ

> ChatGPT Work と Codex の利用をタスク・コスト・成果に結びつけて可視化でき、単なる使用量ではなくビジネス成果を測れるようになった — @Squintsisastud [出典](https://x.com/Squintsisastud/status/2100627088290250804)

> 利用状況と実際のビジネス価値 (時間節約・品質向上・収益) を横断で見られるようになった点が有用 — @osayawe_terry [出典](https://x.com/osayawe_terry/status/2100618846159667637)

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Codex CLI 0.155.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.155.0)
- [OpenAI News](https://openai.com/news/)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
