package eu.ec.europa.inea.eustories.service.impl;

import eu.ec.europa.inea.eustories.domain.Criterion;
import eu.ec.europa.inea.eustories.domain.Story;
import eu.ec.europa.inea.eustories.repository.InitiativeRepository;
import eu.ec.europa.inea.eustories.repository.StoryRepository;
import eu.ec.europa.inea.eustories.service.StoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Slf4j
@Transactional
@Service
public class StoryServiceImpl implements StoryService {

    private InitiativeRepository initiativeRepository;

    private StoryRepository storyRepository;

    @Autowired
    public StoryServiceImpl(InitiativeRepository initiativeRepository, StoryRepository storyRepository) {
        this.initiativeRepository = initiativeRepository;
        this.storyRepository = storyRepository;
    }

    @Override
    public List<Story> findByInitiative(String initiativeCode) {
        return storyRepository.findByInitiative(initiativeRepository.findByCode(initiativeCode));
    }

    @Override
    public void saveStory(Story storyToSave) {
        Story story;
        Optional<Story> storyOptional = storyRepository.findByJiraId(storyToSave.getJiraId());
        if(storyOptional.isPresent()){
            story = storyOptional.get();
            story.setDescription(storyToSave.getDescription());
            story.setSummary(storyToSave.getSummary());
            story.setExplanations(storyToSave.getExplanations());
            story.setToBeDiscussed(storyToSave.getToBeDiscussed());
            story.setPoints(storyToSave.getPoints());
            story.setStatus(storyToSave.getStatus());
        }else{
            log.info(""+storyToSave.getInitiative().getCode());
            story = Story.builder().jiraId(storyToSave.getJiraId())
                .summary(storyToSave.getSummary())
                .description(storyToSave.getDescription())
                .explanations(storyToSave.getExplanations())
                .toBeDiscussed(storyToSave.getToBeDiscussed())
                .points(storyToSave.getPoints())
                .status(storyToSave.getStatus())
                .initiative(initiativeRepository.findByCode(storyToSave.getInitiative().getCode()))
                .criteria(new ArrayList<Criterion>())
                .build();
        }
        story = storyRepository.save(story);
        log.info(""+story);

    }
}
