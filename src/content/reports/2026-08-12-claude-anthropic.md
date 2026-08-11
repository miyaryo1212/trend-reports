---
title: "v2.1.227/228公開、同期スキルを権限面で強化"
summary: "Claude Code に v2.1.227 と v2.1.228 が公開されました。claude.ai から同期されたスキルの権限ハードニング、Write ツールの上書きルール変更、セッションクリーンアップによる memory フォルダ削除バグの修正などが含まれます。X ではセッション間メッセージングの活用例と、セッション自動削除への不満が目立ちました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-12

features:
  - "Claude Code v2.1.228"
  - "claude.ai同期スキルのハードニング"
  - "Writeツールの上書きルール変更"
  - "クロスセッションメッセージの表示改善"
  - "Vertex AI認証情報の処理改善"
  - "コンパクション進捗表示の改善"
  - "Claude Code v2.1.227"
  - "セッションクリーンアップのメモリフォルダ削除バグ修正"
  - "Fable向け使用クレジット誤プロンプトの修正"
codex_review: "派手さは薄いが、同期スキルの権限ハードニングとmemory削除バグ修正は、エージェント運用の信頼性を底上げする地味に重要な更新だと思う。逆にクロスセッション連携は期待先行で、実運用の癖がまだ残る印象です。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.228 (2026-08-11)

修正・改善 18 件を含むリリースです。主な内容は以下の通りです。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.228)

#### claude.ai同期スキルのハードニング

claude.ai から同期されたスキルが、ローカルのコマンドや MCP プロンプトを上書き (shadow) しないようになりました。スキルの説明文はサニタイズされたうえでラベル付けされ、ローカルマシン上ではスキル本文の `!` コマンド実行と `@` によるファイル展開が行われなくなります。

#### Writeツールの上書きルール変更

新しめのモデルは、そのセッション中に読んでいない既存ファイルでも Write ツールで上書きできるようになりました。Edit ツールと同じルールに揃えた形です。旧世代のモデルは従来通り、上書き前の Read が必要です。

#### クロスセッションメッセージの表示改善

送信者と本文が、折りたたまれた 1 行ではなくインラインで表示されるようになりました。別マシン上の Remote Control セッション宛のメッセージでは、送信者として自分の Remote Control セッション名が表示されます。

#### Vertex AI認証情報の処理改善

期限切れ、または未設定の Google Cloud 認証情報が、数分間リトライを続けるのではなく数秒で失敗するようになりました。

#### コンパクション進捗表示の改善

コンパクション中に、プログレスバーだけでなくリトライのカウントダウンとストールヒントも表示されるようになりました。

#### セッションクリーンアップのメモリフォルダ削除バグ修正

セッションのクリーンアップ処理が、プロジェクトの memory フォルダ内のコンテンツを削除してしまう問題が修正されました。

### Claude Code v2.1.227 (2026-08-10)

修正 5 件のリリースです。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.227)

#### Fable向け使用クレジット誤プロンプトの修正

ログイントークンが期限切れの状態でセッションが開始された場合に、ユーザーのサブスクリプション階層を考慮せずにフィーチャーフラグが評価され、Max プランのユーザーに対して Fable 用の使用クレジット有効化を誤って促すことがあった問題が修正されました。

このほか、スラッシュコマンドメニューの視認性改善 (選択行のみを青で示し、マッチ文字は色ではなく太字で強調、絵文字やアクセント付きの名前もグリフを保持) と、ファイル未検出サジェスト・at-mention のサイズチェックにおけるイベントループ遅延の削減が含まれます。

## コミュニティの反応

### クロスセッションメッセージの表示改善

#### ポジティブ

> Claude Code のセッション間でメッセージ送信ができるようになり、別セッションに影響しそうな変更を直接伝えられるようになった。 — @howdy39 [出典](https://x.com/howdy39/status/2085859578386976848)

> Claude Code 同士が直接メッセージを送り合えるようになり、人間が伝言係をする必要がなくなった。 — @mistea0 [出典](https://x.com/mistea0/status/2085863272809665008)

#### Tips

> v2.1.224 以降のセッション間メッセージングで ListAgents / SendMessage を使い、別セッションへテキストを送る方法と、Remote Control 経由の返信手順を紹介。 — @__su888 [出典](https://x.com/__su888/status/2086574995417735644)

> 2 つのターミナルを役割分けして運用し、相手セッションに意見をもらうことで異なる回答を得る活用例。 — @yokebeto [出典](https://x.com/yokebeto/status/2086646750950105269)

> 並行作業時に要約だけを渡して引き継ぐことで、背景説明の負担を減らす運用 Tips。 — @ikm_san [出典](https://x.com/ikm_san/status/2086031610013679974)

日本語記事でもセッション間メッセージングの検証が続いています。

- [Claude Code 新機能のセッション間メッセージ、使う前に知ってほしい「即座には読まれない」問題](https://zenn.dev/hoshiorange/articles/22-cross-session-messaging-windows) — 送った伝言が届いた瞬間に読まれるわけではない点を、4 回壊した経験から解説
- [独立したClaude同士が話し始めた。Claude Codeのセッション間メッセージングを試す](https://zenn.dev/yukika/articles/20260809_claudecode_cross_session_messaging) — subagents や Agent Teams との違い (親子関係のない対等な関係) を整理
- [Claude CodeがAIエージェントを後から繋げられるようになった話](https://zenn.dev/lancers/articles/1125e91b5304e2) — エージェントの組み方の選択肢が増えた点に注目

### セッションクリーンアップのメモリフォルダ削除バグ修正

修正そのものへの言及ではありませんが、セッションの自動削除まわりでは不満が複数出ています。

#### ネガティブ

> Claude Code のデフォルト 30 日 cleanup がセッションを勝手に削除し、インデックスや履歴が失われる。 — @catmanyau [出典](https://x.com/catmanyau/status/2085752645340316021)

> cleanupPeriodDays で古いセッションが自動削除され、インデックスの 67% がディスク上に存在しないファイル由来になっていた。 — @d3layd [出典](https://x.com/d3layd/status/2085560627712479426)

> 30 日で全セッションがローカル含めて削除されるため、記憶がリセットされて毎回説明が必要になる。 — @diffused_dreams [出典](https://x.com/diffused_dreams/status/2085372910831538489)

#### Tips

> `~/.claude/settings.json` で `{"cleanupPeriodDays": 36500}` を設定すればセッションを長期間保持できる。 — @diffused_dreams [出典](https://x.com/diffused_dreams/status/2085372910831538489)

> プロジェクトフォルダを移動・リネームすると memory が別パスに残って失われるため、Claude 自身に指示して memory ごと移動させる。 — @cbarmorecpa [出典](https://x.com/cbarmorecpa/status/2086858923718463634)

### Fable向け使用クレジット誤プロンプトの修正

#### ポジティブ

> v2.1.227 でログイントークン期限切れ時の Fable クレジット誤プロンプト不具合が修正され、Max プランでも正しく動作するようになった。 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2087155274109079988)

> v2.1.227 の修正内容を詳細に引用し、Fable 関連の誤プロンプト問題が解消された点を報告。 — @oikon48 [出典](https://x.com/oikon48/status/2086973257392275881)

### Claude Code v2.1.228 / claude.ai同期スキルのハードニング / Writeツールの上書きルール変更 / Vertex AI認証情報の処理改善 / コンパクション進捗表示の改善 / Claude Code v2.1.227

該当なし。直近 7 日間 (2026-08-04〜08-11) の X 投稿を対象に検索しましたが、これらのトピックに関する個人ユーザーの実体験投稿は見つかりませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
