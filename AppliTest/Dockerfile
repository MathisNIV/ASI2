FROM openjdk:19
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/AppliTest-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} AppliTest-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/AppliTest-0.0.1-SNAPSHOT.jar"]