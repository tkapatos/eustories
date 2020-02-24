package eu.ec.europa.inea.eustories.repository;

import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.domain.Module;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InitiativeRepository extends MongoRepository<Initiative, String> {
    List<Initiative>  findByModule(Module module);
    Initiative findByCode(String code);
}
