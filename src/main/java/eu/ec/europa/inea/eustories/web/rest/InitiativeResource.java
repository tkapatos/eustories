package eu.ec.europa.inea.eustories.web.rest;

import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.service.InitiativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InitiativeResource {

    private InitiativeService initiativeService;

    @Autowired
    public InitiativeResource(InitiativeService initiativeService) {
        this.initiativeService = initiativeService;
    }

    @GetMapping("/initiatives/{moduleCode}")
    public ResponseEntity<List<Initiative>> getInitiativesByModule(@PathVariable String moduleCode) {
       return new ResponseEntity<>(initiativeService.findByModule(moduleCode), HttpStatus.OK);
    }
}
