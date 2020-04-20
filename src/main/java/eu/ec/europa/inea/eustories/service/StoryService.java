package eu.ec.europa.inea.eustories.service;

import eu.ec.europa.inea.eustories.domain.Criterion;
import eu.ec.europa.inea.eustories.domain.Story;

import java.util.List;

public interface StoryService {
    List<Story> findByInitiative(String initiativeCode);
    void saveStory(Story storyToSave);
    void saveStoryCriteria(String jiraId, List<Criterion> criteria);
}
