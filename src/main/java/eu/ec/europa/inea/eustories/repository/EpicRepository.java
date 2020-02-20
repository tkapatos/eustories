package eu.ec.europa.inea.eustories.repository;

import eu.ec.europa.inea.eustories.domain.Epic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EpicRepository extends MongoRepository<Epic, String> {
}
