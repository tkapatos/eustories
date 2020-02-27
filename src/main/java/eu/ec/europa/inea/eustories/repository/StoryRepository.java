package eu.ec.europa.inea.eustories.repository;

import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.domain.Story;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoryRepository extends MongoRepository<Story, String> {
    List<Story> findByInitiative(Initiative initiative);
    Optional<Story> findByJiraId(String jiraId);
}
