package eu.ec.europa.inea.eustories.web.rest;

import eu.ec.europa.inea.eustories.domain.Story;
import eu.ec.europa.inea.eustories.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StoryResource {

    private StoryService storyService;

    @Autowired
    public StoryResource(StoryService storyService) {
        this.storyService = storyService;
    }

    @GetMapping("/stories/{initiativeCode}")
    public ResponseEntity<List<Story>> getStoriesByInitiative(@PathVariable String initiativeCode) {
        return new ResponseEntity<>(storyService.findByInitiative(initiativeCode), HttpStatus.OK);
    }
}
