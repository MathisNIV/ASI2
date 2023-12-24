FROM openjdk:19
VOLUME /tmp
EXPOSE 8084
ARG JAR_FILE=target/MessageBrokerLogger-1.0-SNAPSHOT.jar
ADD ${JAR_FILE} MessageBrokerLogger-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/MessageBrokerLogger-1.0-SNAPSHOT.jar"]