Hands-on 1 Solution

Build:
mvn clean package

Run:
mvn spring-boot:run

Notes:
- src/main/java : Application code
- src/main/resources : Configuration
- src/test/java : Tests
- @SpringBootApplication combines:
  @Configuration
  @EnableAutoConfiguration
  @ComponentScan

Dependency Hierarchy:
spring-boot-starter-web
 ├─ spring-web
 ├─ spring-webmvc
 └─ embedded Tomcat
spring-boot-devtools
spring-boot-starter-test
