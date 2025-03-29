# UbuntuをベースにしたMinecraft Forgeサーバー
FROM ubuntu:22.04

# 必要なパッケージをインストール
RUN apt update && apt install -y openjdk-17-jre wget unzip && \
    rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを作成
WORKDIR /mc

# 環境変数でForgeのバージョンを指定（変更可能）
ARG FORGE_VERSION=1.20.1-47.1.0

# Forgeのインストーラーをダウンロード
RUN wget -O forge-installer.jar https://maven.minecraftforge.net/net/minecraftforge/forge/${FORGE_VERSION}/forge-${FORGE_VERSION}-installer.jar

# Forgeをインストール
RUN java -jar forge-installer.jar --installServer && rm forge-installer.jar

# EULAに同意
RUN echo "eula=true" > eula.txt

# 必要なディレクトリを作成
RUN mkdir -p mods config

# MODと設定ファイルをコピー（ディレクトリごとコピー）
COPY --chown=1000:1000 mods/ /mc/mods/
COPY --chown=1000:1000 config/ /mc/config/
COPY server.properties /mc/server.properties
COPY start.sh /mc/start.sh

# スクリプトの実行権限を付与
RUN chmod +x /mc/start.sh

# ポートを開放
EXPOSE 25565

# ボリュームを追加
VOLUME ["/mc/mods", "/mc/config"]

# サーバーを起動
CMD ["bash", "/mc/start.sh"]
