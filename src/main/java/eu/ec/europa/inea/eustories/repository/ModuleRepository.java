package eu.ec.europa.inea.eustories.repository;

import eu.ec.europa.inea.eustories.domain.Module;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuleRepository extends MongoRepository<Module, String> {

}
