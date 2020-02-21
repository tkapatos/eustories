package eu.ec.europa.inea.eustories.web.rest;

import eu.ec.europa.inea.eustories.domain.Module;
import eu.ec.europa.inea.eustories.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ModuleResource {

    ModuleService moduleService;

    @Autowired
    public ModuleResource(ModuleService moduleService) {
        this.moduleService = moduleService;
    }

    @GetMapping("/modules")
    public ResponseEntity<List<Module>> getModules() {
       return new ResponseEntity<>(moduleService.retieveAllModules(), HttpStatus.OK);
    }
}
