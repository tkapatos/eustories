package eu.ec.europa.inea.eustories.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"summary"})
@Document(collection = "epics")
public class Story {
    private String id;
    private String summary;
    private String description;
    @DBRef
    private Initiative initiative;
    @DBRef
    private Epic epic;
    private List<Criterion> criteria;
}
