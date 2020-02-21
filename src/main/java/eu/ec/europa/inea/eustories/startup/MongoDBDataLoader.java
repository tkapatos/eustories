package eu.ec.europa.inea.eustories.startup;

import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.domain.Module;
import eu.ec.europa.inea.eustories.repository.InitiativeRepository;
import eu.ec.europa.inea.eustories.repository.ModuleRepository;
import eu.ec.europa.inea.eustories.repository.StoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import static eu.ec.europa.inea.eustories.util.Constants.SpringProfiles.DEV;

@Component
@Profile(DEV)
@Slf4j
public class MongoDBDataLoader implements ApplicationRunner {

    @Autowired
    ModuleRepository moduleRepository;

    @Autowired
    InitiativeRepository initiativeRepository;

    @Autowired
    StoryRepository storyRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Module pciref = Module.builder().code("PCIREF").name("Transparency Platform").description("Transparency Platform module").build();
        moduleRepository.save(pciref);
        Module ga = Module.builder().code("GA").name("Grant Agreement").description("Grant Agreement module").build();
        moduleRepository.save(ga);
        Module pfu = Module.builder().code("PFU").name("Project Follow-up").description("Project Follow-up module").build();
        moduleRepository.save(pfu);

        Initiative initiative1 = Initiative.builder().code("TP_1").description("First version of Transparency Platform").module(pciref).build();
        initiativeRepository.save(initiative1);
        Initiative initiative2 = Initiative.builder().code("CP").description("Contact Points").module(pciref).build();
        initiativeRepository.save(initiative2);
        Initiative initiative3 = Initiative.builder().code("IND").description("CEF2 Indicators").module(pciref).build();
        initiativeRepository.save(initiative3);

    }
}
