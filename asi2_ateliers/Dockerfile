FROM openjdk:19
VOLUME /tmp
EXPOSE 8083
ARG JAR_FILE=target/asi2-backendmarket-monolithic-student-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} asi2-backendmarket-monolithic-student-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/asi2-backendmarket-monolithic-student-0.0.1-SNAPSHOT.jar"]