FROM eclipse-temurin:21-jre

WORKDIR /data

# Forgeインストーラーを追加し、Forgeをインストール
ADD /mods /mods
ADD Forge-1.20.1-47.4.0-Installer.jar /data/Forge-1.20.1-47.4.0-Installer.jar
RUN java -jar /data/Forge-1.20.1-47.4.0-Installer.jar --installServer 

# EULAに同意
RUN echo "eula=true" > eula.txt

# 新しいポート番号を公開
EXPOSE 25565

# サーバーを起動
CMD ["java", "-Xmx1024M", "-Xms1024M", "-jar", "Forge-1.20.1-47.4.0-Installer.jar", "nogui"]
VOLUME [ "/data" ]