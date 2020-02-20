package eu.ec.europa.inea.eustories.repository;

import eu.ec.europa.inea.eustories.domain.Initiative;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InitiativeRepository extends MongoRepository<Initiative, String> {
}
