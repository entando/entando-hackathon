FROM openjdk:11

WORKDIR /app

COPY target/user-service.jar /app/user-service.jar

CMD ["java", "-jar", "user-service.jar"]

EXPOSE 8081