package eu.ec.europa.inea.eustories.repository;

import eu.ec.europa.inea.eustories.domain.Story;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryRepository extends MongoRepository<Story, String> {
}
