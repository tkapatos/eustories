package eu.ec.europa.inea.eustories.web.rest;

import eu.ec.europa.inea.eustories.domain.Story;
import eu.ec.europa.inea.eustories.service.StoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.List;

@Slf4j
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

    @PutMapping("/stories")
    public ResponseEntity saveStory(@RequestBody Story story) {
        log.info("Story to be saved",story);
        storyService.saveStory(story);
        return ResponseEntity.accepted().build();
    }
}
