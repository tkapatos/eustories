package eu.ec.europa.inea.eustories.service.impl;

import eu.ec.europa.inea.eustories.domain.Story;
import eu.ec.europa.inea.eustories.repository.InitiativeRepository;
import eu.ec.europa.inea.eustories.repository.StoryRepository;
import eu.ec.europa.inea.eustories.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
