FROM eclipse-temurin:21-jre

WORKDIR /data

# Forgeインストーラーを追加し、Forgeをインストール
ADD forge-installer.jar /data/forge-installer.jar
RUN java -jar forge-installer.jar --installServer

# EULAに同意
RUN echo "eula=true" > eula.txt

# 新しいポート番号を公開
EXPOSE 25565

# サーバーを起動
CMD ["java", "-Xmx1024M", "-Xms1024M", "-jar", "forge-1.21.5-55.0.3-shim.jar", "nogui"]
