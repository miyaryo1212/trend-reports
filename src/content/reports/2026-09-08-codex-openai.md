---
title: "Codex CLI 0.154 alpha に音声とworktree管理"
summary: "安定版は 0.153.4 のままだが、0.154.0-alpha.5 / alpha.6 が相次いで公開され、TUI のライブ音声会話 (WebRTC) と managed worktree ブラウザ、MCP ユーザー検証、app-server デーモンの明示的アップデートが main に集約された。X では Voice が既存の Codex スレッド内で使えるようになった点への熱狂と、CLI と Desktop の機能パリティへの不満が並ぶ。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-08

features:
  - "Codex CLI 0.154.0-alpha.5 / 0.154.0-alpha.6"
  - "Codex TUI のライブ音声会話 (WebRTC voice)"
  - "Codex TUI の managed worktree ブラウザ"
  - "MCP ユーザー検証 (MCP user verification)"
  - "Codex app-server デーモンの明示的アップデート機能"
  - "TUI のリモート名前付き権限プロファイル選択"
codex_review: "Voiceは派手だが、私にはmanaged worktreeと権限プロファイルの方が本命に見える。Codexを一回きりのCLIから常駐する開発環境へ寄せる更新だと思う。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.154.0-alpha.5 / 0.154.0-alpha.6

9/7 に 0.154.0-alpha.5 (15:59 UTC)、続いて 0.154.0-alpha.6 (18:06 UTC) がプレリリースとして公開された。安定版は 9/4 の 0.153.4 のままで、以下の新機能はいずれも 0.154 系の alpha に集約されている。

