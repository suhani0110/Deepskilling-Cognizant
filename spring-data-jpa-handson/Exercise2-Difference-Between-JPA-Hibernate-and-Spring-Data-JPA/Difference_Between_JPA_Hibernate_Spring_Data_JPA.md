
# Difference Between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)
- JPA is a Java specification (JSR 338) for object-relational mapping.
- It defines interfaces and annotations for persisting Java objects.
- It does not provide an implementation.
- Hibernate, EclipseLink, etc. are implementations of JPA.

## Hibernate
- Hibernate is an ORM framework.
- It is one of the most popular implementations of JPA.
- It maps Java objects to database tables.
- Requires more boilerplate code for Session and Transaction management.

### Hibernate Example

```java
public Integer addEmployee(Employee employee){
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try{
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee);
        tx.commit();
    }catch(HibernateException e){
        if(tx != null) tx.rollback();
        e.printStackTrace();
    }finally{
        session.close();
    }
    return employeeID;
}
```

## Spring Data JPA
- Spring Data JPA is not a JPA implementation.
- It works on top of Hibernate (or another JPA provider).
- Reduces boilerplate code.
- Provides JpaRepository with built-in CRUD methods.
- Automatically manages transactions using @Transactional.

### Spring Data JPA Example

EmployeeRepository.java

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
```

EmployeeService.java

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee){
    employeeRepository.save(employee);
}
```

## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|--------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| Boilerplate Code | Medium | High | Very Low |
| CRUD Support | Via Provider | Yes | JpaRepository |
| Transaction Management | Provider | Manual | Automatic (@Transactional) |

## Conclusion
- JPA = Specification
- Hibernate = JPA Implementation
- Spring Data JPA = Simplifies JPA/Hibernate with repositories and less code.

Reference Links:
- https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1
- https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html
