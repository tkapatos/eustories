package eu.ec.europa.inea.eustories.service;

import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.domain.Module;

import java.util.List;

public interface InitiativeService {
    List<Initiative> findByModule(String moduleCode);
}