[ソース](https://github.com/openai/codex/releases)

### Codex TUI のライブ音声会話 (WebRTC voice)

TUI から WebRTC でリアルタイム音声対話する機能が main にマージされた (#43581)。あわせてネイティブ音声 SDK、Opus/RTP、GStreamer による再生、ローカル音声デバイスの選択も整備されている。

[ソース](https://github.com/openai/codex/pull/43581)

### Codex TUI の managed worktree ブラウザ

対話セッションと fork に対して git worktree を自動管理し、TUI から作成・一覧・切り替えができるようになった (#43286, #43069)。

[ソース](https://github.com/openai/codex/pull/43286)

### MCP ユーザー検証 (MCP user verification)

capability-gated な opt-in transport とワークスペーススコープの ID により、MCP サーバー側からユーザー確認を要求できる仕組みが入った (#43352, #43524)。

[ソース](https://github.com/openai/codex/pull/43352)

### Codex app-server デーモンの明示的アップデート機能

デーモンの更新コマンドが追加され、自動更新とシャットダウン猶予時間を設定できるようになった (#43562, #43542, #43572)。

[ソース](https://github.com/openai/codex/pull/43562)

### TUI のリモート名前付き権限プロファイル選択

リモートタスクの resume / fork 時に保存済みの権限設定を維持し、名前付きプロファイルを TUI から選択できるようになった (#43340, #43330)。

[ソース](https://github.com/openai/codex/pull/43340)

## コミュニティの反応

### Codex CLI 0.154.0-alpha.5 / 0.154.0-alpha.6

反応は 0.154 系で入った Voice Mode に集中しており、バージョンそのものへの言及ではなく「既存の Codex スレッド／プロジェクト内で音声が使えるようになった」点への評価が中心だった。

#### ポジティブ

> Voice Mode が既存の Codex スレッド／プロジェクト内で直接起動できるようになった。GPT-6 Astra の軽量モードでスムーズに会話してから Medium / High などの高負荷モードに切り替えて実行できるのが巨大な進化で、まるで Jarvis のような体験。 — @emanueledpt [出典](https://x.com/emanueledpt/status/2096271867275305404)

> Voice Mode が Codex プロジェクト内で完全に動作するようになり、既存のスキル／トリガー／スレッドをそのまま活用できる。これで価値提案が根本的に変わった。 — @DPortkey [出典](https://x.com/DPortkey/status/2095941561234464849)

> 既存スレッド内で Voice を起動して、ソリューションを話しながら進められるようになったのが最高。 — @johnhelmuth_ [出典](https://x.com/johnhelmuth_/status/2095939521347027246)

> Codex の全セッションで Voice が使えるようになったのが HUGE。フォルダや個別セッションからも Voice を実行できる。 — @ernielm [出典](https://x.com/ernielm/status/2095863677966508434)

> Voice が Codex スレッド内に入ったことで、ミッドタスクの修正説明をテキストではなく声でリアルタイムにできるようになった。agentic ワークフローのフィードバックループが根本的に変わる。 — @stretchcloud [出典](https://x.com/stretchcloud/status/2095971662718206144)

#### ネガティブ / Tips

該当なし。

### Codex TUI のライブ音声会話 (WebRTC voice)

#### ポジティブ

> Linux に Codex CLI を入れてようやく音声で Codex が使えるようになった。思考力とレスポンスがとてもいいわけではないけれど、壁打ちには割と好きかも。 — @beef_and_rice [出典](https://x.com/beef_and_rice/status/2095916753327182048)

#### ネガティブ

> Codex (CLI) のオープンソース性をあれだけ喧伝していたのに、なぜ Desktop アプリはオープンソースではなく、CLI は voice mode などで機能パリティに遅れているのか。 — @dhruv___anand [出典](https://x.com/dhruv___anand/status/2096863063760859161)

#### Tips

該当なし。WebRTC / Opus / GStreamer といった実装面への具体的な言及やセットアップ Tips は確認できなかった。

### Codex TUI の managed worktree ブラウザ

該当なし。git worktree の自動管理・TUI 操作に関する個人ユーザーの実体験投稿は確認できなかった。

### MCP ユーザー検証 (MCP user verification)

該当なし。技術ブリーフ的な紹介投稿は見られたが、個人ユーザーの実体験・感想に該当する投稿は確認できなかった。

### Codex app-server デーモンの明示的アップデート機能

#### ポジティブ

> CLI 更新後に daemon を再起動したところ、最新モデルを読み込めた。 — @riba2534 [出典](https://x.com/riba2534/status/2095952498582593673)

> 旧 daemon が残っていてモデルが見えなかった問題を、daemon の再起動で解決できた。 — @DevVidhani [出典](https://x.com/DevVidhani/status/2096380653667504267)

#### ネガティブ

該当なし。

#### Tips

> app-server daemon の自動更新機能 (#43562 など) について、updater 設定や graceful restart の挙動を技術的に整理。 — @abugiza_ [出典](https://x.com/abugiza_/status/2097037740726501761)

> CLI 更新 + daemon restart の手順と、バージョン確認の方法。 — @kenpanda_berlin [出典](https://x.com/kenpanda_berlin/status/2096142100026777664)

### TUI のリモート名前付き権限プロファイル選択

該当なし。

### 日本語コミュニティ (Zenn / Qiita)

該当なし。本日の Zenn / Qiita の新着は GPT-6 Astra の推論強度比較や API キーの不正利用など、上記の各機能とは別軸の記事が中心だった。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [X: Voice Mode が既存スレッド内で動作 (@emanueledpt)](https://x.com/emanueledpt/status/2096271867275305404)
- [X: Voice がプロジェクト内で完全動作 (@DPortkey)](https://x.com/DPortkey/status/2095941561234464849)
- [X: Linux の Codex CLI で音声を試用 (@beef_and_rice)](https://x.com/beef_and_rice/status/2095916753327182048)
- [X: CLI と Desktop の機能パリティへの不満 (@dhruv___anand)](https://x.com/dhruv___anand/status/2096863063760859161)
- [X: daemon 自動更新の挙動解説 (@abugiza_)](https://x.com/abugiza_/status/2097037740726501761)
