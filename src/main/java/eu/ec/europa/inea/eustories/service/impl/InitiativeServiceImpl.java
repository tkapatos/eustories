package eu.ec.europa.inea.eustories.service.impl;

import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.repository.InitiativeRepository;
import eu.ec.europa.inea.eustories.repository.ModuleRepository;
import eu.ec.europa.inea.eustories.service.InitiativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InitiativeServiceImpl implements InitiativeService {

    InitiativeRepository initiativeRepository;

    ModuleRepository moduleRepository;

    @Autowired
    public InitiativeServiceImpl(InitiativeRepository initiativeRepository,ModuleRepository moduleRepository) {
        this.initiativeRepository = initiativeRepository;
        this.moduleRepository = moduleRepository;
    }

    @Override
    public List<Initiative> findByModule(String moduleCode) {
        return initiativeRepository.findByModule(moduleRepository.findByCode(moduleCode));
    }
}
